@extends('layouts.master')

@section('title', 'Contact')

@section('content')

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

    <testimonials-component></testimonials-component>

    <subscribe-component></subscribe-component>

@endsection
