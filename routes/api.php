<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/contact', 'MailController@contact');
Route::post('/product', 'MailController@product');

Route::resource('images', 'ImageController')->only(['index', 'show']);
Route::resource('testimonials', 'TestimonialController')->only(['index', 'show']);
Route::resource('branches', 'BranchController')->only(['index', 'show']);
Route::resource('categories', 'CategoryController')->only(['index', 'show']);
Route::resource('products', 'ProductController')->only(['index', 'show']);
Route::resource('feedbacks', 'FeedbackController')->only(['index', 'show']);
Route::resource('networks', 'NetworkController')->only(['index', 'show']);
