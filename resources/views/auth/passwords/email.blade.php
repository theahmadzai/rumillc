@extends('layouts.master')

@section('content')

    @if (session('status'))
        <div>
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('password.email') }}" style="width:30%; padding:2rem;" novalidate>
        @csrf

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
            <div class="control">
                <button class="button is-link">Send Password Reset Link</button>
            </div>
        </div>
    </form>
</div>
@endsection
