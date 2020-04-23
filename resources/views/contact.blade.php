@extends('layouts.master')

@section('title', 'Contact')

@section('content')

    <div class="section container columns">
        <div class="column is-one-half contact">
            <h1>Contact Info</h1>
            <p><strong>@lang('contact.address.h'):</strong> @lang('contact.address.m')</p>
            <p><strong>@lang('contact.phone.h'):</strong> @lang('contact.phone.m')</p>
            <p><strong>@lang('contact.whatsapp.h'):</strong> @lang('contact.whatsapp.m')</p>
            <p><strong>@lang('contact.email.h'):</strong> @lang('contact.email.m')</p>
        </div>

        <contact-component class="column is-one-half"></contact-component>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.953839920866!2d69.24426731454042!3d34.50405450123365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16b8ea717bc9f%3A0x7c484ae0501e67de!2sRumi%20Trading%20LLC!5e0!3m2!1sen!2s!4v1586981874220!5m2!1sen!2s" class="google-map" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

@endsection
