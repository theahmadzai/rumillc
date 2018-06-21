<?php

namespace App\Http\Controllers;

use App\Image;
use Storage;
use Validator;
use App\Http\Resources\ImageResource;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(!\Request::has('type')) {
            return ImageResource::collection(Image::all());
        }

        $type = \Request::query('type');

        if(in_array($type, ['o','s','g'])){
            return ImageResource::collection(Image::where('type', $type)->get());
        }
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
            'title' => 'required|min:5|max:50',
            'type' => 'required',
            'image' => 'required|file|image'
        ]);

        if($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        $dirs = [
            's' => 'slider',
            'g' => 'gallery',
            'o' => 'others'
        ];

        $title = $request->title;
        $type = $request->type;
        $image = $request->image;
        $path = $image->store($dirs[$type]);

        $i = new Image;

        $i->title = $title;
        $i->format = $image->extension();
        $i->size = $image->getSize();
        $i->url = $path;
        $i->type = $type;

        $i->save();

        return back()->with('status', 'Image Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return new ImageResource($image);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        Storage::delete($image->url);

        Image::destroy($image->id);

        return back()->with('status', 'Image Deleted Successfully!');
    }
}
