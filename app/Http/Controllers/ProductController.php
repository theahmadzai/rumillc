<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;
use Storage;
use Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit    = \Request::query('limit');
        $category = \Request::query('category');

        if (\Request::has('category') && \Request::has('limit')) {
            return ProductResource::collection(Product::where('category_id', $category)->limit($limit)->get());
        }

        if (\Request::has('category')) {
            return ProductResource::collection(Product::where('category_id', $category)->get());
        }

        if (\Request::has('limit')) {
            return ProductResource::collection(Product::limit($limit)->latest()->get());
        }

        return ProductResource::collection(Product::all());
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
            'name'     => 'required',
            'slug'     => 'required',
            'price'    => 'nullable|numeric',
            'tags'     => 'nullable|string',
            'image'    => 'file|image',
            'category' => 'required|exists:categories,id',
            'content'  => 'nullable',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $product              = new Product;
            $product->name        = $request->name;
            $product->slug        = $request->slug;
            $product->price       = $request->price;
            $product->tags        = $request->tags;
            $product->content     = $request->content;
            $product->category_id = $request->category;
            if ($request->hasFile('image')) {
                $product->image = $request->image->store('public');
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
        return new ProductResource($product);
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
            'name'     => 'required',
            'slug'     => 'required',
            'price'    => 'nullable|numeric',
            'tags'     => 'nullable|string',
            'image'    => 'file|image',
            'category' => 'required|exists:categories,id',
            'content'  => 'nullable',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $product              = Product::find($product->id);
            $product->name        = $request->name;
            $product->slug        = $request->slug;
            $product->price       = $request->price;
            $product->tags        = $request->tags;
            $product->content     = $request->content;
            $product->category_id = $request->category;
            if ($request->hasFile('image')) {
                if (Storage::exists($product->getOriginal('image'))) {
                    Storage::move($product->getOriginal('image'), 'updated/products/' . basename($product->image));
                }
                $product->image = $request->image->store('public');
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
        if (Storage::exists($product->getOriginal('image'))) {
            Storage::move($product->getOriginal('image'), 'deleted/products/' . basename($product->image));
        }

        $product = Product::find($product->id);
        $product->feedbacks()->delete();
        $product->delete();

        return back()->with('status', 'Product Deleted Successfully!');
    }
}
