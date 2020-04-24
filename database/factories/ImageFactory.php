<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'title'         => $faker->sentence(4),
        'type'          => $faker->randomElement(['slider', 'gallery', 'other']),
        'description'   => $faker->sentence(10),
    ];
});
