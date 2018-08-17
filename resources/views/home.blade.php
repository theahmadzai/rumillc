@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <slider-component></slider-component>

    <main class="container section has-background-white">
        <section class="hero is-dark" data-aos="fade-up">
            <div class="hero-body">
                <div class="section has-text-centered">
                    <h1 class="title">
                        RUMI TRADING LLC
                    </h1>
                    <h2 class="subtitle">
                        We love our porducts
                    </h2>
                </div>
            </div>
        </section>
        <div data-aos="flip-right" class="home-card">
            <p>You have the opportunity to gain a competitive advantage in one of the fastest growing agricultural markets in Central Asia.</p>
            <p>India, the United Arab Emirates, Europe, and North America are already tapping into Afghanistan’s lucrative agri-business opportunities, and other countries are just waking up to the vast potential of Afghanistan’s agricultural sector.</p>
            <p>Afghanistan’s economy has improved dramatically since 2001. Agriculture ranks as one of the strongest economic sectors, and there is a corresponding demand for investment in this area.</p>
            <p>The government of Afghanistan and its partners are committed to facilitating private-sector growth and making sure that investments are well-protected. In fact, Afghanistan gained accession into the World Bank and is now working for its post accession strategy.</p>
            <p>Afghanistan has a lot to offer to businesspeople in terms of new investment possibilities. Located at the crossroads of Asia, Afghanistan is positioned to benefit from the surging consumer markets of India and China and is primed to increase exports worldwide.</p>
            <p>Afghanistan is home to unique and high quality saffron, dried fruit, fresh fruit, vegetables and nuts along other commodity such as handmade carpets.</p>
            <p>With its commitment to private sector growth, its strategic location, and its abundant agricultural riches, Afghanistan is your silk road to business opportunities.</p>
        </div>

        <section class="hero" style="background:linear-gradient(to top, #bc9b40,#f9d97f);" data-aos="fade">
            <div class="hero-body">
                <div class="section has-text-centered">
                    <h1 class="title has-text-white">
                        OUR PRODUCTS
                    </h1>
                </div>
            </div>
            <products-component :limit="3" data-aos="zoom-in-up" class="section"></products-component>
            <div class="class-hero-foot">
                <div class="section has-text-centered">
                    <a data-aos="fade-out" href="/products" class="button is-medium is-white is-rounded" style="color:rgb(135, 84, 0);border:2px solid #fff; box-shadow:0 2px 15px 20px rgba(135, 84, 0,0.1);">More Products</a>
                </div>
            </div>
        </section>

    </main>

    <testimonials-component data-aos="flip-down"></testimonials-component>

    <subscribe-component></subscribe-component>

@endsection
