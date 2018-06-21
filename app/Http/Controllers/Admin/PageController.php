<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Image;

class PageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function home()
    {
        return view('admin.home');
    }

    public function images(string $type = null)
    {
        if(\Request::has('type')) {
            $type = \Request::query('type');

            if(in_array($type, ['o','s','g'])){
                return view('admin.images', ['images' => Image::where('type', $type)->get()]);
            }
        }

        return view('admin.images', ['images' => Image::all()]);
    }

    public function testimonials()
    {
        return view('admin.testimonials');
    }
}
