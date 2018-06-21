@extends('layouts.master')

@section('content')
    @if (session('status'))
        <div>
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <label for="email">E-Mail Address</label>
        <input id="email" type="email" name="email" value="{{ old('email') }}" required>

        @if ($errors->has('email'))
            <span>
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif

        <input type="submit" value="Send Password Reset Link">
    </form>
</div>
@endsection
