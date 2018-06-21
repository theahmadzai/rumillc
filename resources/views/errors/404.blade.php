@extends('layouts.master')

@section('title', '404')

@section('content')
    <div class="content">
    404 Error:
        {{ $exception->getMessage() }}
    </div>
    @include('partials.testimonials')
@endsection
