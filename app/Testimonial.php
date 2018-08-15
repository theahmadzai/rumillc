<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Testimonial extends Model
{
    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default_images/testimonial.png');
    }
}
