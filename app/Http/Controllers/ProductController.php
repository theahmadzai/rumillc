<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;
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
        if (!\Request::has('category') && !\Request::has('limit')) {
            return Product::with('category')->get();
        }

        if (!\Request::has('category') && \Request::has('limit')) {
            return Product::with('category')->latest()->limit(\Request::query('limit'))->get();
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
            'price' => 'nullable|numeric',
            'tags' => 'nullable|string',
            'image' => 'file|image',
            'category' => 'required|exists:categories,id',
            'content' => 'nullable'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $product = new Product;
            $product->name = $request->name;
            $product->slug = $request->slug;
            $product->price = $request->price;
            $product->tags = $request->tags;
            $product->content = $request->content;
            $product->category_id = $request->category;
            if ($request->hasFile('image')) {
                $product->image = $request->image->store('products');
            }
            $product->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

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
        return Product::with('category')->find($product->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('admin.products-edit', ['categories' => Category::all(), 'product' => $product]);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => 'required',
            'price' => 'nullable|numeric',
            'tags' => 'nullable|string',
            'image' => 'file|image',
            'category' => 'required|exists:categories,id',
            'content' => 'nullable'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $product = Product::find($product->id);
            $product->name = $request->name;
            $product->slug = $request->slug;
            $product->price = $request->price;
            $product->tags = $request->tags;
            $product->content = $request->content;
            $product->category_id = $request->category;
            if ($request->hasFile('image')) {
                $product->image = $request->image->store('products');
            }
            $product->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return redirect('admin/products')->with('status', 'Product Updated Successfully!');
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

        $product = Product::find($product->id);
        $product->feedbacks()->delete();
        $product->delete();

        return back()->with('status', 'Product Deleted Successfully!');
    }
}
