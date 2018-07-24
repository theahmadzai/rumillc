<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) use ($factory){
    return [
        'name' => $faker->word,
        'slug' => $faker->slug,
        'image' => "../temp/images/{$faker->numberBetween(1,20)}.jpeg",
        'price' => $faker->numberBetween(1000, 20000),
        'content' => $faker->text(500),
        'category_id' => $factory->create(App\Category::class)->id,
    ];
});
