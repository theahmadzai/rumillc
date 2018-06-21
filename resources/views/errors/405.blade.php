@extends('layouts.master')

@section('title', '405')

@section('content')
    <div class="content">
    405 Error:
        {{ $exception->getMessage() }}
    </div>
    @include('partials.testimonials')
@endsection
