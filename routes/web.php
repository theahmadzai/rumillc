<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' =>  LaravelLocalization::setLocale()], function() {

    $pages = ['contact', 'gallery', 'about', 'services', 'dubai', 'indonesia'];

    Route::get('/', 'PagesController@home')->name('home');

    foreach($pages as $page) {

        Route::get("/{$page}", "PagesController@{$page}")->name($page);
    }

    // Route::get('/contact', 'PagesController@contact')->name('contact');

    // Route::get('/gallery', 'PagesController@gallery')->name('gallery');

    // Route::get('/about', 'PagesController@about')->name('about');

    // Route::get('/services', 'PagesController@services')->name('services');

    // Route::get('/dubai', 'PagesController@dubai')->name('dubai');

    // Route::get('/indonesia', 'PagesController@indonesia')->name('indonesia');

});

Route::group(['prefix' => '/admin'], function(){

    Route::get('/', 'Admin\AdminController@index')->name('admin');

    Route::get('/images', 'Admin\ImagesController@index')->name('admin.images');
    Route::post('/images', 'Admin\ImagesController@insert')->name('admin.images.insert');

    Route::get('/testimonials', 'Admin\TestimonialsController@index')->name('admin.testimonials');
});
