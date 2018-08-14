@extends('layouts.admin')

@section('panel')

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/categories/{{$category->id}}" enctype="multipart/form-data">
            @csrf
            @method('put')

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="name" class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="name" id="name" value="{{ old('name', $category->name) }}" class="input">
                        </div>
                        @if ($errors->has('name'))
                            <p class="help is-danger">{{ $errors->first('name') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="slug" class="label">Slug</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="slug" id="slug" value="{{ old('slug', $category->slug) }}" class="input">
                        </div>
                        @if ($errors->has('slug'))
                            <p class="help is-danger">{{ $errors->first('slug') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Update Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

@endsection
