<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Category::class, function (Faker $faker) {
    $categoryName = $faker->words(2, true);

    return [
        'name' => $categoryName,
        'slug' => Str::slug($categoryName),
        'branch_id' => App\Branch::all()->random(),
    ];
});
