<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    public function getImageAttribute($image)
    {
        return $image ?? '../default/testimonial.png';
    }
}
