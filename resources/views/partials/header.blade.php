<header class="header">
    <div class="container">

        <a href="/" class="logo">
            <img src="{{ asset('images/logo.png') }}" alt="Rumi Trading LLC Logo">
        </a>

        @include('partials.navbar')

        <div class="control has-icons-left">
            <div class="select is-rounded">
                <select name="lang" id="lang">
                    <option value="">EN</option>
                    <option value="">PS</option>
                </select>
            </div>
            <div class="icon is-small is-left">
                <i class="fa fa-globe"></i>
            </div>
        </div>
    </div>
</header>
