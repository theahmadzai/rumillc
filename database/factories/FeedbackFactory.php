<?php

use Faker\Generator as Faker;

$factory->define(App\Feedback::class, function (Faker $faker) use ($factory) {
    return [
        'rating' => $faker->numberBetween(1, 5),
        'name' => $faker->name,
        'title' => $faker->word(2),
        'message' => $faker->text,
        'product_id' => $factory->create(App\Product::class)->id,
    ];
});
