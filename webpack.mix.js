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
  .extract([
    'axios',
    'google-maps',
    'vue',
    'vee-validate',
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
