webpackJsonp([1],{

/***/ 14:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(45);


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(17);

window.Vue = __webpack_require__(13);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('testimonials-component', __webpack_require__(39));
Vue.component('slider-component', __webpack_require__(42));

var app = new Vue({
  strict: true,
  el: '#app'
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(5);
window.Popper = __webpack_require__(2).default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(3);

  // require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(6);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(40)
/* template */
var __vue_template__ = __webpack_require__(41)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\scripts\\components\\testimonials.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-633866b2", Component.options)
  } else {
    hotAPI.reload("data-v-633866b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 1,
      prev: 0,
      next: 2,
      size: null,
      testimonials: [{
        image: "https://goo.gl/r2vho4",
        name: "Mike Pence",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, temporibus!"
      }, {
        image: "https://goo.gl/ReWcjN",
        name: "John Doe",
        message: "The secret of life is honesty and fair dealing. If you can fake that, you've got it made."
      }, {
        image: "https://goo.gl/goRgoh",
        name: "Donald J. Trump",
        message: "People really give you a hard time when you wear fake glasses out to a bar!"
      }]
    };
  },
  mounted: function mounted() {
    this.size = this.testimonials.length - 1;
  },
  methods: {
    move: function move() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.prev = this.check(this.prev + pos);
      this.current = this.check(this.current + pos);
      this.next = this.check(this.next + pos);
    },
    check: function check(val) {
      if (val < 0) {
        val = this.size;
      } else if (val > this.size) {
        val = 0;
      }
      return val;
    }
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "testimonials" }, [
    _c("img", {
      staticClass: "next",
      attrs: { src: _vm.testimonials[_vm.prev].image },
      on: {
        click: function($event) {
          _vm.move(-1)
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "testimonial" }, [
      _c("img", {
        attrs: {
          src: _vm.testimonials[_vm.current].image,
          alt: _vm.testimonials[_vm.current].name + "'s Message"
        }
      }),
      _vm._v(" "),
      _c("p", [
        _c("i", { staticClass: "fa fa-quote-left" }),
        _vm._v(
          "\n            " +
            _vm._s(_vm.testimonials[_vm.current].message) +
            "\n            "
        ),
        _c("i", { staticClass: "fa fa-quote-right" })
      ]),
      _vm._v(" "),
      _c("h3", [
        _vm._v("- " + _vm._s(_vm.testimonials[_vm.current].name) + " -")
      ])
    ]),
    _vm._v(" "),
    _c("img", {
      staticClass: "prev",
      attrs: { src: _vm.testimonials[_vm.next].image },
      on: {
        click: function($event) {
          _vm.move(1)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-633866b2", module.exports)
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(43)
/* template */
var __vue_template__ = __webpack_require__(44)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\scripts\\components\\slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-721d5442", Component.options)
  } else {
    hotAPI.reload("data-v-721d5442", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 0,
      size: null,
      loading: false,
      timer: null,
      slides: [{ img: "/img/slider/s1.jpeg", alt: "image" }, { img: "/img/slider/s2.jpeg", alt: "image" }, { img: "/img/slider/s3.jpeg", alt: "image" }, { img: "/img/slider/s4.jpeg", alt: "image" }, { img: "/img/slider/s5.jpeg", alt: "image" }, { img: "/img/slider/s6.jpeg", alt: "image" }, { img: "/img/slider/s7.jpeg", alt: "image" }, { img: "/img/slider/s8.jpeg", alt: "image" }, { img: "/img/slider/s9.jpeg", alt: "image" }, { img: "/img/slider/s10.jpeg", alt: "image" }]
    };
  },
  mounted: function mounted() {
    this.size = this.slides.length - 1;
    this.startRotation();
  },
  methods: {
    move: function move() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var current = this.current + pos;
      if (current < 0) {
        current = this.size;
      } else if (current > this.size) {
        current = 0;
      }
      this.current = current;
      this.loading = false;
    },
    startRotation: function startRotation() {
      this.timer = setInterval(this.move, 5000);
    },
    stopRotation: function stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "slider" },
    [
      _c(
        "div",
        {
          staticClass: "prev",
          on: {
            click: function($event) {
              _vm.move(-1)
            }
          }
        },
        [
          _c("svg", { staticClass: "arrow" }, [
            _c("path", {
              attrs: {
                d: "M 40 50 L 30 60 L 0 30 L 30 0 L 40 10 L 20 30 L 50 60"
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "next",
          on: {
            click: function($event) {
              _vm.move(1)
            }
          }
        },
        [
          _c("svg", { staticClass: "arrow" }, [
            _c("path", {
              attrs: {
                d: "M 0 10 L 10 0 L 40 30 L 10 60 L 0 50 L 20 30 L 0 10"
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "loading"
      }),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide" } }, [
        _c("img", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "slide",
          attrs: {
            src: _vm.slides[_vm.current].img,
            alt: _vm.slides[_vm.current].alt
          },
          on: {
            load: function($event) {
              _vm.loading = !_vm.loading
            },
            mouseover: _vm.stopRotation,
            mouseout: _vm.startRotation
          }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-721d5442", module.exports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[15]);
//# sourceMappingURL=app.js.map