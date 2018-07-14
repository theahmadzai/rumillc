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
            <a href="{{ URL::route('afghanistan-office') }}">@lang('routes.network')</a>
            <ul class="submenu">
                <li class="submenu__item">
                    <a href="{{ URL::route('afghanistan-office') }}">@lang('routes.afghanistan')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('dubai-office') }}">@lang('routes.dubai')</a>
                </li>
                <li class="submenu__item">
                    <a href="{{ URL::route('indonesia-office') }}">@lang('routes.indonesia')</a>
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
