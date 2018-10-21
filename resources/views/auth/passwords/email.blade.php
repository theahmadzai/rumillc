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

            <form method="POST" action="{{ route('password.email') }}" novalidate>
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
                    <div class="control">
                        <button class="button is-link">Send Password Reset Link</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>
@endsection
