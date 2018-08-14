<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ImageResource;
use App\Image;
use App\Testimonial;
use App\Category;
use App\Product;
use App\User;

class PageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function home()
    {
        return view('admin.home', [
            'images_count' => Image::get()->count(),
            'testimonials_count' => Testimonial::get()->count(),
            'categories_count' => Category::get()->count(),
            'products_count' => Product::get()->count()
        ]);
    }

    public function images()
    {
        $type = \Request::query('type');
        if (\Request::has('type') && in_array($type, ['o', 's', 'g'])) {
            return view('admin.images', ['images' => Image::where('type', $type)->get()]);
        }

        return view('admin.images', ['images' => Image::all()]);
    }

    public function testimonials()
    {
        return view('admin.testimonials', ['testimonials' => Testimonial::all()]);
    }

    public function categories()
    {
        return view('admin.categories', ['categories' => Category::all()]);
    }

    public function products()
    {
        return view('admin.products', ['categories' => Category::with('products')->get()]);
    }
}
