@extends('layouts.master')

@section('content')
    <form method="POST" action="{{ route('password.request') }}">
        @csrf

        <input type="hidden" name="token" value="{{ $token }}">

        <label for="email">E-Mail Address</label>
        <input id="email" type="email" name="email" value="{{ $email ?? old('email') }}" required autofocus>

        @if ($errors->has('email'))
            <span>
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif

        <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

        @if ($errors->has('password'))
            <span>
                <strong>{{ $errors->first('password') }}</strong>
            </span>
        @endif

        <label for="password-confirm">Confirm Password</label>
        <input id="password-confirm" type="password" name="password_confirmation" required>

        <input type="submit" value="Reset Password">
    </form>
@endsection
