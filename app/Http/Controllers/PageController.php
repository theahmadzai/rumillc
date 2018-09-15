<?php

namespace App\Http\Controllers;

use App\Category;
use App\Mail\Message;
use App\Mail\ContactPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function products()
    {
        $query = Category::with('products:id,category_id,name,image,slug')->orderBy('id')->get(['id', 'name']);
        return view('products', ['categories' => $query]);
    }

    public function showProduct($id, $slug)
    {
        return view('product', ['id' => $id]);
    }

    public function network($location = null)
    {
        $offices = ['london', 'afghanistan', 'jakarta', 'dubai', 'toronto', 'bandung'];

        if($location == null) {
            return redirect('contact');
        }

        if (!in_array($location, $offices)) {
            abort(404);
        }

        return view("office/{$location}");
    }

    public function gallery()
    {
        return view('gallery');
    }

    public function contact()
    {
        return view('contact');
    }

    public function mail(Request $request)
    {
        $this->validate($request, [
            'name'    => 'required',
            'email'   => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
        ]);

        Mail::to('info@rumillc.com')->send(new Message($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }

    public function contactPrice(Request $request)
    {
        $this->validate($request, [
            'name'       => 'required',
            'email'      => 'required|email',
            'subject'    => 'required',
            'message'    => 'required',
            'product_id' => 'required|exists:products,id'
        ]);

        Mail::to('info@rumillc.com')->send(new ContactPrice($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }
}
