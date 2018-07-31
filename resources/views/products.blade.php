@extends('layouts.master')

@section('title', 'Products')

@section('content')
    <div class="container section">
        <ul class="leftmenu">
            @foreach ($categories as $category)
                <li class="leftmenu__item">
                    <a>{{ $category->name }}</a>
                    <ul class="submenu">
                        @foreach ($category->products as $product)
                            <li class="submenu__item">
                                <img src="storage/app/{{$product->image}}">
                                <a href="product/{{$product->id}}-{{$product->slug}}">{{ $product->name }}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ul>
    </div>

    <categories-component></categories-component>

@endsection
