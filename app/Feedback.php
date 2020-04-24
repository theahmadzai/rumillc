<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'feedbacks';

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
