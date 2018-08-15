<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Image;
use Illuminate\Http\Request;
use Storage;
use Validator;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'type'  => 'required',
            'image' => 'required|file|image',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $image         = new Image;
            $image->title  = $request->title;
            $image->format = $request->image->extension();
            $image->size   = $request->image->getSize();
            $image->url    = $request->image->store('public');
            $image->type   = $request->type;
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'type'  => 'required',
            'image' => 'file|image',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $image        = Image::find($image->id);
            $image->title = $request->title;
            if ($request->hasFile('image')) {
                if (Storage::exists($image->getOriginal('url'))) {
                    Storage::move($image->getOriginal('url'), 'updated/images/' . $image->type . '/' . basename($image->url));
                }
                $image->format = $request->image->extension();
                $image->size   = $request->image->getSize();
                $image->url    = $request->image->store('public');
            }
            $image->type = $request->type;
            $image->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return redirect('admin/images')->with('status', 'Image Added Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        if (Storage::exists($image->getOriginal('url'))) {
            Storage::move($image->getOriginal('url'), 'deleted/images/' . $image->type . '/' . basename($image->url));
        }

        Image::destroy($image->id);

        return back()->with('status', 'Image Deleted Successfully!');
    }
}
