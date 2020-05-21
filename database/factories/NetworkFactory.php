<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Network;
use Faker\Generator as Faker;

$factory->define(Network::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
    ];
});
