@extends('layouts.admin')

@section('panel')

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/products/{{$product->id}}" enctype="multipart/form-data">
            @csrf
            @method('put')

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="name" class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="name" id="name" value="{{ old('name',$product->name) }}" class="input">
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
                            <input type="text" name="slug" id="slug" value="{{ old('slug', $product->slug) }}" class="input">
                        </div>
                        @if ($errors->has('slug'))
                            <p class="help is-danger">{{ $errors->first('slug') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="price" class="label">Price</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="number" name="price" id="price" value="{{ old('price', $product->price) }}" class="input">
                        </div>
                        @if ($errors->has('price'))
                            <p class="help is-danger">{{ $errors->first('price') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="price" class="label">Tags</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="tags" id="tags" value="{{ old('tags', $product->tags) }}" class="input">
                        </div>
                        @if ($errors->has('tags'))
                            <p class="help is-danger">{{ $errors->first('tags') }}</p>
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
                    <label for="category" class="label">Category</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select name="category" id="category">
                                    <option disabled>Select category</option>
                                    @foreach ($categories as $category)
                                        <option value="{{$category->id}}" {{ $category->id == $product->category_id ? 'selected': ''}}>{{$category->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            @if ($errors->has('category'))
                                <p class="help is-danger">{{ $errors->first('category') }}</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="content" class="label">Content</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea name="content" id="content" class="textarea">{{ old('content', $product->content) }}</textarea>
                        </div>
                        @if ($errors->has('content'))
                            <p class="help is-danger">{{ $errors->first('content') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Update Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

@endsection
