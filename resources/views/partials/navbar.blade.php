<nav class="navbar">
    <ul class="menu">
        <li class="menu__item">
            <a href="{{ URL::route('home') }}">@lang('routes.home')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('about') }}">@lang('routes.about')</a>
            <ul class="submenu">
                <li class="submenu__item">
                    <a href="">Menu 1</a>
                </li>
                <li class="submenu__item">
                    <a href="">Menu 2</a>
                </li>
                <li class="submenu__item">
                    <a href="">Menu 3</a>
                </li>
            </ul>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('services') }}">@lang('routes.services')</a>
            <ul class="submenu">
                <li class="submenu__item">
                    <a href="">Menu 1</a>
                </li>
                <li class="submenu__item">
                    <a href="">Menu 2</a>
                </li>
                <li class="submenu__item">
                    <a href="">Menu 3</a>
                </li>
            </ul>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('dubai-office') }}">@lang('routes.dubai')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('indonesia-office') }}">@lang('routes.indonesia')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('gallery') }}">@lang('routes.gallery')</a>
        </li>
        <li class="menu__item">
            <a href="{{ URL::route('contact') }}">@lang('routes.contact')</a>
        </li>
    </ul>
</nav>
