<nav class="navbar" id="navbar">
    <ul class="menu">
        <li class="menu__item">
            <a href="{{ URL::route('home') }}">@lang('routes.home')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('about') }}">@lang('routes.about')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('products') }}">@lang('routes.products')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('office','afghanistan') }}">@lang('routes.network')</a>
            <ul class="submenu">
                <li class="submenu__item">
                    <a href="{{ URL::route('office','afghanistan') }}">@lang('routes.afghanistan')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('office','dubai') }}">@lang('routes.dubai')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('office','jakarta') }}">@lang('routes.jakarta')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('office','london') }}">@lang('routes.london')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('office','toranto') }}">@lang('routes.toranto')</a>
                </li>
            </ul>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('gallery') }}">@lang('routes.gallery')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('contact') }}">@lang('routes.contact')</a>
        </li>
    </ul>
</nav>
