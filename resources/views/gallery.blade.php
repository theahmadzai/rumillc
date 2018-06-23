@extends('layouts.master')

@section('title', 'Gallery')

@section('content')

    <div class="container" style="width: 80%">
        <gallery-component></gallery-component>
    </div>

    <testimonials-component></testimonials-component>

@endsection
