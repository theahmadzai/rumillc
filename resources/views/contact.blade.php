@extends('layouts.master')

@section('title', 'Contact')

@section('content')
    @include('partials.page-title', ['title'=>'Contact', 'image'=>'img/slider/s15.jpeg'])
    <div class="content">
        Contact Page
    </div>
    @include('partials.testimonials')
    @include('partials.subscribe')
@endsection
