@extends('layouts.master')

@section('title', 'Contact')

@section('content')
    <div class="content">
    <gmap-component></gmap-component>
        <div class="contact">
            <div class="contact__info">
                <h1>Contact Info</h1>
                <p><b>Main office: </b>Kolola Pushta road, Burj Barq Street, Kabul district 4 - Afghanistan</p>
                <p><b>Factory: </b>Qalai Amir, Paghman district, Kabul - Afghanistan</p>
                <p><b>Contact: </b> +93 (0) 784516129</p>
                <p><b>Email: </b>info@rumillc.com</p>
            </div>
            <contact-component></contact-component>
        </div>
    </div>
    @include('partials.testimonials')
    @include('partials.subscribe')
@endsection
