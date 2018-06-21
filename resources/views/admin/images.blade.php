@extends('layouts.admin')

@section('panel')

    @if (session('status'))
        <div class="notification is-success">
            <button class="delete" onclick="this.parentElement.style.display='none';"></button>
            {{ session('status') }}
        </div>
    @endif

    @include('admin.partials.image-upload-form')

    <div class="section">
        <div class="tabs">
            <ul>
                <li class="{{ app('request')->input('type') ? '' : 'is-active' }}"><a href="images">All</a></li>
                <li class="{{ app('request')->input('type') == 's' ? 'is-active' : '' }}"><a href="images?type=s">Slider</a></li>
                <li class="{{ app('request')->input('type') == 'g' ? 'is-active' : '' }}"><a href="images?type=g">Gallery</a></li>
                <li class="{{ app('request')->input('type') == 'o' ? 'is-active' : '' }}"><a href="images?type=o">Other</a></li>
            </ul>
        </div>

        @foreach ($images->chunk(3) as $chunk)
            <div class="columns">
                @foreach ($chunk as $image)
                    <div class="column is-one-third">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title">
                                    {{ str_limit($image->title, 20, "...") }}
                                </p>
                                <form method="POST" action="/api/images/{{ $image->id }}" class="card-header-icon">
                                    @csrf
                                    @method('delete')
                                    <a href="#" class="icon delete" onclick="this.parentElement.submit();">Delete</a>
                                </form>
                            </div>
                            <div class="card-image">
                                <figure class="image">
                                    <img src="/storage/app/{{ $image->url }}" alt="{{ $image->title }}">
                                </figure>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
@endsection
