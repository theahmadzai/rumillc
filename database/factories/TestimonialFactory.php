<?php

use Faker\Generator as Faker;

$factory->define(App\Testimonial::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'message' => $faker->sentence(20)
    ];
});
