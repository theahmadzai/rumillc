<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
