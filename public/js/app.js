(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./resources/assets/scripts/components/products.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      loading: true,
      selected: null,
      spices: ['Saffron'],
      nuts: ['Almonds', 'Walnut', 'Pistachios', 'Pine Nuts'],
      dried: ['Dried Apricot', 'Raisins', 'Dried Figs'],
      categories: {}
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    select: function select(id) {
      this.selected = id;
    },
    reload: function reload() {
      this.selected = null;
      this.getCategories();
    },
    getCategories: function () {
      var _getCategories = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                _context.next = 4;
                return axios.get('/api/categories');

              case 4:
                response = _context.sent;
                this.categories = response.data;
                this.loading = false;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function getCategories() {
        return _getCategories.apply(this, arguments);
      }

      return getCategories;
    }()
  },
  components: {
    ProductsComponent: _products__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/form.js */ "./resources/assets/scripts/classes/form.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loaded: false,
      processing: false,
      form: new _classes_form_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: null,
        email: null,
        subject: null,
        message: null
      })
    };
  },
  mounted: function mounted() {
    this.loaded = true;
  },
  methods: {
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.processing = true;
                _context.next = 4;
                return this.form.submit('/contact');

              case 4:
                response = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
                _context.prev = 10;
                this.processing = false;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7, 10, 13]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/form.js */ "./resources/assets/scripts/classes/form.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product_id: {
      required: true
    },
    product_name: {
      required: true
    }
  },
  data: function data() {
    return {
      processing: false,
      done: false,
      form: new _classes_form_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        product_id: this.product_id,
        product_name: this.product_name,
        name: null,
        email: null,
        subject: null,
        message: null
      })
    };
  },
  methods: {
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.processing = true;
                _context.next = 4;
                return this.form.submit('/product');

              case 4:
                response = _context.sent;
                this.done = true;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
                _context.prev = 11;
                this.processing = false;
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8, 11, 14]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-gallery */ "./node_modules/vue-gallery/dist/js/vue-gallery.js");
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./resources/assets/scripts/components/pagination.vue");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./resources/assets/scripts/components/image.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      loading: true,
      index: null,
      options: {
        urlProperty: 'url'
      },
      images: [],
      pagination: {},
      offset: 9
    };
  },
  mounted: function mounted() {
    this.loadImages();
  },
  methods: {
    loadImages: function () {
      var _loadImages = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get('/api/images', {
                  params: {
                    type: 'g',
                    offset: this.offset,
                    page: this.pagination.current_page
                  }
                });

              case 4:
                response = _context.sent;
                this.images = response.data.data;
                this.pagination = response.data.meta;
                this.loading = false;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function loadImages() {
        return _loadImages.apply(this, arguments);
      }

      return loadImages;
    }()
  },
  components: {
    VueGalleryComponent: vue_gallery__WEBPACK_IMPORTED_MODULE_1___default.a,
    PaginationComponent: _pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    ImageComponent: _image__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/Google.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_maps__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      KEY: 'AIzaSyDx3yYcoopvhjhEuo4Oxi687cAs6_NYPZI',
      zoom: 15,
      coords: {
        lat: 34.504050,
        lng: 69.246456
      },
      content: 'Rumi Trading LLC'
    };
  },
  mounted: function mounted() {
    var _this = this;

    google_maps__WEBPACK_IMPORTED_MODULE_0___default.a.KEY = this.KEY;
    google_maps__WEBPACK_IMPORTED_MODULE_0___default.a.load(function () {
      var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: _this.zoom,
        center: _this.coords
      });
      var marker = new google.maps.Marker({
        position: _this.coords,
        map: map
      });
      var infoWindow = new google.maps.InfoWindow({
        content: _this.content
      });
      infoWindow.open(map, marker);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/image.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/image.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  },
  data: function data() {
    return {
      loading: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      feedbacks: {}
    };
  },
  mounted: function mounted() {
    this.getFeedbacks();
    this.$parent.$on('newFeedback', this.updateFeedbacks);
  },
  methods: {
    updateFeedbacks: function updateFeedbacks() {
      this.getFeedbacks();
    },
    getFeedbacks: function () {
      var _getFeedbacks = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                _context.next = 4;
                return axios.get('/api/feedbacks', {
                  params: {
                    product: parseInt(this.id)
                  }
                });

              case 4:
                response = _context.sent;
                this.feedbacks = response.data;
                this.loading = false;
                this.$parent.$emit('updateRating', this.feedbacks.map(function (feedback) {
                  return feedback.rating;
                }));
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getFeedbacks() {
        return _getFeedbacks.apply(this, arguments);
      }

      return getFeedbacks;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 9
    }
  },
  computed: {
    pages: function pages() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pages = [];

      while (from <= to) {
        pages.push(from++);
      }

      return pages;
    }
  },
  methods: {
    changePage: function changePage(page) {
      if (page > this.pagination.last_page || page < 1) {
        return;
      }

      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _writefeedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writefeedback */ "./resources/assets/scripts/components/writefeedback.vue");
/* harmony import */ var _listfeedbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listfeedbacks */ "./resources/assets/scripts/components/listfeedbacks.vue");
/* harmony import */ var _ratingfeedbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ratingfeedbacks */ "./resources/assets/scripts/components/ratingfeedbacks.vue");
/* harmony import */ var _contactproduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactproduct */ "./resources/assets/scripts/components/contactproduct.vue");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./resources/assets/scripts/components/image.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      loaded: false,
      showForm: false,
      product: {}
    };
  },
  mounted: function mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      var _getProduct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/products/".concat(parseInt(this.id)));

              case 3:
                response = _context.sent;
                this.product = response.data;
                this.loaded = true;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getProduct() {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }()
  },
  components: {
    WriteFeedbackComponent: _writefeedback__WEBPACK_IMPORTED_MODULE_1__["default"],
    ListFeedbacksComponent: _listfeedbacks__WEBPACK_IMPORTED_MODULE_2__["default"],
    RatingFeedbacksComponent: _ratingfeedbacks__WEBPACK_IMPORTED_MODULE_3__["default"],
    ContactProductComponent: _contactproduct__WEBPACK_IMPORTED_MODULE_4__["default"],
    ImageComponent: _image__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./resources/assets/scripts/components/image.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      rating: null
    };
  },
  mounted: function mounted() {
    this.updateRating();
  },
  methods: {
    updateRating: function () {
      var _updateRating = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/feedbacks', {
                  params: {
                    product: parseInt(this.product.id)
                  }
                });

              case 3:
                response = _context.sent;
                this.rating = this.calculateRating(response.data);
                this.loading = false;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function updateRating() {
        return _updateRating.apply(this, arguments);
      }

      return updateRating;
    }(),
    calculateRating: function calculateRating(feedbacks) {
      if (feedbacks.length === 0) {
        return 5;
      }

      return Math.floor(feedbacks.reduce(function (total, _ref) {
        var rating = _ref.rating;
        return total + rating;
      }, 0) / feedbacks.length);
    }
  },
  components: {
    'image-component': _image__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/products.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/products.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./resources/assets/scripts/components/product.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: {
    category: {
      type: Number
    },
    limit: {
      type: Number
    }
  },
  data: function data() {
    return {
      loading: true,
      products: null
    };
  },
  mounted: function mounted() {
    this.loadProducts();
  },
  methods: {
    refreshProducts: function refreshProducts() {
      this.loadProducts();
    },
    loadProducts: function () {
      var _loadProducts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.loading = true;
                _context.next = 4;
                return axios.get('/api/products', {
                  params: {
                    category: this.category,
                    limit: this.limit
                  }
                });

              case 4:
                response = _context.sent;
                this.products = response.data;
                this.loading = false;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadProducts() {
        return _loadProducts.apply(this, arguments);
      }

      return loadProducts;
    }()
  },
  watch: {
    category: function category() {
      this.refreshProducts();
    }
  },
  components: {
    'product-component': _product__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      loaded: false,
      total: 0,
      average: 0,
      ratings: [0, 0, 0, 0, 0]
    };
  },
  mounted: function mounted() {
    this.$parent.$on('updateRating', this.updateRating);
  },
  methods: {
    updateRating: function updateRating(feedbacks) {
      var _this = this;

      this.total = 0;
      this.average = 0;
      this.ratings = [0, 0, 0, 0, 0];
      feedbacks.forEach(function (feedback) {
        _this.ratings[feedback - 1]++;
        _this.average += feedback;
      });
      this.total = feedbacks.length;
      this.average /= this.total;
      this.average = Math.floor(this.average);
      this.loaded = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      loaded: false,
      loading: true,
      timer: null,
      slides: []
    };
  },
  mounted: function mounted() {
    this.getSlides();
  },
  methods: {
    getSlides: function () {
      var _getSlides = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/images', {
                  params: {
                    type: 's'
                  }
                });

              case 3:
                response = _context.sent;
                this.slides = response.data;
                this.size = this.slides.length - 1;
                this.loaded = true;
                this.startRotation();
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getSlides() {
        return _getSlides.apply(this, arguments);
      }

      return getSlides;
    }(),
    change: function change(id) {
      this.current = id;
      this.loading = true;
    },
    move: function move() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var current = this.current + pos;

      if (current < 0) {
        current = this.size;
      } else if (current > this.size) {
        current = 0;
      }

      this.current = current; // TODO check if image is cached then don't set loading to true
      // this.loading = true;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      loaded: false,
      testimonials: []
    };
  },
  mounted: function mounted() {
    this.getTestimonials();
  },
  methods: {
    getTestimonials: function () {
      var _getTestimonials = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/testimonials');

              case 3:
                response = _context.sent;
                this.testimonials = response.data;
                this.size = this.testimonials.length - 1;
                this.loaded = true;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function getTestimonials() {
        return _getTestimonials.apply(this, arguments);
      }

      return getTestimonials;
    }(),
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/form.js */ "./resources/assets/scripts/classes/form.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      processing: false,
      sentFeedback: false,
      form: new _classes_form_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        product: this.id,
        rating: null,
        name: null,
        title: null,
        message: null
      })
    };
  },
  mounted: function mounted() {
    this.loading = false;
  },
  methods: {
    changeRating: function changeRating(event) {
      if (event.target.tagName == 'DIV') return;
      var stars = event.target.parentNode.children;
      Array.from(stars).forEach(function (star) {
        star.classList.remove('checked');
      });
      var rating = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var star = _step.value;
          star.classList.add('checked');
          rating++;

          if (star === event.target) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.form.rating = rating;
      this.form.errors.clear('rating');
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.processing = true;
                _context.next = 4;
                return this.form.submit('/api/feedbacks');

              case 4:
                response = _context.sent;
                this.processing = false;
                this.sentFeedback = true;
                this.$parent.$emit('newFeedback');
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                this.processing = false;
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/blueimp-gallery/css/blueimp-gallery.min.css":
/*!******************************************************************!*\
  !*** ./node_modules/blueimp-gallery/css/blueimp-gallery.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./blueimp-gallery.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/blueimp-gallery/css/blueimp-gallery.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/error.png":
/*!****************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/error.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/error.png?90901890fbf9b379405f47a23313e63b";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/error.svg":
/*!****************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/error.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/error.svg?19ee6b7e6642d75d6144b0c8209c93d6";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/loading.gif":
/*!******************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/loading.gif ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/loading.gif?05992d3434d3589b38a3a5431842d38f";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/play-pause.png":
/*!*********************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/play-pause.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/play-pause.png?a012413b54276e2eefd145c7aec60f93";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/play-pause.svg":
/*!*********************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/play-pause.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/play-pause.svg?21dfa3149b274acb9c1819d342a6a169";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/video-play.png":
/*!*********************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/video-play.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/video-play.png?288308b2037f409d293916c7a3913f20";

/***/ }),

/***/ "./node_modules/blueimp-gallery/img/video-play.svg":
/*!*********************************************************!*\
  !*** ./node_modules/blueimp-gallery/img/video-play.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/video-play.svg?9b737958b1644b46b23904e53afcac50";

/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-fullscreen.js":
/*!***********************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-fullscreen.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery Fullscreen JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./node_modules/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./node_modules/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(function ($, Gallery) {
  'use strict'

  $.extend(Gallery.prototype.options, {
    // Defines if the gallery should open in fullscreen mode:
    fullScreen: false
  })

  var initialize = Gallery.prototype.initialize
  var close = Gallery.prototype.close

  $.extend(Gallery.prototype, {
    getFullScreenElement: function () {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
    },

    requestFullScreen: function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },

    exitFullScreen: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },

    initialize: function () {
      initialize.call(this)
      if (this.options.fullScreen && !this.getFullScreenElement()) {
        this.requestFullScreen(this.container[0])
      }
    },

    close: function () {
      if (this.getFullScreenElement() === this.container[0]) {
        this.exitFullScreen()
      }
      close.call(this)
    }
  })

  return Gallery
})


/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-video.js":
/*!******************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-video.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./node_modules/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./node_modules/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(function ($, Gallery) {
  'use strict'

  $.extend(Gallery.prototype.options, {
    // The class for video content elements:
    videoContentClass: 'video-content',
    // The class for video when it is loading:
    videoLoadingClass: 'video-loading',
    // The class for video when it is playing:
    videoPlayingClass: 'video-playing',
    // The list object property (or data attribute) for the video poster URL:
    videoPosterProperty: 'poster',
    // The list object property (or data attribute) for the video sources array:
    videoSourcesProperty: 'sources'
  })

  var handleSlide = Gallery.prototype.handleSlide

  $.extend(Gallery.prototype, {
    handleSlide: function (index) {
      handleSlide.call(this, index)
      if (this.playingVideo) {
        this.playingVideo.pause()
      }
    },

    videoFactory: function (obj, callback, videoInterface) {
      var that = this
      var options = this.options
      var videoContainerNode = this.elementPrototype.cloneNode(false)
      var videoContainer = $(videoContainerNode)
      var errorArgs = [
        {
          type: 'error',
          target: videoContainerNode
        }
      ]
      var video = videoInterface || document.createElement('video')
      var url = this.getItemProperty(obj, options.urlProperty)
      var type = this.getItemProperty(obj, options.typeProperty)
      var title = this.getItemProperty(obj, options.titleProperty)
      var altText =
        this.getItemProperty(obj, this.options.altTextProperty) || title
      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty)
      var posterImage
      var sources = this.getItemProperty(obj, options.videoSourcesProperty)
      var source
      var playMediaControl
      var isLoading
      var hasControls
      videoContainer.addClass(options.videoContentClass)
      if (title) {
        videoContainerNode.title = title
      }
      if (video.canPlayType) {
        if (url && type && video.canPlayType(type)) {
          video.src = url
        } else if (sources) {
          while (sources.length) {
            source = sources.shift()
            url = this.getItemProperty(source, options.urlProperty)
            type = this.getItemProperty(source, options.typeProperty)
            if (url && type && video.canPlayType(type)) {
              video.src = url
              break
            }
          }
        }
      }
      if (posterUrl) {
        video.poster = posterUrl
        posterImage = this.imagePrototype.cloneNode(false)
        $(posterImage).addClass(options.toggleClass)
        posterImage.src = posterUrl
        posterImage.draggable = false
        posterImage.alt = altText
        videoContainerNode.appendChild(posterImage)
      }
      playMediaControl = document.createElement('a')
      playMediaControl.setAttribute('target', '_blank')
      if (!videoInterface) {
        playMediaControl.setAttribute('download', title)
      }
      playMediaControl.href = url
      if (video.src) {
        video.controls = true
        ;(videoInterface || $(video))
          .on('error', function () {
            that.setTimeout(callback, errorArgs)
          })
          .on('pause', function () {
            if (video.seeking) return
            isLoading = false
            videoContainer
              .removeClass(that.options.videoLoadingClass)
              .removeClass(that.options.videoPlayingClass)
            if (hasControls) {
              that.container.addClass(that.options.controlsClass)
            }
            delete that.playingVideo
            if (that.interval) {
              that.play()
            }
          })
          .on('playing', function () {
            isLoading = false
            videoContainer
              .removeClass(that.options.videoLoadingClass)
              .addClass(that.options.videoPlayingClass)
            if (that.container.hasClass(that.options.controlsClass)) {
              hasControls = true
              that.container.removeClass(that.options.controlsClass)
            } else {
              hasControls = false
            }
          })
          .on('play', function () {
            window.clearTimeout(that.timeout)
            isLoading = true
            videoContainer.addClass(that.options.videoLoadingClass)
            that.playingVideo = video
          })
        $(playMediaControl).on('click', function (event) {
          that.preventDefault(event)
          if (isLoading) {
            video.pause()
          } else {
            video.play()
          }
        })
        videoContainerNode.appendChild(
          (videoInterface && videoInterface.element) || video
        )
      }
      videoContainerNode.appendChild(playMediaControl)
      this.setTimeout(callback, [
        {
          type: 'load',
          target: videoContainerNode
        }
      ])
      return videoContainerNode
    }
  })

  return Gallery
})


/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery-youtube.js":
/*!********************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery-youtube.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery YouTube Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, YT */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./node_modules/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery-video */ "./node_modules/blueimp-gallery/js/blueimp-gallery-video.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(function ($, Gallery) {
  'use strict'

  if (!window.postMessage) {
    return Gallery
  }

  $.extend(Gallery.prototype.options, {
    // The list object property (or data attribute) with the YouTube video id:
    youTubeVideoIdProperty: 'youtube',
    // Optional object with parameters passed to the YouTube video player:
    // https://developers.google.com/youtube/player_parameters
    youTubePlayerVars: {
      wmode: 'transparent'
    },
    // Require a click on the native YouTube player for the initial playback:
    youTubeClickToPlay: true
  })

  var textFactory =
    Gallery.prototype.textFactory || Gallery.prototype.imageFactory
  var YouTubePlayer = function (videoId, playerVars, clickToPlay) {
    this.videoId = videoId
    this.playerVars = playerVars
    this.clickToPlay = clickToPlay
    this.element = document.createElement('div')
    this.listeners = {}
  }

  $.extend(YouTubePlayer.prototype, {
    canPlayType: function () {
      return true
    },

    on: function (type, func) {
      this.listeners[type] = func
      return this
    },

    loadAPI: function () {
      var that = this
      var onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady
      var apiUrl = '//www.youtube.com/iframe_api'
      var scriptTags = document.getElementsByTagName('script')
      var i = scriptTags.length
      var scriptTag
      window.onYouTubeIframeAPIReady = function () {
        if (onYouTubeIframeAPIReady) {
          onYouTubeIframeAPIReady.apply(this)
        }
        if (that.playOnReady) {
          that.play()
        }
      }
      while (i) {
        i -= 1
        if (scriptTags[i].src === apiUrl) {
          return
        }
      }
      scriptTag = document.createElement('script')
      scriptTag.src = apiUrl
      scriptTags[0].parentNode.insertBefore(scriptTag, scriptTags[0])
    },

    onReady: function () {
      this.ready = true
      if (this.playOnReady) {
        this.play()
      }
    },

    onPlaying: function () {
      if (this.playStatus < 2) {
        this.listeners.playing()
        this.playStatus = 2
      }
    },

    onPause: function () {
      Gallery.prototype.setTimeout.call(this, this.checkSeek, null, 2000)
    },

    checkSeek: function () {
      if (
        this.stateChange === YT.PlayerState.PAUSED ||
        this.stateChange === YT.PlayerState.ENDED
      ) {
        // check if current state change is actually paused
        this.listeners.pause()
        delete this.playStatus
      }
    },

    onStateChange: function (event) {
      switch (event.data) {
        case YT.PlayerState.PLAYING:
          this.hasPlayed = true
          this.onPlaying()
          break
        case YT.PlayerState.PAUSED:
        case YT.PlayerState.ENDED:
          this.onPause()
          break
      }
      // Save most recent state change to this.stateChange
      this.stateChange = event.data
    },

    onError: function (event) {
      this.listeners.error(event)
    },

    play: function () {
      var that = this
      if (!this.playStatus) {
        this.listeners.play()
        this.playStatus = 1
      }
      if (this.ready) {
        if (
          !this.hasPlayed &&
          (this.clickToPlay ||
            (window.navigator &&
              /iP(hone|od|ad)/.test(window.navigator.platform)))
        ) {
          // Manually trigger the playing callback if clickToPlay
          // is enabled and to workaround a limitation in iOS,
          // which requires synchronous user interaction to start
          // the video playback:
          this.onPlaying()
        } else {
          this.player.playVideo()
        }
      } else {
        this.playOnReady = true
        if (!(window.YT && YT.Player)) {
          this.loadAPI()
        } else if (!this.player) {
          this.player = new YT.Player(this.element, {
            videoId: this.videoId,
            playerVars: this.playerVars,
            events: {
              onReady: function () {
                that.onReady()
              },
              onStateChange: function (event) {
                that.onStateChange(event)
              },
              onError: function (event) {
                that.onError(event)
              }
            }
          })
        }
      }
    },

    pause: function () {
      if (this.ready) {
        this.player.pauseVideo()
      } else if (this.playStatus) {
        delete this.playOnReady
        this.listeners.pause()
        delete this.playStatus
      }
    }
  })

  $.extend(Gallery.prototype, {
    YouTubePlayer: YouTubePlayer,

    textFactory: function (obj, callback) {
      var options = this.options
      var videoId = this.getItemProperty(obj, options.youTubeVideoIdProperty)
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//www.youtube.com/watch?v=' + videoId
        }
        if (
          this.getItemProperty(obj, options.videoPosterProperty) === undefined
        ) {
          obj[options.videoPosterProperty] =
            '//img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'
        }
        return this.videoFactory(
          obj,
          callback,
          new YouTubePlayer(
            videoId,
            options.youTubePlayerVars,
            options.youTubeClickToPlay
          )
        )
      }
      return textFactory.call(this, obj, callback)
    }
  })

  return Gallery
})


/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery.js":
/*!************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, DocumentTouch */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./node_modules/blueimp-gallery/js/blueimp-helper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(function ($) {
  'use strict'

  function Gallery (list, options) {
    if (document.body.style.maxHeight === undefined) {
      // document.body.style.maxHeight is undefined on IE6 and lower
      return null
    }
    if (!this || this.options !== Gallery.prototype.options) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Gallery(list, options)
    }
    if (!list || !list.length) {
      this.console.log(
        'blueimp Gallery: No or empty list provided as first argument.',
        list
      )
      return
    }
    this.list = list
    this.num = list.length
    this.initOptions(options)
    this.initialize()
  }

  $.extend(Gallery.prototype, {
    options: {
      // The Id, element or querySelector of the gallery widget:
      container: '#blueimp-gallery',
      // The tag name, Id, element or querySelector of the slides container:
      slidesContainer: 'div',
      // The tag name, Id, element or querySelector of the title element:
      titleElement: 'h3',
      // The class to add when the gallery is visible:
      displayClass: 'blueimp-gallery-display',
      // The class to add when the gallery controls are visible:
      controlsClass: 'blueimp-gallery-controls',
      // The class to add when the gallery only displays one element:
      singleClass: 'blueimp-gallery-single',
      // The class to add when the left edge has been reached:
      leftEdgeClass: 'blueimp-gallery-left',
      // The class to add when the right edge has been reached:
      rightEdgeClass: 'blueimp-gallery-right',
      // The class to add when the automatic slideshow is active:
      playingClass: 'blueimp-gallery-playing',
      // The class for all slides:
      slideClass: 'slide',
      // The slide class for loading elements:
      slideLoadingClass: 'slide-loading',
      // The slide class for elements that failed to load:
      slideErrorClass: 'slide-error',
      // The class for the content element loaded into each slide:
      slideContentClass: 'slide-content',
      // The class for the "toggle" control:
      toggleClass: 'toggle',
      // The class for the "prev" control:
      prevClass: 'prev',
      // The class for the "next" control:
      nextClass: 'next',
      // The class for the "close" control:
      closeClass: 'close',
      // The class for the "play-pause" toggle control:
      playPauseClass: 'play-pause',
      // The list object property (or data attribute) with the object type:
      typeProperty: 'type',
      // The list object property (or data attribute) with the object title:
      titleProperty: 'title',
      // The list object property (or data attribute) with the object alt text:
      altTextProperty: 'alt',
      // The list object property (or data attribute) with the object URL:
      urlProperty: 'href',
      // The list object property (or data attribute) with the object srcset URL(s):
      srcsetProperty: 'urlset',
      // The gallery listens for transitionend events before triggering the
      // opened and closed events, unless the following option is set to false:
      displayTransition: true,
      // Defines if the gallery slides are cleared from the gallery modal,
      // or reused for the next gallery initialization:
      clearSlides: true,
      // Defines if images should be stretched to fill the available space,
      // while maintaining their aspect ratio (will only be enabled for browsers
      // supporting background-size="contain", which excludes IE < 9).
      // Set to "cover", to make images cover all available space (requires
      // support for background-size="cover", which excludes IE < 9):
      stretchImages: false,
      // Toggle the controls on pressing the Return key:
      toggleControlsOnReturn: true,
      // Toggle the controls on slide click:
      toggleControlsOnSlideClick: true,
      // Toggle the automatic slideshow interval on pressing the Space key:
      toggleSlideshowOnSpace: true,
      // Navigate the gallery by pressing left and right on the keyboard:
      enableKeyboardNavigation: true,
      // Close the gallery on pressing the Esc key:
      closeOnEscape: true,
      // Close the gallery when clicking on an empty slide area:
      closeOnSlideClick: true,
      // Close the gallery by swiping up or down:
      closeOnSwipeUpOrDown: true,
      // Emulate touch events on mouse-pointer devices such as desktop browsers:
      emulateTouchEvents: true,
      // Stop touch events from bubbling up to ancestor elements of the Gallery:
      stopTouchEventsPropagation: false,
      // Hide the page scrollbars:
      hidePageScrollbars: true,
      // Stops any touches on the container from scrolling the page:
      disableScroll: true,
      // Carousel mode (shortcut for carousel specific options):
      carousel: false,
      // Allow continuous navigation, moving from last to first
      // and from first to last slide:
      continuous: true,
      // Remove elements outside of the preload range from the DOM:
      unloadElements: true,
      // Start with the automatic slideshow:
      startSlideshow: false,
      // Delay in milliseconds between slides for the automatic slideshow:
      slideshowInterval: 5000,
      // The starting index as integer.
      // Can also be an object of the given list,
      // or an equal object with the same url property:
      index: 0,
      // The number of elements to load around the current index:
      preloadRange: 2,
      // The transition speed between slide changes in milliseconds:
      transitionSpeed: 400,
      // The transition speed for automatic slide changes, set to an integer
      // greater 0 to override the default transition speed:
      slideshowTransitionSpeed: undefined,
      // The event object for which the default action will be canceled
      // on Gallery initialization (e.g. the click event to open the Gallery):
      event: undefined,
      // Callback function executed when the Gallery is initialized.
      // Is called with the gallery instance as "this" object:
      onopen: undefined,
      // Callback function executed when the Gallery has been initialized
      // and the initialization transition has been completed.
      // Is called with the gallery instance as "this" object:
      onopened: undefined,
      // Callback function executed on slide change.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslide: undefined,
      // Callback function executed after the slide change transition.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslideend: undefined,
      // Callback function executed on slide content load.
      // Is called with the gallery instance as "this" object and the
      // slide index and slide element as arguments:
      onslidecomplete: undefined,
      // Callback function executed when the Gallery is about to be closed.
      // Is called with the gallery instance as "this" object:
      onclose: undefined,
      // Callback function executed when the Gallery has been closed
      // and the closing transition has been completed.
      // Is called with the gallery instance as "this" object:
      onclosed: undefined
    },

    carouselOptions: {
      hidePageScrollbars: false,
      toggleControlsOnReturn: false,
      toggleSlideshowOnSpace: false,
      enableKeyboardNavigation: false,
      closeOnEscape: false,
      closeOnSlideClick: false,
      closeOnSwipeUpOrDown: false,
      disableScroll: false,
      startSlideshow: true
    },

    console:
      window.console && typeof window.console.log === 'function'
        ? window.console
        : { log: function () {} },

    // Detect touch, transition, transform and background-size support:
    support: (function (element) {
      var support = {
        touch:
          window.ontouchstart !== undefined ||
          (window.DocumentTouch && document instanceof DocumentTouch)
      }
      var transitions = {
        webkitTransition: {
          end: 'webkitTransitionEnd',
          prefix: '-webkit-'
        },
        MozTransition: {
          end: 'transitionend',
          prefix: '-moz-'
        },
        OTransition: {
          end: 'otransitionend',
          prefix: '-o-'
        },
        transition: {
          end: 'transitionend',
          prefix: ''
        }
      }
      var prop
      for (prop in transitions) {
        if (
          transitions.hasOwnProperty(prop) &&
          element.style[prop] !== undefined
        ) {
          support.transition = transitions[prop]
          support.transition.name = prop
          break
        }
      }
      function elementTests () {
        var transition = support.transition
        var prop
        var translateZ
        document.body.appendChild(element)
        if (transition) {
          prop = transition.name.slice(0, -9) + 'ransform'
          if (element.style[prop] !== undefined) {
            element.style[prop] = 'translateZ(0)'
            translateZ = window
              .getComputedStyle(element)
              .getPropertyValue(transition.prefix + 'transform')
            support.transform = {
              prefix: transition.prefix,
              name: prop,
              translate: true,
              translateZ: !!translateZ && translateZ !== 'none'
            }
          }
        }
        if (element.style.backgroundSize !== undefined) {
          support.backgroundSize = {}
          element.style.backgroundSize = 'contain'
          support.backgroundSize.contain =
            window
              .getComputedStyle(element)
              .getPropertyValue('background-size') === 'contain'
          element.style.backgroundSize = 'cover'
          support.backgroundSize.cover =
            window
              .getComputedStyle(element)
              .getPropertyValue('background-size') === 'cover'
        }
        document.body.removeChild(element)
      }
      if (document.body) {
        elementTests()
      } else {
        $(document).on('DOMContentLoaded', elementTests)
      }
      return support
      // Test element, has to be standard HTML and must not be hidden
      // for the CSS3 tests using window.getComputedStyle to be applicable:
    })(document.createElement('div')),

    requestAnimationFrame:
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame,

    cancelAnimationFrame:
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame,

    initialize: function () {
      this.initStartIndex()
      if (this.initWidget() === false) {
        return false
      }
      this.initEventListeners()
      // Load the slide at the given index:
      this.onslide(this.index)
      // Manually trigger the slideend event for the initial slide:
      this.ontransitionend()
      // Start the automatic slideshow if applicable:
      if (this.options.startSlideshow) {
        this.play()
      }
    },

    slide: function (to, speed) {
      window.clearTimeout(this.timeout)
      var index = this.index
      var direction
      var naturalDirection
      var diff
      if (index === to || this.num === 1) {
        return
      }
      if (!speed) {
        speed = this.options.transitionSpeed
      }
      if (this.support.transform) {
        if (!this.options.continuous) {
          to = this.circle(to)
        }
        // 1: backward, -1: forward:
        direction = Math.abs(index - to) / (index - to)
        // Get the actual position of the slide:
        if (this.options.continuous) {
          naturalDirection = direction
          direction = -this.positions[this.circle(to)] / this.slideWidth
          // If going forward but to < index, use to = slides.length + to
          // If going backward but to > index, use to = -slides.length + to
          if (direction !== naturalDirection) {
            to = -direction * this.num + to
          }
        }
        diff = Math.abs(index - to) - 1
        // Move all the slides between index and to in the right direction:
        while (diff) {
          diff -= 1
          this.move(
            this.circle((to > index ? to : index) - diff - 1),
            this.slideWidth * direction,
            0
          )
        }
        to = this.circle(to)
        this.move(index, this.slideWidth * direction, speed)
        this.move(to, 0, speed)
        if (this.options.continuous) {
          this.move(
            this.circle(to - direction),
            -(this.slideWidth * direction),
            0
          )
        }
      } else {
        to = this.circle(to)
        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
      }
      this.onslide(to)
    },

    getIndex: function () {
      return this.index
    },

    getNumber: function () {
      return this.num
    },

    prev: function () {
      if (this.options.continuous || this.index) {
        this.slide(this.index - 1)
      }
    },

    next: function () {
      if (this.options.continuous || this.index < this.num - 1) {
        this.slide(this.index + 1)
      }
    },

    play: function (time) {
      var that = this
      window.clearTimeout(this.timeout)
      this.interval = time || this.options.slideshowInterval
      if (this.elements[this.index] > 1) {
        this.timeout = this.setTimeout(
          (!this.requestAnimationFrame && this.slide) ||
            function (to, speed) {
              that.animationFrameId = that.requestAnimationFrame.call(
                window,
                function () {
                  that.slide(to, speed)
                }
              )
            },
          [this.index + 1, this.options.slideshowTransitionSpeed],
          this.interval
        )
      }
      this.container.addClass(this.options.playingClass)
    },

    pause: function () {
      window.clearTimeout(this.timeout)
      this.interval = null
      if (this.cancelAnimationFrame) {
        this.cancelAnimationFrame.call(window, this.animationFrameId)
        this.animationFrameId = null
      }
      this.container.removeClass(this.options.playingClass)
    },

    add: function (list) {
      var i
      if (!list.concat) {
        // Make a real array out of the list to add:
        list = Array.prototype.slice.call(list)
      }
      if (!this.list.concat) {
        // Make a real array out of the Gallery list:
        this.list = Array.prototype.slice.call(this.list)
      }
      this.list = this.list.concat(list)
      this.num = this.list.length
      if (this.num > 2 && this.options.continuous === null) {
        this.options.continuous = true
        this.container.removeClass(this.options.leftEdgeClass)
      }
      this.container
        .removeClass(this.options.rightEdgeClass)
        .removeClass(this.options.singleClass)
      for (i = this.num - list.length; i < this.num; i += 1) {
        this.addSlide(i)
        this.positionSlide(i)
      }
      this.positions.length = this.num
      this.initSlides(true)
    },

    resetSlides: function () {
      this.slidesContainer.empty()
      this.unloadAllSlides()
      this.slides = []
    },

    handleClose: function () {
      var options = this.options
      this.destroyEventListeners()
      // Cancel the slideshow:
      this.pause()
      this.container[0].style.display = 'none'
      this.container
        .removeClass(options.displayClass)
        .removeClass(options.singleClass)
        .removeClass(options.leftEdgeClass)
        .removeClass(options.rightEdgeClass)
      if (options.hidePageScrollbars) {
        document.body.style.overflow = this.bodyOverflowStyle
      }
      if (this.options.clearSlides) {
        this.resetSlides()
      }
      if (this.options.onclosed) {
        this.options.onclosed.call(this)
      }
    },

    close: function () {
      var that = this
      function closeHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, closeHandler)
          that.handleClose()
        }
      }
      if (this.options.onclose) {
        this.options.onclose.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, closeHandler)
        this.container.removeClass(this.options.displayClass)
      } else {
        this.handleClose()
      }
    },

    circle: function (index) {
      // Always return a number inside of the slides index range:
      return (this.num + index % this.num) % this.num
    },

    move: function (index, dist, speed) {
      this.translateX(index, dist, speed)
      this.positions[index] = dist
    },

    translate: function (index, x, y, speed) {
      var style = this.slides[index].style
      var transition = this.support.transition
      var transform = this.support.transform
      style[transition.name + 'Duration'] = speed + 'ms'
      style[transform.name] =
        'translate(' +
        x +
        'px, ' +
        y +
        'px)' +
        (transform.translateZ ? ' translateZ(0)' : '')
    },

    translateX: function (index, x, speed) {
      this.translate(index, x, 0, speed)
    },

    translateY: function (index, y, speed) {
      this.translate(index, 0, y, speed)
    },

    animate: function (from, to, speed) {
      if (!speed) {
        this.slidesContainer[0].style.left = to + 'px'
        return
      }
      var that = this
      var start = new Date().getTime()
      var timer = window.setInterval(function () {
        var timeElap = new Date().getTime() - start
        if (timeElap > speed) {
          that.slidesContainer[0].style.left = to + 'px'
          that.ontransitionend()
          window.clearInterval(timer)
          return
        }
        that.slidesContainer[0].style.left =
          (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px'
      }, 4)
    },

    preventDefault: function (event) {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    },

    stopPropagation: function (event) {
      if (event.stopPropagation) {
        event.stopPropagation()
      } else {
        event.cancelBubble = true
      }
    },

    onresize: function () {
      this.initSlides(true)
    },

    onmousedown: function (event) {
      // Trigger on clicks of the left mouse button only
      // and exclude video & audio elements:
      if (
        event.which &&
        event.which === 1 &&
        event.target.nodeName !== 'VIDEO' &&
        event.target.nodeName !== 'AUDIO'
      ) {
        // Preventing the default mousedown action is required
        // to make touch emulation work with Firefox:
        event.preventDefault()
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchstart(event)
      }
    },

    onmousemove: function (event) {
      if (this.touchStart) {
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchmove(event)
      }
    },

    onmouseup: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    onmouseout: function (event) {
      if (this.touchStart) {
        var target = event.target
        var related = event.relatedTarget
        if (!related || (related !== target && !$.contains(target, related))) {
          this.onmouseup(event)
        }
      }
    },

    ontouchstart: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      this.touchStart = {
        // Remember the initial touch coordinates:
        x: touches.pageX,
        y: touches.pageY,
        // Store the time to determine touch duration:
        time: Date.now()
      }
      // Helper variable to detect scroll movement:
      this.isScrolling = undefined
      // Reset delta values:
      this.touchDelta = {}
    },

    ontouchmove: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      var scale = (event.originalEvent || event).scale
      var index = this.index
      var touchDeltaX
      var indices
      // Ensure this is a one touch swipe and not, e.g. a pinch:
      if (touches.length > 1 || (scale && scale !== 1)) {
        return
      }
      if (this.options.disableScroll) {
        event.preventDefault()
      }
      // Measure change in x and y coordinates:
      this.touchDelta = {
        x: touches.pageX - this.touchStart.x,
        y: touches.pageY - this.touchStart.y
      }
      touchDeltaX = this.touchDelta.x
      // Detect if this is a vertical scroll movement (run only once per touch):
      if (this.isScrolling === undefined) {
        this.isScrolling =
          this.isScrolling ||
          Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
      }
      if (!this.isScrolling) {
        // Always prevent horizontal scroll:
        event.preventDefault()
        // Stop the slideshow:
        window.clearTimeout(this.timeout)
        if (this.options.continuous) {
          indices = [this.circle(index + 1), index, this.circle(index - 1)]
        } else {
          // Increase resistance if first slide and sliding left
          // or last slide and sliding right:
          this.touchDelta.x = touchDeltaX =
            touchDeltaX /
            ((!index && touchDeltaX > 0) ||
            (index === this.num - 1 && touchDeltaX < 0)
              ? Math.abs(touchDeltaX) / this.slideWidth + 1
              : 1)
          indices = [index]
          if (index) {
            indices.push(index - 1)
          }
          if (index < this.num - 1) {
            indices.unshift(index + 1)
          }
        }
        while (indices.length) {
          index = indices.pop()
          this.translateX(index, touchDeltaX + this.positions[index], 0)
        }
      } else {
        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
      }
    },

    ontouchend: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      var index = this.index
      var speed = this.options.transitionSpeed
      var slideWidth = this.slideWidth
      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
      // Determine if slide attempt triggers next/prev slide:
      var isValidSlide =
        (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
        Math.abs(this.touchDelta.x) > slideWidth / 2
      // Determine if slide attempt is past start or end:
      var isPastBounds =
        (!index && this.touchDelta.x > 0) ||
        (index === this.num - 1 && this.touchDelta.x < 0)
      var isValidClose =
        !isValidSlide &&
        this.options.closeOnSwipeUpOrDown &&
        ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
          Math.abs(this.touchDelta.y) > this.slideHeight / 2)
      var direction
      var indexForward
      var indexBackward
      var distanceForward
      var distanceBackward
      if (this.options.continuous) {
        isPastBounds = false
      }
      // Determine direction of swipe (true: right, false: left):
      direction = this.touchDelta.x < 0 ? -1 : 1
      if (!this.isScrolling) {
        if (isValidSlide && !isPastBounds) {
          indexForward = index + direction
          indexBackward = index - direction
          distanceForward = slideWidth * direction
          distanceBackward = -slideWidth * direction
          if (this.options.continuous) {
            this.move(this.circle(indexForward), distanceForward, 0)
            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
          } else if (indexForward >= 0 && indexForward < this.num) {
            this.move(indexForward, distanceForward, 0)
          }
          this.move(index, this.positions[index] + distanceForward, speed)
          this.move(
            this.circle(indexBackward),
            this.positions[this.circle(indexBackward)] + distanceForward,
            speed
          )
          index = this.circle(indexBackward)
          this.onslide(index)
        } else {
          // Move back into position
          if (this.options.continuous) {
            this.move(this.circle(index - 1), -slideWidth, speed)
            this.move(index, 0, speed)
            this.move(this.circle(index + 1), slideWidth, speed)
          } else {
            if (index) {
              this.move(index - 1, -slideWidth, speed)
            }
            this.move(index, 0, speed)
            if (index < this.num - 1) {
              this.move(index + 1, slideWidth, speed)
            }
          }
        }
      } else {
        if (isValidClose) {
          this.close()
        } else {
          // Move back into position
          this.translateY(index, 0, speed)
        }
      }
    },

    ontouchcancel: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    ontransitionend: function (event) {
      var slide = this.slides[this.index]
      if (!event || slide === event.target) {
        if (this.interval) {
          this.play()
        }
        this.setTimeout(this.options.onslideend, [this.index, slide])
      }
    },

    oncomplete: function (event) {
      var target = event.target || event.srcElement
      var parent = target && target.parentNode
      var index
      if (!target || !parent) {
        return
      }
      index = this.getNodeIndex(parent)
      $(parent).removeClass(this.options.slideLoadingClass)
      if (event.type === 'error') {
        $(parent).addClass(this.options.slideErrorClass)
        this.elements[index] = 3 // Fail
      } else {
        this.elements[index] = 2 // Done
      }
      // Fix for IE7's lack of support for percentage max-height:
      if (target.clientHeight > this.container[0].clientHeight) {
        target.style.maxHeight = this.container[0].clientHeight
      }
      if (this.interval && this.slides[this.index] === parent) {
        this.play()
      }
      this.setTimeout(this.options.onslidecomplete, [index, parent])
    },

    onload: function (event) {
      this.oncomplete(event)
    },

    onerror: function (event) {
      this.oncomplete(event)
    },

    onkeydown: function (event) {
      switch (event.which || event.keyCode) {
        case 13: // Return
          if (this.options.toggleControlsOnReturn) {
            this.preventDefault(event)
            this.toggleControls()
          }
          break
        case 27: // Esc
          if (this.options.closeOnEscape) {
            this.close()
            // prevent Esc from closing other things
            event.stopImmediatePropagation()
          }
          break
        case 32: // Space
          if (this.options.toggleSlideshowOnSpace) {
            this.preventDefault(event)
            this.toggleSlideshow()
          }
          break
        case 37: // Left
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.prev()
          }
          break
        case 39: // Right
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.next()
          }
          break
      }
    },

    handleClick: function (event) {
      var options = this.options
      var target = event.target || event.srcElement
      var parent = target.parentNode
      function isTarget (className) {
        return $(target).hasClass(className) || $(parent).hasClass(className)
      }
      if (isTarget(options.toggleClass)) {
        // Click on "toggle" control
        this.preventDefault(event)
        this.toggleControls()
      } else if (isTarget(options.prevClass)) {
        // Click on "prev" control
        this.preventDefault(event)
        this.prev()
      } else if (isTarget(options.nextClass)) {
        // Click on "next" control
        this.preventDefault(event)
        this.next()
      } else if (isTarget(options.closeClass)) {
        // Click on "close" control
        this.preventDefault(event)
        this.close()
      } else if (isTarget(options.playPauseClass)) {
        // Click on "play-pause" control
        this.preventDefault(event)
        this.toggleSlideshow()
      } else if (parent === this.slidesContainer[0]) {
        // Click on slide background
        if (options.closeOnSlideClick) {
          this.preventDefault(event)
          this.close()
        } else if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      } else if (
        parent.parentNode &&
        parent.parentNode === this.slidesContainer[0]
      ) {
        // Click on displayed element
        if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      }
    },

    onclick: function (event) {
      if (
        this.options.emulateTouchEvents &&
        this.touchDelta &&
        (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20)
      ) {
        delete this.touchDelta
        return
      }
      return this.handleClick(event)
    },

    updateEdgeClasses: function (index) {
      if (!index) {
        this.container.addClass(this.options.leftEdgeClass)
      } else {
        this.container.removeClass(this.options.leftEdgeClass)
      }
      if (index === this.num - 1) {
        this.container.addClass(this.options.rightEdgeClass)
      } else {
        this.container.removeClass(this.options.rightEdgeClass)
      }
    },

    handleSlide: function (index) {
      if (!this.options.continuous) {
        this.updateEdgeClasses(index)
      }
      this.loadElements(index)
      if (this.options.unloadElements) {
        this.unloadElements(index)
      }
      this.setTitle(index)
    },

    onslide: function (index) {
      this.index = index
      this.handleSlide(index)
      this.setTimeout(this.options.onslide, [index, this.slides[index]])
    },

    setTitle: function (index) {
      var firstChild = this.slides[index].firstChild
      var text = firstChild.title || firstChild.alt
      var titleElement = this.titleElement
      if (titleElement.length) {
        this.titleElement.empty()
        if (text) {
          titleElement[0].appendChild(document.createTextNode(text))
        }
      }
    },

    setTimeout: function (func, args, wait) {
      var that = this
      return (
        func &&
        window.setTimeout(function () {
          func.apply(that, args || [])
        }, wait || 0)
      )
    },

    imageFactory: function (obj, callback) {
      var that = this
      var img = this.imagePrototype.cloneNode(false)
      var url = obj
      var backgroundSize = this.options.stretchImages
      var called
      var element
      var title
      var altText
      function callbackWrapper (event) {
        if (!called) {
          event = {
            type: event.type,
            target: element
          }
          if (!element.parentNode) {
            // Fix for IE7 firing the load event for
            // cached images before the element could
            // be added to the DOM:
            return that.setTimeout(callbackWrapper, [event])
          }
          called = true
          $(img).off('load error', callbackWrapper)
          if (backgroundSize) {
            if (event.type === 'load') {
              element.style.background = 'url("' + url + '") center no-repeat'
              element.style.backgroundSize = backgroundSize
            }
          }
          callback(event)
        }
      }
      if (typeof url !== 'string') {
        url = this.getItemProperty(obj, this.options.urlProperty)
        title = this.getItemProperty(obj, this.options.titleProperty)
        altText =
          this.getItemProperty(obj, this.options.altTextProperty) || title
      }
      if (backgroundSize === true) {
        backgroundSize = 'contain'
      }
      backgroundSize =
        this.support.backgroundSize &&
        this.support.backgroundSize[backgroundSize] &&
        backgroundSize
      if (backgroundSize) {
        element = this.elementPrototype.cloneNode(false)
      } else {
        element = img
        img.draggable = false
      }
      if (title) {
        element.title = title
      }
      if (altText) {
        element.alt = altText
      }
      $(img).on('load error', callbackWrapper)
      img.src = url
      return element
    },

    createElement: function (obj, callback) {
      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
      var factory =
        (type && this[type.split('/')[0] + 'Factory']) || this.imageFactory
      var element = obj && factory.call(this, obj, callback)
      var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
      if (!element) {
        element = this.elementPrototype.cloneNode(false)
        this.setTimeout(callback, [
          {
            type: 'error',
            target: element
          }
        ])
      }
      if (srcset) {
        element.setAttribute('srcset', srcset)
      }
      $(element).addClass(this.options.slideContentClass)
      return element
    },

    loadElement: function (index) {
      if (!this.elements[index]) {
        if (this.slides[index].firstChild) {
          this.elements[index] = $(this.slides[index]).hasClass(
            this.options.slideErrorClass
          )
            ? 3
            : 2
        } else {
          this.elements[index] = 1 // Loading
          $(this.slides[index]).addClass(this.options.slideLoadingClass)
          this.slides[index].appendChild(
            this.createElement(this.list[index], this.proxyListener)
          )
        }
      }
    },

    loadElements: function (index) {
      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
      var j = index
      var i
      for (i = 0; i < limit; i += 1) {
        // First load the current slide element (0),
        // then the next one (+1),
        // then the previous one (-2),
        // then the next after next (+2), etc.:
        j += i * (i % 2 === 0 ? -1 : 1)
        // Connect the ends of the list to load slide elements for
        // continuous navigation:
        j = this.circle(j)
        this.loadElement(j)
      }
    },

    unloadElements: function (index) {
      var i, diff
      for (i in this.elements) {
        if (this.elements.hasOwnProperty(i)) {
          diff = Math.abs(index - i)
          if (
            diff > this.options.preloadRange &&
            diff + this.options.preloadRange < this.num
          ) {
            this.unloadSlide(i)
            delete this.elements[i]
          }
        }
      }
    },

    addSlide: function (index) {
      var slide = this.slidePrototype.cloneNode(false)
      slide.setAttribute('data-index', index)
      this.slidesContainer[0].appendChild(slide)
      this.slides.push(slide)
    },

    positionSlide: function (index) {
      var slide = this.slides[index]
      slide.style.width = this.slideWidth + 'px'
      if (this.support.transform) {
        slide.style.left = index * -this.slideWidth + 'px'
        this.move(
          index,
          this.index > index
            ? -this.slideWidth
            : this.index < index ? this.slideWidth : 0,
          0
        )
      }
    },

    initSlides: function (reload) {
      var clearSlides, i
      if (!reload) {
        this.positions = []
        this.positions.length = this.num
        this.elements = {}
        this.imagePrototype = document.createElement('img')
        this.elementPrototype = document.createElement('div')
        this.slidePrototype = document.createElement('div')
        $(this.slidePrototype).addClass(this.options.slideClass)
        this.slides = this.slidesContainer[0].children
        clearSlides =
          this.options.clearSlides || this.slides.length !== this.num
      }
      this.slideWidth = this.container[0].clientWidth
      this.slideHeight = this.container[0].clientHeight
      this.slidesContainer[0].style.width = this.num * this.slideWidth + 'px'
      if (clearSlides) {
        this.resetSlides()
      }
      for (i = 0; i < this.num; i += 1) {
        if (clearSlides) {
          this.addSlide(i)
        }
        this.positionSlide(i)
      }
      // Reposition the slides before and after the given index:
      if (this.options.continuous && this.support.transform) {
        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
        this.move(this.circle(this.index + 1), this.slideWidth, 0)
      }
      if (!this.support.transform) {
        this.slidesContainer[0].style.left =
          this.index * -this.slideWidth + 'px'
      }
    },

    unloadSlide: function (index) {
      var slide, firstChild
      slide = this.slides[index]
      firstChild = slide.firstChild
      if (firstChild !== null) {
        slide.removeChild(firstChild)
      }
    },

    unloadAllSlides: function () {
      var i, len
      for (i = 0, len = this.slides.length; i < len; i++) {
        this.unloadSlide(i)
      }
    },

    toggleControls: function () {
      var controlsClass = this.options.controlsClass
      if (this.container.hasClass(controlsClass)) {
        this.container.removeClass(controlsClass)
      } else {
        this.container.addClass(controlsClass)
      }
    },

    toggleSlideshow: function () {
      if (!this.interval) {
        this.play()
      } else {
        this.pause()
      }
    },

    getNodeIndex: function (element) {
      return parseInt(element.getAttribute('data-index'), 10)
    },

    getNestedProperty: function (obj, property) {
      property.replace(
        // Matches native JavaScript notation in a String,
        // e.g. '["doubleQuoteProp"].dotProp[2]'
        // eslint-disable-next-line no-useless-escape
        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
          var prop =
            dotProp ||
            singleQuoteProp ||
            doubleQuoteProp ||
            (arrayIndex && parseInt(arrayIndex, 10))
          if (str && obj) {
            obj = obj[prop]
          }
        }
      )
      return obj
    },

    getDataProperty: function (obj, property) {
      var key
      var prop
      if (obj.dataset) {
        key = property.replace(/-([a-z])/g, function (_, b) {
          return b.toUpperCase()
        })
        prop = obj.dataset[key]
      } else if (obj.getAttribute) {
        prop = obj.getAttribute(
          'data-' + property.replace(/([A-Z])/g, '-$1').toLowerCase()
        )
      }
      if (typeof prop === 'string') {
        // eslint-disable-next-line no-useless-escape
        if (
          /^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(prop)
        ) {
          try {
            return $.parseJSON(prop)
          } catch (ignore) {}
        }
        return prop
      }
    },

    getItemProperty: function (obj, property) {
      var prop = this.getDataProperty(obj, property)
      if (prop === undefined) {
        prop = obj[property]
      }
      if (prop === undefined) {
        prop = this.getNestedProperty(obj, property)
      }
      return prop
    },

    initStartIndex: function () {
      var index = this.options.index
      var urlProperty = this.options.urlProperty
      var i
      // Check if the index is given as a list object:
      if (index && typeof index !== 'number') {
        for (i = 0; i < this.num; i += 1) {
          if (
            this.list[i] === index ||
            this.getItemProperty(this.list[i], urlProperty) ===
              this.getItemProperty(index, urlProperty)
          ) {
            index = i
            break
          }
        }
      }
      // Make sure the index is in the list range:
      this.index = this.circle(parseInt(index, 10) || 0)
    },

    initEventListeners: function () {
      var that = this
      var slidesContainer = this.slidesContainer
      function proxyListener (event) {
        var type =
          that.support.transition && that.support.transition.end === event.type
            ? 'transitionend'
            : event.type
        that['on' + type](event)
      }
      $(window).on('resize', proxyListener)
      $(document.body).on('keydown', proxyListener)
      this.container.on('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.on(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.on(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.on(this.support.transition.end, proxyListener)
      }
      this.proxyListener = proxyListener
    },

    destroyEventListeners: function () {
      var slidesContainer = this.slidesContainer
      var proxyListener = this.proxyListener
      $(window).off('resize', proxyListener)
      $(document.body).off('keydown', proxyListener)
      this.container.off('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.off(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.off(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.off(this.support.transition.end, proxyListener)
      }
    },

    handleOpen: function () {
      if (this.options.onopened) {
        this.options.onopened.call(this)
      }
    },

    initWidget: function () {
      var that = this
      function openHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, openHandler)
          that.handleOpen()
        }
      }
      this.container = $(this.options.container)
      if (!this.container.length) {
        this.console.log(
          'blueimp Gallery: Widget container not found.',
          this.options.container
        )
        return false
      }
      this.slidesContainer = this.container
        .find(this.options.slidesContainer)
        .first()
      if (!this.slidesContainer.length) {
        this.console.log(
          'blueimp Gallery: Slides container not found.',
          this.options.slidesContainer
        )
        return false
      }
      this.titleElement = this.container.find(this.options.titleElement).first()
      if (this.num === 1) {
        this.container.addClass(this.options.singleClass)
      }
      if (this.options.onopen) {
        this.options.onopen.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, openHandler)
      } else {
        this.handleOpen()
      }
      if (this.options.hidePageScrollbars) {
        // Hide the page scrollbars:
        this.bodyOverflowStyle = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      }
      this.container[0].style.display = 'block'
      this.initSlides()
      this.container.addClass(this.options.displayClass)
    },

    initOptions: function (options) {
      // Create a copy of the prototype options:
      this.options = $.extend({}, this.options)
      // Check if carousel mode is enabled:
      if (
        (options && options.carousel) ||
        (this.options.carousel && (!options || options.carousel !== false))
      ) {
        $.extend(this.options, this.carouselOptions)
      }
      // Override any given options:
      $.extend(this.options, options)
      if (this.num < 3) {
        // 1 or 2 slides cannot be displayed continuous,
        // remember the original option by setting to null instead of false:
        this.options.continuous = this.options.continuous ? null : false
      }
      if (!this.support.transition) {
        this.options.emulateTouchEvents = false
      }
      if (this.options.event) {
        this.preventDefault(this.options.event)
      }
    }
  })

  return Gallery
})


/***/ }),

/***/ "./node_modules/blueimp-gallery/js/blueimp-helper.js":
/*!***********************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-helper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function () {
  'use strict'

  function extend (obj1, obj2) {
    var prop
    for (prop in obj2) {
      if (obj2.hasOwnProperty(prop)) {
        obj1[prop] = obj2[prop]
      }
    }
    return obj1
  }

  function Helper (query) {
    if (!this || this.find !== Helper.prototype.find) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Helper(query)
    }
    this.length = 0
    if (query) {
      if (typeof query === 'string') {
        query = this.find(query)
      }
      if (query.nodeType || query === query.window) {
        // Single HTML element
        this.length = 1
        this[0] = query
      } else {
        // HTML element collection
        var i = query.length
        this.length = i
        while (i) {
          i -= 1
          this[i] = query[i]
        }
      }
    }
  }

  Helper.extend = extend

  Helper.contains = function (container, element) {
    do {
      element = element.parentNode
      if (element === container) {
        return true
      }
    } while (element)
    return false
  }

  Helper.parseJSON = function (string) {
    return window.JSON && JSON.parse(string)
  }

  extend(Helper.prototype, {
    find: function (query) {
      var container = this[0] || document
      if (typeof query === 'string') {
        if (container.querySelectorAll) {
          query = container.querySelectorAll(query)
        } else if (query.charAt(0) === '#') {
          query = container.getElementById(query.slice(1))
        } else {
          query = container.getElementsByTagName(query)
        }
      }
      return new Helper(query)
    },

    hasClass: function (className) {
      if (!this[0]) {
        return false
      }
      return new RegExp('(^|\\s+)' + className + '(\\s+|$)').test(
        this[0].className
      )
    },

    addClass: function (className) {
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        if (!element.className) {
          element.className = className
          return this
        }
        if (this.hasClass(className)) {
          return this
        }
        element.className += ' ' + className
      }
      return this
    },

    removeClass: function (className) {
      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)')
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        element.className = element.className.replace(regexp, ' ')
      }
      return this
    },

    on: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.addEventListener) {
            element.addEventListener(eventName, handler, false)
          } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    off: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false)
          } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    empty: function () {
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild)
        }
      }
      return this
    },

    first: function () {
      return new Helper(this[0])
    }
  })

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Helper
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})()


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate-data-v-6261c35f {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-data-v-6261c35f {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes fadeIn-data-v-6261c35f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeIn-data-v-6261c35f {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes slideDownFade-data-v-6261c35f {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes slideDownFade-data-v-6261c35f {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes error-data-v-6261c35f {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@keyframes error-data-v-6261c35f {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@-webkit-keyframes waveAnimateA-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateA-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateB-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateB-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateC-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@keyframes waveAnimateC-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@-webkit-keyframes bounce-data-v-6261c35f {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@keyframes bounce-data-v-6261c35f {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@-webkit-keyframes pulse-data-v-6261c35f {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes pulse-data-v-6261c35f {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes zoomOutDown-data-v-6261c35f {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@keyframes zoomOutDown-data-v-6261c35f {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@-webkit-keyframes slideInLeft-data-v-6261c35f {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-data-v-6261c35f {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes slideInRight-data-v-6261c35f {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-data-v-6261c35f {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes swing-data-v-6261c35f {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@keyframes swing-data-v-6261c35f {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@-webkit-keyframes tada-data-v-6261c35f {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes tada-data-v-6261c35f {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes slideUpFadeIn-data-v-6261c35f {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@keyframes slideUpFadeIn-data-v-6261c35f {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@-webkit-keyframes leftright-data-v-6261c35f {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@keyframes leftright-data-v-6261c35f {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@-webkit-keyframes spin-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@keyframes spin-data-v-6261c35f {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@-webkit-keyframes fade-data-v-6261c35f {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes fade-data-v-6261c35f {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n*[data-v-6261c35f] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[data-v-6261c35f] {\n  background: #f9f9f9;\n  font-family: Roboto, arial, sans-serif;\n}\nimg[data-v-6261c35f] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n}\n.container[data-v-6261c35f] {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n.b-links a[data-v-6261c35f] {\n  display: block;\n  margin-top: 0.7rem;\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.b-links a[data-v-6261c35f]:hover {\n  color: #d8a550;\n}\n.b-icons .icon[data-v-6261c35f] {\n  margin-top: 1rem;\n  margin-right: 1rem;\n  padding: 1.2rem;\n  border: 2px solid #cccccc;\n  border-radius: 100%;\n  background: #cccccc;\n}\n.b-icons .icon a[data-v-6261c35f] {\n  color: #333333;\n}\n.b-icons .icon[data-v-6261c35f]:hover {\n  border: 2px solid #d8a550;\n}\n.b-icons .icon:hover a[data-v-6261c35f] {\n  color: #d8a550;\n}\n.footer .content[data-v-6261c35f] {\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.footer .content strong[data-v-6261c35f] {\n  color: #eeeeee;\n}\n.footer .content h3[data-v-6261c35f] {\n  display: inline-block;\n  border-bottom: 2px dashed #d8a550;\n  line-height: 3rem;\n}\n.b-stylish-footer[data-v-6261c35f] {\n  position: relative;\n  height: 60px;\n  background: -webkit-gradient(linear, left top, right top, from(#2a2a2a), to(#222222));\n  background: linear-gradient(to right, #2a2a2a, #222222);\n  overflow: hidden;\n}\n.b-stylish-footer[data-v-6261c35f]::before {\n  position: absolute;\n  top: 0;\n  right: 10%;\n  width: 100%;\n  height: 300px;\n  -webkit-transform: skewY(330deg);\n          transform: skewY(330deg);\n  background: -webkit-gradient(linear, left top, right top, from(#222222), to(#2a2a2a));\n  background: linear-gradient(to right, #222222, #2a2a2a);\n  content: \"\";\n}\n.footer .column[data-v-6261c35f] {\n  margin-top: 1.2rem;\n  margin-bottom: 1.2rem;\n}\n.contact h1[data-v-6261c35f] {\n  margin-bottom: 2rem;\n  padding: 1rem;\n  border-bottom: 2px solid #875400;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #444444;\n}\n.contact p[data-v-6261c35f] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-left: 5px solid #875400;\n  border-radius: 5px;\n  background: -webkit-gradient(linear, right top, left top, from(#f9f9f9), to(#ffffff));\n  background: linear-gradient(to left, #f9f9f9, #ffffff);\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n  word-wrap: break-word;\n}\n.header[data-v-6261c35f] {\n  position: relative;\n  background: #ffffff;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n}\n.header .container[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.logo[data-v-6261c35f] {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  padding: 0.5rem;\n}\n.navbar[data-v-6261c35f] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  z-index: 3000;\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4;\n  width: 0;\n  height: auto;\n  min-height: 800px;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n@media (min-width: 66em) {\n.navbar[data-v-6261c35f] {\n    position: initial;\n    width: auto;\n    height: auto;\n    min-height: initial;\n    overflow-y: hidden;\n}\n}\n.navbar--toggle[data-v-6261c35f] {\n  width: 100%;\n}\n@media (min-width: 66em) {\n.navbar--toggle[data-v-6261c35f] {\n    width: auto;\n}\n}\n.navbar a[data-v-6261c35f] {\n  display: block;\n  padding: 1rem;\n  color: #111111;\n  text-decoration: none;\n}\n.navbar a[data-v-6261c35f]:hover {\n  color: #d8a550;\n}\n.menu[data-v-6261c35f] {\n  list-style: none;\n}\n.menu .submenu[data-v-6261c35f] {\n  display: none;\n  -webkit-animation: slideUpFadeIn-data-v-6261c35f 400ms;\n          animation: slideUpFadeIn-data-v-6261c35f 400ms;\n}\n@media (min-width: 66em) {\n.menu .submenu[data-v-6261c35f] {\n    position: absolute;\n    top: 85px;\n    z-index: 2000;\n    min-width: 200px;\n    background: #ffffff;\n}\n}\n.menu .submenu__item[data-v-6261c35f] {\n  display: block;\n  border-top: 1px solid #eeeeee;\n  border-right: 1px solid #eeeeee;\n  border-left: 1px solid #eeeeee;\n  text-align: right;\n}\n@media (min-width: 66em) {\n.menu .submenu__item[data-v-6261c35f] {\n    text-align: center;\n}\n}\n.menu__item[data-v-6261c35f] {\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n  text-align: center;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-6261c35f] {\n    display: table-cell;\n    width: auto;\n    border: none;\n    text-align: initial;\n}\n}\n.menu__item[data-v-6261c35f]:last-child {\n  border-bottom: 0;\n}\n.menu__item[data-v-6261c35f]:first-child {\n  border-top: 1px solid #eeeeee;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-6261c35f]:first-child {\n    border-top: none;\n}\n}\n.menu__item:hover .submenu[data-v-6261c35f] {\n  display: block;\n}\n.langbar[data-v-6261c35f] {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n@media (min-width: 66em) {\n.langbar[data-v-6261c35f] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n}\n.toggle[data-v-6261c35f] {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: 0;\n  background: none;\n  cursor: pointer;\n}\n@media (min-width: 66em) {\n.toggle[data-v-6261c35f] {\n    display: none;\n}\n}\n.toggle__bar[data-v-6261c35f] {\n  display: block;\n  width: 35px;\n  height: 5px;\n  margin: 6px 0;\n  background-color: #d8a550;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.toggle--change .toggle__bar[data-v-6261c35f]:first-child {\n  -webkit-transform: rotate(-45deg) translate(-8px, 8px);\n          transform: rotate(-45deg) translate(-8px, 8px);\n}\n.toggle--change .toggle__bar[data-v-6261c35f]:nth-of-type(2) {\n  opacity: 0;\n}\n.toggle--change .toggle__bar[data-v-6261c35f]:last-child {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n          transform: rotate(45deg) translate(-8px, -8px);\n}\n.accordion[data-v-6261c35f] {\n  margin: 2rem auto;\n}\n.accordion_item .head[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  border-top: none;\n  border-radius: 5px;\n  background: #efdbb8;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  color: #875400;\n  cursor: pointer;\n}\n.accordion_item .head span[data-v-6261c35f] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.accordion_item .head i[data-v-6261c35f] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n.accordion_item .head--active[data-v-6261c35f] {\n  background: #d8a550;\n}\n.accordion_item:last-child .body.body--active[data-v-6261c35f] {\n  border-bottom: 1px solid #cccccc;\n}\n.accordion_item .body[data-v-6261c35f] {\n  height: 100%;\n  max-height: 0;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 5px;\n  background: #ffffff;\n  -webkit-transition: max-height 500ms ease;\n  transition: max-height 500ms ease;\n  overflow: hidden;\n}\n.accordion_item .body .content[data-v-6261c35f] {\n  padding: 1rem;\n  font-size: 0.9rem;\n}\n.accordion_item .body--active[data-v-6261c35f] {\n  max-height: 1000px;\n  -webkit-box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n}\n.google-map[data-v-6261c35f] {\n  width: 100%;\n  height: 200px;\n}\n@media (min-width: 40em) {\n.google-map[data-v-6261c35f] {\n    width: 100%;\n    height: 400px;\n}\n}\n.process-button[data-v-6261c35f] {\n  position: relative;\n  padding: 2rem;\n}\n.loading[data-v-6261c35f] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0.5rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #333333;\n  border-right: 6px solid #333333;\n  border-radius: 50%;\n  -webkit-animation: spin-data-v-6261c35f 1s linear infinite;\n          animation: spin-data-v-6261c35f 1s linear infinite;\n}\n.loading.left[data-v-6261c35f] {\n  left: 4%;\n}\n.loading.center[data-v-6261c35f] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.loading.rel[data-v-6261c35f] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  -webkit-transform: none;\n          transform: none;\n}\n.line[data-v-6261c35f] {\n  position: relative;\n  width: 100%;\n  margin: -1px auto;\n  padding: 2rem 0;\n  background: -webkit-gradient(linear, left top, right top, from(#d8a550), to(#875400));\n  background: linear-gradient(to right, #d8a550, #875400);\n  overflow: hidden;\n}\n.line[data-v-6261c35f]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, 40deg);\n          transform: skew(0deg, 40deg);\n  background: #ffffff;\n}\n.line[data-v-6261c35f]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, -40deg);\n          transform: skew(0deg, -40deg);\n  background: #ffffff;\n}\n.hframe[data-v-6261c35f] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n@media (min-width: 40em) {\n.hframe[data-v-6261c35f] {\n    height: 350px;\n}\n}\n@media (min-width: 66em) {\n.hframe[data-v-6261c35f] {\n    height: 500px;\n}\n}\n.hframe img[data-v-6261c35f] {\n  width: 100%;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.hframe h1[data-v-6261c35f] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 1rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: Roboto, serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n@media (min-width: 40em) {\n.hframe h1[data-v-6261c35f] {\n    font-size: 4rem;\n}\n}\n.hframe h1[data-v-6261c35f]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  width: 40%;\n  height: 4px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #ffffff;\n}\n.home-card[data-v-6261c35f] {\n  position: relative;\n  padding: 2rem;\n  overflow: hidden;\n  font-size: 15px;\n  line-height: 2;\n  color: #000000;\n  text-align: justify;\n}\n.home-card[data-v-6261c35f]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.home-card[data-v-6261c35f]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.construction[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 5rem 2rem;\n  background: #d39a3b;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #ffffff;\n}\n.image-frame[data-v-6261c35f] {\n  min-height: 150px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-frame img[data-v-6261c35f] {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n}\n.image-frame img[data-v-6261c35f]:hover {\n  opacity: 0.8;\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n.range-gallery[data-v-6261c35f] {\n  display: block;\n  width: 40%;\n  height: 5px;\n  margin: 2rem auto;\n  -webkit-appearance: none;\n  outline: 0;\n  background: #cccccc;\n  cursor: pointer;\n}\n.range-gallery[data-v-6261c35f]::-webkit-slider-thumb {\n  width: 10px;\n  height: 15px;\n  -webkit-appearance: none;\n  background: #aaaaaa;\n  cursor: pointer;\n}\n.right-close[data-v-6261c35f] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.blocks[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n@media (min-width: 66em) {\n.blocks[data-v-6261c35f] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.blocks .block[data-v-6261c35f] {\n  margin-right: 2rem;\n  padding-right: 2rem;\n}\n@media (min-width: 66em) {\n.blocks .block[data-v-6261c35f] {\n    border-right: 1px solid #eeeeee;\n}\n.blocks .block[data-v-6261c35f]:last-child {\n    border-right: none;\n}\n}\n.rating[data-v-6261c35f] {\n  padding: 0.25rem 0;\n  font-size: 0.9rem;\n  color: #666666;\n}\n.rating .count[data-v-6261c35f] {\n  display: inline-block;\n  width: 40px;\n}\n.rating .total[data-v-6261c35f] {\n  margin-left: 1rem;\n}\n.rating .avg[data-v-6261c35f] {\n  margin-bottom: 0.5rem;\n  font-weight: 800;\n  color: #444444;\n  text-transform: uppercase;\n}\n.rating .checked[data-v-6261c35f] {\n  color: orange;\n}\n.rating .fa[data-v-6261c35f] {\n  cursor: pointer;\n}\n.review-block[data-v-6261c35f] {\n  margin-top: 4rem;\n}\n.review-heading[data-v-6261c35f] {\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #eeeeee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #555555;\n  text-transform: uppercase;\n}\n.review[data-v-6261c35f] {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px dashed #eeeeee;\n}\n.review .review-title[data-v-6261c35f] {\n  font-weight: 600;\n}\n.review .review-title span[data-v-6261c35f] {\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n.review .review-message[data-v-6261c35f] {\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.review-write[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.review-write input[data-v-6261c35f] {\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n@media (min-width: 40em) {\n.review-write input[data-v-6261c35f] {\n    width: 50%;\n}\n}\n@media (min-width: 66em) {\n.review-write input[data-v-6261c35f] {\n    width: 30%;\n}\n}\n.review-write textarea[data-v-6261c35f] {\n  min-height: 80px;\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n.review-write button[data-v-6261c35f] {\n  width: 150px;\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  background: #ce8000;\n  color: #ffffff;\n  cursor: pointer;\n}\n.review-write button[data-v-6261c35f]:hover {\n  background: #d8a550;\n}\n.review-write button.disabled[data-v-6261c35f] {\n  background: #d8a550;\n}\n.product[data-v-6261c35f] {\n  margin-bottom: 2rem;\n}\n.product[data-v-6261c35f]:hover {\n  opacity: 0.9;\n}\n.product .product-rating[data-v-6261c35f] {\n  padding: 1rem;\n  background: #f9f9f9;\n  text-align: center;\n}\n.product .product-name[data-v-6261c35f] {\n  padding: 0.5rem 0;\n  font-size: 1.2rem;\n  color: #555555;\n  text-align: center;\n  text-transform: uppercase;\n}\n.product .product-category[data-v-6261c35f] {\n  padding: 0.5rem 0;\n  background: rgba(0, 0, 0, 0.03);\n  font-size: 0.9rem;\n  color: #333333;\n  text-align: center;\n}\n.product .product-more[data-v-6261c35f] {\n  padding: 0.2rem;\n  border: 2px solid #875400;\n  background: #875400;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: white;\n  text-align: center;\n}\n.product-page[data-v-6261c35f] {\n  width: 90%;\n  margin: 1.5rem auto;\n  padding: 1.5rem;\n  background: #ffffff;\n}\n@media (min-width: 66em) {\n.product-page[data-v-6261c35f] {\n    width: 80%;\n    margin: 4rem auto;\n    padding: 5rem;\n}\n}\n.product-page .product[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (min-width: 66em) {\n.product-page .product[data-v-6261c35f] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.product-page .product .image[data-v-6261c35f] {\n  margin-bottom: 2rem;\n}\n@media (min-width: 66em) {\n.product-page .product .image[data-v-6261c35f] {\n    -ms-flex-preferred-size: 46%;\n        flex-basis: 46%;\n    margin-bottom: 0;\n}\n}\n.product-page .product .details[data-v-6261c35f] {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n}\n.product-page .product .details__name[data-v-6261c35f] {\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__category[data-v-6261c35f] {\n  margin-bottom: 2rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__info[data-v-6261c35f] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  font-size: 0.95rem;\n  line-height: 2rem;\n  text-align: justify;\n}\n.product-page .product .details__more[data-v-6261c35f] {\n  padding: 0.5rem 2rem;\n  border: 1px solid #ffffff;\n  background: #875400;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n}\n.product-page .product .details__more[data-v-6261c35f]:hover {\n  background: #d8a550;\n}\n.contact-form[data-v-6261c35f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #f9f9f9;\n}\n@media (min-width: 40em) {\n.contact-form[data-v-6261c35f] {\n    padding: 2rem;\n}\n}\n.contact-form label[data-v-6261c35f] {\n  margin-bottom: 0.3rem;\n  color: #333333;\n}\n.contact-form span[data-v-6261c35f] {\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  color: red;\n}\n.contact-form .error[data-v-6261c35f] {\n  border: 1px solid red !important;\n}\n.contact-form input[data-v-6261c35f] {\n  height: 40px;\n}\n.contact-form input[data-v-6261c35f]:not([type=submit]),\n.contact-form textarea[data-v-6261c35f] {\n  margin-bottom: 0.3rem;\n  padding: 0.25rem 1rem;\n  outline: 0;\n  border: 1px solid #875400;\n  font-weight: 400;\n  color: #333333;\n}\n.contact-form textarea[data-v-6261c35f] {\n  height: 180px;\n  padding-top: 0.5rem;\n}\n.contact-form input[type=submit][data-v-6261c35f] {\n  width: 150px;\n  margin-top: 1rem;\n  outline: 0;\n  border: 0;\n  background: #875400;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.contact-form input[type=submit][data-v-6261c35f]:hover {\n  background: #d39a3b;\n}\n.contact-form input[type=submit].disabled[data-v-6261c35f] {\n  background: #d39a3b;\n}\n.slider[data-v-6261c35f] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n@media (min-width: 40em) {\n.slider[data-v-6261c35f] {\n    height: 350px;\n}\n}\n@media (min-width: 66em) {\n.slider[data-v-6261c35f] {\n    height: 500px;\n}\n}\n.slider .slide[data-v-6261c35f] {\n  width: 100%;\n  height: 100%;\n}\n.slider .slide img[data-v-6261c35f] {\n  width: 100%;\n  margin-top: -15%;\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n.slider .slide img[data-v-6261c35f]:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.slider .slide-enter-active[data-v-6261c35f] {\n  -webkit-animation: fade-data-v-6261c35f 2s;\n          animation: fade-data-v-6261c35f 2s;\n}\n.slider .slide-leave-active[data-v-6261c35f] {\n  animation: pulse-data-v-6261c35f 500ms reverse;\n}\n.slider .views[data-v-6261c35f] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 2000;\n  display: none;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n@media (min-width: 40em) {\n.slider .views[data-v-6261c35f] {\n    display: block;\n}\n}\n.slider .views img[data-v-6261c35f] {\n  width: 70px;\n  height: 50px;\n  margin: 0 0.3rem;\n  opacity: 0.7;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n  cursor: pointer;\n}\n.slider .views img.active[data-v-6261c35f] {\n  opacity: 1;\n  border: 2px solid white;\n}\n.slider .views img[data-v-6261c35f]:hover {\n  width: 80px;\n}\n.slider .prev[data-v-6261c35f],\n.slider .next[data-v-6261c35f] {\n  position: absolute;\n  top: 50%;\n  z-index: 2000;\n  padding: 0.5rem 1rem;\n  opacity: 0.6;\n  -webkit-transform: translateY(-50px);\n          transform: translateY(-50px);\n  outline: 0;\n  border: 0;\n  background: #000000;\n  cursor: pointer;\n}\n.slider .prev .arrow[data-v-6261c35f],\n.slider .next .arrow[data-v-6261c35f] {\n  fill: #ffffff;\n  width: 40px;\n  height: 60px;\n}\n.slider .prev[data-v-6261c35f] {\n  left: 1rem;\n}\n.slider .next[data-v-6261c35f] {\n  right: 1rem;\n}\n.slider .loading[data-v-6261c35f] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0.5rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #333333;\n  border-right: 6px solid #333333;\n  border-radius: 50%;\n  -webkit-animation: spin-data-v-6261c35f 1s linear infinite;\n          animation: spin-data-v-6261c35f 1s linear infinite;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate-data-v-378748bc {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-data-v-378748bc {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes fadeIn-data-v-378748bc {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeIn-data-v-378748bc {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes slideDownFade-data-v-378748bc {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes slideDownFade-data-v-378748bc {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes error-data-v-378748bc {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@keyframes error-data-v-378748bc {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@-webkit-keyframes waveAnimateA-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateA-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateB-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateB-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateC-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@keyframes waveAnimateC-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@-webkit-keyframes bounce-data-v-378748bc {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@keyframes bounce-data-v-378748bc {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@-webkit-keyframes pulse-data-v-378748bc {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes pulse-data-v-378748bc {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes zoomOutDown-data-v-378748bc {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@keyframes zoomOutDown-data-v-378748bc {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@-webkit-keyframes slideInLeft-data-v-378748bc {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-data-v-378748bc {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes slideInRight-data-v-378748bc {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-data-v-378748bc {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes swing-data-v-378748bc {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@keyframes swing-data-v-378748bc {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@-webkit-keyframes tada-data-v-378748bc {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes tada-data-v-378748bc {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes slideUpFadeIn-data-v-378748bc {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@keyframes slideUpFadeIn-data-v-378748bc {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@-webkit-keyframes leftright-data-v-378748bc {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@keyframes leftright-data-v-378748bc {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@-webkit-keyframes spin-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@keyframes spin-data-v-378748bc {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@-webkit-keyframes fade-data-v-378748bc {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes fade-data-v-378748bc {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n*[data-v-378748bc] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[data-v-378748bc] {\n  background: #f9f9f9;\n  font-family: Roboto, arial, sans-serif;\n}\nimg[data-v-378748bc] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n}\n.container[data-v-378748bc] {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n.b-links a[data-v-378748bc] {\n  display: block;\n  margin-top: 0.7rem;\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.b-links a[data-v-378748bc]:hover {\n  color: #d8a550;\n}\n.b-icons .icon[data-v-378748bc] {\n  margin-top: 1rem;\n  margin-right: 1rem;\n  padding: 1.2rem;\n  border: 2px solid #cccccc;\n  border-radius: 100%;\n  background: #cccccc;\n}\n.b-icons .icon a[data-v-378748bc] {\n  color: #333333;\n}\n.b-icons .icon[data-v-378748bc]:hover {\n  border: 2px solid #d8a550;\n}\n.b-icons .icon:hover a[data-v-378748bc] {\n  color: #d8a550;\n}\n.footer .content[data-v-378748bc] {\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.footer .content strong[data-v-378748bc] {\n  color: #eeeeee;\n}\n.footer .content h3[data-v-378748bc] {\n  display: inline-block;\n  border-bottom: 2px dashed #d8a550;\n  line-height: 3rem;\n}\n.b-stylish-footer[data-v-378748bc] {\n  position: relative;\n  height: 60px;\n  background: -webkit-gradient(linear, left top, right top, from(#2a2a2a), to(#222222));\n  background: linear-gradient(to right, #2a2a2a, #222222);\n  overflow: hidden;\n}\n.b-stylish-footer[data-v-378748bc]::before {\n  position: absolute;\n  top: 0;\n  right: 10%;\n  width: 100%;\n  height: 300px;\n  -webkit-transform: skewY(330deg);\n          transform: skewY(330deg);\n  background: -webkit-gradient(linear, left top, right top, from(#222222), to(#2a2a2a));\n  background: linear-gradient(to right, #222222, #2a2a2a);\n  content: \"\";\n}\n.footer .column[data-v-378748bc] {\n  margin-top: 1.2rem;\n  margin-bottom: 1.2rem;\n}\n.contact h1[data-v-378748bc] {\n  margin-bottom: 2rem;\n  padding: 1rem;\n  border-bottom: 2px solid #875400;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #444444;\n}\n.contact p[data-v-378748bc] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-left: 5px solid #875400;\n  border-radius: 5px;\n  background: -webkit-gradient(linear, right top, left top, from(#f9f9f9), to(#ffffff));\n  background: linear-gradient(to left, #f9f9f9, #ffffff);\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n  word-wrap: break-word;\n}\n.header[data-v-378748bc] {\n  position: relative;\n  background: #ffffff;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n}\n.header .container[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.logo[data-v-378748bc] {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  padding: 0.5rem;\n}\n.navbar[data-v-378748bc] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  z-index: 3000;\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4;\n  width: 0;\n  height: auto;\n  min-height: 800px;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n@media (min-width: 66em) {\n.navbar[data-v-378748bc] {\n    position: initial;\n    width: auto;\n    height: auto;\n    min-height: initial;\n    overflow-y: hidden;\n}\n}\n.navbar--toggle[data-v-378748bc] {\n  width: 100%;\n}\n@media (min-width: 66em) {\n.navbar--toggle[data-v-378748bc] {\n    width: auto;\n}\n}\n.navbar a[data-v-378748bc] {\n  display: block;\n  padding: 1rem;\n  color: #111111;\n  text-decoration: none;\n}\n.navbar a[data-v-378748bc]:hover {\n  color: #d8a550;\n}\n.menu[data-v-378748bc] {\n  list-style: none;\n}\n.menu .submenu[data-v-378748bc] {\n  display: none;\n  -webkit-animation: slideUpFadeIn-data-v-378748bc 400ms;\n          animation: slideUpFadeIn-data-v-378748bc 400ms;\n}\n@media (min-width: 66em) {\n.menu .submenu[data-v-378748bc] {\n    position: absolute;\n    top: 85px;\n    z-index: 2000;\n    min-width: 200px;\n    background: #ffffff;\n}\n}\n.menu .submenu__item[data-v-378748bc] {\n  display: block;\n  border-top: 1px solid #eeeeee;\n  border-right: 1px solid #eeeeee;\n  border-left: 1px solid #eeeeee;\n  text-align: right;\n}\n@media (min-width: 66em) {\n.menu .submenu__item[data-v-378748bc] {\n    text-align: center;\n}\n}\n.menu__item[data-v-378748bc] {\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n  text-align: center;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-378748bc] {\n    display: table-cell;\n    width: auto;\n    border: none;\n    text-align: initial;\n}\n}\n.menu__item[data-v-378748bc]:last-child {\n  border-bottom: 0;\n}\n.menu__item[data-v-378748bc]:first-child {\n  border-top: 1px solid #eeeeee;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-378748bc]:first-child {\n    border-top: none;\n}\n}\n.menu__item:hover .submenu[data-v-378748bc] {\n  display: block;\n}\n.langbar[data-v-378748bc] {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n@media (min-width: 66em) {\n.langbar[data-v-378748bc] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n}\n.toggle[data-v-378748bc] {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: 0;\n  background: none;\n  cursor: pointer;\n}\n@media (min-width: 66em) {\n.toggle[data-v-378748bc] {\n    display: none;\n}\n}\n.toggle__bar[data-v-378748bc] {\n  display: block;\n  width: 35px;\n  height: 5px;\n  margin: 6px 0;\n  background-color: #d8a550;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.toggle--change .toggle__bar[data-v-378748bc]:first-child {\n  -webkit-transform: rotate(-45deg) translate(-8px, 8px);\n          transform: rotate(-45deg) translate(-8px, 8px);\n}\n.toggle--change .toggle__bar[data-v-378748bc]:nth-of-type(2) {\n  opacity: 0;\n}\n.toggle--change .toggle__bar[data-v-378748bc]:last-child {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n          transform: rotate(45deg) translate(-8px, -8px);\n}\n.accordion[data-v-378748bc] {\n  margin: 2rem auto;\n}\n.accordion_item .head[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  border-top: none;\n  border-radius: 5px;\n  background: #efdbb8;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  color: #875400;\n  cursor: pointer;\n}\n.accordion_item .head span[data-v-378748bc] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.accordion_item .head i[data-v-378748bc] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n.accordion_item .head--active[data-v-378748bc] {\n  background: #d8a550;\n}\n.accordion_item:last-child .body.body--active[data-v-378748bc] {\n  border-bottom: 1px solid #cccccc;\n}\n.accordion_item .body[data-v-378748bc] {\n  height: 100%;\n  max-height: 0;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 5px;\n  background: #ffffff;\n  -webkit-transition: max-height 500ms ease;\n  transition: max-height 500ms ease;\n  overflow: hidden;\n}\n.accordion_item .body .content[data-v-378748bc] {\n  padding: 1rem;\n  font-size: 0.9rem;\n}\n.accordion_item .body--active[data-v-378748bc] {\n  max-height: 1000px;\n  -webkit-box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n}\n.google-map[data-v-378748bc] {\n  width: 100%;\n  height: 200px;\n}\n@media (min-width: 40em) {\n.google-map[data-v-378748bc] {\n    width: 100%;\n    height: 400px;\n}\n}\n.process-button[data-v-378748bc] {\n  position: relative;\n  padding: 2rem;\n}\n.loading[data-v-378748bc] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0.5rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #333333;\n  border-right: 6px solid #333333;\n  border-radius: 50%;\n  -webkit-animation: spin-data-v-378748bc 1s linear infinite;\n          animation: spin-data-v-378748bc 1s linear infinite;\n}\n.loading.left[data-v-378748bc] {\n  left: 4%;\n}\n.loading.center[data-v-378748bc] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.loading.rel[data-v-378748bc] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  -webkit-transform: none;\n          transform: none;\n}\n.line[data-v-378748bc] {\n  position: relative;\n  width: 100%;\n  margin: -1px auto;\n  padding: 2rem 0;\n  background: -webkit-gradient(linear, left top, right top, from(#d8a550), to(#875400));\n  background: linear-gradient(to right, #d8a550, #875400);\n  overflow: hidden;\n}\n.line[data-v-378748bc]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, 40deg);\n          transform: skew(0deg, 40deg);\n  background: #ffffff;\n}\n.line[data-v-378748bc]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, -40deg);\n          transform: skew(0deg, -40deg);\n  background: #ffffff;\n}\n.hframe[data-v-378748bc] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n@media (min-width: 40em) {\n.hframe[data-v-378748bc] {\n    height: 350px;\n}\n}\n@media (min-width: 66em) {\n.hframe[data-v-378748bc] {\n    height: 500px;\n}\n}\n.hframe img[data-v-378748bc] {\n  width: 100%;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.hframe h1[data-v-378748bc] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 1rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: Roboto, serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n@media (min-width: 40em) {\n.hframe h1[data-v-378748bc] {\n    font-size: 4rem;\n}\n}\n.hframe h1[data-v-378748bc]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  width: 40%;\n  height: 4px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #ffffff;\n}\n.home-card[data-v-378748bc] {\n  position: relative;\n  padding: 2rem;\n  overflow: hidden;\n  font-size: 15px;\n  line-height: 2;\n  color: #000000;\n  text-align: justify;\n}\n.home-card[data-v-378748bc]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.home-card[data-v-378748bc]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.construction[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 5rem 2rem;\n  background: #d39a3b;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #ffffff;\n}\n.image-frame[data-v-378748bc] {\n  min-height: 150px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-frame img[data-v-378748bc] {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n}\n.image-frame img[data-v-378748bc]:hover {\n  opacity: 0.8;\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n.range-gallery[data-v-378748bc] {\n  display: block;\n  width: 40%;\n  height: 5px;\n  margin: 2rem auto;\n  -webkit-appearance: none;\n  outline: 0;\n  background: #cccccc;\n  cursor: pointer;\n}\n.range-gallery[data-v-378748bc]::-webkit-slider-thumb {\n  width: 10px;\n  height: 15px;\n  -webkit-appearance: none;\n  background: #aaaaaa;\n  cursor: pointer;\n}\n.right-close[data-v-378748bc] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.blocks[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n@media (min-width: 66em) {\n.blocks[data-v-378748bc] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.blocks .block[data-v-378748bc] {\n  margin-right: 2rem;\n  padding-right: 2rem;\n}\n@media (min-width: 66em) {\n.blocks .block[data-v-378748bc] {\n    border-right: 1px solid #eeeeee;\n}\n.blocks .block[data-v-378748bc]:last-child {\n    border-right: none;\n}\n}\n.rating[data-v-378748bc] {\n  padding: 0.25rem 0;\n  font-size: 0.9rem;\n  color: #666666;\n}\n.rating .count[data-v-378748bc] {\n  display: inline-block;\n  width: 40px;\n}\n.rating .total[data-v-378748bc] {\n  margin-left: 1rem;\n}\n.rating .avg[data-v-378748bc] {\n  margin-bottom: 0.5rem;\n  font-weight: 800;\n  color: #444444;\n  text-transform: uppercase;\n}\n.rating .checked[data-v-378748bc] {\n  color: orange;\n}\n.rating .fa[data-v-378748bc] {\n  cursor: pointer;\n}\n.review-block[data-v-378748bc] {\n  margin-top: 4rem;\n}\n.review-heading[data-v-378748bc] {\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #eeeeee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #555555;\n  text-transform: uppercase;\n}\n.review[data-v-378748bc] {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px dashed #eeeeee;\n}\n.review .review-title[data-v-378748bc] {\n  font-weight: 600;\n}\n.review .review-title span[data-v-378748bc] {\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n.review .review-message[data-v-378748bc] {\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.review-write[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.review-write input[data-v-378748bc] {\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n@media (min-width: 40em) {\n.review-write input[data-v-378748bc] {\n    width: 50%;\n}\n}\n@media (min-width: 66em) {\n.review-write input[data-v-378748bc] {\n    width: 30%;\n}\n}\n.review-write textarea[data-v-378748bc] {\n  min-height: 80px;\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n.review-write button[data-v-378748bc] {\n  width: 150px;\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  background: #ce8000;\n  color: #ffffff;\n  cursor: pointer;\n}\n.review-write button[data-v-378748bc]:hover {\n  background: #d8a550;\n}\n.review-write button.disabled[data-v-378748bc] {\n  background: #d8a550;\n}\n.product[data-v-378748bc] {\n  margin-bottom: 2rem;\n}\n.product[data-v-378748bc]:hover {\n  opacity: 0.9;\n}\n.product .product-rating[data-v-378748bc] {\n  padding: 1rem;\n  background: #f9f9f9;\n  text-align: center;\n}\n.product .product-name[data-v-378748bc] {\n  padding: 0.5rem 0;\n  font-size: 1.2rem;\n  color: #555555;\n  text-align: center;\n  text-transform: uppercase;\n}\n.product .product-category[data-v-378748bc] {\n  padding: 0.5rem 0;\n  background: rgba(0, 0, 0, 0.03);\n  font-size: 0.9rem;\n  color: #333333;\n  text-align: center;\n}\n.product .product-more[data-v-378748bc] {\n  padding: 0.2rem;\n  border: 2px solid #875400;\n  background: #875400;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: white;\n  text-align: center;\n}\n.product-page[data-v-378748bc] {\n  width: 90%;\n  margin: 1.5rem auto;\n  padding: 1.5rem;\n  background: #ffffff;\n}\n@media (min-width: 66em) {\n.product-page[data-v-378748bc] {\n    width: 80%;\n    margin: 4rem auto;\n    padding: 5rem;\n}\n}\n.product-page .product[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (min-width: 66em) {\n.product-page .product[data-v-378748bc] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.product-page .product .image[data-v-378748bc] {\n  margin-bottom: 2rem;\n}\n@media (min-width: 66em) {\n.product-page .product .image[data-v-378748bc] {\n    -ms-flex-preferred-size: 46%;\n        flex-basis: 46%;\n    margin-bottom: 0;\n}\n}\n.product-page .product .details[data-v-378748bc] {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n}\n.product-page .product .details__name[data-v-378748bc] {\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__category[data-v-378748bc] {\n  margin-bottom: 2rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__info[data-v-378748bc] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  font-size: 0.95rem;\n  line-height: 2rem;\n  text-align: justify;\n}\n.product-page .product .details__more[data-v-378748bc] {\n  padding: 0.5rem 2rem;\n  border: 1px solid #ffffff;\n  background: #875400;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n}\n.product-page .product .details__more[data-v-378748bc]:hover {\n  background: #d8a550;\n}\n.contact-form[data-v-378748bc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #f9f9f9;\n}\n@media (min-width: 40em) {\n.contact-form[data-v-378748bc] {\n    padding: 2rem;\n}\n}\n.contact-form label[data-v-378748bc] {\n  margin-bottom: 0.3rem;\n  color: #333333;\n}\n.contact-form span[data-v-378748bc] {\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  color: red;\n}\n.contact-form .error[data-v-378748bc] {\n  border: 1px solid red !important;\n}\n.contact-form input[data-v-378748bc] {\n  height: 40px;\n}\n.contact-form input[data-v-378748bc]:not([type=submit]),\n.contact-form textarea[data-v-378748bc] {\n  margin-bottom: 0.3rem;\n  padding: 0.25rem 1rem;\n  outline: 0;\n  border: 1px solid #875400;\n  font-weight: 400;\n  color: #333333;\n}\n.contact-form textarea[data-v-378748bc] {\n  height: 180px;\n  padding-top: 0.5rem;\n}\n.contact-form input[type=submit][data-v-378748bc] {\n  width: 150px;\n  margin-top: 1rem;\n  outline: 0;\n  border: 0;\n  background: #875400;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.contact-form input[type=submit][data-v-378748bc]:hover {\n  background: #d39a3b;\n}\n.contact-form input[type=submit].disabled[data-v-378748bc] {\n  background: #d39a3b;\n}\n.subscribe[data-v-378748bc] {\n  position: relative;\n  display: none;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 6rem 0;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background: #d8a550;\n  overflow: hidden;\n}\n@media (min-width: 40em) {\n.subscribe[data-v-378748bc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n}\n.subscribe[data-v-378748bc]::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 200px;\n  -webkit-transform: skewY(170deg);\n          transform: skewY(170deg);\n  background: -webkit-gradient(linear, right top, left top, from(#d8a550), to(#875400));\n  background: linear-gradient(-90deg, #d8a550, #875400);\n  content: \"\";\n}\n.subscribe form[data-v-378748bc] {\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 5px solid white;\n}\n.subscribe__input[data-v-378748bc] {\n  width: 340px;\n  padding: 0.6rem;\n  outline: none;\n  border: none;\n  border-right: none;\n  font-size: 1.3rem;\n  font-style: italic;\n  color: #333333;\n}\n.subscribe__submit[data-v-378748bc] {\n  padding: 0.6rem 2rem;\n  outline: none;\n  border: 2px solid #7a571b;\n  background: #7a571b;\n  font-weight: 800;\n  color: #ffffff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.subscribe__submit[data-v-378748bc]:hover {\n  border: 2px solid #7a571b;\n  background: #ffffff;\n  color: #7a571b;\n  -webkit-animation: pulse-data-v-378748bc 200ms;\n          animation: pulse-data-v-378748bc 200ms;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate-data-v-2500b432 {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-data-v-2500b432 {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes fadeIn-data-v-2500b432 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeIn-data-v-2500b432 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes slideDownFade-data-v-2500b432 {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes slideDownFade-data-v-2500b432 {\nfrom {\n    height: 0;\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes error-data-v-2500b432 {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@keyframes error-data-v-2500b432 {\n10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n}\n20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n}\n30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n}\n40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n}\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\n}\n@-webkit-keyframes waveAnimateA-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateA-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-80px, 5px);\n            transform: translate(-80px, 5px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateB-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@keyframes waveAnimateB-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n100% {\n    -webkit-transform: translate(80px, 0);\n            transform: translate(80px, 0);\n}\n}\n@-webkit-keyframes waveAnimateC-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@keyframes waveAnimateC-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-20px, 5px);\n            transform: translate(-20px, 5px);\n}\n100% {\n    -webkit-transform: translate(-80px, 10px);\n            transform: translate(-80px, 10px);\n}\n}\n@-webkit-keyframes bounce-data-v-2500b432 {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@keyframes bounce-data-v-2500b432 {\nfrom, 20%, 53%, 80%, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n40%, 43% {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n70% {\n    -webkit-transform: translate3d(0, -15px, 0);\n            transform: translate3d(0, -15px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n            transform: translate3d(0, -4px, 0);\n}\n}\n@-webkit-keyframes pulse-data-v-2500b432 {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes pulse-data-v-2500b432 {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n            transform: scale3d(1.05, 1.05, 1.05);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes zoomOutDown-data-v-2500b432 {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@keyframes zoomOutDown-data-v-2500b432 {\n40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\nto {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n}\n}\n@-webkit-keyframes slideInLeft-data-v-2500b432 {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-data-v-2500b432 {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes slideInRight-data-v-2500b432 {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-data-v-2500b432 {\nfrom {\n    visibility: visible;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes swing-data-v-2500b432 {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@keyframes swing-data-v-2500b432 {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@-webkit-keyframes tada-data-v-2500b432 {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes tada-data-v-2500b432 {\nfrom {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n}\n30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n}\n40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n}\nto {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@-webkit-keyframes slideUpFadeIn-data-v-2500b432 {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@keyframes slideUpFadeIn-data-v-2500b432 {\n0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 40px);\n            transform: translate(0, 40px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n}\n@-webkit-keyframes leftright-data-v-2500b432 {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@keyframes leftright-data-v-2500b432 {\n0% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n50% {\n    -webkit-transform: skewY(0deg);\n            transform: skewY(0deg);\n}\n100% {\n    -webkit-transform: skewY(0.4deg);\n            transform: skewY(0.4deg);\n}\n}\n@-webkit-keyframes spin-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@keyframes spin-data-v-2500b432 {\n0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n@-webkit-keyframes fade-data-v-2500b432 {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n@keyframes fade-data-v-2500b432 {\nfrom {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n50% {\n    opacity: 0.8;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n}\nto {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n}\n}\n*[data-v-2500b432] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[data-v-2500b432] {\n  background: #f9f9f9;\n  font-family: Roboto, arial, sans-serif;\n}\nimg[data-v-2500b432] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n}\n.container[data-v-2500b432] {\n  max-width: 75rem;\n  margin: 0 auto;\n}\n.b-links a[data-v-2500b432] {\n  display: block;\n  margin-top: 0.7rem;\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.b-links a[data-v-2500b432]:hover {\n  color: #d8a550;\n}\n.b-icons .icon[data-v-2500b432] {\n  margin-top: 1rem;\n  margin-right: 1rem;\n  padding: 1.2rem;\n  border: 2px solid #cccccc;\n  border-radius: 100%;\n  background: #cccccc;\n}\n.b-icons .icon a[data-v-2500b432] {\n  color: #333333;\n}\n.b-icons .icon[data-v-2500b432]:hover {\n  border: 2px solid #d8a550;\n}\n.b-icons .icon:hover a[data-v-2500b432] {\n  color: #d8a550;\n}\n.footer .content[data-v-2500b432] {\n  font-size: 0.9rem;\n  color: #cccccc;\n}\n.footer .content strong[data-v-2500b432] {\n  color: #eeeeee;\n}\n.footer .content h3[data-v-2500b432] {\n  display: inline-block;\n  border-bottom: 2px dashed #d8a550;\n  line-height: 3rem;\n}\n.b-stylish-footer[data-v-2500b432] {\n  position: relative;\n  height: 60px;\n  background: -webkit-gradient(linear, left top, right top, from(#2a2a2a), to(#222222));\n  background: linear-gradient(to right, #2a2a2a, #222222);\n  overflow: hidden;\n}\n.b-stylish-footer[data-v-2500b432]::before {\n  position: absolute;\n  top: 0;\n  right: 10%;\n  width: 100%;\n  height: 300px;\n  -webkit-transform: skewY(330deg);\n          transform: skewY(330deg);\n  background: -webkit-gradient(linear, left top, right top, from(#222222), to(#2a2a2a));\n  background: linear-gradient(to right, #222222, #2a2a2a);\n  content: \"\";\n}\n.footer .column[data-v-2500b432] {\n  margin-top: 1.2rem;\n  margin-bottom: 1.2rem;\n}\n.contact h1[data-v-2500b432] {\n  margin-bottom: 2rem;\n  padding: 1rem;\n  border-bottom: 2px solid #875400;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #444444;\n}\n.contact p[data-v-2500b432] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-left: 5px solid #875400;\n  border-radius: 5px;\n  background: -webkit-gradient(linear, right top, left top, from(#f9f9f9), to(#ffffff));\n  background: linear-gradient(to left, #f9f9f9, #ffffff);\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n  word-wrap: break-word;\n}\n.header[data-v-2500b432] {\n  position: relative;\n  background: #ffffff;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n}\n.header .container[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.logo[data-v-2500b432] {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  padding: 0.5rem;\n}\n.navbar[data-v-2500b432] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  z-index: 3000;\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4;\n  width: 0;\n  height: auto;\n  min-height: 800px;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n@media (min-width: 66em) {\n.navbar[data-v-2500b432] {\n    position: initial;\n    width: auto;\n    height: auto;\n    min-height: initial;\n    overflow-y: hidden;\n}\n}\n.navbar--toggle[data-v-2500b432] {\n  width: 100%;\n}\n@media (min-width: 66em) {\n.navbar--toggle[data-v-2500b432] {\n    width: auto;\n}\n}\n.navbar a[data-v-2500b432] {\n  display: block;\n  padding: 1rem;\n  color: #111111;\n  text-decoration: none;\n}\n.navbar a[data-v-2500b432]:hover {\n  color: #d8a550;\n}\n.menu[data-v-2500b432] {\n  list-style: none;\n}\n.menu .submenu[data-v-2500b432] {\n  display: none;\n  -webkit-animation: slideUpFadeIn-data-v-2500b432 400ms;\n          animation: slideUpFadeIn-data-v-2500b432 400ms;\n}\n@media (min-width: 66em) {\n.menu .submenu[data-v-2500b432] {\n    position: absolute;\n    top: 85px;\n    z-index: 2000;\n    min-width: 200px;\n    background: #ffffff;\n}\n}\n.menu .submenu__item[data-v-2500b432] {\n  display: block;\n  border-top: 1px solid #eeeeee;\n  border-right: 1px solid #eeeeee;\n  border-left: 1px solid #eeeeee;\n  text-align: right;\n}\n@media (min-width: 66em) {\n.menu .submenu__item[data-v-2500b432] {\n    text-align: center;\n}\n}\n.menu__item[data-v-2500b432] {\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n  text-align: center;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-2500b432] {\n    display: table-cell;\n    width: auto;\n    border: none;\n    text-align: initial;\n}\n}\n.menu__item[data-v-2500b432]:last-child {\n  border-bottom: 0;\n}\n.menu__item[data-v-2500b432]:first-child {\n  border-top: 1px solid #eeeeee;\n}\n@media (min-width: 66em) {\n.menu__item[data-v-2500b432]:first-child {\n    border-top: none;\n}\n}\n.menu__item:hover .submenu[data-v-2500b432] {\n  display: block;\n}\n.langbar[data-v-2500b432] {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n@media (min-width: 66em) {\n.langbar[data-v-2500b432] {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n}\n}\n.toggle[data-v-2500b432] {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: 0;\n  background: none;\n  cursor: pointer;\n}\n@media (min-width: 66em) {\n.toggle[data-v-2500b432] {\n    display: none;\n}\n}\n.toggle__bar[data-v-2500b432] {\n  display: block;\n  width: 35px;\n  height: 5px;\n  margin: 6px 0;\n  background-color: #d8a550;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.toggle--change .toggle__bar[data-v-2500b432]:first-child {\n  -webkit-transform: rotate(-45deg) translate(-8px, 8px);\n          transform: rotate(-45deg) translate(-8px, 8px);\n}\n.toggle--change .toggle__bar[data-v-2500b432]:nth-of-type(2) {\n  opacity: 0;\n}\n.toggle--change .toggle__bar[data-v-2500b432]:last-child {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n          transform: rotate(45deg) translate(-8px, -8px);\n}\n.accordion[data-v-2500b432] {\n  margin: 2rem auto;\n}\n.accordion_item .head[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  border-top: none;\n  border-radius: 5px;\n  background: #efdbb8;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  color: #875400;\n  cursor: pointer;\n}\n.accordion_item .head span[data-v-2500b432] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.accordion_item .head i[data-v-2500b432] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n.accordion_item .head--active[data-v-2500b432] {\n  background: #d8a550;\n}\n.accordion_item:last-child .body.body--active[data-v-2500b432] {\n  border-bottom: 1px solid #cccccc;\n}\n.accordion_item .body[data-v-2500b432] {\n  height: 100%;\n  max-height: 0;\n  border-top: none;\n  border-bottom: none;\n  border-radius: 5px;\n  background: #ffffff;\n  -webkit-transition: max-height 500ms ease;\n  transition: max-height 500ms ease;\n  overflow: hidden;\n}\n.accordion_item .body .content[data-v-2500b432] {\n  padding: 1rem;\n  font-size: 0.9rem;\n}\n.accordion_item .body--active[data-v-2500b432] {\n  max-height: 1000px;\n  -webkit-box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);\n}\n.google-map[data-v-2500b432] {\n  width: 100%;\n  height: 200px;\n}\n@media (min-width: 40em) {\n.google-map[data-v-2500b432] {\n    width: 100%;\n    height: 400px;\n}\n}\n.process-button[data-v-2500b432] {\n  position: relative;\n  padding: 2rem;\n}\n.loading[data-v-2500b432] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 0.5rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #333333;\n  border-right: 6px solid #333333;\n  border-radius: 50%;\n  -webkit-animation: spin-data-v-2500b432 1s linear infinite;\n          animation: spin-data-v-2500b432 1s linear infinite;\n}\n.loading.left[data-v-2500b432] {\n  left: 4%;\n}\n.loading.center[data-v-2500b432] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.loading.rel[data-v-2500b432] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  -webkit-transform: none;\n          transform: none;\n}\n.line[data-v-2500b432] {\n  position: relative;\n  width: 100%;\n  margin: -1px auto;\n  padding: 2rem 0;\n  background: -webkit-gradient(linear, left top, right top, from(#d8a550), to(#875400));\n  background: linear-gradient(to right, #d8a550, #875400);\n  overflow: hidden;\n}\n.line[data-v-2500b432]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, 40deg);\n          transform: skew(0deg, 40deg);\n  background: #ffffff;\n}\n.line[data-v-2500b432]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  -webkit-transform: skew(0deg, -40deg);\n          transform: skew(0deg, -40deg);\n  background: #ffffff;\n}\n.hframe[data-v-2500b432] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n@media (min-width: 40em) {\n.hframe[data-v-2500b432] {\n    height: 350px;\n}\n}\n@media (min-width: 66em) {\n.hframe[data-v-2500b432] {\n    height: 500px;\n}\n}\n.hframe img[data-v-2500b432] {\n  width: 100%;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.hframe h1[data-v-2500b432] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 1rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: Roboto, serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n@media (min-width: 40em) {\n.hframe h1[data-v-2500b432] {\n    font-size: 4rem;\n}\n}\n.hframe h1[data-v-2500b432]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  width: 40%;\n  height: 4px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #ffffff;\n}\n.home-card[data-v-2500b432] {\n  position: relative;\n  padding: 2rem;\n  overflow: hidden;\n  font-size: 15px;\n  line-height: 2;\n  color: #000000;\n  text-align: justify;\n}\n.home-card[data-v-2500b432]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: -20px 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.home-card[data-v-2500b432]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background: #875400;\n  -webkit-box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 200px 40px rgba(0, 0, 0, 0.1);\n}\n.construction[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 5rem 2rem;\n  background: #d39a3b;\n  font-size: 2rem;\n  font-weight: 300;\n  color: #ffffff;\n}\n.image-frame[data-v-2500b432] {\n  min-height: 150px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.image-frame img[data-v-2500b432] {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n}\n.image-frame img[data-v-2500b432]:hover {\n  opacity: 0.8;\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n.range-gallery[data-v-2500b432] {\n  display: block;\n  width: 40%;\n  height: 5px;\n  margin: 2rem auto;\n  -webkit-appearance: none;\n  outline: 0;\n  background: #cccccc;\n  cursor: pointer;\n}\n.range-gallery[data-v-2500b432]::-webkit-slider-thumb {\n  width: 10px;\n  height: 15px;\n  -webkit-appearance: none;\n  background: #aaaaaa;\n  cursor: pointer;\n}\n.right-close[data-v-2500b432] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.blocks[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n@media (min-width: 66em) {\n.blocks[data-v-2500b432] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.blocks .block[data-v-2500b432] {\n  margin-right: 2rem;\n  padding-right: 2rem;\n}\n@media (min-width: 66em) {\n.blocks .block[data-v-2500b432] {\n    border-right: 1px solid #eeeeee;\n}\n.blocks .block[data-v-2500b432]:last-child {\n    border-right: none;\n}\n}\n.rating[data-v-2500b432] {\n  padding: 0.25rem 0;\n  font-size: 0.9rem;\n  color: #666666;\n}\n.rating .count[data-v-2500b432] {\n  display: inline-block;\n  width: 40px;\n}\n.rating .total[data-v-2500b432] {\n  margin-left: 1rem;\n}\n.rating .avg[data-v-2500b432] {\n  margin-bottom: 0.5rem;\n  font-weight: 800;\n  color: #444444;\n  text-transform: uppercase;\n}\n.rating .checked[data-v-2500b432] {\n  color: orange;\n}\n.rating .fa[data-v-2500b432] {\n  cursor: pointer;\n}\n.review-block[data-v-2500b432] {\n  margin-top: 4rem;\n}\n.review-heading[data-v-2500b432] {\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #eeeeee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #555555;\n  text-transform: uppercase;\n}\n.review[data-v-2500b432] {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px dashed #eeeeee;\n}\n.review .review-title[data-v-2500b432] {\n  font-weight: 600;\n}\n.review .review-title span[data-v-2500b432] {\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n.review .review-message[data-v-2500b432] {\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.review-write[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.review-write input[data-v-2500b432] {\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n@media (min-width: 40em) {\n.review-write input[data-v-2500b432] {\n    width: 50%;\n}\n}\n@media (min-width: 66em) {\n.review-write input[data-v-2500b432] {\n    width: 30%;\n}\n}\n.review-write textarea[data-v-2500b432] {\n  min-height: 80px;\n  margin-top: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  outline: none;\n  border: 1px solid #dddddd;\n  font-size: 1rem;\n}\n.review-write button[data-v-2500b432] {\n  width: 150px;\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ffffff;\n  background: #ce8000;\n  color: #ffffff;\n  cursor: pointer;\n}\n.review-write button[data-v-2500b432]:hover {\n  background: #d8a550;\n}\n.review-write button.disabled[data-v-2500b432] {\n  background: #d8a550;\n}\n.product[data-v-2500b432] {\n  margin-bottom: 2rem;\n}\n.product[data-v-2500b432]:hover {\n  opacity: 0.9;\n}\n.product .product-rating[data-v-2500b432] {\n  padding: 1rem;\n  background: #f9f9f9;\n  text-align: center;\n}\n.product .product-name[data-v-2500b432] {\n  padding: 0.5rem 0;\n  font-size: 1.2rem;\n  color: #555555;\n  text-align: center;\n  text-transform: uppercase;\n}\n.product .product-category[data-v-2500b432] {\n  padding: 0.5rem 0;\n  background: rgba(0, 0, 0, 0.03);\n  font-size: 0.9rem;\n  color: #333333;\n  text-align: center;\n}\n.product .product-more[data-v-2500b432] {\n  padding: 0.2rem;\n  border: 2px solid #875400;\n  background: #875400;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: white;\n  text-align: center;\n}\n.product-page[data-v-2500b432] {\n  width: 90%;\n  margin: 1.5rem auto;\n  padding: 1.5rem;\n  background: #ffffff;\n}\n@media (min-width: 66em) {\n.product-page[data-v-2500b432] {\n    width: 80%;\n    margin: 4rem auto;\n    padding: 5rem;\n}\n}\n.product-page .product[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (min-width: 66em) {\n.product-page .product[data-v-2500b432] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n}\n.product-page .product .image[data-v-2500b432] {\n  margin-bottom: 2rem;\n}\n@media (min-width: 66em) {\n.product-page .product .image[data-v-2500b432] {\n    -ms-flex-preferred-size: 46%;\n        flex-basis: 46%;\n    margin-bottom: 0;\n}\n}\n.product-page .product .details[data-v-2500b432] {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n}\n.product-page .product .details__name[data-v-2500b432] {\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__category[data-v-2500b432] {\n  margin-bottom: 2rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.product-page .product .details__info[data-v-2500b432] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  font-size: 0.95rem;\n  line-height: 2rem;\n  text-align: justify;\n}\n.product-page .product .details__more[data-v-2500b432] {\n  padding: 0.5rem 2rem;\n  border: 1px solid #ffffff;\n  background: #875400;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n}\n.product-page .product .details__more[data-v-2500b432]:hover {\n  background: #d8a550;\n}\n.contact-form[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #f9f9f9;\n}\n@media (min-width: 40em) {\n.contact-form[data-v-2500b432] {\n    padding: 2rem;\n}\n}\n.contact-form label[data-v-2500b432] {\n  margin-bottom: 0.3rem;\n  color: #333333;\n}\n.contact-form span[data-v-2500b432] {\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  color: red;\n}\n.contact-form .error[data-v-2500b432] {\n  border: 1px solid red !important;\n}\n.contact-form input[data-v-2500b432] {\n  height: 40px;\n}\n.contact-form input[data-v-2500b432]:not([type=submit]),\n.contact-form textarea[data-v-2500b432] {\n  margin-bottom: 0.3rem;\n  padding: 0.25rem 1rem;\n  outline: 0;\n  border: 1px solid #875400;\n  font-weight: 400;\n  color: #333333;\n}\n.contact-form textarea[data-v-2500b432] {\n  height: 180px;\n  padding-top: 0.5rem;\n}\n.contact-form input[type=submit][data-v-2500b432] {\n  width: 150px;\n  margin-top: 1rem;\n  outline: 0;\n  border: 0;\n  background: #875400;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.contact-form input[type=submit][data-v-2500b432]:hover {\n  background: #d39a3b;\n}\n.contact-form input[type=submit].disabled[data-v-2500b432] {\n  background: #d39a3b;\n}\n.testimonials[data-v-2500b432] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1rem;\n  background: #d8a550;\n}\n@media (min-width: 66em) {\n.testimonials[data-v-2500b432] {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 4rem;\n}\n}\n.testimonials .prev[data-v-2500b432],\n.testimonials .next[data-v-2500b432] {\n  -webkit-box-shadow: 0 6px 35px 3px rgba(135, 84, 0, 0.9);\n          box-shadow: 0 6px 35px 3px rgba(135, 84, 0, 0.9);\n  cursor: pointer;\n}\n.testimonials .prev[data-v-2500b432]:hover,\n.testimonials .next[data-v-2500b432]:hover {\n  width: 120px;\n  height: 120px;\n  border: 5px solid white;\n  -webkit-box-shadow: 0 0 60px 10px rgba(135, 84, 0, 0.9);\n          box-shadow: 0 0 60px 10px rgba(135, 84, 0, 0.9);\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n}\n.testimonials img[data-v-2500b432] {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 1rem;\n  border: 5px solid white;\n  border-radius: 100%;\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n}\n@media (min-width: 40em) {\n.testimonials img[data-v-2500b432] {\n    width: 140px;\n    height: 140px;\n    border: none;\n}\n}\n.testimonials .testimonial[data-v-2500b432] {\n  position: relative;\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1;\n  max-width: 600px;\n  min-height: 300px;\n  margin-bottom: 2rem;\n  padding: 1rem 2rem;\n  background: #ffffff;\n  -webkit-box-shadow: 0 6px 35px 3px rgba(135, 84, 0, 0.9);\n          box-shadow: 0 6px 35px 3px rgba(135, 84, 0, 0.9);\n  overflow: hidden;\n  text-align: center;\n  -webkit-perspective: 1px;\n          perspective: 1px;\n}\n@media (min-width: 772px) {\n.testimonials .testimonial[data-v-2500b432] {\n    -webkit-box-ordinal-group: initial;\n        -ms-flex-order: initial;\n            order: initial;\n    margin-bottom: 0;\n    padding: 2rem;\n}\n}\n.testimonials .testimonial[data-v-2500b432]:hover {\n  -webkit-animation: pulse-data-v-2500b432 300ms;\n          animation: pulse-data-v-2500b432 300ms;\n}\n.testimonials .testimonial[data-v-2500b432]::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -10;\n  height: 130px;\n  -webkit-transform: prespective-3d;\n          transform: prespective-3d;\n  -webkit-transform: 0;\n          transform: 0;\n  background: #f1f1f1;\n  content: \"\";\n}\n@media (min-width: 40em) {\n.testimonials .testimonial[data-v-2500b432]::before {\n    height: 100px;\n    -webkit-transform: rotateX(45deg);\n            transform: rotateX(45deg);\n}\n}\n.testimonials .testimonial i[data-v-2500b432] {\n  display: block;\n  color: #555555;\n}\n.testimonials .testimonial i.fa-quote-left[data-v-2500b432] {\n  margin-bottom: 1rem;\n  text-align: left;\n}\n.testimonials .testimonial i.fa-quote-right[data-v-2500b432] {\n  margin-top: 1rem;\n  text-align: right;\n}\n.testimonials .testimonial img[data-v-2500b432] {\n  z-index: 10;\n  border: 10px solid #ffffff;\n}\n.testimonials .testimonial p[data-v-2500b432] {\n  margin-top: 1rem;\n  font-weight: 300;\n  line-height: 2rem;\n  color: #555555;\n}\n@media (min-width: 40em) {\n.testimonials .testimonial p[data-v-2500b432] {\n    padding: 0 3rem;\n}\n}\n.testimonials .testimonial h3[data-v-2500b432] {\n  margin-top: 2rem;\n  font-weight: 400;\n  color: #555555;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/blueimp-gallery/css/blueimp-gallery.min.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/blueimp-gallery/css/blueimp-gallery.min.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";.blueimp-gallery,.blueimp-gallery>.slides>.slide>.slide-content{position:absolute;top:0;right:0;bottom:0;left:0;-moz-backface-visibility:hidden}.blueimp-gallery>.slides>.slide>.slide-content{margin:auto;width:auto;height:auto;max-width:100%;max-height:100%;opacity:1}.blueimp-gallery{position:fixed;z-index:999999;overflow:hidden;background:#000;background:rgba(0,0,0,.9);opacity:0;display:none;direction:ltr;-ms-touch-action:none;touch-action:none}.blueimp-gallery-carousel{position:relative;z-index:auto;margin:1em auto;padding-bottom:56.25%;-webkit-box-shadow:0 0 10px #000;box-shadow:0 0 10px #000;-ms-touch-action:pan-y;touch-action:pan-y}.blueimp-gallery-display{display:block;opacity:1}.blueimp-gallery>.slides{position:relative;height:100%;overflow:hidden}.blueimp-gallery-carousel>.slides{position:absolute}.blueimp-gallery>.slides>.slide{position:relative;float:left;height:100%;text-align:center;-webkit-transition-timing-function:cubic-bezier(.645,.045,.355,1);transition-timing-function:cubic-bezier(.645,.045,.355,1)}.blueimp-gallery,.blueimp-gallery>.slides>.slide>.slide-content{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.blueimp-gallery>.slides>.slide-loading{background:url(" + escape(__webpack_require__(/*! ../img/loading.gif */ "./node_modules/blueimp-gallery/img/loading.gif")) + ") center no-repeat;background-size:64px 64px}.blueimp-gallery>.slides>.slide-loading>.slide-content{opacity:0}.blueimp-gallery>.slides>.slide-error{background:url(" + escape(__webpack_require__(/*! ../img/error.png */ "./node_modules/blueimp-gallery/img/error.png")) + ") center no-repeat}.blueimp-gallery>.slides>.slide-error>.slide-content{display:none}.blueimp-gallery>.next,.blueimp-gallery>.prev{position:absolute;top:50%;left:15px;width:40px;height:40px;margin-top:-23px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:60px;font-weight:100;line-height:30px;color:#fff;text-decoration:none;text-shadow:0 0 2px #000;text-align:center;background:#222;background:rgba(0,0,0,.5);-webkit-box-sizing:content-box;box-sizing:content-box;border:3px solid #fff;border-radius:23px;opacity:.5;cursor:pointer;display:none}.blueimp-gallery>.next{left:auto;right:15px}.blueimp-gallery>.close,.blueimp-gallery>.title{position:absolute;top:15px;left:15px;margin:0 40px 0 0;font-size:20px;line-height:30px;color:#fff;text-shadow:0 0 2px #000;opacity:.8;display:none}.blueimp-gallery>.close{padding:15px;right:15px;left:auto;margin:-15px;font-size:30px;text-decoration:none;cursor:pointer}.blueimp-gallery>.play-pause{position:absolute;right:15px;bottom:15px;width:15px;height:15px;background:url(" + escape(__webpack_require__(/*! ../img/play-pause.png */ "./node_modules/blueimp-gallery/img/play-pause.png")) + ") 0 0 no-repeat;cursor:pointer;opacity:.5;display:none}.blueimp-gallery-playing>.play-pause{background-position:-15px 0}.blueimp-gallery>.close:hover,.blueimp-gallery>.next:hover,.blueimp-gallery>.play-pause:hover,.blueimp-gallery>.prev:hover,.blueimp-gallery>.title:hover{color:#fff;opacity:1}.blueimp-gallery-controls>.close,.blueimp-gallery-controls>.next,.blueimp-gallery-controls>.play-pause,.blueimp-gallery-controls>.prev,.blueimp-gallery-controls>.title{display:block;-webkit-transform:translateZ(0);transform:translateZ(0)}.blueimp-gallery-left>.prev,.blueimp-gallery-right>.next,.blueimp-gallery-single>.next,.blueimp-gallery-single>.play-pause,.blueimp-gallery-single>.prev{display:none}.blueimp-gallery>.close,.blueimp-gallery>.next,.blueimp-gallery>.play-pause,.blueimp-gallery>.prev,.blueimp-gallery>.slides>.slide>.slide-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body:last-child .blueimp-gallery>.slides>.slide-error{background-image:url(" + escape(__webpack_require__(/*! ../img/error.svg */ "./node_modules/blueimp-gallery/img/error.svg")) + ")}body:last-child .blueimp-gallery>.play-pause{width:20px;height:20px;background-size:40px 20px;background-image:url(" + escape(__webpack_require__(/*! ../img/play-pause.svg */ "./node_modules/blueimp-gallery/img/play-pause.svg")) + ")}body:last-child .blueimp-gallery-playing>.play-pause{background-position:-20px 0}*+html .blueimp-gallery>.slides>.slide{min-height:300px}*+html .blueimp-gallery>.slides>.slide>.slide-content{position:relative}.blueimp-gallery>.indicator{position:absolute;top:auto;right:15px;bottom:15px;left:15px;margin:0 40px;padding:0;list-style:none;text-align:center;line-height:10px;display:none}.blueimp-gallery>.indicator>li{display:inline-block;width:9px;height:9px;margin:6px 3px 0 3px;-webkit-box-sizing:content-box;box-sizing:content-box;border:1px solid transparent;background:#ccc;background:rgba(255,255,255,.25) center no-repeat;border-radius:5px;-webkit-box-shadow:0 0 2px #000;box-shadow:0 0 2px #000;opacity:.5;cursor:pointer}.blueimp-gallery>.indicator>.active,.blueimp-gallery>.indicator>li:hover{background-color:#fff;border-color:#fff;opacity:1}.blueimp-gallery>.indicator>li:after{opacity:0;display:block;position:absolute;content:'';top:-5em;width:75px;height:75px;-webkit-transition:opacity .4s ease-out,-webkit-transform .6s ease-out;transition:opacity .4s ease-out,-webkit-transform .6s ease-out;transition:transform .6s ease-out,opacity .4s ease-out;transition:transform .6s ease-out,opacity .4s ease-out,-webkit-transform .6s ease-out;-webkit-transform:translateX(-50%) translateY(0) translateZ(0);transform:translateX(-50%) translateY(0) translateZ(0);pointer-events:none}.blueimp-gallery>.indicator>li:hover:after{opacity:1;border-radius:50%;background:inherit;-webkit-transform:translateX(-50%) translateY(-5px) translateZ(0);transform:translateX(-50%) translateY(-5px) translateZ(0)}.blueimp-gallery>.indicator>.active:after{display:none}.blueimp-gallery-controls>.indicator{display:block;-webkit-transform:translateZ(0);transform:translateZ(0)}.blueimp-gallery-single>.indicator{display:none}.blueimp-gallery>.indicator{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}*+html .blueimp-gallery>.indicator>li{display:inline}.blueimp-gallery>.slides>.slide>.video-content>img{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:auto;height:auto;max-width:100%;max-height:100%;-moz-backface-visibility:hidden}.blueimp-gallery>.slides>.slide>.video-content>video{position:absolute;top:0;left:0;width:100%;height:100%}.blueimp-gallery>.slides>.slide>.video-content>iframe{position:absolute;top:100%;left:0;width:100%;height:100%;border:none}.blueimp-gallery>.slides>.slide>.video-playing>iframe{top:0}.blueimp-gallery>.slides>.slide>.video-content>a{position:absolute;top:50%;right:0;left:0;margin:-64px auto 0;width:128px;height:128px;background:url(" + escape(__webpack_require__(/*! ../img/video-play.png */ "./node_modules/blueimp-gallery/img/video-play.png")) + ") center no-repeat;opacity:.8;cursor:pointer}.blueimp-gallery>.slides>.slide>.video-content>a:hover{opacity:1}.blueimp-gallery>.slides>.slide>.video-playing>a,.blueimp-gallery>.slides>.slide>.video-playing>img{display:none}.blueimp-gallery>.slides>.slide>.video-content>video{display:none}.blueimp-gallery>.slides>.slide>.video-playing>video{display:block}.blueimp-gallery>.slides>.slide>.video-loading>a{background:url(" + escape(__webpack_require__(/*! ../img/loading.gif */ "./node_modules/blueimp-gallery/img/loading.gif")) + ") center no-repeat;background-size:64px 64px}body:last-child .blueimp-gallery>.slides>.slide>.video-content:not(.video-loading)>a{background-image:url(" + escape(__webpack_require__(/*! ../img/video-play.svg */ "./node_modules/blueimp-gallery/img/video-play.svg")) + ")}*+html .blueimp-gallery>.slides>.slide>.video-content{height:100%}*+html .blueimp-gallery>.slides>.slide>.video-content>a{left:50%;margin-left:-64px}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/sass-resources-loader/lib/loader.js??ref--7-4!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", { staticClass: "loading rel" })
    : _c(
        "div",
        {
          staticClass: "container section columns has-background-white",
          staticStyle: { margin: "2rem auto" }
        },
        [
          _c(
            "nav",
            { staticClass: "panel column is-one-fifth" },
            [
              _c("p", { staticClass: "panel-heading" }, [_vm._v("Spices")]),
              _vm._v(" "),
              _vm._l(
                _vm.categories.filter(function(ref) {
                  var name = ref.name

                  return this$1.spices.includes(name)
                }),
                function(category) {
                  return _c(
                    "a",
                    {
                      key: category.id,
                      staticClass: "panel-block",
                      class: { "is-active": _vm.selected == category.id },
                      on: {
                        click: function($event) {
                          return _vm.select(category.id)
                        }
                      }
                    },
                    [
                      _vm._m(0, true),
                      _vm._v("\n        " + _vm._s(category.name) + "\n    ")
                    ]
                  )
                }
              ),
              _vm._v(" "),
              _c("p", { staticClass: "panel-heading" }, [_vm._v("Nuts")]),
              _vm._v(" "),
              _vm._l(
                _vm.categories.filter(function(ref) {
                  var name = ref.name

                  return this$1.nuts.includes(name)
                }),
                function(category) {
                  return _c(
                    "a",
                    {
                      key: category.id,
                      staticClass: "panel-block",
                      class: { "is-active": _vm.selected == category.id },
                      on: {
                        click: function($event) {
                          return _vm.select(category.id)
                        }
                      }
                    },
                    [
                      _vm._m(1, true),
                      _vm._v("\n        " + _vm._s(category.name) + "\n    ")
                    ]
                  )
                }
              ),
              _vm._v(" "),
              _c("p", { staticClass: "panel-heading" }, [
                _vm._v("Dried Fruits")
              ]),
              _vm._v(" "),
              _vm._l(
                _vm.categories.filter(function(ref) {
                  var name = ref.name

                  return this$1.dried.includes(name)
                }),
                function(category) {
                  return _c(
                    "a",
                    {
                      key: category.id,
                      staticClass: "panel-block",
                      class: { "is-active": _vm.selected == category.id },
                      on: {
                        click: function($event) {
                          return _vm.select(category.id)
                        }
                      }
                    },
                    [
                      _vm._m(2, true),
                      _vm._v("\n        " + _vm._s(category.name) + "\n    ")
                    ]
                  )
                }
              ),
              _vm._v(" "),
              _c("p", { staticClass: "panel-heading" }, [_vm._v("Services")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "panel-block",
                  class: { "is-active": _vm.selected == 99 },
                  on: {
                    click: function($event) {
                      return _vm.select(99)
                    }
                  }
                },
                [_vm._m(3), _vm._v("\n        Logistics\n    ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "panel-block" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-link is-outlined is-fullwidth",
                    on: { click: _vm.reload }
                  },
                  [_vm._v("Refresh")]
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column" },
            [
              _c("ProductsComponent", {
                attrs: { category: _vm.selected },
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              })
            ],
            1
          )
        ]
      )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-shopping-basket" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-shopping-basket" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-shopping-basket" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "panel-icon" }, [
      _c("i", { staticClass: "fas fa-shopping-basket" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.loaded
    ? _c("div", { staticClass: "loading rel" })
    : _c(
        "form",
        {
          staticClass: "contact-form",
          attrs: { novalidate: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            },
            keydown: function($event) {
              return _vm.form.errors.clear($event.target.name)
            }
          }
        },
        [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Your Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            attrs: { type: "text", name: "name" },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("name")
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.form.errors.get("name")) }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("label", { attrs: { for: "email" } }, [_vm._v("Your Email")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email"
              }
            ],
            attrs: { type: "email", name: "email" },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("email")
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.form.errors.get("email")) }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("label", { attrs: { for: "subject" } }, [_vm._v("Subject")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.subject,
                expression: "form.subject"
              }
            ],
            attrs: { type: "text", name: "subject" },
            domProps: { value: _vm.form.subject },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "subject", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("subject")
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("subject"))
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("label", { attrs: { for: "message" } }, [_vm._v("Your Message")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.message,
                expression: "form.message"
              }
            ],
            attrs: { name: "message" },
            domProps: { value: _vm.form.message },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "message", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("message")
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("message"))
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.processing
            ? _c("div", { staticClass: "process-button" }, [
                _c("div", { staticClass: "loading left" })
              ])
            : _c("input", {
                attrs: {
                  type: "submit",
                  disabled: _vm.form.errors.any(),
                  value: "Send"
                }
              })
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.done
    ? _c("div", { staticClass: "notification" }, [
        _c("button", {
          staticClass: "delete",
          on: {
            click: function($event) {
              _vm.done = false
            }
          }
        }),
        _vm._v("Thanks for your contacting.\n  ")
      ])
    : _c(
        "div",
        {
          staticClass: "review-block",
          staticStyle: {
            background: "#fafafa",
            padding: "1rem",
            position: "relative"
          }
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Product ID:")]),
            _vm._v(" " + _vm._s(this.product_id))
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Product Name:")]),
            _vm._v(" " + _vm._s(this.product_name))
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "review-write",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit($event)
                },
                keydown: function($event) {
                  return _vm.form.errors.clear($event.target.name)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                attrs: { type: "text", name: "name", placeholder: "Full Name" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.form.errors.has("name")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("name"))
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                attrs: {
                  type: "text",
                  name: "email",
                  placeholder: "Email Address"
                },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.form.errors.has("email")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("email"))
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.subject,
                    expression: "form.subject"
                  }
                ],
                attrs: {
                  type: "text",
                  name: "subject",
                  placeholder: "Subject"
                },
                domProps: { value: _vm.form.subject },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "subject", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.form.errors.has("subject")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("subject"))
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.message,
                    expression: "form.message"
                  }
                ],
                attrs: { placeholder: "Message", name: "message" },
                domProps: { value: _vm.form.message },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "message", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.form.errors.has("message")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("message"))
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.processing
                ? _c("div", { staticClass: "process-button" }, [
                    _c("div", { staticClass: "loading left" })
                  ])
                : _c(
                    "button",
                    {
                      class: { disabled: _vm.form.errors.any() },
                      attrs: { type: "submit", disabled: _vm.form.errors.any() }
                    },
                    [_vm._v("Send Mail")]
                  )
            ]
          )
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.offset,
          expression: "offset",
          modifiers: { number: true }
        }
      ],
      staticClass: "range-gallery",
      attrs: { type: "range", step: "3", min: "3", max: "9" },
      domProps: { value: _vm.offset },
      on: {
        change: _vm.loadImages,
        __r: function($event) {
          _vm.offset = _vm._n($event.target.value)
        },
        blur: function($event) {
          return _vm.$forceUpdate()
        }
      }
    }),
    _vm._v(" "),
    _vm.loading
      ? _c("div", { staticClass: "loading rel" })
      : _c(
          "div",
          [
            _c("PaginationComponent", {
              attrs: { pagination: _vm.pagination, offset: _vm.offset },
              on: { paginate: _vm.loadImages }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "columns is-multiline is-8" },
              _vm._l(_vm.images, function(image, key) {
                return _c("ImageComponent", {
                  key: key,
                  staticClass: "column is-one-third image-frame",
                  attrs: { src: image.url, alt: image.title },
                  nativeOn: {
                    click: function($event) {
                      _vm.index = key
                    }
                  }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("VueGalleryComponent", {
              attrs: {
                images: _vm.images,
                options: _vm.options,
                index: _vm.index
              },
              on: {
                close: function($event) {
                  _vm.index = null
                }
              }
            })
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "google-map", attrs: { id: "google-map" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("figure", { staticClass: "image" }, [
    _vm.loading ? _c("div", { staticClass: "loading rel center" }) : _vm._e(),
    _vm._v(" "),
    _c("img", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.loading,
          expression: "!loading"
        }
      ],
      attrs: { src: _vm.src, alt: _vm.alt },
      on: {
        load: function($event) {
          _vm.loading = false
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", { staticClass: "loading rel" })
    : _c(
        "div",
        { staticClass: "review-block" },
        [
          _c("p", { staticClass: "review-heading" }, [
            _vm._v("Reviews (" + _vm._s(_vm.feedbacks.length) + ")")
          ]),
          _vm._v(" "),
          _vm._l(_vm.feedbacks, function(feedback, key) {
            return _c("div", { key: key, staticClass: "review" }, [
              _c("p", { staticClass: "review-title" }, [
                _vm._v(_vm._s(feedback.title)),
                _c("span", [_vm._v(" - " + _vm._s(feedback.date))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "rating" }, [
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: feedback.rating > 0 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: feedback.rating > 1 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: feedback.rating > 2 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: feedback.rating > 3 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: feedback.rating > 4 }
                })
              ]),
              _vm._v(" "),
              _c("p", {
                staticClass: "review-message",
                domProps: { textContent: _vm._s(feedback.message) }
              })
            ])
          })
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "section pagination is-centered is-rounded",
      attrs: { role: "navigation", "aria-label": "pagination" }
    },
    [
      _c(
        "a",
        {
          staticClass: "pagination-previous",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.changePage(_vm.pagination.current_page - 1)
            }
          }
        },
        [_vm._v("Previous")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pagination-next",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.changePage(_vm.pagination.current_page + 1)
            }
          }
        },
        [_vm._v("Next page")]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "pagination-list" },
        _vm._l(_vm.pages, function(page) {
          return _c("li", { key: page }, [
            _c("a", {
              staticClass: "pagination-link",
              class: { "is-current": page == _vm.pagination.current_page },
              domProps: { textContent: _vm._s(page) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.changePage(page)
                }
              }
            })
          ])
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.loaded
    ? _c("div", { staticClass: "loading rel" })
    : _c(
        "div",
        { staticClass: "product-page" },
        [
          _c(
            "main",
            { staticClass: "product" },
            [
              _c("ImageComponent", {
                staticClass: "image image-frame",
                attrs: { src: _vm.product.image, alt: _vm.product.name }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "details" }, [
                _c("h1", {
                  staticClass: "details__name",
                  domProps: { textContent: _vm._s(_vm.product.name) }
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass: "details__category",
                  domProps: { textContent: _vm._s(_vm.product.category.name) }
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass: "details__info",
                  domProps: { textContent: _vm._s(_vm.product.content) }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "details__more",
                    on: {
                      click: function($event) {
                        _vm.showForm = true
                      }
                    }
                  },
                  [_vm._v("Contact for price")]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ContactProductComponent",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showForm,
                  expression: "showForm"
                }
              ],
              attrs: {
                product_id: _vm.product.id,
                product_name: _vm.product.name
              }
            },
            [
              _c("button", {
                staticClass: "right-close delete",
                on: {
                  click: function($event) {
                    _vm.showForm = false
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("WriteFeedbackComponent", { attrs: { id: _vm.id } }),
          _vm._v(" "),
          _c("RatingFeedbacksComponent", { attrs: { id: _vm.id } }),
          _vm._v(" "),
          _c("ListFeedbacksComponent", { attrs: { id: _vm.id } })
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "product" }, [
    _vm.loading ? _c("div", { staticClass: "loading rel" }) : _vm._e(),
    _vm._v(" "),
    _c(
      "a",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        attrs: { href: "product/" + _vm.product.id + "-" + _vm.product.slug }
      },
      [
        _c("div", { staticClass: "product-rating rating" }, [
          _c("span", { staticClass: "fa fa-star checked" }),
          _vm._v(" "),
          _c("span", {
            staticClass: "fa fa-star",
            class: { checked: _vm.rating > 1 }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "fa fa-star",
            class: { checked: _vm.rating > 2 }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "fa fa-star",
            class: { checked: _vm.rating > 3 }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "fa fa-star",
            class: { checked: _vm.rating > 4 }
          })
        ]),
        _vm._v(" "),
        _c("image-component", {
          attrs: { src: _vm.product.image, alt: _vm.product.alt }
        }),
        _vm._v(" "),
        _c("p", {
          staticClass: "product-name",
          domProps: { textContent: _vm._s(_vm.product.name) }
        }),
        _vm._v(" "),
        _c("p", {
          staticClass: "product-category",
          domProps: { textContent: _vm._s(_vm.product.category.name) }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "product-more" }, [_vm._v("View More")])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", { staticClass: "loading center" })
    : _c(
        "div",
        { staticClass: "columns is-multiline" },
        _vm._l(_vm.products, function(product, key) {
          return _c("product-component", {
            key: key,
            staticClass: "column is-one-third",
            attrs: { product: product }
          })
        }),
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.loaded
    ? _c("div", { staticClass: "loading rel" })
    : _c("div", { staticClass: "review-block" }, [
        _c("p", { staticClass: "review-heading" }, [_vm._v("Public reviews")]),
        _vm._v(" "),
        _c("div", { staticClass: "blocks" }, [
          _c("div", { staticClass: "block" }, [
            _c("div", { staticClass: "rating" }, [
              _c("p", { staticClass: "avg" }, [_vm._v("Average Rating")]),
              _vm._v(" "),
              _c("span", { staticClass: "fa fa-star checked" }),
              _vm._v(" "),
              _c("span", {
                staticClass: "fa fa-star",
                class: { checked: _vm.average > 1 }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "fa fa-star",
                class: { checked: _vm.average > 2 }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "fa fa-star",
                class: { checked: _vm.average > 3 }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "fa fa-star",
                class: { checked: _vm.average > 4 }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "total" }, [
                _vm._v(_vm._s(_vm.total) + " reviews")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "block" },
            _vm._l(_vm.ratings, function(rating, key) {
              return _c("div", { key: key, staticClass: "rating" }, [
                _c("span", {
                  staticClass: "count",
                  domProps: { textContent: _vm._s(rating) }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "fa fa-star checked" }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: key > 0 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: key > 1 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: key > 2 }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "fa fa-star",
                  class: { checked: key > 3 }
                })
              ])
            }),
            0
          )
        ])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "slider" }, [
    _c(
      "div",
      {
        staticClass: "prev",
        on: {
          click: function($event) {
            return _vm.move(-1)
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
            return _vm.move(1)
          }
        }
      },
      [
        _c("svg", { staticClass: "arrow" }, [
          _c("path", {
            attrs: { d: "M 0 10 L 10 0 L 40 30 L 10 60 L 0 50 L 20 30 L 0 10" }
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "views" },
      _vm._l(_vm.slides, function(slide, index) {
        return _c("img", {
          key: index,
          class: { active: index == _vm.current },
          attrs: { src: slide.url },
          on: {
            click: function($event) {
              return _vm.change(index)
            }
          }
        })
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "slide",
        on: { mouseover: _vm.stopRotation, mouseout: _vm.startRotation }
      },
      [
        _c("transition", { attrs: { name: "slide" } }, [
          _vm.loaded
            ? _c("img", {
                attrs: {
                  src: _vm.slides[_vm.current].url,
                  alt: _vm.slides[_vm.current].title
                },
                on: {
                  load: function($event) {
                    _vm.loading = !_vm.loading
                  }
                }
              })
            : _vm._e()
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "loading"
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "subscribe" }, [
      _c("form", { attrs: { action: "" } }, [
        _c("input", {
          staticClass: "subscribe__input",
          attrs: { type: "email", placeholder: "example@mail.com" }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "subscribe__submit",
          attrs: { type: "submit", value: "subscribe" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loaded
    ? _c("div", { staticClass: "testimonials" }, [
        _c("img", {
          staticClass: "next",
          attrs: { src: _vm.testimonials[_vm.prev].image },
          on: {
            click: function($event) {
              return _vm.move(-1)
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
              return _vm.move(1)
            }
          }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", { staticClass: "loading rel" })
    : _c("div", { staticClass: "review-block" }, [
        _c("p", { staticClass: "review-heading" }, [
          _vm._v("Write a public review")
        ]),
        _vm._v(" "),
        _vm.sentFeedback
          ? _c("div", { staticClass: "notification" }, [
              _c("button", {
                staticClass: "delete",
                on: {
                  click: function($event) {
                    _vm.sentFeedback = false
                  }
                }
              }),
              _vm._v("Thanks for your feedback.\n  ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "review-write",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "rating", on: { click: _vm.changeRating } },
              [
                _c("span", { staticClass: "fa fa-star" }),
                _vm._v(" "),
                _c("span", { staticClass: "fa fa-star" }),
                _vm._v(" "),
                _c("span", { staticClass: "fa fa-star" }),
                _vm._v(" "),
                _c("span", { staticClass: "fa fa-star" }),
                _vm._v(" "),
                _c("span", { staticClass: "fa fa-star" })
              ]
            ),
            _vm._v(" "),
            _vm.form.errors.has("rating")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(_vm.form.errors.get("rating"))
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              attrs: { type: "text", name: "name", placeholder: "Full Name" },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("name")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: { textContent: _vm._s(_vm.form.errors.get("name")) }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.title,
                  expression: "form.title"
                }
              ],
              attrs: { type: "text", name: "title", placeholder: "Title" },
              domProps: { value: _vm.form.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("title")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(_vm.form.errors.get("title"))
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.message,
                  expression: "form.message"
                }
              ],
              attrs: { placeholder: "Message", name: "message" },
              domProps: { value: _vm.form.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "message", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("message")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(_vm.form.errors.get("message"))
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.processing
              ? _c("div", { staticClass: "process-button" }, [
                  _c("div", { staticClass: "loading left" })
                ])
              : _c(
                  "button",
                  {
                    class: { disabled: _vm.form.errors.any() },
                    attrs: { type: "submit", disabled: _vm.form.errors.any() }
                  },
                  [_vm._v("Send Feedback")]
                )
          ]
        )
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/assets/scripts/bootstrap.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./resources/assets/scripts/components/slider.vue");
/* harmony import */ var _components_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/testimonials */ "./resources/assets/scripts/components/testimonials.vue");
/* harmony import */ var _components_gmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gmap */ "./resources/assets/scripts/components/gmap.vue");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact */ "./resources/assets/scripts/components/contact.vue");
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gallery */ "./resources/assets/scripts/components/gallery.vue");
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/subscribe */ "./resources/assets/scripts/components/subscribe.vue");
/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/categories */ "./resources/assets/scripts/components/categories.vue");
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-page */ "./resources/assets/scripts/components/product-page.vue");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products */ "./resources/assets/scripts/components/products.vue");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */










Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;
new Vue({
  strict: true,
  el: '#app',
  components: {
    'slider-component': _components_slider__WEBPACK_IMPORTED_MODULE_1__["default"],
    'testimonials-component': _components_testimonials__WEBPACK_IMPORTED_MODULE_2__["default"],
    'gmap-component': _components_gmap__WEBPACK_IMPORTED_MODULE_3__["default"],
    'contact-component': _components_contact__WEBPACK_IMPORTED_MODULE_4__["default"],
    'gallery-component': _components_gallery__WEBPACK_IMPORTED_MODULE_5__["default"],
    'subscribe-component': _components_subscribe__WEBPACK_IMPORTED_MODULE_6__["default"],
    'categories-component': _components_categories__WEBPACK_IMPORTED_MODULE_7__["default"],
    'productpage-component': _components_product_page__WEBPACK_IMPORTED_MODULE_8__["default"],
    'products-component': _components_products__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
}); // ============================================================================

document.getElementById('toggle').addEventListener('click', function () {
  this.classList.toggle('toggle--change');
  document.getElementById('navbar').classList.toggle('navbar--toggle');
});
var accordion = document.getElementById('accordion');

if (accordion) {
  Array.from(accordion.children).forEach(function (element) {
    element.firstElementChild.addEventListener('click', function () {
      this.classList.toggle('head--active');
      this.firstElementChild.classList.toggle('fa-caret-right');
      this.firstElementChild.classList.toggle('fa-caret-down');
      this.nextElementSibling.classList.toggle('body--active');
    });
  });
}

var swaper = document.getElementById('swaper');

if (swaper) {
  swaper = swaper.children;
  setInterval(function () {
    var src = null;

    for (var i = 0; i < swaper.length; i++) {
      if (src === null) {
        src = swaper[i].firstChild.src;
      }

      if (i < swaper.length - 1) {
        swaper[i].firstChild.src = swaper[i + 1].firstChild.src;
      }

      if (i == swaper.length - 1) {
        swaper[i].firstChild.src = src;
      }
    }

    src = null;
  }, 3000);
}

/***/ }),

/***/ "./resources/assets/scripts/bootstrap.js":
/*!***********************************************!*\
  !*** ./resources/assets/scripts/bootstrap.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// window._ = require('lodash');
// window.Popper = require('popper.js').default;
window.AOS = __webpack_require__(/*! AOS */ "./node_modules/AOS/dist/aos.js").init();
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {// window.$ = window.jQuery = require('jquery');
  // require('bootstrap');
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

/***/ "./resources/assets/scripts/classes/error.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/classes/error.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Error =
/*#__PURE__*/
function () {
  function Error() {
    _classCallCheck(this, Error);

    this.errors = {};
  }

  _createClass(Error, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.has(field)) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        Vue.delete(this.errors, field);
        return;
      }

      this.errors = {};
    }
  }]);

  return Error;
}();

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./resources/assets/scripts/classes/form.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/classes/form.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./resources/assets/scripts/classes/error.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form =
/*#__PURE__*/
function () {
  function Form(fields) {
    _classCallCheck(this, Form);

    this.errors = new _error_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.fields = fields;

    for (var field in fields) {
      this[field] = fields[field];
    }
  }

  _createClass(Form, [{
    key: "data",
    value: function data() {
      var fields = {};

      for (var field in this.fields) {
        fields[field] = this[field];
      }

      return fields;
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.fields) {
        this[field] = this.fields[field];
      }

      this.errors.clear();
    }
  }, {
    key: "submit",
    value: function submit(url) {
      var _this = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return axios.post(url, _this.data());

                case 3:
                  response = _context.sent;

                  _this.reset();

                  resolve(response.data);
                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);

                  _this.errors.record(_context.t0.response.data.errors);

                  reject(_context.t0.response.data.errors);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/assets/scripts/components/categories.vue":
/*!************************************************************!*\
  !*** ./resources/assets/scripts/components/categories.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.vue?vue&type=template&id=df024fcc& */ "./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc&");
/* harmony import */ var _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./categories.vue?vue&type=template&id=df024fcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/categories.vue?vue&type=template&id=df024fcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_df024fcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/contact.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/contact.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=1b4e39dc& */ "./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc&");
/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=template&id=1b4e39dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contact.vue?vue&type=template&id=1b4e39dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_1b4e39dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/contactproduct.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/scripts/components/contactproduct.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactproduct.vue?vue&type=template&id=7f84bb66& */ "./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66&");
/* harmony import */ var _contactproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactproduct.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contactproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/contactproduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactproduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contactproduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactproduct.vue?vue&type=template&id=7f84bb66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/contactproduct.vue?vue&type=template&id=7f84bb66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactproduct_vue_vue_type_template_id_7f84bb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/gallery.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/gallery.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=6fcd4d44& */ "./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44&");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=6fcd4d44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gallery.vue?vue&type=template&id=6fcd4d44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_6fcd4d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/gmap.vue":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/components/gmap.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gmap.vue?vue&type=template&id=924facda& */ "./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda&");
/* harmony import */ var _gmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gmap.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/gmap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gmap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gmap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gmap.vue?vue&type=template&id=924facda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/gmap.vue?vue&type=template&id=924facda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gmap_vue_vue_type_template_id_924facda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/image.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/components/image.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.vue?vue&type=template&id=4040a14d& */ "./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d&");
/* harmony import */ var _image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/image.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/scripts/components/image.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./image.vue?vue&type=template&id=4040a14d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/image.vue?vue&type=template&id=4040a14d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_4040a14d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/listfeedbacks.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/scripts/components/listfeedbacks.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listfeedbacks.vue?vue&type=template&id=23387222& */ "./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222&");
/* harmony import */ var _listfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listfeedbacks.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _listfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__["render"],
  _listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/listfeedbacks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./listfeedbacks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./listfeedbacks.vue?vue&type=template&id=23387222& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/listfeedbacks.vue?vue&type=template&id=23387222&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfeedbacks_vue_vue_type_template_id_23387222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/pagination.vue":
/*!************************************************************!*\
  !*** ./resources/assets/scripts/components/pagination.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=6b1fda98& */ "./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=template&id=6b1fda98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/pagination.vue?vue&type=template&id=6b1fda98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_6b1fda98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/product-page.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/components/product-page.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-page.vue?vue&type=template&id=388494ab& */ "./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab&");
/* harmony import */ var _product_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-page.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/product-page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product-page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product-page.vue?vue&type=template&id=388494ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product-page.vue?vue&type=template&id=388494ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_template_id_388494ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/product.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/product.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=d1fee73e& */ "./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/scripts/components/product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=d1fee73e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/product.vue?vue&type=template&id=d1fee73e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_d1fee73e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/products.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/components/products.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=4cbca0e2& */ "./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/products.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/scripts/components/products.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=4cbca0e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/products.vue?vue&type=template&id=4cbca0e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_4cbca0e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/ratingfeedbacks.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/components/ratingfeedbacks.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratingfeedbacks.vue?vue&type=template&id=1e687903& */ "./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903&");
/* harmony import */ var _ratingfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratingfeedbacks.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ratingfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/ratingfeedbacks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ratingfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ratingfeedbacks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ratingfeedbacks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ratingfeedbacks.vue?vue&type=template&id=1e687903& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/ratingfeedbacks.vue?vue&type=template&id=1e687903&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ratingfeedbacks_vue_vue_type_template_id_1e687903___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/slider.vue":
/*!********************************************************!*\
  !*** ./resources/assets/scripts/components/slider.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.vue?vue&type=template&id=6261c35f&scoped=true& */ "./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true&");
/* harmony import */ var _slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& */ "./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6261c35f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=style&index=0&id=6261c35f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_style_index_0_id_6261c35f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=template&id=6261c35f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/slider.vue?vue&type=template&id=6261c35f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_6261c35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/subscribe.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/scripts/components/subscribe.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.vue?vue&type=template&id=378748bc&scoped=true& */ "./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true&");
/* harmony import */ var _subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribe.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& */ "./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "378748bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/subscribe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=style&index=0&id=378748bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_378748bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=template&id=378748bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/subscribe.vue?vue&type=template&id=378748bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_378748bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/testimonials.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/components/testimonials.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonials.vue?vue&type=template&id=2500b432&scoped=true& */ "./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true&");
/* harmony import */ var _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& */ "./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2500b432",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/sass-resources-loader/lib/loader.js??ref--7-4!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=style&index=0&id=2500b432&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_4_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_2500b432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=template&id=2500b432&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/testimonials.vue?vue&type=template&id=2500b432&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_2500b432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/scripts/components/writefeedback.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/scripts/components/writefeedback.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writefeedback.vue?vue&type=template&id=2c11c5d6& */ "./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6&");
/* harmony import */ var _writefeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writefeedback.vue?vue&type=script&lang=js& */ "./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _writefeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/scripts/components/writefeedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_writefeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./writefeedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/writefeedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_writefeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./writefeedback.vue?vue&type=template&id=2c11c5d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/scripts/components/writefeedback.vue?vue&type=template&id=2c11c5d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_writefeedback_vue_vue_type_template_id_2c11c5d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! F:\www\projects\rumillc\resources\assets\scripts\app.js */"./resources/assets/scripts/app.js");
module.exports = __webpack_require__(/*! F:\www\projects\rumillc\resources\assets\styles\app.scss */"./resources/assets/styles/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);