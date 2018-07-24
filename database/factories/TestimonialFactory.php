<?php

use Faker\Generator as Faker;

$factory->define(App\Testimonial::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'image' => "../temp/testimonials/{$faker->numberBetween(1,3)}.jpeg",
        'message' => $faker->sentence(20)
    ];
});
