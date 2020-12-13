(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\">\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Name</ion-label>\n      <ion-input type=\"text\" name=\"name\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.name\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">City</ion-label>\n      <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.city\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">State</ion-label>\n      <ion-input type=\"text\" formControlName=\"state\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.state\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n      <ion-input type=\"text\" formControlName=\"country\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.country\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('country').hasError(validation.type) && (validations_form.get('country').dirty || validations_form.get('country').touched)\">\n          <ion-text color=\"danger\"><small>{{ validation.message }}</small></ion-text>\n        </div>\n      </ng-container>\n    </div>\n    \n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!validations_form.valid\">Register</ion-button>\n    <label class=\"success-message\">{{successMessage}}</label>\n    <div class=\"error-message ion-text-center\"><ion-text color=\"danger\"><small>{{errorMessage}}</small></ion-text></div>\n  </form>\n  <p class=\"go-to-login text-center\">Already have an account? <a (click)=\"goLoginPage()\">Login Now.</a></p>\n</ion-content>");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







let RegisterPage = class RegisterPage {
    constructor(navCtrl, loadingController, db, afAuth, formBuilder, alertController, http) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.db = db;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.http = http;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ],
            'city': [
                { type: 'required', message: 'City is required.' }
            ],
            'state': [
                { type: 'required', message: 'State is required.' }
            ],
            'country': [
                { type: 'required', message: 'Country is required.' },
            ]
        };
        this.http.get("http://127.0.0.1:3000/details/9").subscribe((data) => {
            alert(data.id);
            console.log(data);
        });
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    tryRegister(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.loadingController.create({
                message: 'Please wait...',
            }).then(a => {
                a.present().then(() => {
                    this.registerUser(value)
                        .then(res => {
                        a.dismiss();
                        this.errorMessage = "";
                        //this.successMessage = "Your account has been created. Please log in.";
                        this.alertMsg();
                    }, err => {
                        a.dismiss();
                        this.errorMessage = err.message;
                        this.successMessage = "";
                    });
                });
            });
        });
    }
    alertMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Success!',
                message: "Your account has been created. Please log in.",
                buttons: [{
                        text: 'Login Now',
                        handler: () => {
                            this.goLoginPage();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goLoginPage() {
        this.navCtrl.navigateBack('');
    }
    registerUser(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
                .then((res) => {
                this.db.collection('users').doc(res.user.uid).set({
                    name: value.name,
                    city: value.city,
                    state: value.state,
                    country: value.country,
                    role: 'customer'
                }).then(res => {
                    resolve(res);
                }, err => reject(err));
            }, err => reject(err));
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map