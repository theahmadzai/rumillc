<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'branches';

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
