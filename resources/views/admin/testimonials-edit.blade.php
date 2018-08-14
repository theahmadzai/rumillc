@extends('layouts.admin')

@section('panel')

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/testimonials/{{$testimonial->id}}" enctype="multipart/form-data">
            @csrf
            @method('put')

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="name" class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="name" id="name" value="{{ old('name', $testimonial->name) }}" class="input">
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
                            <textarea name="message" id="message" class="textarea">{{ old('message', $testimonial->message) }}</textarea>
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
                            <button class="button is-link">Update Testimonial</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

@endsection
