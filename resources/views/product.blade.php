@extends('layouts.master')

@section('title', 'Product')

@section('content')

    <div class="section" style="width:60%; margin: 0 auto;">
        <div style="height:400px; width:100%; overflow:hidden;">
            <img src="/storage/app/{{$product->image}}" alt="{{$product->name}}">
        </div>
        <div class="content">
            <br>
            <a href="#">{{$product->category->name}}</a> > <a href="#">{{$product->name}}</a>
            <br>
            <h2>{{$product->name}}</h2>
            <p>{{$product->price}}</p>
            <hr>
            <p>{{$product->content}}</p>
        </div>
    </div>

@endsection
