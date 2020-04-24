<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Image extends Model
{
    protected $table = 'images';

    public function getUrlAttribute($url)
    {
        return $url ?? '../default/image.png';
    }
}
