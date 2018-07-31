@extends('layouts.master')

@section('title', 'Contact')

@section('content')

    <div class="section container columns">
        <div class="column is-one-half contact">
            <h1>Contact Info</h1>
            <p><b>Main office: </b>Kolola Pushta road, Burj Barq Street, Kabul district 4 - Afghanistan</p>
            <p><b>Factory: </b>Qalai Amir, Paghman district, Kabul - Afghanistan</p>
            <p><b>Contact: </b> +93 (0) 784516129</p>
            <p><b>Email: </b>info@rumillc.com</p>
        </div>

        <contact-component class="column is-one-half"></contact-component>
    </div>

    <gmap-component></gmap-component>

@endsection
