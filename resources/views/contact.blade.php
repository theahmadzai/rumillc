@extends('layouts.master')

@section('title', 'Contact')

@section('content')

    <div class="section container columns">
        <div class="column is-one-half contact">
            <h1>Contact Info</h1>
            <p><strong>@lang('contact.address.h'):</strong> @lang('contact.address.m')</p>
            <p><strong>@lang('contact.phone.h'):</strong> @lang('contact.phone.m')</p>
            <p><strong>@lang('contact.email.h'):</strong> @lang('contact.email.m')</p>
        </div>

        <contact-component class="column is-one-half"></contact-component>
    </div>

    <gmap-component></gmap-component>

@endsection
