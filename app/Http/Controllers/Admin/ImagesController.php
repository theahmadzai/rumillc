<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Image;

class ImagesController extends Controller
{
    public function index()
    {
        return view('admin.images', [
            'slider' => Image::where('type', 's')->get(),
            'gallery' => Image::where('type', 'g'),
            'other' => Image::where('type', 'o')
        ]);
    }

    public function insert(Request $request)
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

        return back();
    }
}
