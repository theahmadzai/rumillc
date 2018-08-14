@extends('layouts.admin')

@section('panel')

    @if (session('status'))
        <div class="notification is-success">
            <button class="delete" onclick="this.parentElement.style.display='none';"></button>
            {{ session('status') }}
        </div>
    @endif

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/products" enctype="multipart/form-data">
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
                    <label for="slug" class="label">Slug</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="slug" id="slug" value="{{ old('slug') }}" class="input">
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
                            <input type="number" name="price" id="price" value="{{ old('price') }}" class="input">
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
                            <input type="text" name="tags" id="tags" value="{{ old('tags') }}" class="input">
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
                                    <option selected disabled>Select category</option>
                                    @foreach ($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name}}</option>
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
                            <textarea name="content" id="content" class="textarea">{{ old('content') }}</textarea>
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
                            <button class="button is-link">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="section">
        <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            @foreach ($categories as $cindex=>$category)
                <tr>
                    <th colspan="6">{{$category->name}}</th>
                </tr>
                @foreach ($category->products as $pindex=>$product)
                    <tr>
                        <td>{{$pindex+1}}</td>
                        <td>
                            <figure class="image is-4by3">
                                <img src="/storage/app/{{$product->image}}">
                            </figure>
                        </td>
                        <td>{{$product->name}}</td>
                        <td>{{$product->price}}</td>
                        <td>{{$product->created_at->diffForHumans()}}</td>
                        <td>
                            <form method="POST" action="/api/products/{{ $product->id }}/edit" style="display:inline-block;">
                                @csrf
                                @method('get')
                                <a href="#" class="icon" onclick="this.parentElement.submit();"><i class="far fa-edit"></i></a>
                            </form>
                            <form method="POST" action="/api/products/{{ $product->id }}" style="display:inline-block;">
                                @csrf
                                @method('delete')
                                <a href="#" class="icon" onclick="this.parentElement.submit();"><i class="far fa-trash-alt"></i></a>
                            </form>
                        </td>
                    </tr>
                @endforeach
            @endforeach
            </tbody>
        </table>
    </div>

@endsection
