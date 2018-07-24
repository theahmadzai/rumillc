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
        $query = Product::with('category')->find($id);
        return view('product', ['product' => $query]);
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
