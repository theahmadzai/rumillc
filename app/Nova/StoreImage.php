<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic;
use Storage;

class StoreImage
{
    private $width = null;
    private $height = null;

    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    /**
     * Store the incoming file upload.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $attribute
     * @param  string  $requestAttribute
     * @param  string  $disk
     * @param  string  $storagePath
     * @return array
     */
    public function __invoke(Request $request, $model)
    {
        $name = uniqid() . '.' . $request->file('image')->extension();

        Storage::disk('public')->putFileAs('images', $request->file('image'), $name);

        $image = ImageManagerStatic::make($request->file('image'));

        $small = $image->fit(200, 200, function ($constraint) {
            $constraint->upsize();
            $constraint->aspectRatio();
        })->encode();

        Storage::disk('public')->put('thumbnails/' . $name, $small);

        return [
            'image' => $name,
        ];
    }
}
