@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <slider-component></slider-component>

    <main class="container section has-background-white">
        <section class="hero is-dark" data-aos="fade-up">
            <div class="hero-body">
                <div class="section has-text-centered">
                    <h1 class="title">
                        Rumi Saffron, Dried Fruits & Nuts Company
                    </h1>
                    <h2 class="subtitle">
                        We love our porducts
                    </h2>
                </div>
            </div>
        </section>
        <div data-aos="flip-right" class="home-card">
            <p>Rumi Saffron, Dried Fruits & Nuts Company ®, Rumi Saffron ™, Rumi Dry Fruits ™ and Mawlana Saffron ™ is trading and exporting dried fruits (Raisins, Dried Apricot, Dried Figs), Nuts (Almonds, Walnut, Pistachio and Pine Nuts) and Saffron including investment in growing Saffron in more than 15 acres of land in Karokh district of Herat Province, the amount of land being cultivated is planned to grow 20 acres each other so by 2020 the total cultivated land is expected to be more than 50 acres. The Company is buying its dried fruits and Nuts directly from growers/farmers connected through Afghan ministry of agriculture. The Company is connected with farmers/land owners that are visited, verified and their fields are checked to ensure safety and quality of dried fruits purchased. Our main buyers are supermarkets and retailers in Kabul and importers from India, Dubai, Turkey and other potential destinations. We are currently distributing directly through supermarkets and retailers in Kabul and selling to importers in destination countries, which we meet in B2B events. Our advantage in Saffron is that we grow it ourselves, we sell it with a very competitive price, high and assured quality and improved packing, for dry fruits we are buying from farmers/growers making it cheaper for us and able to sell it with a cheaper price and improved quality.</p>
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
