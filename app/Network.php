<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Network extends Model
{
    public function getImageAttribute($image)
    {
        return $image ?? '../default/image.png';
    }
}
