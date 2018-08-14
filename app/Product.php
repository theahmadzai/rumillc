<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $hidden = [
        'category_id'
    ];

    public function getImageAttribute($value)
    {
        return $value ?? 'default.png';
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
