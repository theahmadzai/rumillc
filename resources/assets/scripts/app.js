/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Slider from './components/slider';
import Testimonials from './components/testimonials';
import GoogleMap from './components/gmap';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Subscribe from './components/subscribe';

Vue.component('slider-component', Slider);
Vue.component('testimonials-component', Testimonials);
Vue.component('gmap-component', GoogleMap);
Vue.component('contact-component', Contact);
Vue.component('gallery-component', Gallery);
Vue.component('subscribe-component', Subscribe);


import veeValidate from 'vee-validate';

Vue.use(veeValidate);

new Vue({
  strict: true,
  el    : '#app'
});
