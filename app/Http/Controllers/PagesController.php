<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function services()
    {
        return view('services');
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
}
