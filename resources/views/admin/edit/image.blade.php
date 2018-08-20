@extends('layouts.admin')

@section('panel')

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/images/{{$image->id}}" enctype="multipart/form-data">
            @csrf
            @method('put')

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="title" class="label">Title</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="title" id="title" value="{{ old('title', $image->title) }}" class="input">
                        </div>
                        @if ($errors->has('title'))
                            <p class="help is-danger">{{ $errors->first('title') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="type" class="label">Category</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select name="type" id="type">
                                    <option value="s" {{ $image->type == 's' ? 'selected': ''}}>Slider</option>
                                    <option value="g" {{ $image->type == 'g' ? 'selected': ''}}>Gallery</option>
                                    <option value="o" {{ $image->type == 'o' ? 'selected': ''}}>Other</option>
                                </select>
                            </div>
                            @if ($errors->has('type'))
                                <p class="help is-danger">{{ $errors->first('type') }}</p>
                            @endif
                        </div>
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
                    <label for="description" class="label">Description</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea name="description" id="description" class="textarea">{{ old('description', $image->description) }}</textarea>
                        </div>
                        @if ($errors->has('description'))
                            <p class="help is-danger">{{ $errors->first('description') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

@endsection
