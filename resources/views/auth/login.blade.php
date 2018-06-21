@extends('layouts.master')

@section('content')
    <form method="POST" action="{{ route('login') }}" novalidate>
        @csrf

        <label for="email">E-Mail Adress</label>
        <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus>

        @if ($errors->has('email'))
            <span>
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif

        <label for="password">Password</label>
        <input id="password" type="password" name="password" required>

        @if ($errors->has('password'))
            <span>
                <strong>{{ $errors->first('password') }}</strong>
            </span>
        @endif

        <label>
            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
        </label>


        <a href="{{ route('password.request') }}">Forgot Your Password?</a>

        <input type="submit" value="Login">
    </form>
@endsection
