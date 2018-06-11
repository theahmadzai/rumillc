@extends('layouts.master')

@section('title', 'Admin')

@section('content')
    <div class="admin-heading"><h1>Admin Panel</h1> <a href="/">(Logout)</a></div>
    <div class="admin-panel">
        <div class="left-pane">
            <a href="{{ URL::route('admin.images') }}">Add Image</a>
            <a href="{{ URL::route('admin.testimonials') }}">Add Testimonial</a>
        </div>
        <div class="right-pane">
            @yield('panel')
        </div>
    </div>
@endsection
