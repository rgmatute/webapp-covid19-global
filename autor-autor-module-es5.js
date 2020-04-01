function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autor-autor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autor/autor.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autor/autor.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutorAutorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button (click)=\"notBack()\" defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Info</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"ion-text-center\">\n        <ion-card-header>\n            <ion-card-title>APP Developed by</ion-card-title>\n            <ion-card-subtitle>Ronny Gabriel Matute G.</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <h1 color=\"success\">Whatsapp</h1>\n            <p>+593 981851214</p>\n            <h1 color=\"success\">GitHub</h1>\n            <p><a href=\"https://github.com/rgmatute\" target=\"_blank\">To go</a></p>\n            <h1 color=\"success\">Facebook</h1>\n            <p><a href=\"https://www.facebook.com/TelematicoMR\" target=\"_blank\">To go</a></p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card class=\"ion-text-center\">\n        <ion-card-header>\n            <ion-card-title>Api Rest Developed by</ion-card-title>\n            <ion-card-subtitle>NovelCOVID</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <h1 color=\"success\">GitHub</h1>\n            <p><a href=\"https://github.com/novelcovid/api\" target=\"_blank\">To go</a></p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card class=\"ion-text-center\">\n        <ion-card-content>\n            <h1 color=\"success\">Donate by Paypal</h1>\n            <p><a href=\"https://www.paypal.me/TelematicoTools/10\" target=\"_blank\">Donate $10.00</a></p>\n            <p><a href=\"https://www.paypal.me/TelematicoTools/5\" target=\"_blank\">Donate $5.00</a></p>\n            <p><a href=\"https://www.paypal.me/TelematicoTools/3\" target=\"_blank\">Donate $3.00</a></p>\n            <p><a href=\"https://www.paypal.me/TelematicoTools/1\" target=\"_blank\">Donate $1.00</a></p>\n        </ion-card-content>\n    </ion-card>\n    <ion-card class=\"ion-text-center\">\n        <ion-card-header>\n            <ion-card-title>Version</ion-card-title>\n            <ion-card-subtitle>1.0.1</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            \n        </ion-card-content>\n    </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/autor/autor-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/autor/autor-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AutorPageRoutingModule */

  /***/
  function srcAppAutorAutorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutorPageRoutingModule", function () {
      return AutorPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _autor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./autor.page */
    "./src/app/autor/autor.page.ts");

    var routes = [{
      path: '',
      component: _autor_page__WEBPACK_IMPORTED_MODULE_3__["AutorPage"]
    }];

    var AutorPageRoutingModule = function AutorPageRoutingModule() {
      _classCallCheck(this, AutorPageRoutingModule);
    };

    AutorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AutorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/autor/autor.module.ts":
  /*!***************************************!*\
    !*** ./src/app/autor/autor.module.ts ***!
    \***************************************/

  /*! exports provided: AutorPageModule */

  /***/
  function srcAppAutorAutorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutorPageModule", function () {
      return AutorPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _autor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./autor-routing.module */
    "./src/app/autor/autor-routing.module.ts");
    /* harmony import */


    var _autor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./autor.page */
    "./src/app/autor/autor.page.ts");

    var AutorPageModule = function AutorPageModule() {
      _classCallCheck(this, AutorPageModule);
    };

    AutorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _autor_routing_module__WEBPACK_IMPORTED_MODULE_5__["AutorPageRoutingModule"]],
      declarations: [_autor_page__WEBPACK_IMPORTED_MODULE_6__["AutorPage"]]
    })], AutorPageModule);
    /***/
  },

  /***/
  "./src/app/autor/autor.page.scss":
  /*!***************************************!*\
    !*** ./src/app/autor/autor.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutorAutorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG9yL2F1dG9yLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/autor/autor.page.ts":
  /*!*************************************!*\
    !*** ./src/app/autor/autor.page.ts ***!
    \*************************************/

  /*! exports provided: AutorPage */

  /***/
  function srcAppAutorAutorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutorPage", function () {
      return AutorPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AutorPage = /*#__PURE__*/function () {
      function AutorPage(router) {
        _classCallCheck(this, AutorPage);

        this.router = router;
      }

      _createClass(AutorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "notBack",
        value: function notBack() {//this.router.navigate(['/autor']);
        }
      }]);

      return AutorPage;
    }();

    AutorPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AutorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-autor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./autor.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autor/autor.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./autor.page.scss */
      "./src/app/autor/autor.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AutorPage);
    /***/
  }
}]);
//# sourceMappingURL=autor-autor-module-es5.js.map