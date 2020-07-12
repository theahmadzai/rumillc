<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function contact(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
        ]);

        Mail::to('info@rumillc.com')->send(new Contact($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }
}
