@extends('layouts.master')

@section('content')
    <div class="container">
        <div class="section" style="max-width:400px; margin:0 auto;">

            @if (session('status'))
                <div class="notification is-info">
                    <button class="delete" onclick="this.parentElement.style.display='none';"></button>
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" action="{{ route('password.request') }}" novalidate>
                @csrf

                <input type="hidden" name="token" value="{{ $token }}">

                <div class="field">
                    <label for="email" class="label">Email</label>
                    <div class="control">
                        <input id="email" type="email" name="email" value="{{ $email ?? old('email') }}" class="input" required autofocus>
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
                    <label for="password-confirm" class="label">Confirm Password</label>
                    <div class="control">
                        <input id="password-confirm" type="password" name="password_confirmation" class="input" required>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link">Reset Password</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
@endsection
