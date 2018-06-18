@extends('layouts.admin')

@section('panel')
    <div>
        @foreach ($slider as $image)
            <img src="/storage/app/{{ $image->url }}" alt="{{ $image->title }}">
        @endforeach
    </div>

    <form action="images" method="post" enctype="multipart/form-data" style="display:flex;flex-direction:column;width:300px;padding:2rem;">

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}">

        <input type="radio" name="type" value="s" id="slider">
        <label for="slider">Slider</label>

        <input type="radio" name="type" value="g" id="gallery">
        <label for="gallery">Gallery</label>

        <input type="radio" name="type" value="o" id="other" checked>
        <label for="other" selected>Other</label>

        <label for="image">Image</label>
        <input type="file" name="image" id="image">

        @csrf
        <input type="submit" value="Upload">
    </form>
@endsection
