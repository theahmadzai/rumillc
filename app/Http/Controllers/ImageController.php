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
        $type = \Request::query('type');
        if (\Request::has('type') && in_array($type, ['o', 's', 'g'])) {
            if (\Request::has('offset')) {
                $offset = \Request::query('offset');
                return ImageResource::collection(Image::where('type', $type)->Paginate($offset));
            }
            return ImageResource::collection(Image::where('type', $type)->get());
        }
        return ImageResource::collection(Image::all());
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

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $image = new Image;
            $image->title = $request->title;
            $image->format = $request->image->extension();
            $image->size = $request->image->getSize();
            $image->url = $request->image->store($request->type);
            $image->type = $request->type;
            $image->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

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
        return var_dump(Storage::exists($image->url));
        if (Storage::exists($image->url)) {
            Storage::move($image->url, 'deleted/images/' . $image->type . '/' . basename($image->url));
        }

        Image::destroy($image->id);

        return back()->with('status', 'Image Deleted Successfully!');
    }
}
