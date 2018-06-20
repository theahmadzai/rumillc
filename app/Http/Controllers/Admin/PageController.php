<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Image;

class PageController extends Controller
{
    public function home()
    {
        return view('admin.home');
    }

    public function login()
    {
        return view('admin.login');
    }

    public function logout()
    {

    }

    public function images()
    {
        return view('admin.images', ['images' => Image::all()]);
    }

    public function testimonials()
    {
        return view('admin.testimonials');
    }
}
