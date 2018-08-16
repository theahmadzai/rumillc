@extends('layouts.master')

@section('title', 'Product')

@section('content')

    <productpage-component :id="{{$id}}"></productpage-component>

@endsection
