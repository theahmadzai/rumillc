@extends('layouts.admin')

@section('panel')

    <nav class="level">
        <p class="level-item has-text-centered">
            <a class="link is-info" href="/admin">Home</a>
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info" href="/admin/images">Images</a>
        </p>
        <p class="level-item has-text-centered">
            <img src="{{asset('images/logo.png')}}">
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info" href="/admin/testimonials">Testimonials</a>
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info" href="/admin//logout">Logout</a>
        </p>
    </nav>


    <div class="section has-background-white-bis">
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Images</p>
                <p class="title">{{$images_count}}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Testimonials</p>
                <p class="title">{{$testimonials_count}}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Admins</p>
                <p class="title">{{$admins_count}}</p>
                </div>
            </div>
        </nav>
    </div>

@endsection
