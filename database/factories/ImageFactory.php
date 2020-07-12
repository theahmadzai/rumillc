<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(4),
        'type' => $faker->randomElement(['slider', 'gallery', 'other']),
    ];
});
