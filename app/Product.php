<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Product extends Model
{
    protected $hidden = [
        'category_id',
    ];

    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default_images/product.png');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }
}
