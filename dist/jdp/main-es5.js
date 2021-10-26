(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/joshuapachter/Site/jdpachter.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0y8N":
    /*!*******************************************!*\
      !*** ./src/app/greetings/allGreetings.ts ***!
      \*******************************************/

    /*! exports provided: GREETINGS */

    /***/
    function y8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GREETINGS", function () {
        return GREETINGS;
      });

      var GREETINGS = [{
        id: 0,
        text: 'hey'
      }, {
        id: 1,
        text: 'hi'
      }, {
        id: 2,
        text: 'bonjour'
      }, {
        id: 3,
        text: 'salut'
      }, {
        id: 4,
        text: 'hola'
      }, {
        id: 5,
        text: 'sup'
      }, {
        id: 6,
        text: 'yo'
      }, {
        id: 7,
        text: 'konichiwa'
      }, {
        id: 8,
        text: 'whaddup'
      }];
      /***/
    },

    /***/
    "2uUU":
    /*!**************************************!*\
      !*** ./src/app/bio/imgCaptionMap.ts ***!
      \**************************************/

    /*! exports provided: BIOIMAGES */

    /***/
    function uUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BIOIMAGES", function () {
        return BIOIMAGES;
      });
      /* harmony import */


      var _BioImageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./BioImageData */
      "t2Dc");

      var BIOIMAGES = new Map([['sf', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/sf.jpg', 'Downtown SF at dusk as seen from <a href="https://www.google.com/maps/place/Kite+Hill/@37.7582833,-122.4415667,15z/data=!4m2!3m1!1s0x0:0xb72ce94acb6e9dc1?sa=X&ved=2ahUKEwjCsvytx43vAhURvp4KHWEwAmgQ_BIwEHoECB8QBQ">Kite Hill</a>')], ['amzn', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/amznHQ.jpg', 'The <a href="https://www.seattlespheres.com">Amazon Spheres</a> at the South Lake Union Headquarters in Seattle')], ['lex', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/lex.jpg', 'The annual <a href="https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord">battle of Lexington</a> re-enactment in Lexington, MA')], ['phl', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/schoolofathens.jpg', 'Plato and Aristotle in <a href="https://en.wikipedia.org/wiki/The_School_of_Athens">School of Athens</a> ❤️')], ['studying', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/studying.png', '"Studying" in the library')], ['cs', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/cs.jpg', 'This tweet hits hard')], ['ur', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/ur.jpg', 'Rush Rhees, UR\'s main library')]]);
      /***/
    },

    /***/
    "34qb":
    /*!**************************************!*\
      !*** ./src/app/bio/bio.component.ts ***!
      \**************************************/

    /*! exports provided: BioComponent */

    /***/
    function qb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BioComponent", function () {
        return BioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./imgCaptionMap */
      "2uUU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BioComponent = /*#__PURE__*/function () {
        function BioComponent(_router) {
          _classCallCheck(this, BioComponent);

          this._router = _router;
          this.showPic = false;
          this.currentImgUrl = _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get('sf').imgPath;
          this.caption = _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get('sf').captionText;
          this.router = _router.url;
        }

        _createClass(BioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BioComponent;
      }();

      BioComponent.ɵfac = function BioComponent_Factory(t) {
        return new (t || BioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BioComponent,
        selectors: [["app-bio"]],
        decls: 0,
        vars: 0,
        template: function BioComponent_Template(rf, ctx) {},
        styles: [".bio[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 20px;\n  margin: auto;\n  color: #243245;\n  font-size: 1.4rem;\n  text-align: center;\n}\n\n.bioCaption[_ngcontent-%COMP%] {\n  color: #243245;\n  font-size: 12pt;\n  font-style: oblique;\n  width: 75%;\n  margin: auto;\n}\n\n.bioWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  top: 180px;\n  width: 100%;\n  margin: 0px;\n  min-height: 500px;\n}\n\n.wcLink[_ngcontent-%COMP%] {\n  color: #ff9999;\n  text-decoration: inherit;\n}\n\n.bioPic[_ngcontent-%COMP%] {\n  max-width: 48vw;\n  max-height: 60vh;\n  margin: auto;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: inherit;\n  max-height: inherit;\n  border: 2px solid #888;\n}\n\n.word-cloud-section[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiYmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICMyNDMyNDU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iaW9DYXB0aW9uIHtcbiAgY29sb3I6ICMyNDMyNDU7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYmlvV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLndjTGluayB7XG4gIGNvbG9yOiAjZmY5OTk5O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi5iaW9QaWMge1xuICBtYXgtd2lkdGg6IDQ4dnc7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4ODg7XG59XG5cbi53b3JkLWNsb3VkLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwdnc7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bio',
            templateUrl: './bio.component.html',
            styleUrls: ['./bio.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DsX8":
    /*!*************************************!*\
      !*** ./src/app/phrase.directive.ts ***!
      \*************************************/

    /*! exports provided: PhraseDirective */

    /***/
    function DsX8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhraseDirective", function () {
        return PhraseDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhraseDirective = /*#__PURE__*/function () {
        function PhraseDirective(el) {
          _classCallCheck(this, PhraseDirective);

          this.el = el;
          this.width = 0;
          this.height = 0;
          this.phraseElement = el;
        }

        _createClass(PhraseDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.width = this.phraseElement.nativeElement.clientWidth;
            this.height = this.phraseElement.nativeElement.clientHeight;
            this.phraseElement.nativeElement.style.left = 0 + 'px';
            this.phraseElement.nativeElement.style.top = 0 + 'px';
          }
        }, {
          key: "setPosition",
          value: function setPosition(left, top) {
            this.phraseElement.nativeElement.style.left = left + 'px';
            this.phraseElement.nativeElement.style.top = top + 'px';
          }
        }]);

        return PhraseDirective;
      }();

      PhraseDirective.ɵfac = function PhraseDirective_Factory(t) {
        return new (t || PhraseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      PhraseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PhraseDirective,
        selectors: [["", "appPhrase", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhraseDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appPhrase]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PeRm":
    /*!****************************************!*\
      !*** ./src/app/highlight.directive.ts ***!
      \****************************************/

    /*! exports provided: HighlightDirective */

    /***/
    function PeRm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
        return HighlightDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bio/imgCaptionMap */
      "2uUU");
      /* harmony import */


      var _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bio/bio.component */
      "34qb");

      var HighlightDirective = /*#__PURE__*/function () {
        function HighlightDirective(el, bio) {
          _classCallCheck(this, HighlightDirective);

          this.el = el;
          this.bio = bio;
          el.nativeElement.style.color = 'inherit';
          this.highlightText = "";
        }

        _createClass(HighlightDirective, [{
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.highlight('#ff9999');
            this.bio.currentImgUrl = _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get(this.highlightText).imgPath;
            this.bio.caption = _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get(this.highlightText).captionText;
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.highlight('inherit');
          }
        }, {
          key: "highlight",
          value: function highlight(color) {
            this.el.nativeElement.style.color = color;
          }
        }]);

        return HighlightDirective;
      }();

      HighlightDirective.ɵfac = function HighlightDirective_Factory(t) {
        return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"]));
      };

      HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HighlightDirective,
        selectors: [["", "appHighlight", ""]],
        hostBindings: function HighlightDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() {
              return ctx.onMouseEnter();
            })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            });
          }
        },
        inputs: {
          highlightText: ["appHighlight", "highlightText"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appHighlight]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"]
          }];
        }, {
          highlightText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appHighlight']
          }],
          onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
          }],
          onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./greetings/greetings.component */
      "Z4eA");
      /* harmony import */


      var _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wordcloud/wordcloud.component */
      "ixsR");

      var _c0 = "a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\n  color: whitesmoke;\n  padding: 1px 25px;\n  text-decoration: none;\n  left: 0pt;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: #ff9999;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #243245;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  font-size: 3rem;\n  position: relative;\n}\n\n.nav-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-flex;\n  font-size: 3rem;\n  margin: auto;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 3rem;\n}\n\n.gitLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.twitterLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.liLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.me[_ngcontent-%COMP%] {\n  color: pink;\n  font-size: 1.7rem;\n}\n\napp-greetings[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  cursor: pointer;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxcHggMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZWZ0OiAwcHQ7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZjk5OTk7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMyNDU7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LXJpZ2h0IHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5uYXYge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmdpdExvZ28ge1xuICB3aWR0aDogNjBweDtcbn1cblxuLnR3aXR0ZXJMb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5saUxvZ28ge1xuICB3aWR0aDogNjBweDtcbn1cblxuLm1lIHtcbiAgY29sb3I6IHBpbms7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG5hcHAtZ3JlZXRpbmdzIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG4iXX0= */";

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'jdp';
          this.scrollTop = 0;
          this.hideNav = false;
        }

        _createClass(AppComponent, [{
          key: "onScroll",
          value: function onScroll(e) {
            console.log(this.getYPosition(e));
          }
        }, {
          key: "getYPosition",
          value: function getYPosition(e) {
            return e.target.scrollTop;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
              return ctx.onScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 18,
        vars: 0,
        consts: [["charset", "utf-8"], ["charset", "UTF-8"], [1, "page-container"], [1, "nav"], [1, "nav-right"], ["href", "https://github.com/jdpachter"], ["src", "assets/Git-Icon-White.png", 1, "gitLogo"], ["href", "https://linkedin.com/in/jdpachter"], ["src", "assets/LI-In-Bug.png", 1, "liLogo"], ["href", "https://twitter.com/JoshuaPachter"], ["src", "assets/twitterLogo.png", 1, "twitterLogo"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-greetings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-wordcloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_greetings_greetings_component__WEBPACK_IMPORTED_MODULE_1__["GreetingsComponent"], _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_2__["WordcloudComponent"]],
        styles: [_c0, _c0]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, {
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
          }]
        });
      })();
      /***/

    },

    /***/
    "Z4eA":
    /*!**************************************************!*\
      !*** ./src/app/greetings/greetings.component.ts ***!
      \**************************************************/

    /*! exports provided: GreetingsComponent */

    /***/
    function Z4eA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GreetingsComponent", function () {
        return GreetingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _allGreetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allGreetings */
      "0y8N");
      /* harmony import */


      var _allGreetingSubjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./allGreetingSubjects */
      "ztN/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var GreetingsComponent = /*#__PURE__*/function () {
        function GreetingsComponent() {
          _classCallCheck(this, GreetingsComponent);

          this.greetings = _allGreetings__WEBPACK_IMPORTED_MODULE_1__["GREETINGS"];
          this.greetingSubjects = _allGreetingSubjects__WEBPACK_IMPORTED_MODULE_2__["GREETING_SUBJECTS"];
          this.greeting = this.greetings[randomNumber(0, this.greetings.length)].text;
          this.greetingSubject = this.greetingSubjects[randomNumber(0, this.greetingSubjects.length)].text;
        }

        _createClass(GreetingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GreetingsComponent;
      }();

      GreetingsComponent.ɵfac = function GreetingsComponent_Factory(t) {
        return new (t || GreetingsComponent)();
      };

      GreetingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GreetingsComponent,
        selectors: [["app-greetings"]],
        decls: 2,
        vars: 2,
        consts: [["id", "welcome-banner", "routerLink", "/"]],
        template: function GreetingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx.greeting, " ", ctx.greetingSubject, "\n");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["#welcome-banner[_ngcontent-%COMP%] {\n  color: #ff9999;\n  font-size: 3rem;\n  text-align: center;\n  padding-left: 50px;\n}\n\n#welcome-banner[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dyZWV0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6ImdyZWV0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3ZWxjb21lLWJhbm5lciB7XG4gIGNvbG9yOiAjZmY5OTk5O1xuICBmb250LXNpemU6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuXG59XG4jd2VsY29tZS1iYW5uZXI6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-greetings',
            templateUrl: './greetings.component.html',
            styleUrls: ['./greetings.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();

      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./greetings/greetings.component */
      "Z4eA");
      /* harmony import */


      var _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bio/bio.component */
      "34qb");
      /* harmony import */


      var _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wordcloud/wordcloud.component */
      "ixsR");
      /* harmony import */


      var _highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./highlight.directive */
      "PeRm");
      /* harmony import */


      var _phrase_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./phrase.directive */
      "DsX8");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__["GreetingsComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"], _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__["WordcloudComponent"], _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"], _phrase_directive__WEBPACK_IMPORTED_MODULE_7__["PhraseDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__["GreetingsComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"], _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__["WordcloudComponent"], _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"], _phrase_directive__WEBPACK_IMPORTED_MODULE_7__["PhraseDirective"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fHde":
    /*!***************************************!*\
      !*** ./src/app/wordcloud/allWords.ts ***!
      \***************************************/

    /*! exports provided: WORDS */

    /***/
    function fHde(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WORDS", function () {
        return WORDS;
      });

      var WORD_STRINGS = new Map([["AI ethics", "https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/view/12582/12346"], ["Biking", "https://www.youtube.com/watch?v=fYGPcfUqzL0"], ["Running", "https://www.strava.com/athletes/45011299"], ["Long walks", "https://thebolditalic.com/5-long-walks-to-really-get-to-know-san-francisco-3d65f82c0add"], ["Queer Theory", "https://www.jstor.org/stable/23611522?seq=1"], ["Existentialism", "https://en.m.wikipedia.org/wiki/Existence_precedes_essence"], ["Aesthetics", "https://en.wikipedia.org/wiki/Either/Or#Either"], ["Consciousness", "https://plato.stanford.edu/entries/zombies/#DoesConcEntaPoss"], ["Frank Ocean", "https://www.youtube.com/watch?v=atCvWBFbRsc"], ["Software ontology", "https://en.wikipedia.org/wiki/Chinese_room"], ["Photography", "https://lightroom.adobe.com/shares/662f2c34e04147b4bd8d56d95949db44"]]);
      var WORDS = makeWordsList();

      function makeWordsList() {
        var wordList = [];
        var idCount = 0;

        var _iterator = _createForOfIteratorHelper(WORD_STRINGS.keys()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            wordList.push({
              id: idCount,
              text: key,
              link: WORD_STRINGS.get(key)
            });
            idCount++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return wordList;
      }
      /***/

    },

    /***/
    "ixsR":
    /*!**************************************************!*\
      !*** ./src/app/wordcloud/wordcloud.component.ts ***!
      \**************************************************/

    /*! exports provided: WordcloudComponent */

    /***/
    function ixsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WordcloudComponent", function () {
        return WordcloudComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _allWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allWords */
      "fHde");
      /* harmony import */


      var _pixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pixel */
      "sd/l");
      /* harmony import */


      var _phrase_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../phrase.directive */
      "DsX8");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["wordCloud"];

      function WordcloudComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phrase_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", phrase_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phrase_r2.text);
        }
      }

      var WordcloudComponent = /*#__PURE__*/function () {
        function WordcloudComponent(el) {
          _classCallCheck(this, WordcloudComponent);

          this.el = el;
          this.allPhrases = this.shuffle(_allWords__WEBPACK_IMPORTED_MODULE_1__["WORDS"]);
          this.cloudElement = el;
        }

        _createClass(WordcloudComponent, [{
          key: "shuffle",
          value: function shuffle(wordList) {
            for (var i = wordList.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var _ref = [wordList[j], wordList[i]];
              wordList[i] = _ref[0];
              wordList[j] = _ref[1];
            }

            return wordList;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize');
            this.resizeSubscription$ = this.resizeObservable$.subscribe(function (evt) {
              _this.generateWordCloud(_this.getWidth(), _this.getHeight());
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.generateWordCloud(this.getWidth(), this.getHeight());
          }
        }, {
          key: "generateWordCloud",
          value: function generateWordCloud(width, height) {
            var _this2 = this;

            var overlapping = new Map();
            this.phraseElements.toArray().forEach(function (phrase) {
              var curPhraseWidth = phrase.width;
              var curPhraseHeight = phrase.height;
              var currentX = Math.floor(_this2.getRandInRange(0, width));
              var currentY = Math.floor(_this2.getRandInRange(0, height));
              var curPix = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](currentX, currentY);

              while (_this2.checkOverlapping(curPhraseWidth, curPhraseHeight, currentX, currentY, overlapping)) {
                console.log("is overlapping: " + phrase);
                currentX = Math.floor(_this2.getRandInRange(0, width));
                currentY = Math.floor(_this2.getRandInRange(0, height));
                curPix = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](currentX, currentY);
              }

              phrase.setPosition(currentX, currentY);

              for (var xPixel = currentX; xPixel < currentX + curPhraseWidth; xPixel++) {
                for (var yPixel = currentY; yPixel < currentY + curPhraseHeight; yPixel++) {
                  var p = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](xPixel, yPixel);
                  overlapping.set(p.toString(), true);
                }
              }
            });
          }
        }, {
          key: "checkOverlapping",
          value: function checkOverlapping(curPhraseWidth, curPhraseHeight, currentX, currentY, overlapping) {
            for (var xPixel = currentX - 20; xPixel < currentX + curPhraseWidth + 20; xPixel++) {
              for (var yPixel = currentY - 20; yPixel < currentY + curPhraseHeight + 20; yPixel++) {
                var p = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](xPixel, yPixel);

                if (overlapping.get(p.toString())) {
                  return true;
                }
              }
            }

            return false;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.wordCloud.nativeElement.offsetWidth;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.wordCloud.nativeElement.offsetHeight;
          }
        }, {
          key: "getRandInRange",
          value: function getRandInRange(min, max) {
            if (max < min) {
              return min;
            }

            return Math.random() * (max - min) + min;
          }
        }]);

        return WordcloudComponent;
      }();

      WordcloudComponent.ɵfac = function WordcloudComponent_Factory(t) {
        return new (t || WordcloudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      WordcloudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WordcloudComponent,
        selectors: [["app-wordcloud"]],
        viewQuery: function WordcloudComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_phrase_directive__WEBPACK_IMPORTED_MODULE_3__["PhraseDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wordCloud = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phraseElements = _t);
          }
        },
        decls: 6,
        vars: 1,
        consts: [[1, "wordcloud-description"], [1, "word-cloud"], ["wordCloud", ""], ["appPhrase", "", 4, "ngFor", "ngForOf"], ["appPhrase", ""], [3, "href"]],
        template: function WordcloudComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Some of my interests and hobbies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WordcloudComponent_div_5_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allPhrases);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _phrase_directive__WEBPACK_IMPORTED_MODULE_3__["PhraseDirective"]],
        styles: [".word-cloud[_ngcontent-%COMP%] {\n  color: #243245;\n  font-size: 1.7rem;\n  position: relative;\n  width: 80%;\n  height: 50vh;\n}\n\n[appPhrase][_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  width: auto;\n}\n\n[appPhrase][_ngcontent-%COMP%]:hover {\n  color: #ff9999;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n.wordcloud-description[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  color: #ff9999;\n  font-size: 1.3rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dvcmRjbG91ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ3b3JkY2xvdWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yZC1jbG91ZCB7XG4gIGNvbG9yOiAjMjQzMjQ1O1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cblthcHBQaHJhc2VdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5bYXBwUGhyYXNlXTpob3ZlciB7XG4gIGNvbG9yOiAjZmY5OTk5O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLndvcmRjbG91ZC1kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmOTk5OTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordcloudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wordcloud',
            templateUrl: './wordcloud.component.html',
            styleUrls: ['./wordcloud.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          phraseElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_phrase_directive__WEBPACK_IMPORTED_MODULE_3__["PhraseDirective"]]
          }],
          wordCloud: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wordCloud', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "sd/l":
    /*!************************************!*\
      !*** ./src/app/wordcloud/pixel.ts ***!
      \************************************/

    /*! exports provided: Pixel */

    /***/
    function sdL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pixel", function () {
        return Pixel;
      });

      var Pixel = /*#__PURE__*/function () {
        function Pixel(xVal, yVal) {
          _classCallCheck(this, Pixel);

          this.x = xVal;
          this.y = yVal;
        }

        _createClass(Pixel, [{
          key: "toString",
          value: function toString() {
            return this.x.toString() + this.y.toString();
          }
        }]);

        return Pixel;
      }();
      /***/

    },

    /***/
    "t2Dc":
    /*!*************************************!*\
      !*** ./src/app/bio/BioImageData.ts ***!
      \*************************************/

    /*! exports provided: BioImageData */

    /***/
    function t2Dc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BioImageData", function () {
        return BioImageData;
      });

      var BioImageData = function BioImageData(imgPath, captionText) {
        _classCallCheck(this, BioImageData);

        this.imgPath = imgPath;
        this.captionText = captionText;
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wordcloud/wordcloud.component */
      "ixsR");

      var routes = [{
        path: 'wordcloud',
        component: _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_3__["WordcloudComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "ztN/":
    /*!**************************************************!*\
      !*** ./src/app/greetings/allGreetingSubjects.ts ***!
      \**************************************************/

    /*! exports provided: GREETING_SUBJECTS */

    /***/
    function ztN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GREETING_SUBJECTS", function () {
        return GREETING_SUBJECTS;
      });

      var GREETING_SUBJECTS = [{
        id: 0,
        text: 'squad'
      }, {
        id: 1,
        text: 'you'
      }, {
        id: 2,
        text: 'queen'
      }, {
        id: 3,
        text: 'comrade'
      }, {
        id: 4,
        text: 'friend'
      }, {
        id: 5,
        text: 'pal'
      }, {
        id: 6,
        text: 'fam'
      }, {
        id: 7,
        text: 'y\'all'
      }, {
        id: 8,
        text: 'team'
      }, {
        id: 9,
        text: 'gang'
      }];
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map