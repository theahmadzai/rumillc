@extends('layouts.master')

@section('title', 'Gallery')

@section('content')
    @include('partials.page-title', ['title'=>'Gallery', 'image'=>'img/slider/s16.jpeg'])
    <div class="content">
        Photo Gallery
    </div>
    @include('partials.testimonials')
@endsection
