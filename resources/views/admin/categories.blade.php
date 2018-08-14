@extends('layouts.admin')

@section('panel')

    @if (session('status'))
        <div class="notification is-success">
            <button class="delete" onclick="this.parentElement.style.display='none';"></button>
            {{ session('status') }}
        </div>
    @endif

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/categories" enctype="multipart/form-data">
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
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Add Category</button>
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
                    <th>Category Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            @foreach ($categories as $index=>$category)
                <tr>
                    <th>{{$index+1}}</th>
                    <td>{{$category->name}}</td>
                    <td>{{$category->created_at->diffForHumans()}}</td>
                    <td>
                        <form method="POST" action="/api/categories/{{ $category->id }}/edit" style="display:inline-block;">
                            @csrf
                            @method('get')
                            <a href="#" class="icon" onclick="this.parentElement.submit();"><i class="far fa-edit"></i></a>
                        </form>
                        <form method="POST" action="/api/categories/{{ $category->id }}" style="display:inline-block;">
                            @csrf
                            @method('delete')
                            <a href="#" class="icon" onclick="this.parentElement.submit();"><i class="far fa-trash-alt"></i></a>
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection
