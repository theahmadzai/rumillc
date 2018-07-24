<?php

namespace App\Http\Controllers;

use App\Product;
use App\Http\Resources\ProductResource;
use Validator;
use Storage;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(!\Request::has('category')) {
            return ProductResource::collection(Product::all());
        }

        return Product::with('category')->where('category_id', \Request::query('category'))->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => 'required',
            'price' => 'required|numeric',
            'image' => 'required|file|image',
            'category' => 'required|exists:categories,id',
            'content' => 'required|min:200'
        ]);

        if($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        $name = $request->name;
        $slug = $request->slug;
        $price = $request->price;
        $image = $request->image->store('products');
        $category = $request->category;
        $content = $request->content;

        $p = new Product;

        $p->name = $name;
        $p->slug = $slug;
        $p->price = $price;
        $p->image = $image;
        $p->category_id = $category;
        $p->content = $content;

        $p->save();

        return back()->with('status', 'Product Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        Storage::delete($product->image);

        Product::destroy($product->id);

        return back()->with('status', 'Product Deleted Successfully!');
    }
}
