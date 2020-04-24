<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Branch::class, function (Faker $faker) {
    $branchName = $faker->words(2, true);

    return [
        'name' => $branchName,
        'slug' => Str::slug($branchName),
    ];
});
