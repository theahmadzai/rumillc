<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use App\Mail\Product;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function contact(Request $request)
    {
        $this->validate($request, [
            'name'    => 'required',
            'email'   => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
        ]);

        Mail::to('info@rumillc.com')->send(new Contact($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }

    public function product(Request $request)
    {
        $this->validate($request, [
            'name'       => 'required',
            'email'      => 'required|email',
            'subject'    => 'required',
            'message'    => 'required',
            'product_id' => 'required|exists:products,id'
        ]);

        Mail::to('info@rumillc.com')->send(new Product($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }
}
