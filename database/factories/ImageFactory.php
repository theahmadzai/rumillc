<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'url' => $faker->imageUrl(640, 480),
        'format' => $faker->fileExtension(),
        'type' => $faker->randomElement(['s','g','o']),
        'size' => $faker->numberBetween(1000, 8000),
    ];
});
