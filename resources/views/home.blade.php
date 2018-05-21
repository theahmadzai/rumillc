@extends('layouts.master')

@section('title', 'Home')

@section('content')
    @include('partials.slider')
    <div class="content">
        Home Page
    </div>
    @include('partials.testimonials')
    @include('partials.subscribe')
@endsection
