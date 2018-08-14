<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    public function getImageAttribute($image)
    {
        return '/storage/app/' . ($image ?? 'public/default_images/testimonial.png');
    }
}
