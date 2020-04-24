<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Testimonial extends Model
{
    protected $table = 'testimonials';

    public function getImageAttribute($image)
    {
        return $image ?? '../default/testimonial.png';
    }
}
