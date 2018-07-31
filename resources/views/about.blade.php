@extends('layouts.master')

@section('title', 'About')

@section('content')

    <div class="hframe">
        <img src="{{ asset('images/about.jpg') }}" alt="About Rumi Ltd">
        <h1>About Rumi Ltd</h1>
    </div>

    <div class="section container">

        <div class="content" data-aos="zoom-out-up" style="text-align:justify;background:#fff;padding:1rem;font-size:0.9rem;">
            <h2 style="background:#444;padding:1rem; color:#eee; font-size:1rem;">INTRODUCTION</h2>
            <p>You have the opportunity to gain a competitive advantage in one of the fastest growing agricultural markets in Central Asia.</p>
            <p>India, the United Arab Emirates, Europe, and North America are already tapping into Afghanistan’s lucrative agri-business opportunities, and other countries are just waking up to the vast potential of Afghanistan’s agricultural sector.</p>
            <p>Afghanistan’s economy has improved dramatically since 2001. Agriculture ranks as one of the strongest economic sectors, and there is a corresponding demand for investment in this area.</p>
            <p>The government of Afghanistan and its partners are committed to facilitating private-sector growth and making sure that investments are well-protected. In fact, Afghanistan gained accession into the World Bank and is now working for its post accession strategy.</p>
            <p>Afghanistan has a lot to offer to businesspeople in terms of new investment possibilities. Located at the crossroads of Asia, Afghanistan is positioned to benefit from the surging consumer markets of India and China and is primed to increase exports worldwide.</p>
            <p>Afghanistan is home to unique and high quality saffron, dried fruit, fresh fruit, vegetables and nuts along other commodity such as handmade carpets.</p>
            <p>With its commitment to private sector growth, its strategic location, and its abundant agricultural riches, Afghanistan is your silk road to business opportunities.</p>
        </div>

        <div class="accordion" id="accordion" data-aos="slide-down">
            <div class="accordion_item">
                <div class="head"><i class="fa fa-caret-right"></i><span>About Rumi Trading LLC</span></div>
                <div class="body">
                    <div class="content">
                        <p>Rumi Trading LLC (Limited Liability Company) is registered with ACBR (Afghanistan Central Business Registry) of the ministry of commerce & industries of Afghanistan operate as Afghanistan’s leading export management company (EMC) since 2017.</p>
                    </div>
                </div>
            </div>
            <div class="accordion_item">
                <div class="head"><i class="fa fa-caret-right"></i><span>What is an EMC?</span></div>
                <div class="body">
                    <div class="content">
                        <blockquote>All manufacturers without export experience should consider an EMC. Even sophisticated exporters may want to consider using an EMC for selected products for certain markets. Firms looking for new markets in order to accelerate their business growth should consider using an EMC.</blockquote>
                        <p>Nelson, T. Joyner, Former Chairman, the Federation of International Trade Association An EMC is a firm that provides an exclusive outsourced export department for established market-leading manufacturers. We earn the exclusive right to represent our manufacturer’s brands in new markets. Think of us as you would an exclusive regional distributor in your home market.</p>
                    </div>
                </div>
            </div>
            <div class="accordion_item">
                <div class="head"><i class="fa fa-caret-right"></i><span>Why use Rumi?</span></div>
                <div class="body">
                    <div class="content">
                        <p>Instant Access to foreign Markets – we’ve already built a sales and distribution network in our markets. It takes years to find dependable and trustworthy buyers. We’ve negotiated payment terms and credit lines. We have relationships with freight forwarders and transportation companies. We can plug you in right away.</p>
                        <p>Save time, effort & Money – we’ve already spent the time researching and testing foreign market import requirements and processes. We understand nuances of marketing and promoting products in our markets. Last & most important, we have a firm understanding of the unique wholesale and retail market in each of our target markets.</p>
                        <p>Free market research – we travel to our markets consistently, perform surveys, discuss market conditions regularly with our distributors, and receive import data from various local sources.</p>
                        <p>Risk avoidance – we take title to the product as soon as it is loaded on our trucks at your distribution point in Afghanistan. All risks involving payment, currency exchange, customs requirements, transportation, quality control and volatile market conditions is assumed by us.</p>
                        <p>Limited resources – Do you have the time, money and experience to successfully export with your current resources? Can you afford to make mistakes?</p>
                    </div>
                </div>
            </div>
            <div class="accordion_item">
                <div class="head"><i class="fa fa-caret-right"></i><span>What are our requirements in a partner?</span></div>
                <div class="body">
                    <div class="content">
                        <p>Desire – we are looking to partner with manufacturers that have the desire to export their products. Ideally, our partner will not have invested much time and money in educating themselves about the details of exporting and nuances of selling in foreign markets – that’s what we are here for!</p>
                        <p>Quality – Due to our exclusivity, we become invested in your brand and our reputation is tied to your product. We will only represent high quality products that are market leaders in Afghanistan.</p>
                        <p>Afghan Label – Due to the fact that Afghan products are not well labeled and that most of the Afghan products are better recognized as Afghan, Afghan label is the recognition we would like to have.</p>
                        <p>Marketing Support – A common mistake of exporters is the assumption that the products will sell itself based in its status in home country. Our partners must be prepared to appropriately support a product launch in a new market.</p>
                        <p>Long-term vision – Penetrating a new market that is already dominated by vast distribution takes a lot of time. Patience in a new market will yield very profitable long-term results.</p>
                        <p>What products are we selling in international markets?</p>
                        <p>Although Rumi’s vision is to be Afghanistan’s leading export management company and target every high quality product in Afghanistan and take it to international markets but the company has prioritized Afghan dried fruit, nuts & saffron however this does not mean that other products are automatically eliminated from the list. Because Rumi understands that these products are Afghanistan’s priority for export & thus is tough job to do, the company has committed itself to take on this heavy responsibility.</p>
                        <p>Which International Markets are we targeting?</p>
                        <p>Rumi has initially targeted Central Asia, South Asia, Turkey, a number of EU countries, UAE, Belarus & Russia but this target could expand and change as Rumi deploys teams for on-ground market assessments to these and other emerging markets.</p>
                        <blockquote>Join us in sharing high quality products with the world.</blockquote>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns is-multiline" id="swaper">
            <div class="column is-6" data-aos="fade-up-left"><img src="{{ asset('images/zafran.jpeg') }}" alt="product sample 1"></div>
            <div class="column is-6" data-aos="fade-up-right"><img src="{{ asset('images/badam.jpeg') }}" alt="product sample 2 "></div>
            <div class="column is-6" data-aos="fade-down-left"><img src="{{ asset('images/kishmish.jpeg') }}" alt="product sample 3"></div>
            <div class="column is-6" data-aos="fade-down-right"><img src="{{ asset('images/pista.jpeg') }}" alt="product sample 4"></div>
        </div>

        <img data-aos="fade" src="{{ asset('images/sona.png') }}" alt="Sona Mahmody">
        <div class="line"></div>
        <img data-aos="fade" src="{{ asset('images/nisar.png') }}" alt="Nisar Ahmad">

        <gmap-component data-aos="fade-down" style="margin-top:2rem"></gmap-component>
    </div>

    <testimonials-component></testimonials-component>
@endsection
