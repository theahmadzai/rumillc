<?php

namespace App\Http\Controllers;

use App\Image;
use Storage;
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
        $title = $request->title;

        if(!$request->filled('title')
        || strlen($title) < 5
        || strlen($title) > 255){
            return redirect('admin/images')->withInput(
                $request->except('image')
            );
        }

        $image = $request->image;

        if(!$request->hasFile('image')
        || !$request->file('image')->isValid()
        || !in_array($image->extension(), ['jpg','jpeg','png'])) {
            return redirect('admin/images')->withInput(
                $request->expect('image')
            );
        }

        $type = $request->type;


        $dirs = [
            's' => 'slider',
            'g' => 'gallery',
            'o' => 'others'
        ];

        if(!in_array($type,array_keys($dirs))) {
            return redirect('admin/images')->withInput(
                $request->expect('image')
            );
        }

        $path = $image->store($dirs[$type]);

        $i = new Image;

        $i->title = $title;
        $i->format = $image->extension();
        $i->size = $image->getSize();
        $i->url = $path;
        $i->type = $type;

        $i->save();

        return redirect()->route('admin.images');
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

        return redirect()->route('admin.images');
    }
}
