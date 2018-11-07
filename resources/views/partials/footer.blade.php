<footer class="footer has-background-dark has-text-light is-paddingless">
    <div class="container">
        <div class="section">
            <div class="columns is-multiline is-8">
                <div class="column is-5">
                    <div class="content" style="max-width:350px;">
                        <h3 class="title has-text-light is-4">About RUMI</h3>
                        <p class="has-text-justified">@lang('misc.about')</p>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="content">
                        <h3 class="title has-text-light is-4">Working Hours</h3>
                        <p class="has-text-justified">@lang('misc.working_time')</p>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="content">
                        <h3 class="title has-text-light is-4">Get in Touch</h3>
                        <p>@lang('misc.follow_us')</p>
                        <div class="b-icons">
                            <span class="icon">
                                <a href="https://www.facebook.com/rumillc/">
                                    <i class="fab fa-facebook fa-2x"></i>
                                </a>
                            </span>
                            <span class="icon">
                                <a href="#">
                                    <i class="fab fa-twitter fa-2x"></i>
                                </a>
                            </span>
                            <span class="icon">
                                <a href="https://www.instagram.com/rumisaffronindonesia/">
                                    <i class="fab fa-instagram fa-2x"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="column is-5">
                    <div class="content b-links is-small">
                        <h3 class="title has-text-light is-4">Sitemap</h3>
                        <a href="{{ URL::route('home') }}">@lang('routes.home')</a>
                        <a href="{{ URL::route('about') }}">@lang('routes.about')</a>
                        <a href="{{ URL::route('products') }}">@lang('routes.products')</a>
                        <a href="{{ URL::route('network') }}">@lang('routes.network')</a>
                        <a href="{{ URL::route('gallery') }}">@lang('routes.gallery')</a>
                        <a href="{{ URL::route('contact') }}">@lang('routes.contact')</a>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <h3 class="title has-text-light is-4">Our Address</h3>
                        <p><strong>@lang('contact.address.h'):</strong> @lang('contact.address.m')</p>
                        <p><strong>@lang('contact.phone.h'):</strong> @lang('contact.phone.m')</p>
                        <p><strong>@lang('contact.email.h'):</strong> @lang('contact.email.m')</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-stylish-footer"></div>
    <div class="section">
        <div class="content has-text-centered is-small">
            <p>@lang('misc.copyrights')</p>
        </div>
    </div>
</footer>
