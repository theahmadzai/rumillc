@extends('layouts.master')

@section('content')
    <form method="POST" action="{{ route('login') }}" novalidate style="width:30%; padding:3rem; margin:0 auto;">
        @csrf

        <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
                <input id="email" type="email" name="email" value="{{ old('email') }}" class="input" required autofocus>
            </div>
            @if ($errors->has('email'))
                <p class="help is-danger">{{ $errors->first('email') }}</p>
            @endif
        </div>

        <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
                <input id="password" type="password" name="password" class="input" required>
            </div>
            @if ($errors->has('password'))
                <p class="help is-danger">{{ $errors->first('password') }}</p>
            @endif
        </div>

        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                    Remember me
                </label>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-link">Login</button>
            </div>
        </div>

        <div class="field">
            <a href="{{ route('password.request') }}">Forgotten your password?</a>
        </div>
    </form>
@endsection
