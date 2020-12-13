(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        Welcome to Android Project!\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-list *ngIf=\"userData\">\n    <ion-item class=\"clearme\">\n      <ion-label>Name:</ion-label>\n      <ion-label text-right>{{ userData.name }}</ion-label>\n    </ion-item>\n    <ion-item class=\"clearme\">\n      <ion-label>Email:</ion-label>\n      <ion-label text-right>{{ userEmail }}</ion-label>\n    </ion-item>\n    <ion-item class=\"clearme\">\n      <ion-label>City:</ion-label>\n      <ion-label text-right>{{ userData.city }}</ion-label>\n    </ion-item>\n    <ion-item class=\"clearme\">\n      <ion-label>State:</ion-label>\n      <ion-label text-right>{{ userData.state }}</ion-label>\n    </ion-item>\n    <ion-item class=\"clearme\">\n      <ion-label>Country:</ion-label>\n      <ion-label text-right>{{ userData.country }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer (click)=\"logout()\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title class=\"ion-text-center\">Log out</ion-title>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/dashboard/dashboard.page.ts");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/dashboard/dashboard.page.ts");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
      })], DashboardPageModule);
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.ts ***!
      \*********************************************/

    /*! exports provided: DashboardPage */

    /***/
    function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(db, navCtrl, afAuth) {
          _classCallCheck(this, DashboardPage);

          this.db = db;
          this.navCtrl = navCtrl;
          this.afAuth = afAuth;
          this.userData = null;
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userDetails().subscribe(function (res) {
              console.log(res);

              if (res !== null) {
                _this.db.collection('users').doc(res.uid).get().subscribe(function (res) {
                  _this.userData = res.data();
                });

                _this.userEmail = res.email;
              } else {//this.navCtrl.navigateBack('');
              }
            }, function (err) {
              console.log('err', err);
            });
          }
        }, {
          key: "userDetails",
          value: function userDetails() {
            return this.afAuth.user;
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this.logoutUser().then(function (res) {
              _this2.navCtrl.navigateBack('');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "logoutUser",
          value: function logoutUser() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              if (_this3.afAuth.currentUser) {
                _this3.afAuth.signOut().then(function () {
                  resolve();
                })["catch"](function (error) {
                  reject();
                });
              }
            });
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.page.scss */
        "./src/app/dashboard/dashboard.page.scss"))["default"]]
      })], DashboardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map