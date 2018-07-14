<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Message;

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
        return view('products');
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
        Mail::to('theahmadzai@hotmail.com')->send(new Message($request));
    }
}
