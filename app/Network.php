<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Network extends Model
{
    protected $table = 'networks';

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
