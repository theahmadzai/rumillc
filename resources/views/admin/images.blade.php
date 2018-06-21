@extends('layouts.admin')

@section('panel')

    @if (Session::has('error'))
        <div>{{ Session::get('error') }}</div>
    @endif

    <form action="/api/images" method="post" enctype="multipart/form-data">
        @csrf

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}">

        <label for="type">Category</label>
        <select name="type" id="type">
            <option value="s">Slider</option>
            <option value="g">Gallery</option>
            <option value="o" selected>Other</option>
        </select>

        <label for="image">Image</label>
        <input type="file" name="image" id="image">

        <input type="submit" value="Upload">
    </form>

    <div>
        @foreach ($images as $image)
            <div>
                <img src="/storage/app/{{ $image->url }}" alt="{{ $image->title }}">
                <form action="/api/images/{{ $image->id }}" method="post">
                    @csrf
                    @method('delete')
                    <input type="submit" value="delete">
                </form>
            </div>
        @endforeach
    </div>
@endsection
