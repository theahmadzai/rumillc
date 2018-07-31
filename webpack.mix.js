let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/scripts/app.js', 'public/js')
  .sass('resources/assets/styles/app.scss', 'public/css')
  .styles([
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/bulma/css/bulma.min.css',
    'node_modules/aos/dist/aos.css'
  ], 'public/css/vendor.css')
  .copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
  .extract([
    'axios',
    'google-maps',
    'AOS',
    'popper.js',
    'vue',
    'vue-gallery',
    'vue-popperjs'
  ])
  .options({
    extractVueStyles: true
  })
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve('resources/assets/styles')
      }
    },
    devtool: 'source-map'
  })
  .browserSync({
    proxy : 'http://localhost:8000',
    notify: false
  });
