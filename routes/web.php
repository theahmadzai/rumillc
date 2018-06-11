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

    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/contact', 'ContactController@index')->name('contact');

    Route::get('/gallery', 'GalleryController@index')->name('gallery');

    Route::get('/about', 'GalleryController@index')->name('about');

    Route::get('/services', 'GalleryController@index')->name('services');

    Route::get('/dubai', 'GalleryController@index')->name('dubai');

    Route::get('/indonesia', 'GalleryController@index')->name('indonesia');

});
