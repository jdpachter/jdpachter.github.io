(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshuapachter/Site/jdpachter.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "0y8N":
/*!*******************************************!*\
  !*** ./src/app/greetings/allGreetings.ts ***!
  \*******************************************/
/*! exports provided: GREETINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREETINGS", function() { return GREETINGS; });
const GREETINGS = [
    { id: 0, text: 'hey' },
    { id: 1, text: 'hi' },
    { id: 2, text: 'bonjour' },
    { id: 3, text: 'salut' },
    { id: 4, text: 'hola' },
    { id: 5, text: 'sup' },
    { id: 6, text: 'yo' },
    { id: 7, text: 'konichiwa' },
    { id: 8, text: 'whaddup' }
];


/***/ }),

/***/ "2uUU":
/*!**************************************!*\
  !*** ./src/app/bio/imgCaptionMap.ts ***!
  \**************************************/
/*! exports provided: BIOIMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIOIMAGES", function() { return BIOIMAGES; });
/* harmony import */ var _BioImageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BioImageData */ "t2Dc");

let BIOIMAGES = new Map([
    ['sf', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/sf.jpg', 'Downtown SF at dusk as seen from <a href="https://www.google.com/maps/place/Kite+Hill/@37.7582833,-122.4415667,15z/data=!4m2!3m1!1s0x0:0xb72ce94acb6e9dc1?sa=X&ved=2ahUKEwjCsvytx43vAhURvp4KHWEwAmgQ_BIwEHoECB8QBQ">Kite Hill</a>')],
    ['amzn', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/amznHQ.jpg', 'The <a href="https://www.seattlespheres.com">Amazon Spheres</a> at the South Lake Union Headquarters in Seattle')],
    ['lex', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/lex.jpg', 'The annual <a href="https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord">battle of Lexington</a> re-enactment in Lexington, MA')],
    ['phl', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/schoolofathens.jpg', 'Plato and Aristotle in <a href="https://en.wikipedia.org/wiki/The_School_of_Athens">School of Athens</a> ❤️')],
    ['studying', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/studying.png', '"Studying" in the library')],
    ['cs', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/cs.jpg', 'This tweet hits hard')],
    ['ur', new _BioImageData__WEBPACK_IMPORTED_MODULE_0__["BioImageData"]('assets/bioImages/ur.jpg', 'Rush Rhees, UR\'s main library')],
]);


/***/ }),

/***/ "34qb":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgCaptionMap */ "2uUU");



class BioComponent {
    constructor() {
        this.showPic = false;
        this.currentImgUrl = _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get('sf').imgPath;
        this.caption = _imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get('sf').captionText;
    }
    ngOnInit() {
    }
}
BioComponent.ɵfac = function BioComponent_Factory(t) { return new (t || BioComponent)(); };
BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BioComponent, selectors: [["app-bio"]], decls: 45, vars: 0, consts: [[1, "bioWrapper"], [1, "bioHeader"], [1, "about-me"], [1, "top3"], ["href", "https://gist.github.com/larsyencken/1440509"], ["href", "https://www.goodreads.com/quotes/218410-there-isn-t-anyone-you-couldn-t-love-once-you-ve-heard-their"]], template: function BioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I'm Josh!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I capture many of my thoughts in notes, and my most frequently used words in those notes are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Feel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (not including ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "stop words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "). Since graduating from the University of Rochester in 2018, I've captured an average of 43 words/day worth of thoughts. That number grew to 67 words/day in the last 365 days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "I feel strongly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " about personal tech (primarily wearables), and autonomy. Novel applications of AI/ML also peak my interest. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The people in my life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " inspire me and help me see clearly. My high school yearbook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " was: \"There isn't anyone you couldn't love once you've heard their story.\" Despite its extreme corniness, this is still exactly how I feel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "In my spare time,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " you can find me walking or running through San Francisco's parks, writing (often an elaboration of notes), traveling (down the street counts, within my apartment doesn't), and singing quietly enough that I don't attract the attention of my neighbors (usually a failure). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " is #9 in my list of most frequently used words in notes, and it is also where I currently work. There, I'm a Product Manager on a Zero-to-One incubation team. Our small team develops and validates new products that address large-scale problems inside and outside Amazon's existing businesses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bio[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 20px;\n  margin: auto;\n  color: #243245;\n  font-size: 1.4rem;\n  text-align: center;\n}\n\n.bioCaption[_ngcontent-%COMP%] {\n  color: #243245;\n  font-size: 12pt;\n  font-style: oblique;\n  width: 75%;\n  margin: auto;\n}\n\n.bioWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 20px;\n  min-height: 500px;\n}\n\n.wcLink[_ngcontent-%COMP%] {\n  color: #ff9999;\n  text-decoration: inherit;\n}\n\n.bioPic[_ngcontent-%COMP%] {\n  max-width: 48vw;\n  max-height: 60vh;\n  margin: auto;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: inherit;\n  max-height: inherit;\n  border: 2px solid #888;\n}\n\n.top3[_ngcontent-%COMP%] {\n  color: #ff9999;\n}\n\n.word-cloud-section[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.about-me[_ngcontent-%COMP%] {\n  color: #243245;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJiaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlvIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogIzI0MzI0NTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJpb0NhcHRpb24ge1xuICBjb2xvcjogIzI0MzI0NTtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iaW9XcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ud2NMaW5rIHtcbiAgY29sb3I6ICNmZjk5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLmJpb1BpYyB7XG4gIG1heC13aWR0aDogNDh2dztcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyOiAycHggc29saWQgIzg4ODtcbn1cblxuLnRvcDMge1xuICBjb2xvcjogI2ZmOTk5OTtcbn1cblxuLndvcmQtY2xvdWQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmFib3V0LW1lIHtcbiAgY29sb3I6ICMyNDMyNDU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bio',
                templateUrl: './bio.component.html',
                styleUrls: ['./bio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "DsX8":
/*!*************************************!*\
  !*** ./src/app/phrase.directive.ts ***!
  \*************************************/
/*! exports provided: PhraseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseDirective", function() { return PhraseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PhraseDirective {
    constructor(el) {
        this.el = el;
        this.width = 0;
        this.height = 0;
        this.phraseElement = el;
    }
    ngAfterViewInit() {
        this.width = this.phraseElement.nativeElement.clientWidth;
        this.height = this.phraseElement.nativeElement.clientHeight;
        this.phraseElement.nativeElement.style.left = 0 + 'px';
        this.phraseElement.nativeElement.style.top = 0 + 'px';
    }
    setPosition(left, top) {
        this.phraseElement.nativeElement.style.left = left + 'px';
        this.phraseElement.nativeElement.style.top = top + 'px';
    }
}
PhraseDirective.ɵfac = function PhraseDirective_Factory(t) { return new (t || PhraseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PhraseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PhraseDirective, selectors: [["", "appPhrase", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhraseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPhrase]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "PeRm":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bio/imgCaptionMap */ "2uUU");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio/bio.component */ "34qb");




class HighlightDirective {
    constructor(el, bio) {
        this.el = el;
        this.bio = bio;
        el.nativeElement.style.color = 'inherit';
        this.highlightText = "";
    }
    onMouseEnter() {
        this.highlight('#ff9999');
        this.bio.currentImgUrl = _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get(this.highlightText).imgPath;
        this.bio.caption = _bio_imgCaptionMap__WEBPACK_IMPORTED_MODULE_1__["BIOIMAGES"].get(this.highlightText).captionText;
    }
    onMouseLeave() {
        this.highlight('inherit');
    }
    highlight(color) {
        this.el.nativeElement.style.color = color;
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]], hostBindings: function HighlightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { highlightText: ["appHighlight", "highlightText"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appHighlight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"] }]; }, { highlightText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appHighlight']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greetings/greetings.component */ "Z4eA");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio/bio.component */ "34qb");




const _c0 = "a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\n  color: whitesmoke;\n  padding: 1px 25px;\n  text-decoration: none;\n  left: 0pt;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: #ff9999;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #243245;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  font-size: 3rem;\n  position: relative;\n}\n\n.nav-right[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-left: auto;\n  margin-right: 0;\n  padding-bottom: 15px;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 3rem;\n}\n\n.gitLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.twitterLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.liLogo[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.me[_ngcontent-%COMP%] {\n  color: pink;\n  font-size: 1.7rem;\n}\n\n@media screen and (min-width: 0px) and (max-width: 768px) {\n  app-greetings[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .nav-right[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin: auto;\n    padding-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7O0VBRUE7SUFDRSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMXB4IDI1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGVmdDogMHB0O1xufVxuXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmY5OTk5O1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMjQ1O1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1yaWdodCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxubmF2IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5naXRMb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi50d2l0dGVyTG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4ubGlMb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5tZSB7XG4gIGNvbG9yOiBwaW5rO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYXBwLWdyZWV0aW5ncyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLm5hdi1yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG59XG4iXX0= */";
class AppComponent {
    constructor() {
        this.title = 'jdp';
        this.scrollTop = 0;
        this.hideNav = false;
    }
    onScroll(e) {
        console.log(this.getYPosition(e));
    }
    getYPosition(e) {
        return e.target.scrollTop;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 0, consts: [["charset", "utf-8"], ["charset", "UTF-8"], [1, "page-container"], [1, "nav"], [1, "nav-right"], ["href", "https://github.com/jdpachter"], ["src", "assets/Git-Icon-White.png", 1, "gitLogo"], ["href", "https://linkedin.com/in/jdpachter"], ["src", "assets/LI-In-Bug.png", 1, "liLogo"], ["href", "https://twitter.com/JoshuaPachter"], ["src", "assets/twitterLogo.png", 1, "twitterLogo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_greetings_greetings_component__WEBPACK_IMPORTED_MODULE_1__["GreetingsComponent"], _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "Z4eA":
/*!**************************************************!*\
  !*** ./src/app/greetings/greetings.component.ts ***!
  \**************************************************/
/*! exports provided: GreetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingsComponent", function() { return GreetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _allGreetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allGreetings */ "0y8N");
/* harmony import */ var _allGreetingSubjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allGreetingSubjects */ "ztN/");




class GreetingsComponent {
    constructor() {
        this.greetings = _allGreetings__WEBPACK_IMPORTED_MODULE_1__["GREETINGS"];
        this.greetingSubjects = _allGreetingSubjects__WEBPACK_IMPORTED_MODULE_2__["GREETING_SUBJECTS"];
        this.greeting = this.greetings[randomNumber(0, this.greetings.length)].text;
        this.greetingSubject = this.greetingSubjects[randomNumber(0, this.greetingSubjects.length)].text;
    }
    ngOnInit() {
    }
}
GreetingsComponent.ɵfac = function GreetingsComponent_Factory(t) { return new (t || GreetingsComponent)(); };
GreetingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GreetingsComponent, selectors: [["app-greetings"]], decls: 2, vars: 2, consts: [[1, "welcome-banner"]], template: function GreetingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx.greeting, " ", ctx.greetingSubject, "\n");
    } }, styles: ["@media screen and (min-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    color: #ff9999;\n    font-size: 3rem;\n    text-align: center;\n    padding-left: 50px;\n  }\n\n  .welcome-banner[_ngcontent-%COMP%]:focus {\n    outline: 0;\n  }\n}\n@media screen and (min-width: 0px) and (max-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    color: #ff9999;\n    font-size: 3rem;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dyZWV0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxVQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJncmVldGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XG4gIC53ZWxjb21lLWJhbm5lciB7XG4gICAgY29sb3I6ICNmZjk5OTk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cblxuICAud2VsY29tZS1iYW5uZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndlbGNvbWUtYmFubmVyIHtcbiAgICBjb2xvcjogI2ZmOTk5OTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-greetings',
                templateUrl: './greetings.component.html',
                styleUrls: ['./greetings.component.scss']
            }]
    }], function () { return []; }, null); })();
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greetings/greetings.component */ "Z4eA");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bio/bio.component */ "34qb");
/* harmony import */ var _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordcloud/wordcloud.component */ "ixsR");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.directive */ "PeRm");
/* harmony import */ var _phrase_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phrase.directive */ "DsX8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__["GreetingsComponent"],
        _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"],
        _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__["WordcloudComponent"],
        _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
        _phrase_directive__WEBPACK_IMPORTED_MODULE_7__["PhraseDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _greetings_greetings_component__WEBPACK_IMPORTED_MODULE_3__["GreetingsComponent"],
                    _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"],
                    _wordcloud_wordcloud_component__WEBPACK_IMPORTED_MODULE_5__["WordcloudComponent"],
                    _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
                    _phrase_directive__WEBPACK_IMPORTED_MODULE_7__["PhraseDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fHde":
/*!***************************************!*\
  !*** ./src/app/wordcloud/allWords.ts ***!
  \***************************************/
/*! exports provided: WORDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS", function() { return WORDS; });
let WORD_STRINGS = new Map([
    ["AI ethics", "https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/view/12582/12346"],
    ["Biking", "https://www.youtube.com/watch?v=fYGPcfUqzL0"],
    ["Running", "https://www.strava.com/athletes/45011299"],
    ["Long walks", "https://thebolditalic.com/5-long-walks-to-really-get-to-know-san-francisco-3d65f82c0add"],
    ["Queer Theory", "https://www.jstor.org/stable/23611522?seq=1"],
    ["Existentialism", "https://en.m.wikipedia.org/wiki/Existence_precedes_essence"],
    ["Aesthetics", "https://en.wikipedia.org/wiki/Either/Or#Either"],
    ["Consciousness", "https://plato.stanford.edu/entries/zombies/#DoesConcEntaPoss"],
    ["Frank Ocean", "https://www.youtube.com/watch?v=atCvWBFbRsc"],
    ["Software ontology", "https://en.wikipedia.org/wiki/Chinese_room"],
    ["Photography", "https://lightroom.adobe.com/shares/662f2c34e04147b4bd8d56d95949db44"]
]);
const WORDS = makeWordsList();
function makeWordsList() {
    var wordList = [];
    var idCount = 0;
    for (let key of WORD_STRINGS.keys()) {
        wordList.push({ id: idCount, text: key, link: WORD_STRINGS.get(key) });
        idCount++;
    }
    return wordList;
}


/***/ }),

/***/ "ixsR":
/*!**************************************************!*\
  !*** ./src/app/wordcloud/wordcloud.component.ts ***!
  \**************************************************/
/*! exports provided: WordcloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordcloudComponent", function() { return WordcloudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _allWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allWords */ "fHde");
/* harmony import */ var _pixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pixel */ "sd/l");
/* harmony import */ var _phrase_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phrase.directive */ "DsX8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");






const _c0 = ["wordCloud"];
class WordcloudComponent {
    constructor(el) {
        this.el = el;
        this.allPhrases = this.shuffle(_allWords__WEBPACK_IMPORTED_MODULE_1__["WORDS"]);
        this.cloudElement = el;
    }
    shuffle(wordList) {
        for (let i = wordList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
        }
        return wordList;
    }
    ngOnInit() {
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
            this.generateWordCloud(this.getWidth(), this.getHeight());
        });
    }
    ngAfterViewInit() {
        this.generateWordCloud(this.getWidth(), this.getHeight());
    }
    generateWordCloud(width, height) {
        var overlapping = new Map();
        this.phraseElements.toArray().forEach(phrase => {
            var curPhraseWidth = phrase.width;
            var curPhraseHeight = phrase.height;
            var currentX = Math.floor(this.getRandInRange(0, width));
            var currentY = Math.floor(this.getRandInRange(0, height));
            var curPix = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](currentX, currentY);
            while (this.checkOverlapping(curPhraseWidth, curPhraseHeight, currentX, currentY, overlapping)) {
                console.log("is overlapping: " + phrase);
                currentX = Math.floor(this.getRandInRange(0, width));
                currentY = Math.floor(this.getRandInRange(0, height));
                curPix = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](currentX, currentY);
            }
            phrase.setPosition(currentX, currentY);
            for (let xPixel = currentX; xPixel < currentX + curPhraseWidth; xPixel++) {
                for (let yPixel = currentY; yPixel < currentY + curPhraseHeight; yPixel++) {
                    let p = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](xPixel, yPixel);
                    overlapping.set(p.toString(), true);
                }
            }
        });
    }
    checkOverlapping(curPhraseWidth, curPhraseHeight, currentX, currentY, overlapping) {
        for (let xPixel = currentX - 20; xPixel < currentX + curPhraseWidth + 20; xPixel++) {
            for (let yPixel = currentY - 20; yPixel < currentY + curPhraseHeight + 20; yPixel++) {
                let p = new _pixel__WEBPACK_IMPORTED_MODULE_2__["Pixel"](xPixel, yPixel);
                if (overlapping.get(p.toString())) {
                    return true;
                }
            }
        }
        return false;
    }
    getWidth() {
        return this.wordCloud.nativeElement.offsetWidth;
    }
    getHeight() {
        return this.wordCloud.nativeElement.offsetHeight;
    }
    getRandInRange(min, max) {
        if (max < min) {
            return min;
        }
        return Math.random() * (max - min) + min;
    }
}
WordcloudComponent.ɵfac = function WordcloudComponent_Factory(t) { return new (t || WordcloudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
WordcloudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordcloudComponent, selectors: [["app-wordcloud"]], viewQuery: function WordcloudComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_phrase_directive__WEBPACK_IMPORTED_MODULE_3__["PhraseDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wordCloud = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phraseElements = _t);
    } }, decls: 5, vars: 0, consts: [[1, "wordcloud-description"], [1, "word-cloud"], ["wordCloud", ""]], template: function WordcloudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Some of my interests and hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1, 2);
    } }, styles: [".word-cloud[_ngcontent-%COMP%] {\n  color: #243245;\n  font-size: 1.7rem;\n  position: relative;\n  width: 80%;\n  height: 50vh;\n}\n\n[appPhrase][_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  width: auto;\n}\n\n[appPhrase][_ngcontent-%COMP%]:hover {\n  color: #ff9999;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n.wordcloud-description[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  color: #ff9999;\n  font-size: 1.3rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dvcmRjbG91ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ3b3JkY2xvdWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yZC1jbG91ZCB7XG4gIGNvbG9yOiAjMjQzMjQ1O1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cblthcHBQaHJhc2VdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5bYXBwUGhyYXNlXTpob3ZlciB7XG4gIGNvbG9yOiAjZmY5OTk5O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLndvcmRjbG91ZC1kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmOTk5OTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordcloudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wordcloud',
                templateUrl: './wordcloud.component.html',
                styleUrls: ['./wordcloud.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { phraseElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_phrase_directive__WEBPACK_IMPORTED_MODULE_3__["PhraseDirective"]]
        }], wordCloud: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wordCloud', { static: false }]
        }] }); })();


/***/ }),

/***/ "sd/l":
/*!************************************!*\
  !*** ./src/app/wordcloud/pixel.ts ***!
  \************************************/
/*! exports provided: Pixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pixel", function() { return Pixel; });
class Pixel {
    constructor(xVal, yVal) {
        this.x = xVal;
        this.y = yVal;
    }
    toString() {
        return this.x.toString() + this.y.toString();
    }
}


/***/ }),

/***/ "t2Dc":
/*!*************************************!*\
  !*** ./src/app/bio/BioImageData.ts ***!
  \*************************************/
/*! exports provided: BioImageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioImageData", function() { return BioImageData; });
class BioImageData {
    constructor(imgPath, captionText) {
        this.imgPath = imgPath;
        this.captionText = captionText;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztN/":
/*!**************************************************!*\
  !*** ./src/app/greetings/allGreetingSubjects.ts ***!
  \**************************************************/
/*! exports provided: GREETING_SUBJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREETING_SUBJECTS", function() { return GREETING_SUBJECTS; });
const GREETING_SUBJECTS = [
    { id: 0, text: 'squad' },
    { id: 1, text: 'you' },
    { id: 2, text: 'queen' },
    { id: 3, text: 'comrade' },
    { id: 4, text: 'friend' },
    { id: 5, text: 'pal' },
    { id: 6, text: 'fam' },
    { id: 7, text: 'y\'all' },
    { id: 8, text: 'team' },
    { id: 9, text: 'gang' },
    { id: 10, text: 'bestie' }
];


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map