<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Image extends Model
{
    public function getUrlAttribute($url)
    {
        return Storage::url($url ?? 'default_images/image.png');
    }
}
