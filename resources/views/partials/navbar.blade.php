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
            <a href="{{ URL::route('network') }}">@lang('routes.network')</a>
            <ul class="submenu">
                <li class="submenu__item">
                    <a href="{{ URL::route('network','afghanistan') }}">@lang('routes.afghanistan')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('network','dubai') }}">@lang('routes.dubai')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('network','jakarta') }}">@lang('routes.jakarta')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('network','bandung') }}">@lang('routes.bandung')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('network','london') }}">@lang('routes.london')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('network','toronto') }}">@lang('routes.toronto')</a>
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
