<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Message;
use App\Category;
use App\Product;

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
        $query = Category::with('products:id,category_id,name,image,slug')->orderBy('id')->get(['id','name']);
        return view('products', ['categories' => $query]);
    }

    public function showProduct($id, $slug)
    {
        return view('product', ['id' => $id]);
    }

    public function afghanistan()
    {
        return view('afghanistan-office');
    }

    public function dubai()
    {
        return view('dubai-office');
    }

    public function indonesia()
    {
        return view('indonesia-office');
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
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
        ]);

        Mail::to('info@rumillc.com')->send(new Message($request->all()));

        return ['status' => 'Thanks for contacting us.'];
    }
}
