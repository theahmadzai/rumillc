@extends('layouts.admin')

@section('panel')

    @if (session('status'))
        <div class="notification is-success">
            <button class="delete" onclick="this.parentElement.style.display='none';"></button>
            {{ session('status') }}
        </div>
    @endif

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/testimonials" enctype="multipart/form-data">
            @csrf

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="name" class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="name" id="name" value="{{ old('name') }}" class="input">
                        </div>
                        @if ($errors->has('name'))
                            <p class="help is-danger">{{ $errors->first('name') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="image" class="label">Image</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <label class="file-label">
                                <input class="file-input" type="file" name="image" id="image">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>
                        @if ($errors->has('image'))
                            <p class="help is-danger">{{ $errors->first('image') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="message" class="label">Message</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea name="message" id="message" class="textarea">{{ old('message') }}</textarea>
                        </div>
                        @if ($errors->has('message'))
                            <p class="help is-danger">{{ $errors->first('message') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Add Testimonial</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="section">
        @foreach ($testimonials as $testimonial)
            <div class="columns">
                <div class="column">
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">
                                {{$testimonial->name}}
                            </p>
                            <a href="testimonials/{{$testimonial->id}}/edit" class="card-header-icon"><i class="icon far fa-edit"></i></a>
                            <form method="POST" action="/api/testimonials/{{$testimonial->id}}">
                                @csrf
                                @method('delete')
                                <a href="#" class="card-header-icon" onclick="this.parentElement.submit();"><i class="icon far fa-trash-alt"></i></a>
                            </form>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns">
                                    <div class="column is-one-quarter">
                                        <figure class="image">
                                            <img src="{{$testimonial->image}}" alt="{{$testimonial->name}}">
                                        </figure>
                                    </div>
                                    <div class="column">
                                        {{$testimonial->message}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

@endsection
