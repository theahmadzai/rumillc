@extends('layouts.master')

@section('title', 'Home')

@section('content')
    <div class="content"></div>
    @include('partials.slider')
    @include('partials.testimonials')
    @include('partials.subscribe')
@endsection
