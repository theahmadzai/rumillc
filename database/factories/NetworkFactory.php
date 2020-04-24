<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Network::class, function (Faker $faker) {
    $networkName = $faker->city;

    return [
        'name' => $networkName,
        'slug' => Str::slug($networkName),
    ];
});
