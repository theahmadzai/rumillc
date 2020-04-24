<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Product extends Model
{
    protected $table = 'products';

    public function getImageAttribute($image)
    {
        return $image ?? '../default/product.png';
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }
}
