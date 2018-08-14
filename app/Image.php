<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function getUrlAttribute($value)
    {
        return '/storage/app/' . $value;
    }
}
