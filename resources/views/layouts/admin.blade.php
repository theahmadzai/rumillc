@extends('layouts.master')

@section('title', 'Admin')

@section('content')
    <div class="container">
        <section class="hero is-primary is-link">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Admin Dashboard</h1>
                    <h2 class="subtitle">Welcome, {{ Auth::user()->name }}</h2>
                </div>
            </div>
        </section>

        <div class="columns is-marginless has-background-white">
            <div class="column is-one-fifth">
                <aside class="menu">
                    <p class="menu-label">Administration</p>
                    <ul class="menu-list">
                        <li><a href="/admin" class="{{ request()->is('admin') ? 'is-active' : '' }}">Home</a></li>
                        <li><a href="/admin/images" class="{{ request()->is('admin/images') ? 'is-active' : '' }}">Images</a></li>
                        <li><a href="/admin/testimonials" class="{{ request()->is('admin/testimonials') ? 'is-active' : '' }}">Testimonials</a></li>
                        <li><a href="/admin/categories" class="{{ request()->is('admin/categories') ? 'is-active' : '' }}">Categories</a></li>
                        <li><a href="/admin/products" class="{{ request()->is('admin/products') ? 'is-active' : '' }}">Products</a></li>
                    </ul>
                    <p class="menu-label">Account</p>
                    <ul class="menu-list">
                        <li><a href="">Account Info</a></li>
                        <li><a href="">Settings</a></li>
                        <li><a href="{{ route('logout') }}">Logout</a></li>
                    </ul>
                </aside>
            </div>

            <div class="column">
                <div class="section">
                    @yield('panel')
                </div>
            </div>
        </div>
    </div>
@endsection
