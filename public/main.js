(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_farmland_registration_farmland_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/farmland-registration/farmland-registration.component */ "./src/app/admin/components/farmland-registration/farmland-registration.component.ts");
/* harmony import */ var _components_farmers_list_farmers_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/farmers-list/farmers-list.component */ "./src/app/admin/components/farmers-list/farmers-list.component.ts");
/* harmony import */ var _components_add_crop_add_crop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-crop/add-crop.component */ "./src/app/admin/components/add-crop/add-crop.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            app_material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            _components_add_crop_add_crop_component__WEBPACK_IMPORTED_MODULE_6__["AddCropComponent"],
            _components_farmland_registration_farmland_registration_component__WEBPACK_IMPORTED_MODULE_4__["FarmlandRegistrationComponent"],
            _components_farmers_list_farmers_list_component__WEBPACK_IMPORTED_MODULE_5__["FarmersListComponent"],
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/components/add-crop/add-crop.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/components/add-crop/add-crop.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.list-header-title{\r\n  font-weight:lighter;\r\n  color: #2A66A7;\r\n  font-weight: bold;\r\n  margin-bottom: 2em;\r\n  padding-bottom: 1em;\r\n  border-bottom: double 4px rgb(16, 236, 82);\r\n  padding-left: 300px;\r\n  margin-top: 3em;\r\n}\r\n#searchHeader{\r\n width: 75%;\r\n margin: 0 auto;\r\n margin-top: 2em;\r\n}\r\nform{\r\n padding:20px;\r\n float: none;\r\n}\r\n.form-control{\r\n margin: 1em;\r\n padding: 5px 15px;\r\n font-family: Arial, Helvetica, sans-serif;\r\n font-size:14px;\r\n border:1px solid #0076a3; border-right:0px;\r\n border-top-left-radius: 5px 5px;\r\n border-bottom-left-radius: 5px 5px;\r\n}\r\n.tfbutton {\r\n margin: 0;\r\n padding: 5px 15px;\r\n font-family: Arial, Helvetica, sans-serif;\r\n font-size:14px;\r\n outline: none;\r\n cursor: pointer;\r\n text-align: center;\r\n text-decoration: none;\r\n color: #ffffff;\r\n border: solid 1px #0076a3; border-right:0px;\r\n background: #0095cd;\r\n background: -moz-linear-gradient(top,  #00adee,  #0078a5);\r\n border-top-right-radius: 5px 5px;\r\n border-bottom-right-radius: 5px 5px;\r\n}\r\n.tfbutton:hover {\r\n text-decoration: none;\r\n background: #007ead;\r\n background: -moz-linear-gradient(top,  #0095cc,  #00678e);\r\n}\r\n/* Fixes submit button height problem in Firefox */\r\n.tfbutton::-moz-focus-inner {\r\n border: 0;\r\n}\r\n.tfclear{\r\n clear:both;\r\n}\r\ninput{\r\n width: 75%;\r\n height: 200%;\r\n}\r\ntextarea{\r\n width: 75%;\r\n height: 200%;\r\n}\r\nmat-form-field{\r\n  margin: 2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/components/add-crop/add-crop.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/add-crop/add-crop.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row list-header-title \">\r\n    <h1 class=\"text-center\">Add Crop </h1></div>\r\n    <form novalidate [formGroup]=\"service.form\" class=\"normal-form\" (submit)=\"onSubmit()\">\r\n        <mat-grid-list cols=\"2\" rowHeight=\"300px\">\r\n          <mat-grid-tile>\r\n            <div class=\"controles-container\">\r\n                <mat-form-field>\r\n                    <input formControlName=\"crop_name\" matInput placeholder=\"Crop Name*\">\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n              <mat-form-field>\r\n                <input formControlName=\"crop_description\" matInput placeholder=\"Crop Description*\">\r\n                <mat-error>This field is mandatory.</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input formControlName=\"prefered_soil_type\" matInput placeholder=\"Prefered Soil Type*\">\r\n                  <mat-error>This field is mandatory.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input formControlName=\"prefered_season\" matInput placeholder=\"Prefered Season*\">\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                      <input formControlName=\"temprature\" matInput placeholder=\"Temprature*\">\r\n                      <mat-error>This field is mandatory.</mat-error>\r\n                    </mat-form-field>\r\n              <mat-form-field>\r\n                <input formControlName=\"moisture\" matInput placeholder=\"Moistur*\">\r\n                <mat-error>Invalid email address.</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n              <div class=\"controles-container\">\r\n                  <mat-form-field>\r\n                      <input formControlName=\"light_intensity\" matInput placeholder=\"light Intensity*\">\r\n                      <mat-error>This field is mandatory.</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input formControlName=\"Ph_level\" matInput placeholder=\"PH level*\">\r\n                        <mat-error>This field is mandatory.</mat-error>\r\n                      </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input formControlName=\"air_temperature\" matInput placeholder=\"Air Temperature*\">\r\n                        <mat-error>This field is mandatory.</mat-error>\r\n                      </mat-form-field>\r\n                <mat-form-field>\r\n                  <input formControlName=\"humidity\" matInput placeholder=\"Humidity*\">\r\n                  <mat-error>Invalid email address.</mat-error>\r\n                </mat-form-field>\r\n              <div class=\"button-row\">\r\n                  <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\r\n                </div>\r\n              </div>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </form>\r\n    "

/***/ }),

/***/ "./src/app/admin/components/add-crop/add-crop.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/add-crop/add-crop.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCropComponent", function() { return AddCropComponent; });
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var _common_services_crop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/crop.service */ "./src/app/common/services/crop.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AddCropComponent = class AddCropComponent {
    constructor(authService, router, service, notify) {
        this.authService = authService;
        this.router = router;
        this.service = service;
        this.notify = notify;
    }
    ngOnInit() { }
    onSubmit() {
        if (this.service.form.valid) {
            console.log(this.service.form.value);
            this.authService.CropRegister(this.service.form.value).subscribe(data => {
                if (data.success) {
                    this.notify.success(`:: ${data.msg}`);
                }
                else {
                    this.notify.warn(`:: ${data.msg}`);
                }
                this.router.navigate(['/admin/add-crop']);
            });
        }
    }
};
AddCropComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crop-add',
        template: __webpack_require__(/*! ./add-crop.component.html */ "./src/app/admin/components/add-crop/add-crop.component.html"),
        styles: [__webpack_require__(/*! ./add-crop.component.css */ "./src/app/admin/components/add-crop/add-crop.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _common_services_crop_service__WEBPACK_IMPORTED_MODULE_2__["CropService"],
        _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationServiceService"]])
], AddCropComponent);



/***/ }),

/***/ "./src/app/admin/components/farmers-list/farmers-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/farmers-list/farmers-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-cyan-2 input[type=text]:focus:not([readonly]) {\r\n  border-bottom: 1px solid #4dd0e1;\r\n  box-shadow: 0 1px 0 0 #4dd0e1;\r\n  }\r\n\r\n  .active-cyan input[type=text] {\r\n  border-bottom: 1px solid #4dd0e1;\r\n  box-shadow: 0 1px 0 0 #4dd0e1;\r\n  }\r\n\r\n  .active-cyan .fa,\r\n  .active-cyan-2 .fa {\r\n  color: #4dd0e1;\r\n  }\r\n\r\n  #searchHeader{\r\n    width: 75%;\r\n    margin: 0 auto;\r\n\t  margin-top: 2em;\r\n\t}\r\n\r\n  form{\r\n    padding:20px;\r\n    float: none;\r\n\t}\r\n\r\n  .form-control{\r\n\t\tmargin: 0;\r\n\t\tpadding: 5px 15px;\r\n\t\tfont-family: Arial, Helvetica, sans-serif;\r\n\t\tfont-size:14px;\r\n\t\tborder:1px solid #0076a3; border-right:0px;\r\n\t\tborder-top-left-radius: 5px 5px;\r\n\t\tborder-bottom-left-radius: 5px 5px;\r\n\t}\r\n\r\n  .tfbutton {\r\n\t\tmargin: 0;\r\n\t\tpadding: 5px 15px;\r\n\t\tfont-family: Arial, Helvetica, sans-serif;\r\n\t\tfont-size:14px;\r\n\t\toutline: none;\r\n\t\tcursor: pointer;\r\n\t\ttext-align: center;\r\n\t\ttext-decoration: none;\r\n\t\tcolor: #ffffff;\r\n\t\tborder: solid 1px #0076a3; border-right:0px;\r\n\t\tbackground: #0095cd;\r\n\t\tbackground: -moz-linear-gradient(top,  #00adee,  #0078a5);\r\n\t\tborder-top-right-radius: 5px 5px;\r\n\t\tborder-bottom-right-radius: 5px 5px;\r\n\t}\r\n\r\n  .tfbutton:hover {\r\n\t\ttext-decoration: none;\r\n\t\tbackground: #007ead;\r\n\t\tbackground: -moz-linear-gradient(top,  #0095cc,  #00678e);\r\n\t}\r\n\r\n  /* Fixes submit button height problem in Firefox */\r\n\r\n  .tfbutton::-moz-focus-inner {\r\n\t  border: 0;\r\n\t}\r\n\r\n  .tfclear{\r\n\t\tclear:both;\r\n\t}\r\n\r\n  .user-data{\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  margin-left: 8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/components/farmers-list/farmers-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/farmers-list/farmers-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t<div id=\"searchHeader\">\r\n\t\t<form novalidate [formGroup]=\"searchForm\" (submit)=\"onSubmitSearch(searchForm.value)\">\r\n        <div class=\"form-container\">\r\n            <label for=\"name\">Search Farmers by Passport:</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"tftextinput\"\r\n            formControlName=\"passport\"/>\r\n            <input type=\"submit\" value=\"search\" class=\"tfbutton\">\r\n          </div>\r\n    </form>\r\n\r\n\t<div class=\"tfclear\"></div>\r\n\t</div>\r\n<hr>\r\n<div *ngIf=\"users\" class=\"row user-data\">\r\n<div *ngFor=\"let user of users\" class=\"col-md-12 crop-data\">\r\n  <table class=\"text-canter\" cellpadding=\"3\" style=\"float: left\">\r\n    <tr>\r\n      <td width=\"120px;\"><strong> Passport </strong></td>\r\n      <td width=\"500px;\"> {{user.userID}} </td>\r\n  </tr>\r\n  <tr>\r\n      <td>&nbsp;</td>\r\n      <td>&nbsp;</td>\r\n  </tr>\r\n      <tr>\r\n          <td width=\"10px;\"><strong> Full Name </strong></td>\r\n          <td width=\"250px;\"> {{user.first_name}} <span>  </span>{{user.middle_name}} <span>   </span> {{user.last_name}} </td>\r\n      </tr>\r\n      <tr>\r\n          <td>&nbsp;</td>\r\n          <td>&nbsp; </td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td width=\"150px;\"><strong> Phone </strong></td>\r\n        <td width=\"300px;\"> {{user.user_detail.phone}} </td>\r\n      </tr>\r\n        <tr>\r\n            <td>&nbsp;</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n      <tr>\r\n          <td width=\"120px;\"><strong> Email </strong></td>\r\n          <td width=\"500px;\"> {{user.email}} </td>\r\n      </tr>\r\n      <tr>\r\n          <td>&nbsp;</td>\r\n          <td>&nbsp;</td>\r\n      </tr>\r\n      <tr>\r\n        <td width=\"150px;\"><strong> Investment Capital</strong></td>\r\n        <td width=\"300px;\"> {{user.user_detail.investment_capital}} </td>\r\n    </tr>\r\n    <tr>\r\n    <td>&nbsp;</td>\r\n    <td>&nbsp;</td>\r\n</tr>\r\n<tr>\r\n    <td width=\"150px;\"><strong> Education</strong></td>\r\n    <td width=\"300px;\"> {{user.user_detail.education}} </td>\r\n</tr>\r\n  <tr>\r\n      <td>&nbsp;</td>\r\n      <td>&nbsp;</td>\r\n  </tr>\r\n\r\n  <tr>\r\n      <td width=\"150px;\"><strong> Experiance</strong></td>\r\n      <td width=\"300px;\"> {{user.user_detail.experiance}} </td>\r\n  </tr>\r\n    <tr>\r\n        <td>&nbsp;</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <tr>\r\n        <td width=\"150px;\"><strong> Nationality</strong></td>\r\n        <td width=\"300px;\"> {{user.user_detail.address.nationality}} </td>\r\n    </tr>\r\n      <tr>\r\n          <td>&nbsp;</td>\r\n          <td>&nbsp;</td>\r\n      </tr>\r\n      <tr>\r\n          <td width=\"150px;\"><strong> City</strong></td>\r\n          <td width=\"300px;\"> {{user.user_detail.address.city}} </td>\r\n      </tr>\r\n        <tr>\r\n            <td>&nbsp;</td>\r\n            <td>&nbsp;</td>\r\n        </tr>\r\n        <tr>\r\n            <td width=\"150px;\"><strong> Subcity</strong></td>\r\n            <td width=\"300px;\"> {{user.user_detail.address.subcity}} </td>\r\n        </tr>\r\n          <tr>\r\n              <td>&nbsp;</td>\r\n              <td>&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n              <td width=\"150px;\"><strong> Woreda</strong></td>\r\n              <td width=\"300px;\"> {{user.user_detail.address.woreda}} </td>\r\n          </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"150px;\"><strong> Kebele</strong></td>\r\n                <td width=\"300px;\"> {{user.user_detail.address.Kebele}} </td>\r\n            </tr>\r\n              <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                  <td width=\"150px;\"><strong> House Number </strong></td>\r\n                  <td width=\"300px;\"> {{user.user_detail.address.house_number}} </td>\r\n              </tr>\r\n                <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                    <td width=\"150px;\"><strong> Post Box </strong></td>\r\n                    <td width=\"300px;\"> {{user.user_detail.address.post_box}} </td>\r\n                </tr>\r\n                  <tr>\r\n                      <td>&nbsp;</td>\r\n                      <td>&nbsp;</td>\r\n                  </tr>\r\n  </table>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/components/farmers-list/farmers-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/farmers-list/farmers-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchModel, FarmersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmersListComponent", function() { return FarmersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ..//../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



class SearchModel {
}
let FarmersListComponent = class FarmersListComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.passportModel = new SearchModel();
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            'passport': [this.passportModel.passport, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]]
        });
    }
    // search user by passport
    onSubmitSearch(search) {
        this.authService.getUserByPassport(search.passport)
            .subscribe(data => {
            this.users = data;
            console.log(this.users);
        });
    }
};
FarmersListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-farmers-list',
        template: __webpack_require__(/*! ./farmers-list.component.html */ "./src/app/admin/components/farmers-list/farmers-list.component.html"),
        styles: [__webpack_require__(/*! ./farmers-list.component.css */ "./src/app/admin/components/farmers-list/farmers-list.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], FarmersListComponent);



/***/ }),

/***/ "./src/app/admin/components/farmland-registration/farmland-registration.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/farmland-registration/farmland-registration.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.list-header-title{\r\n   font-weight:lighter;\r\n   color: #2A66A7;\r\n   font-weight: bold;\r\n   margin-bottom: 2em;\r\n   padding-bottom: 1em;\r\n   border-bottom: double 4px rgb(16, 236, 82);\r\n   padding-left: 300px;\r\n   margin-top: 3em;\r\n}\r\n#searchHeader{\r\n  width: 75%;\r\n  margin: 0 auto;\r\n  margin-top: 2em;\r\n}\r\nform{\r\n  padding:20px;\r\n  float: none;\r\n}\r\n.form-control{\r\n  margin: 1em;\r\n  padding: 5px 15px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size:14px;\r\n  border:1px solid #0076a3; border-right:0px;\r\n  border-top-left-radius: 5px 5px;\r\n  border-bottom-left-radius: 5px 5px;\r\n}\r\ninput{\r\n  width: 75%;\r\n  height: 200%;\r\n}\r\ntextarea{\r\n  width: 75%;\r\n  height: 200%;\r\n}\r\nmat-form-field{\r\n  margin: 2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/components/farmland-registration/farmland-registration.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/components/farmland-registration/farmland-registration.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row list-header-title \">\r\n  <h1 class=\"text-center\">Add Farmland </h1></div>\r\n  <form novalidate [formGroup]=\"service.form\" class=\"normal-form\" (submit)=\"onSubmit()\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n            <mat-form-field>\r\n                <input formControlName=\"farmland_area\" matInput placeholder=\"Farmland Area*\">\r\n                <mat-error>This field is mandatory.</mat-error>\r\n              </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"farmland_experiance\" matInput placeholder=\"Farmland Experiance*\">\r\n            <mat-error>This field is mandatory.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n              <input formControlName=\"farmland_description\" matInput placeholder=\"Farmland Description*\">\r\n              <mat-error>This field is mandatory.</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input formControlName=\"soil_type\" matInput placeholder=\"Soil Type*\">\r\n                <mat-error>This field is mandatory.</mat-error>\r\n              </mat-form-field>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n              <mat-form-field>\r\n                  <input formControlName=\"physical_address\" matInput placeholder=\"Physical Address*\">\r\n                  <mat-error>This field is mandatory.</mat-error>\r\n                </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"latitude\" matInput placeholder=\"Latitude*\">\r\n            <mat-error>Invalid email address.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n          <input formControlName=\"longitude\" matInput placeholder=\"longitude*\">\r\n          <mat-error>This field is mandatory.</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"button-row\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/admin/components/farmland-registration/farmland-registration.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/components/farmland-registration/farmland-registration.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FarmlandRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmlandRegistrationComponent", function() { return FarmlandRegistrationComponent; });
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var _common_services_farmland_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/farmland.service */ "./src/app/common/services/farmland.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let FarmlandRegistrationComponent = class FarmlandRegistrationComponent {
    constructor(authService, router, service, notify) {
        this.authService = authService;
        this.router = router;
        this.service = service;
        this.notify = notify;
    }
    ngOnInit() { }
    onSubmit() {
        if (this.service.form.valid) {
            this.authService.farmlandRegister(this.service.form.value).subscribe(data => {
                if (data.success) {
                    this.notify.success(`:: ${data.msg}`);
                }
                else {
                    this.notify.warn(`:: ${data.msg}`);
                }
                this.router.navigate(['/admin/farmland-registration']);
            });
        }
    }
};
FarmlandRegistrationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-farmland-registration',
        template: __webpack_require__(/*! ./farmland-registration.component.html */ "./src/app/admin/components/farmland-registration/farmland-registration.component.html"),
        styles: [__webpack_require__(/*! ./farmland-registration.component.css */ "./src/app/admin/components/farmland-registration/farmland-registration.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _common_services_farmland_service__WEBPACK_IMPORTED_MODULE_2__["FarmlandService"],
        _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationServiceService"]])
], FarmlandRegistrationComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/guards/auth.guard */ "./src/app/common/guards/auth.guard.ts");
/* harmony import */ var _common_guards_role_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/guards/role-guard.guard */ "./src/app/common/guards/role-guard.guard.ts");
/* harmony import */ var _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/page-not-found/page-not-found.component */ "./src/app/common/page-not-found/page-not-found.component.ts");
/* harmony import */ var _gust_gust_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gust/gust.component */ "./src/app/gust/gust.component.ts");
/* harmony import */ var _gust_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gust/components/welcome/welcome.component */ "./src/app/gust/components/welcome/welcome.component.ts");
/* harmony import */ var _gust_components_farmlands_farmlands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gust/components/farmlands/farmlands.component */ "./src/app/gust/components/farmlands/farmlands.component.ts");
/* harmony import */ var _gust_components_crops_crops_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gust/components/crops/crops.component */ "./src/app/gust/components/crops/crops.component.ts");
/* harmony import */ var _gust_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gust/components/contact/contact.component */ "./src/app/gust/components/contact/contact.component.ts");
/* harmony import */ var _gust_components_aboutUs_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gust/components/aboutUs/aboutus.component */ "./src/app/gust/components/aboutUs/aboutus.component.ts");
/* harmony import */ var _gust_components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gust/components/register/register.component */ "./src/app/gust/components/register/register.component.ts");
/* harmony import */ var _farmer_farmer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./farmer/farmer.component */ "./src/app/farmer/farmer.component.ts");
/* harmony import */ var _farmer_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./farmer/components/profile/profile.component */ "./src/app/farmer/components/profile/profile.component.ts");
/* harmony import */ var _farmer_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./farmer/components/home/home.component */ "./src/app/farmer/components/home/home.component.ts");
/* harmony import */ var _farmer_components_my_farmalnds_my_farmalnds_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./farmer/components/my-farmalnds/my-farmalnds.component */ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_components_add_crop_add_crop_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/components/add-crop/add-crop.component */ "./src/app/admin/components/add-crop/add-crop.component.ts");
/* harmony import */ var _admin_components_farmland_registration_farmland_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/components/farmland-registration/farmland-registration.component */ "./src/app/admin/components/farmland-registration/farmland-registration.component.ts");
/* harmony import */ var _admin_components_farmers_list_farmers_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/components/farmers-list/farmers-list.component */ "./src/app/admin/components/farmers-list/farmers-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Common components and services



// Gusts section







// Farmer section




// Admin section




// Defining Route mocdule
const appRoutes = [
    { path: '', redirectTo: 'gust', pathMatch: 'full' },
    { path: 'gust', component: _gust_gust_component__WEBPACK_IMPORTED_MODULE_5__["GustComponent"],
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: _gust_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
            { path: 'farmlands', component: _gust_components_farmlands_farmlands_component__WEBPACK_IMPORTED_MODULE_7__["FarmlandsComponent"] },
            { path: 'about-us', component: _gust_components_aboutUs_aboutus_component__WEBPACK_IMPORTED_MODULE_10__["AboutusComponent"] },
            { path: 'contact-us', component: _gust_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
            { path: 'crops', component: _gust_components_crops_crops_component__WEBPACK_IMPORTED_MODULE_8__["CropsComponent"] },
            { path: 'register', component: _gust_components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] }
        ] },
    { path: 'farmers', component: _farmer_farmer_component__WEBPACK_IMPORTED_MODULE_12__["FarmerComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _farmer_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'profile', component: _farmer_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'my-farmlands', component: _farmer_components_my_farmalnds_my_farmalnds_component__WEBPACK_IMPORTED_MODULE_15__["MyFarmalndsComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
        ] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
        children: [
            { path: '', redirectTo: 'farmer-list', pathMatch: 'full' },
            { path: 'farmer-list', component: _admin_components_farmers_list_farmers_list_component__WEBPACK_IMPORTED_MODULE_19__["FarmersListComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _common_guards_role_guard_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuardGuard"]] },
            { path: 'add-crop', component: _admin_components_add_crop_add_crop_component__WEBPACK_IMPORTED_MODULE_17__["AddCropComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _common_guards_role_guard_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuardGuard"]] },
            { path: 'farmland-registration', component: _admin_components_farmland_registration_farmland_registration_component__WEBPACK_IMPORTED_MODULE_18__["FarmlandRegistrationComponent"], canActivate: [_common_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _common_guards_role_guard_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuardGuard"]] }
        ] },
    { path: '404', component: _common_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);

/*

export const navigationLinks = [
  {
      name: 'Dashboard',
      routerLink: '/dashboard',
      roles: ['Admin', 'RegUser'],
      order: 0,
      overrideFunction: function() { console.log("override function clicked"); }
  }
]

// IN ngOnInit()
this.router.events
.subscribe(
    event => {
        if (event instanceof NavigationEnd) {
            this.setUserRoleFromUrl(event.urlAfterRedirects);
            this.setNavLinksFromUserRole(this.userRole);
        }
    }
);


*/


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nfooter .container{\r\n  background: none !important;\r\n  margin-bottom: 1em;\r\n}\r\nfooter .container p{\r\n  color: #2A66A7 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n   <footer class=\"container\" >\r\n        <p class=\"text-center\" >&copy; 2018 - Addis Ababa Institute of Technology. All Rights Reserved.</p>\r\n    </footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'smartFarmingUI';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gust_gust_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gust/gust.module */ "./src/app/gust/gust.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _farmer_farmer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./farmer/farmer.module */ "./src/app/farmer/farmer.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            // Internal custem modules
            _gust_gust_module__WEBPACK_IMPORTED_MODULE_7__["GustModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_8__["CommonAppModule"],
            _farmer_farmer_module__WEBPACK_IMPORTED_MODULE_9__["FarmerModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"],
            // Imported Angualr Modules
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            // Angular material design modules
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppModule", function() { return CommonAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/common/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/common/services/user.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var _services_farmland_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/farmland.service */ "./src/app/common/services/farmland.service.ts");
/* harmony import */ var _services_crop_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/crop.service */ "./src/app/common/services/crop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let CommonAppModule = class CommonAppModule {
};
CommonAppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ],
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
        ],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _services_farmland_service__WEBPACK_IMPORTED_MODULE_11__["FarmlandService"],
            _services_crop_service__WEBPACK_IMPORTED_MODULE_12__["CropService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationServiceService"]
        ]
    })
], CommonAppModule);



/***/ }),

/***/ "./src/app/common/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/common/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/common/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/gust']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/common/guards/role-guard.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/common/guards/role-guard.guard.ts ***!
  \***************************************************/
/*! exports provided: RoleGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardGuard", function() { return RoleGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/common/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RoleGuardGuard = class RoleGuardGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/farmers']);
            return false;
        }
    }
};
RoleGuardGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], RoleGuardGuard);

// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//   return true;
// }


/***/ }),

/***/ "./src/app/common/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    color: black;\r\n    font-family:Typonine Mono Regular;\r\n    margin-bottom: .1em;\r\n}\r\nli a:hover {\r\n  padding-bottom: 2px;\r\n  border-bottom: solid 3px white;\r\n}\r\n/* li a:active {\r\n  padding-bottom: 2px;\r\n  border-bottom: solid 3px white;\r\n} */\r\nli {\r\n  margin-right:2em\r\n}\r\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n   <!-- <a *ngIf=\"!authService.loggedIn()\" class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/aaitLogo.png\" style=\"height:100px; margin-left:10em\"></a>-->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/gust']\">SmartFarming <span></span></a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n\r\n                           <!-- Gust navigation Component -->\r\n\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['gust/about-us']\">About-us <span></span></a>\r\n              </li>\r\n              <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['gust/farmlands']\">Farmlands <span></span></a>\r\n            </li>\r\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"['gust/crops']\">Crops <span></span></a>\r\n              </li>\r\n              <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['gust/contact-us']\">Contact-us <span></span></a>\r\n                </li>\r\n\r\n\r\n                        <!-- Farmer navigation Component && authService.isAdmin() -->\r\n\r\n        <li *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['farmers/home']\">Home </a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['farmers/profile']\">Profile </a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['farmers/my-farmlands']\">My farmlands</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" class=\"nav-item\" >\r\n          <a class=\"nav-link\" (click)=\"onClickLogout()\" href=\"#\">Logout</a>\r\n        </li>\r\n\r\n\r\n                              <!-- Admin navigation Component                && authService.isAdmin()        -->\r\n\r\n\r\n        <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['admin/farmer-list']\">Farmers </a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['admin/farmland-registration']\">Add Farmland</a>\r\n          <li *ngIf=\"authService.loggedIn() && authService.isAdmin() \" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['admin/add-crop']\">Add Crop</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"onClickLogout()\"  href=\"#\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ViewEncapsulation } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() { }
    onClickLogout() {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/gust/welcome']);
        return false;
    }
};
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        // encapsulation: ViewEncapsulation.None,
        selector: 'app-navbar',
        template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/common/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/common/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/common/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\nbackground-color: #f00;\r\nwidth: 50%;\r\nposition: fixed;\r\nleft: 25%;\r\ntop: 25%;\r\n}"

/***/ }),

/***/ "./src/app/common/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/common/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n <h1>Ops! Page is not found</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/common/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/common/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/common/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/common/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        //  this.isDev = true;  // Change to false before deployment
    }
    // ...............  Guest HTTP Requiest ...
    registerFarmer(farmer) {
        console.log(farmer);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', farmer, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // user authontication
    authenticateFarmer(farmer) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/login', farmer, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getFarmland() {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.get('farmlands/guest', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    SearchFarmlandByLocation(farmer_id) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.get(`farmlands/guest/${farmer_id}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // Lease farland
    hireFarmland(farmer_id, user_id) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.put(`farmlands/guest/${encodeURIComponent(farmer_id)}/${encodeURIComponent(user_id)}`, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // geting the list off all crops
    getCrop() {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('crops', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // contact us request
    contact(contact) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('contacts', contact, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // .................. User Request...
    // Get profile profile on authontication
    getProfile() {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    uploadUserProfilePicture(fileData) {
        return this.http.post('/api/users/upload-profile', fileData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // geting farmland Data
    getMyFarmland(user) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-Type', 'application/json');
        return this.http.get(`farmlands/user/${user}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // .................  Admin Request ...........
    // getting the list of farmers for admin
    getFarmerList() {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getUserByPassport(passport) {
        console.log(passport);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`users/${encodeURIComponent(passport)}`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // Start of Crop Service
    CropRegister(crop) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('crops', crop, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // Start of farmland Service
    farmlandRegister(farmland) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('farmlands/admin/add-farmland', farmland, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    // ............. Servicees ..../
    // store login farmer data
    storeFarmerData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])('id_token');
    }
    isAdmin() {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (loggedUser.isAdmin) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
], AuthService);



/***/ }),

/***/ "./src/app/common/services/crop.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/crop.service.ts ***!
  \*************************************************/
/*! exports provided: CropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropService", function() { return CropService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CropService = class CropService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            crop_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            crop_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prefered_soil_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prefered_season: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            temprature: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            moisture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            light_intensity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Ph_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            air_temperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            humidity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    initializeFormGroup() {
        this.form.setValue({
            crop_name: '',
            crop_description: '',
            prefered_soil_type: '',
            prefered_season: '',
            temprature: '',
            moisture: '',
            light_intensity: '',
            Ph_level: '',
            air_temperature: '',
            humidity: ''
        });
    }
};
CropService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
], CropService);



/***/ }),

/***/ "./src/app/common/services/farmland.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/farmland.service.ts ***!
  \*****************************************************/
/*! exports provided: FarmlandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmlandService", function() { return FarmlandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FarmlandService = class FarmlandService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            farmland_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            farmland_experiance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            farmland_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            soil_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            physical_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    initializeFormGroup() {
        this.form.setValue({
            farmland_area: '',
            farmland_experiance: '',
            farmland_description: '',
            soil_type: '',
            physical_address: '',
            latitude: '',
            longitude: ''
        });
    }
};
FarmlandService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
], FarmlandService);



/***/ }),

/***/ "./src/app/common/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationServiceService", function() { return NotificationServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NotificationServiceService = class NotificationServiceService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    success(msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    }
    warn(msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    }
};
NotificationServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
], NotificationServiceService);



/***/ }),

/***/ "./src/app/common/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserService = class UserService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            passport: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            middle_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            investment_capital: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            education: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            experiance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            subcity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            woreda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            kebele: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            house_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            post_box: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])
        });
    }
    initializeFormGroup() {
        this.form.setValue({
            passport: '',
            first_name: '',
            middle_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            phone: '',
            gender: '1',
            investment_capital: '0',
            education: '',
            experiance: '',
            birth_date: '',
            nationality: 'Ethiopia',
            city: '',
            subcity: '',
            woreda: '',
            kebele: '',
            house_number: '',
            post_box: ''
        });
    }
};
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
], UserService);



/***/ }),

/***/ "./src/app/farmer/components/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/farmer/components/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/farmer/components/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/farmer/components/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row \" style=\"margin-top: 2em;\">\r\n      <div class=\"col-sm-9\">\r\n          <div class=\"widget stacked\" style=\"width: 920px\">\r\n              <span class=\"list-group-item active\">\r\n                  My Profile\r\n              </span>\r\n              <div class=\"widget-content\" style=\"width: 100%; margin-top: 1em;\">\r\n\r\n                      <div class=\"col-md-6\" style=\"width: 100%\">\r\n                          <table class=\"\" cellpadding=\"3\" style=\"float: left\">\r\n                              <tr>\r\n                                  <td width=\"120px;\"><strong> Full Name </strong></td>\r\n                                  <td width=\"250px;\"> {{user.first_name}} <span>  </span> {{user.middle_name}} <span>  </span> {{user.last_name}} </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>&nbsp;</td>\r\n                                  <td>&nbsp; </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td width=\"90px;\"><strong> ID No. </strong></td>\r\n                                  <td width=\"250px;\"> {{user.username}} </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>&nbsp;</td>\r\n                                  <td>&nbsp;</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td width=\"90px;\"><strong> Email </strong></td>\r\n                                  <td width=\"250px;\"> {{user.email}} </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>&nbsp;</td>\r\n                                  <td>&nbsp;</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"90px;\"><strong> Phone </strong></td>\r\n                                <td width=\"250px;\"> {{user.user_detail.phone}} </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>&nbsp;</td>\r\n                                <td>&nbsp;</td>\r\n                            </tr>\r\n                          </table>\r\n                      </div>\r\n                       <div class=\"col-md-6\" style=\"width: 180px; float: right;margin-left: 8em;\">\r\n                          <img src=\"../../../../assets/ATR_8980_07_2017_10_03_4_23_43.jpg\" style=\"margin: 0px -50px;\" id=\"output\" class=\"img-rounded\"\r\n                               width=\"180\" height=\"150\" />\r\n                      </div>\r\n                      <p style=\"clear: both\">&nbsp;</p>\r\n                                  </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/farmer/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmer/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomeComponent = class HomeComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile;
            console.log(this.user);
        });
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/farmer/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/farmer/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/farmer/components/my-farmalnds/my-farmalnds.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-tab{\r\n  margin-top: 1em;\r\n  margin-bottom: 3em;\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n.crop-data{\r\npadding-left: 0.5em;\r\npadding-top: 0.5em;\r\nwidth: 100%;\r\nmargin: 0 auto;\r\nalign-content: center;\r\n}\r\n.col-md-6 img{\r\nwidth: 100%;\r\nheight: 100;\r\n}\r\nh3{\r\n  font-weight: bold;\r\n}\r\n.table{\r\nfont-size: 1em;\r\n}\r\n.button{\r\nbackground: green;\r\ntext-align: center;\r\nfont-size: 16px;\r\nwidth: 400%;\r\nheight: 100%;\r\ncolor: white;\r\n}\r\n.farmland{\r\nmargin: 0 auto 50px;\r\n}\r\n.form{\r\n  padding-left: 200px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/farmer/components/my-farmalnds/my-farmalnds.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header\">\r\n    <h1 (click) = \"showSesnorData()\" class=\"text-center\">My farmlands  </h1>\r\n  </div>\r\n  <hr style=\"width: 100%; border: green 4px double \"/>\r\n  <div *ngFor = \"let farmland of farmlands\">\r\n  <div class=\"row header-tab\">\r\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n          <li class=\"nav-item\" (click) = \"basic()\" >\r\n              <a class=\"nav-link\" id=\"basic_ifno\" data-toggle=\"tab\" href=\"#basic_info\" role=\"tab\" aria-controls=\"basic_info\" aria-selected=\"true\">Basic information</a>\r\n              </li>\r\n      <li class=\"nav-item\"  (click) = \"sensorData()\">\r\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#soil\" role=\"tab\" aria-controls=\"soil\" aria-selected=\"fal\">Data from sensors</a>\r\n      </li>\r\n      <li class=\"nav-item\"  (click) = \"weatherEnv()\">\r\n      <a class=\"nav-link\" id=\"weather-tab\" data-toggle=\"tab\" href=\"#weather\" role=\"tab\" aria-controls=\"weather\" aria-selected=\"false\">Enviromental Weather</a>\r\n      </li>\r\n      </ul>\r\n      </div>\r\n\r\n    <div class=\"container\" *ngIf = \"basicInfo\">\r\n  <div class=\"row farmland\" >\r\n      <div class=\"tab-content basic_ifno\" id=\"basic_ifno\">\r\n          <div class=\"tab-pane fade show active\" id=\"basic_info\" role=\"tabpanel\" aria-labelledby=\"basic_info-tab\">\r\n    <div class=\"col-md-5\" >\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"long\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n        </agm-map>\r\n      </div>\r\n          <div class=\"col-md-7 crop-data\" >\r\n              <table class=\"\" cellpadding=\"3\" style=\"float: left\">\r\n                  <tr>\r\n                    <td width=\"40px;\" style= \"padding-right:.5em\"><strong> Descriptions </strong></td>\r\n                    <td width=\"100%;\"> {{farmland.farmland_description}} </td>\r\n                </tr>\r\n                <tr>\r\n                <td>&nbsp;</td>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n              <td width=\"40px;\" style= \"padding-right:.5em\"><strong> Descriptions </strong></td>\r\n              <td width=\"100%;\"> {{farmland.farmland_experiance}} </td>\r\n          </tr>\r\n              <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                  <td width=\"100px;\"><strong> Location </strong></td>\r\n                  <td width=\"200px;\"> {{farmland.physical_address}} </td>\r\n              </tr>\r\n              <tr>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                  <td width=\"100px;\"><strong> Area in hectar </strong></td>\r\n                  <td width=\"200px;\"> {{farmland.farmland_area}} </td>\r\n              </tr>\r\n              <tr>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                  <td width=\"100px;\"><strong>Soil Type </strong></td>\r\n                  <td width=\"200px;\"> {{farmland.soil_type}} </td>\r\n              </tr>\r\n              <tr>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n <div class=\"container\" *ngIf = \"sensor\">\r\n   <div class=\"row\">\r\n  <div class=\"tab-content home-tab \" id=\"home\">\r\n  <div class=\"tab-pane fade \" id=\"soil\" role=\"tabpanel\" aria-labelledby=\"soil-tab\">\r\n      <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr>\r\n      <th scope=\"col\">Time measured</th>\r\n      <th scope=\"col\">Soil Temprature</th>\r\n      <th scope=\"col\">Soil Moisture</th>\r\n      <th scope=\"col\">PH Level</th>\r\n      <th scope=\"col\">Light Intensity</th>\r\n      <th scope=\"col\">Pump Status</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor = \"let a of farmland.embedded_system\">\r\n      <td>{{a.measured_at}}</td>\r\n      <td>{{a.soil_temprature}}</td>\r\n      <td>{{a.soil_moisture}}</td>\r\n      <td>{{a.soil_phLevel}}</td>\r\n      <td>{{a.light_intensity}}</td>\r\n      <td>{{a.motor_on}}</td>\r\n      </tr>\r\n      </tbody>\r\n      </table>\r\n      </div>\r\n </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf = \"environment\">\r\n    <div class=\"row\">\r\n   <div class=\"tab-content weather-tab\" id=\"weather\">\r\n  <div class=\"tab-pane fade\" id=\"weather\" role=\"tabpanel\" aria-labelledby=\"weather-tab\">\r\n  <table class=\"table table-bordered\">\r\n  <thead>\r\n  <tr>\r\n  <th scope=\"col\">Date</th>\r\n  <th scope=\"col\">Temprature</th>\r\n  <th scope=\"col\">Humidity</th>\r\n  <th scope=\"col\">Pressure</th>\r\n  <th scope=\"col\">Wind speed</th>\r\n  <th scope=\"col\">Description</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody *ngFor = \"let b of farmland.enviromental_weather\">\r\n  <tr>\r\n  <td>{{weather.date}}</td>\r\n  <td>{{weather.temperature}}</td>\r\n  <td>{{weather.humidity}}</td>\r\n  <td>{{weather.pressure}}</td>\r\n  <td>{{weather.wind_speed}}</td>\r\n  <td>{{weather.description}}</td>\r\n  </tr>\r\n  </tbody>\r\n  </table>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/farmer/components/my-farmalnds/my-farmalnds.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyFarmalndsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFarmalndsComponent", function() { return MyFarmalndsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/farmer/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Chart } from 'chart.js';



let MyFarmalndsComponent = class MyFarmalndsComponent {
    constructor(authService, router, matDialog) {
        this.authService = authService;
        this.router = router;
        this.matDialog = matDialog;
        this.farmlands = [];
        this.basicInfo = true;
        this.sensor = false;
        this.environment = false;
    }
    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.authService.getMyFarmland(user._id).subscribe(data => {
            this.farmlands = data;
            console.log(this.farmlands);
        });
    }
    showSesnorData() {
        this.matDialog.open(_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]);
    }
    basic() {
        this.basicInfo = true;
        this.sensor = false;
        this.environment = false;
    }
    sensorData() {
        this.basicInfo = false;
        this.sensor = true;
        this.environment = false;
    }
    weatherEnv() {
        this.basicInfo = false;
        this.sensor = false;
        this.environment = true;
    }
};
MyFarmalndsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-farmalnds',
        template: __webpack_require__(/*! ./my-farmalnds.component.html */ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.html"),
        styles: [__webpack_require__(/*! ./my-farmalnds.component.css */ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
], MyFarmalndsComponent);



/***/ }),

/***/ "./src/app/farmer/components/profile/profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/farmer/components/profile/profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile{\r\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n}\r\n.emp-profile{\r\n  padding: 3%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  border-radius: 0.5rem;\r\n  background: #fff;\r\n}\r\n.profile-img{\r\n  width: 100%;\r\n  height: 75%;\r\n  text-align: center;\r\n}\r\n.profile-img img{\r\n  width: 70%;\r\n  height: 100%;\r\n}\r\n.profile-img .file {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: -20%;\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0;\r\n  font-size: 15px;\r\n  background: #212529b8;\r\n}\r\n.profile-img .file input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.profile-head h5{\r\n  color: #333;\r\n}\r\n.profile-head h6{\r\n  color: #0062cc;\r\n}\r\n.profile-edit-btn{\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  width: 70%;\r\n  padding: 2%;\r\n  font-weight: 600;\r\n  color: #6c757d;\r\n  cursor: pointer;\r\n}\r\n.proile-rating{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  margin-top: 5%;\r\n}\r\n.proile-rating span{\r\n  color: #495057;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n.profile-head .nav-tabs{\r\n  margin-bottom:5%;\r\n}\r\n.profile-head .nav-tabs .nav-link{\r\n  font-weight:600;\r\n  border: none;\r\n}\r\n.profile-head .nav-tabs .nav-link.active{\r\n  border: none;\r\n  border-bottom:2px solid #0062cc;\r\n}\r\n.profile-work{\r\n  padding: 14%;\r\n  margin-top: -15%;\r\n}\r\n.profile-work p{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  font-weight: 600;\r\n  margin-top: 10%;\r\n}\r\n.profile-work a{\r\n  text-decoration: none;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\n.profile-work ul{\r\n  list-style: none;\r\n}\r\n.profile-tab label{\r\n  font-weight: 600;\r\n}\r\n.profile-tab p{\r\n  font-weight: 600;\r\n  color: #0062cc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/farmer/components/profile/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/farmer/components/profile/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\r\n      <!-- <input type=\"file\" (change)=\"onImageSelected($event)\"> -->\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n              <div class=\"profile-img\">\r\n                  <img src=\"../../../../assets/ATR_8980_07_2017_10_03_4_23_43.jpg\" alt=\"my profile picture\"/>\r\n                   <div class=\"file btn btn-lg btn-primary\">\r\n                    change profile\r\n                      <!-- <input type=\"file\" (change)=\"onImageSelect($event)\">\r\n\r\n                      <button type=\"button\" (click)=\"onUpload()\"> Change your profile picture </button> -->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"profile-head\">\r\n                          <h2>\r\n                            <span>{{user.first_name}}</span> <span>  </span> <span>{{user.middle_name}}</span> <span>  </span> <span>{{user.last_name}}</span>\r\n                          </h2>\r\n                          <h5>\r\n                        <b>{{user.user_detail.investment_capital}}</b> &#36; <span>  </span> Investment Capital Owner\r\n                          </h5>\r\n                  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                      <li class=\"nav-item\">\r\n                          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\r\n                      </li>\r\n                      <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Timeline</a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n          </div>\r\n          <form action=\"\">\r\n          <div class=\"col-md-2\">\r\n              <input type=\"submit\" class=\"profile-edit-btn\" name=\"btnAddMore\" (click) = \"loadRegisterComponenet()\" value=\"Edit Profile\"/>\r\n          </div> </form>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n              <div class=\"profile-work\">\r\n                 <b><p>Educational Background</p></b>\r\n                  <ul>\r\n                    <li>{{user.user_detail.education}}</li>\r\n                  </ul>\r\n\r\n                  <b><p>Investment Experiance</p></b>\r\n                  <ul>\r\n                    <li>{{user.user_detail.experiance}}</li>\r\n                  </ul>\r\n\r\n                  <b><p>Social Media Links</p></b>\r\n                  <a href=\"https://twitter.com/{{user.middle_name}}{{user.first_name}}\" class=\"btn btn-default btn-lg\"><i class=\"btn-twitter\"> <span class=\"network-name\">Twitter</span></i></a><br/>\r\n                  <a href=\"https://www.facebook.com/{{user.first_name}}.online\" class=\"btn btn-default btn-lg\"><i class=\"btn-facebook\"> <span class=\"network-name\">Facebook</span></i></a><br/>\r\n                  <a href=\"https://www.linkedin.com/in/{{user.first_name}}{{user.middle_name}}{{user.last_name}}/\" class=\"btn btn-default btn-lg\"><i class=\"btn-linkedin\"> <span class=\"network-name\">Linkedin</span></i></a><br/>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-8\" >\r\n              <div class=\"tab-content profile-tab\" id=\"myTabContent\">\r\n                  <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n\r\n                             <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <label>Passport</label>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <p>{{user.userID}}</p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>username</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.username}}</p>\r\n                                </div>\r\n                            </div>\r\n\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <label>Name</label>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <p><span>{{user.first_name}}</span> <span>  </span> <span>{{user.middle_name}}</span> <span>  </span> <span>{{user.last_name}}</span></p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <label>Email</label>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <p>{{user.email}}</p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <label>Phone</label>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <p>{{user.user_detail.phone}}</p>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <label>Birth Date</label>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <p>{{user.user_detail.birth_date}} </p>\r\n                                  </div>\r\n                              </div>\r\n\r\n                            <hr/>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Nationality</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.nationality}} </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>City</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.city}} </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Subcity</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.subcity}} </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Woreda</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.woreda}} </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Kebel</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.kebele}} </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>House Number</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.house_number}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Postal Code</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <p>{{user.user_detail.address.post_box}} </p>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                  </div>\r\n                  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\" >\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <label>Investment Capital </label>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                              <p><b>{{user.user_detail.investment_capital}} &#36;</b> </p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <label>Registered On</label>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                              <p>{{user.date_registered}}</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-6\">\r\n                                  <label>leased Farmlands</label>\r\n                              </div>\r\n                              <div class=\"col-md-6\">\r\n                                  <p>{{user.farmland_owned.length}}</p>\r\n                                </div>\r\n                              </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/farmer/components/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/farmer/components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _gust_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../gust/components/register/register.component */ "./src/app/gust/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProfileComponent = class ProfileComponent {
    constructor(authService, router, matDialog) {
        this.authService = authService;
        this.router = router;
        this.matDialog = matDialog;
        this.selectdFile = null;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile;
            console.log(this.user);
        });
    }
    onImageSelected(event) {
        console.log(event);
        this.selectdFile = event.target.files[0];
    }
    onUpload() {
        const fileData = new FormData();
        fileData.append('image', this.selectdFile, this.selectdFile.name);
        console.log(this.selectdFile.name);
        this.authService.uploadUserProfilePicture(fileData).subscribe(data => {
            if (data.success) {
                console.log('Pofile updated successfully');
            }
            else {
                console.log('Fail Pofile updatedPofile');
            }
        });
    }
    loadRegisterComponenet() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '80%';
        dialogConfig.height = '90%';
        this.matDialog.open(_gust_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], dialogConfig);
    }
};
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/farmer/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/farmer/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/farmer/farmer.component.css":
/*!*********************************************!*\
  !*** ./src/app/farmer/farmer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/farmer/farmer.component.html":
/*!**********************************************!*\
  !*** ./src/app/farmer/farmer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/farmer/farmer.component.ts":
/*!********************************************!*\
  !*** ./src/app/farmer/farmer.component.ts ***!
  \********************************************/
/*! exports provided: FarmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerComponent", function() { return FarmerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FarmerComponent = class FarmerComponent {
    constructor() { }
    ngOnInit() {
    }
};
FarmerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-farmer',
        template: __webpack_require__(/*! ./farmer.component.html */ "./src/app/farmer/farmer.component.html"),
        styles: [__webpack_require__(/*! ./farmer.component.css */ "./src/app/farmer/farmer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FarmerComponent);



/***/ }),

/***/ "./src/app/farmer/farmer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/farmer/farmer.module.ts ***!
  \*****************************************/
/*! exports provided: FarmerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerModule", function() { return FarmerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _farmer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmer.component */ "./src/app/farmer/farmer.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/farmer/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/farmer/components/home/home.component.ts");
/* harmony import */ var _components_my_farmalnds_my_farmalnds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-farmalnds/my-farmalnds.component */ "./src/app/farmer/components/my-farmalnds/my-farmalnds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let FarmerModule = class FarmerModule {
};
FarmerModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCDF9nb_A3VLB5oOQDwFZGVWGKWqPmLiuI'
            })
        ],
        declarations: [
            _farmer_component__WEBPACK_IMPORTED_MODULE_5__["FarmerComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_my_farmalnds_my_farmalnds_component__WEBPACK_IMPORTED_MODULE_8__["MyFarmalndsComponent"]
        ],
        exports: [
            _farmer_component__WEBPACK_IMPORTED_MODULE_5__["FarmerComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
        ],
        entryComponents: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]]
    })
], FarmerModule);



/***/ }),

/***/ "./src/app/gust/components/aboutUs/aboutus.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gust/components/aboutUs/aboutus.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".separator-type, .title-type, .intro-type, .content-type .intro-type p {\r\n  position: relative;\r\n}\r\n.intro-type .container {\r\n  padding: 107px 0px 102px 0px !important;\r\n}\r\n#product-header-section, .intro-type .container {\r\n  padding: 68px 15px 72px !important;\r\n}\r\n@media (min-width: 1630px){\r\n.container {\r\n  width: 1630px;\r\n}\r\n}\r\n.parallax {\r\n  background-attachment: inherit !important;\r\n}\r\n.parallax {\r\n  background-attachment: inherit !important;\r\n  background-repeat: repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  width: 100%;\r\n  z-index: -10;\r\n}\r\n.company-heading h1 {\r\n  margin-bottom: 40px;\r\n  line-height: 80px;\r\n  color: #000;\r\n  font-weight: 700 !important;\r\n  text-align: center;\r\n}\r\n.seo-header, .product-header, .intro-type .container h1.white, .company-heading h1 {\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-weight: 100 !important;\r\n  text-transform: capitalize;\r\n  font-size: 65px;\r\n  margin-bottom: 20px;\r\n}\r\n.company-sections h2, .careers-sections h2, .perks-section h2 {\r\n  font-weight: 800;\r\n  font-size: 50px;\r\n}\r\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n  font-family: 'proxima-nova', sans-serif;\r\n}\r\n.company-sections h3 {\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  margin: 14px 0;\r\n  font-family: 'proxima-nova', sans-serif;\r\n  text-transform: capitalize;\r\n}\r\n.red-border {\r\n  width: 50%;\r\n  border-bottom: 1px solid #d2282e;\r\n  margin: 0 auto;\r\n  height: 16px;\r\n}\r\n.company-sections p {\r\n  margin-top: 20px;\r\n}\r\n.ct-u-size22 {\r\n  font-size: 22px;\r\n}\r\n.ct-u-fontWeight300 {\r\n  font-weight: 300;\r\n}\r\n.marginTop40 {\r\n  margin-top: 40px !important;\r\n}\r\n.ct-u-paddingBoth100 {\r\n  padding: 100px 15px;\r\n}\r\n.culture-section {\r\n  background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(https://www.solodev.com/assets/culture.jpg) top no-repeat;\r\n  /* background-color: #095c87; */\r\n  /* color: #fff; */\r\n}\r\n.company-sections, .careers-sections, .left-headquarter-section-img, .right-headquarter-section-img {\r\n  text-align: center;\r\n}\r\n.ct-u-paddingBoth100 {\r\n  padding: 100px 15px;\r\n}\r\n.company-sections h2, .careers-sections h2, .perks-section h2 {\r\n  font-weight: 800;\r\n  font-size: 50px;\r\n}\r\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\r\n  font-family: 'proxima-nova', sans-serif;\r\n}\r\n.slick-slider {\r\n  margin-bottom: 0;\r\n}\r\n.slick-slider {\r\n  position: relative;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-touch-callout: none;\r\n  -khtml-user-select: none;\r\n  touch-action: pan-y;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.slick-slider .slick-track, .slick-slider .slick-list {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n.slick-list {\r\n  position: relative;\r\n  display: block;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.slick-track {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n}\r\n.slider .item {\r\n  overflow: hidden;\r\n}\r\n.slick-slide {\r\n  display: none;\r\n  float: left;\r\n  height: 100%;\r\n  min-height: 1px;\r\n}\r\n.logos {\r\n  margin-right: -5px;\r\n  margin-left: -5px;\r\n}\r\nul.logos li {\r\n  cursor: pointer;\r\n}\r\n.logos > li {\r\n  float: left;\r\n  width: 16.66666%;\r\n  padding: 5px;\r\n}\r\n.logos .logos-inner {\r\n  position: relative;\r\n}\r\n.slick-slide img {\r\n  display: inline-block;\r\n}\r\n.logo-image {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\nul.logos li {\r\n  cursor: pointer;\r\n}\r\n.logos > li {\r\n  float: left;\r\n  width: 16.66666%;\r\n  padding: 5px;\r\n}\r\n.logos .logos-inner {\r\n  position: relative;\r\n}\r\n.slick-slide img {\r\n  display: inline-block;\r\n}\r\nimg {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  vertical-align: middle;\r\n}\r\n.fa {\r\nfont-size: 42px;\r\n}\r\n.btn-solodev-red-reversed {\r\n  background-color: #fff;\r\n  color: #d2282e;\r\n  transition: all 0.3s ease;\r\n  padding: 12px 35px;\r\n}\r\n.btn, .btn-blk {\r\n  font-size: 18px !Important;\r\n}\r\na:hover, a:focus {\r\n  text-decoration: none;\r\n}\r\n.ct-u-size19 {\r\nmargin-top: 40px;\r\n}\r\na:hover {\r\n  color: #000;\r\n}\r\nsection.clients-home .clients-logos .client-logos-repeater {\r\n  height: 260px;\r\n  border-right: 1px solid #ccc;\r\n  border-bottom: 1px solid #ccc;\r\n  cursor: pointer;\r\n}\r\nsection.clients-home .clients-logos .client-logos-repeater img {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.logo-title {\r\n  position: absolute;\r\n  display: none;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  text-transform: uppercase;\r\n  color: #FFF;\r\n  background-color: #0079c2;\r\n}\r\n.ct-u-paddingBottom100 {\r\nmargin-top: 40px;\r\n}\r\n.culture-section {\r\nbackground-size: cover;\r\ncolor: #fff;\r\n}\r\n#parallax-cta{\r\n  background-image:url('1.jpg')\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/gust/components/aboutUs/aboutus.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gust/components/aboutUs/aboutus.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ct-pageWrapper\" id=\"ct-js-wrapper\">\r\n  <section class=\"company-heading intro-type\" id=\"parallax-one\">\r\n     <div class=\"container\">\r\n        <div class=\"row product-title-info\">\r\n           <div class=\"col-md-12\">\r\n              <h1>\r\n                 About Us\r\n              </h1>\r\n           </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"parallax\" id=\"parallax-cta\" style=\"background-image:url('../../../../assets//images/tech.png');\">\r\n        &nbsp;\r\n     </div>\r\n  </section>\r\n  <section class=\"story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding\" id=\"section\">\r\n     <div class=\"container text-center\">\r\n        <h2>\r\n           WHAT DRIVES US\r\n        </h2>\r\n        <h3>\r\n           Lorem ipsum - dolor\r\n        </h3>\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n           <div class=\"red-border\">\r\n              &nbsp;\r\n           </div>\r\n           <p class=\"ct-u-size22 ct-u-fontWeight300 marginTop40\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed libero vel ex maximus vulputate nec eu ligula. Vestibulum elementum nisi ut fermentum lobortis. Sed quis iaculis felis.\r\n           </p>\r\n           <!-- <a class=\"ct-u-marginTop60 btn btn-solodev-red btn-fullWidth-sm ct-u-size19\" href=\"#\">Learn More</a> -->\r\n        </div>\r\n     </div>\r\n  </section>\r\n  <!-- <section class=\"culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding\">\r\n     <div class=\"container\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n           <h2>\r\n              Etiam varius porttitor\r\n           </h2>\r\n           <h3>\r\n              Vestibulum elementum nisi ut\r\n           </h3>\r\n           <p class=\"ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\r\n              Praesent sed libero vel ex maximus vulputate nec eu ligula. Vestibulum elementum nisi ut fermentum lobortis.\r\n           </p>\r\n        </div>\r\n        <div class=\"row ct-u-paddingBoth20\">\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    LOREM IPSUM\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    DOLOR SIT AMET\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Praesent sed libero vel ex maximus vulputate nec eu ligula.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    SED TRISTIQUE\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Vestibulum elementum nisi ut fermentum lobortis.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"row ct-u-paddingBoth20\">\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-coffee\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    SEMPER IPSUM\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Nullam bibendum felis non laoreet rutrum.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    NEC MATTIS\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Etiam diam mi, lacinia eu sapien in, dapibus sodales erat.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n           <div class=\"col-xs-6 col-md-4\">\r\n              <div class=\"company-icons-white\">\r\n                 <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\r\n                 <p>\r\n                    CRAS MOLLIS\r\n                 </p>\r\n                 <p class=\"company-icons-subtext hidden-xs\">\r\n                    Etiam varius porttitor tellus et aliquet.\r\n                 </p>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <a class=\"ct-u-marginTop60 btn btn-solodev-red-reversed btn-fullWidth-sm ct-u-size19\" href=\"/\">Ready to Learn More?</a>\r\n     </div>\r\n  </section> -->\r\n  <!--\r\n  <section class=\"customers-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding\">\r\n   <div class=\"container\">\r\n     <div class=\"col-md-8 col-md-offset-2\">\r\n        <h2>\r\n           CUSTOMERS\r\n        </h2>\r\n        <h3>\r\n           Trusted by some of the world&rsquo;s leading brands.\r\n        </h3>\r\n        <p class=\"ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60 marginTop40\">\r\n           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed libero vel ex maximus vulputate nec eu ligula. Vestibulum elementum nisi ut fermentum lobortis. Sed quis iaculis felis.\r\n        </p>\r\n     </div>\r\n     <div class=\"clearfix\">\r\n        &nbsp;\r\n     </div>\r\n  </div> -->\r\n  <main>\r\n     <div class=\"container ct-u-paddingTop40 ct-u-paddingBottom100\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-12 ct-content\">\r\n              <section class=\"clients-home\">\r\n                 <div class=\"container\">\r\n                    <div class=\"clients-logos text-center\">\r\n                       <!-- starting row div -->\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/zeina.html\" class=\"Zeina\"><img alt=\"images/logo-zeina.png\" src=\"../../../../assets//images/2.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Zeina - 0\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/logic.html\" class=\"Logic\"><img alt=\"images/logic.png\" src=\"../../../../assets//images/3.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Logic\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/smart.html\" class=\"Smart\"><img alt=\"images/client3.png\" src=\"../../../../assets//images/4.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Smart\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/softtech.html\" class=\"Softtech\"><img alt=\"images/softtech.png\" src=\"../../../../assets//images/5.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Softtech\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/wheel.html\" class=\"Wheel\"><img alt=\"images/logo-target.png\" src=\"../../../../assets//images/6.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Wheel\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/3designs.html\" class=\"3designs\"><img alt=\"images/designx.png\" src=\"../../../../assets//images/et4.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      3designs\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"row\">\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/heart.html\" class=\"Heart\"><img alt=\"images/client7.png\" src=\"../../../../assets//images/tech.png\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Heart\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/devtech.html\" class=\"Devtech\"><img alt=\"images/devtech.png\" src=\"../../../../assets//images/et1.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Devtech\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 client-logos-repeater\">\r\n                             <a href=\"/path/to/detail/chartz.html\" class=\"Chartz\"><img alt=\"images/chartz.png\" src=\"../../../../assets//images/et2.jpg\"></a>\r\n                             <div class=\"logo-title\">\r\n                                <div class=\"displayTable\">\r\n                                   <div class=\"displayTableCell\">\r\n                                      Chartz\r\n                                   </div>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                       </div>\r\n                       <!-- closing row div -->\r\n                    </div>\r\n                 </div>\r\n              </section>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </main>\r\n"

/***/ }),

/***/ "./src/app/gust/components/aboutUs/aboutus.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gust/components/aboutUs/aboutus.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AboutusComponent = class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-aboutus',
        template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/gust/components/aboutUs/aboutus.component.html"),
        styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/gust/components/aboutUs/aboutus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);



/***/ }),

/***/ "./src/app/gust/components/contact/contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gust/components/contact/contact.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: sans-serif;\r\n}\r\n.formBox{\r\n\tmargin-top: 90px;\r\n\tpadding: 50px;\r\n}\r\n.formBox  h1{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n\tmargin-bottom: 50px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 48px;\r\n}\r\n.inputBox{\r\n\tposition: relative;\r\n\tbox-sizing: border-box;\r\n\tmargin-bottom: 50px;\r\n}\r\n.inputBox .inputText{\r\n\tposition: absolute;\r\n    font-size: 24px;\r\n    line-height: 50px;\r\n    transition: .5s;\r\n    opacity: .5;\r\n}\r\n.inputBox .input{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tbackground: transparent;\r\n\tborder: none;\r\n    outline: none;\r\n    font-size: 24px;\r\n    border-bottom: 1px solid rgba(0,0,0,.5);\r\n\r\n}\r\n.focus .inputText{\r\n\t-webkit-transform: translateY(-30px);\r\n\t        transform: translateY(-30px);\r\n\tfont-size: 18px;\r\n\topacity: 1;\r\n\tcolor: #00bcd4;\r\n\r\n}\r\ntextarea{\r\n\theight: 100px !important;\r\n}\r\n.button{\r\n\twidth: 100%;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    background: #03A9F4;\r\n    color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gust/components/contact/contact.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gust/components/contact/contact.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"container\">\r\n    <div class=\"formBox\">\r\n      <form novalidate [formGroup] = \"contactInfo\"  (ngSubmit)=\"onSubmitContact(contactInfo)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <h1>Contact form</h1>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\" form-container row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"inputBox \">\r\n                <input\r\n                type=\"text\" name=\"\" class=\"input\"\r\n                id = \"contact.first_name\"\r\n                formControlName=\"first_name\"\r\n                placeholder=\"First Name\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"inputBox\">\r\n                <input\r\n                type=\"text\" name=\"\" class=\"input\"\r\n                id = \"contact.last_name\"\r\n                formControlName=\"last_name\"\r\n                placeholder=\"Last Name\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"inputBox\">\r\n                <input\r\n                type=\"text\" name=\"\" class=\"input\"\r\n                id = \"contact.email\"\r\n                formControlName=\"email\"\r\n                placeholder=\"Email\"/>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"inputBox\">\r\n                <input\r\n                type=\"text\" name=\"\" class=\"input\"\r\n                id = \"contact.phone\"\r\n                formControlName=\"phone\"\r\n                placeholder=\"Phone\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"inputBox\">\r\n                <textarea\r\n                type=\"text\" name=\"\"\r\n                class=\"input\"\r\n                 id = \"contact.message\"\r\n                formControlName=\"message\"\r\n                placeholder=\"Message\"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <button type=\"submit\" name=\"\" class=\"button\" value='Send Message'>Contact Us</button>\r\n            </div>\r\n          </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gust/components/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gust/components/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactModel, ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModel", function() { return ContactModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





class ContactModel {
}
let ContactComponent = class ContactComponent {
    constructor(formBuilder, authService, router, flashMessage) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.contact = new ContactModel();
    }
    ngOnInit() {
        this.contactInfo = this.formBuilder.group({
            'first_name': [this.contact.first_name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
                ]
            ],
            'last_name': [this.contact.last_name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
                ]
            ],
            'email': [this.contact.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
                ]
            ],
            'phone': [this.contact.phone, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
                ]
            ],
            'message': [this.contact.message, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
                ]
            ]
        });
    }
    onSubmitContact({ value }) {
        this.authService.contact(value).subscribe(data => {
            if (data.success) {
                console.log(data.msg);
                // this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
            }
            else {
                console.log(data.msg);
                // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                // this.router.navigate(['gust']);
            }
        });
    }
};
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! ./contact.component.html */ "./src/app/gust/components/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/gust/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/gust/components/crops/crops.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gust/components/crops/crops.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  margin-top: 1em;\r\n  margin-bottom: 3em;\r\n}\r\n.crop-data{\r\n  padding-left: 4em;\r\n  padding-top: 3em;\r\nwidth: 100%;\r\nmargin: 0 auto;\r\nalign-content: center;\r\n}\r\n.col-md-6 img{\r\nwidth: 100%;\r\nheight: 100;\r\n}\r\nh3{\r\n  font-weight: bold;\r\n}\r\n.table{\r\nfont-size: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gust/components/crops/crops.component.html":
/*!************************************************************!*\
  !*** ./src/app/gust/components/crops/crops.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <h1 class=\"text-center\">Most widely caltivated crops in Ethiopia </h1>\r\n</div>\r\n<div>\r\n  <hr style=\"width: 100%;\"/>\r\n\r\n  <div class=\"row\" *ngFor = \"let crop of crops\">\r\n    <div class=\"col-md-6\">\r\n    <img src=\"../../../../assets/crops/maize.jpg\" alt=\" maize crop image\">\r\n  </div>\r\n  <div class=\"col-md-6 crop-data\" >\r\n      <table class=\"\" cellpadding=\"3\" style=\"float: left\">\r\n          <tr>\r\n              <td width=\"10px;\"><strong> Crop Name </strong></td>\r\n              <td width=\"250px;\"> {{crop.crop_name}} </td>\r\n          </tr>\r\n          <tr>\r\n              <td>&nbsp;</td>\r\n              <td>&nbsp; </td>\r\n          </tr>\r\n          <tr>\r\n              <td width=\"120px;\"><strong> Descriptions </strong></td>\r\n              <td width=\"500px;\"> {{crop.crop_description}} </td>\r\n          </tr>\r\n          <tr>\r\n              <td>&nbsp;</td>\r\n              <td>&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n              <td width=\"200px;\"><strong>Prefered Soil Type </strong></td>\r\n              <td width=\"400px;\"> {{crop.prefered_soil_type}} </td>\r\n          </tr>\r\n          <tr>\r\n              <td>&nbsp;</td>\r\n              <td>&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td width=\"150px;\"><strong> Prefered Season </strong></td>\r\n            <td width=\"300px;\"> {{crop.prefered_season}} </td>\r\n        </tr>\r\n      </table>\r\n      <tr>\r\n          <td>&nbsp;</td>\r\n          <td>&nbsp;</td>\r\n      </tr>\r\n      <button (click)=\"toggle()\" id=\"bt\">\r\n          {{detailToggleButton}}\r\n      </button>\r\n    </div>\r\n    <tr>\r\n        <td>&nbsp;</td>\r\n        <td>&nbsp;</td>\r\n    </tr>\r\n    <ng-container *ngIf=\"show\">\r\n        <h3 class=\"text-center\">Prefered soil Condition</h3>\r\n        <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Minimum Temprature</th>\r\n                <th scope=\"col\">Optimum Temprature</th>\r\n                <th scope=\"col\">Maximum Temprature</th>\r\n                <th scope=\"col\">Minimum Moisture</th>\r\n                <th scope=\"col\">Optimum Moisture</th>\r\n                <th scope=\"col\">Maximum Moisture</th>\r\n                <th scope=\"col\">Minimum PH Level</th>\r\n                <th scope=\"col\">Optimum PH Level</th>\r\n                <th scope=\"col\">Maximum PH Level</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{crop.soil_condition.temprature.minimum}}</td>\r\n                <td>{{crop.soil_condition.temprature.optimum}}</td>\r\n                <td>{{crop.soil_condition.temprature.maximum}}</td>\r\n                <td>{{crop.soil_condition.moisture.minimum}}</td>\r\n                <td>{{crop.soil_condition.moisture.optimum}}</td>\r\n                <td>{{crop.soil_condition.moisture.maximum}}</td>\r\n                <td>{{crop.soil_condition.Ph_level.minimum}}</td>\r\n                <td>{{crop.soil_condition.Ph_level.optimum}}</td>\r\n                <td>{{crop.soil_condition.Ph_level.maximum}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n<h3 class=\"text-center\">Prefered Enviromental Weather Conditions</h3>\r\n<table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Minimum Light Intensity</th>\r\n        <th scope=\"col\">Optimum Light Intensity</th>\r\n        <th scope=\"col\">Maximum Light Intensity</th>\r\n        <th scope=\"col\">Minimum Air Temperature</th>\r\n        <th scope=\"col\">Optimum Air Temperature</th>\r\n        <th scope=\"col\">Maximum Air Temperature</th>\r\n        <th scope=\"col\">Minimum Precipitation</th>\r\n        <th scope=\"col\">Optimum Precipitation</th>\r\n        <th scope=\"col\">Maximum Precipitation</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{crop.enviromental_weather.light_intensity.minimum}}</td>\r\n        <td>{{crop.enviromental_weather.light_intensity.optimum}}</td>\r\n        <td>{{crop.enviromental_weather.light_intensity.maximum}}</td>\r\n        <td>{{crop.enviromental_weather.air_temperature.minimum}}</td>\r\n        <td>{{crop.enviromental_weather.air_temperature.optimum}}</td>\r\n        <td>{{crop.enviromental_weather.air_temperature.maximum}}</td>\r\n        <td>{{crop.enviromental_weather.precipitation.minimum}}</td>\r\n        <td>{{crop.enviromental_weather.precipitation.optimum}}</td>\r\n        <td>{{crop.enviromental_weather.precipitation.maximum}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n    </ng-container>\r\n<br>\r\n    <hr style=\"width: 100%;\"/>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/gust/components/crops/crops.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gust/components/crops/crops.component.ts ***!
  \**********************************************************/
/*! exports provided: CropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropsComponent", function() { return CropsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CropsComponent = class CropsComponent {
    constructor(authService) {
        this.authService = authService;
        this.show = false;
        this.detailToggleButton = 'show Crop more';
    }
    ngOnInit() {
        this.authService.getCrop().subscribe(crops => {
            this.crops = crops;
            console.log(crops);
        });
    }
    showCropDetail(crop) {
    }
    hideCropDetail(crop) {
    }
    toggle() {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show) {
            this.detailToggleButton = 'show crop less';
        }
        else {
            this.detailToggleButton = 'show Crop more';
        }
    }
};
CropsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-crops',
        template: __webpack_require__(/*! ./crops.component.html */ "./src/app/gust/components/crops/crops.component.html"),
        styles: [__webpack_require__(/*! ./crops.component.css */ "./src/app/gust/components/crops/crops.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], CropsComponent);



/***/ }),

/***/ "./src/app/gust/components/farmlands/farmlands.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/gust/components/farmlands/farmlands.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n  margin-top: 1em;\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n.crop-data{\r\npadding-left: 0.5em;\r\npadding-top: 0.5em;\r\nwidth: 100%;\r\nmargin: 0 auto;\r\nalign-content: center;\r\n}\r\n.col-md-6 img{\r\nwidth: 100%;\r\nheight: 100;\r\n}\r\nh3{\r\n  font-weight: bold;\r\n}\r\n.table{\r\nfont-size: 1em;\r\n}\r\n.button{\r\nbackground: green;\r\ntext-align: center;\r\nfont-size: 16px;\r\nwidth: 400%;\r\nheight: 100%;\r\ncolor: white;\r\n}\r\n.farmland{\r\nmargin: 0 auto 50px;\r\n}\r\n.form{\r\n  padding-left: 200px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/gust/components/farmlands/farmlands.component.html":
/*!********************************************************************!*\
  !*** ./src/app/gust/components/farmlands/farmlands.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\r\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\r\n      <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\r\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"*ngIf=\"searchKey\"  (click)=\"onSearchClear()\">\r\n      </button>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n<hr style=\"width: 100%; border: green 4px double \"/>\r\n\r\n    <div class=\"row farmland\" *ngFor = \"let farmland of farmlands\">\r\n      <div class=\"col-md-5\" >\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"long\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n          </agm-map>\r\n\r\n          <table class=\"\" cellpadding=\"3\" style=\"padding-left: 2em\">\r\n            <tr>\r\n                <td width=\"100px;\"><strong> Location </strong></td>\r\n                <td width=\"200px;\"> {{farmland.physical_address}} </td>\r\n            </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"100px;\"><strong> Area in hectar </strong></td>\r\n                <td width=\"200px;\"> {{farmland.farmland_area}} </td>\r\n            </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"100px;\"><strong>Soil Type </strong></td>\r\n                <td width=\"200px;\"> {{farmland.soil_type}} </td>\r\n            </tr>\r\n            <tr>\r\n                <td>&nbsp;</td>\r\n            </tr>\r\n      </table>\r\n        </div>\r\n\r\n            <div class=\"col-md-7 crop-data\" >\r\n                <table class=\"\" cellpadding=\"3\" style=\"float: left\">\r\n                    <tr>\r\n                      <td width=\"40px;\" style= \"padding-right:.5em\"><strong> Descriptions </strong></td>\r\n                      <td width=\"100%;\"> {{farmland.farmland_description}} </td>\r\n                  </tr>\r\n                  <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              <tr>\r\n                <td width=\"40px;\" style= \"padding-right:.5em\"><strong> Experiance </strong></td>\r\n                <td width=\"100%;\"> {{farmland.farmland_experiance}} </td>\r\n            </tr>\r\n                <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n              </tr>\r\n              </table>\r\n              <div class=\"form\">\r\n              <form novalidate (ngSubmit)=\"onSubmitleaseFarmland(farmland._id)\">\r\n                  <input\r\n                  type=\"text\" id=\"leasefarmland\" value=\"{{farmland._id}}\"\r\n                  type=\"text\" name=\"\" class=\"input\"\r\n                 formControlName=\"leaseFarmland\"\r\n                placeholder=\"Last Name\" style=\"display: none;\">\r\n               <button style=\"width:50%;\" type=\"submit\" name=\"\" class=\"button btn btn-block btn-primary\" value=''>Lease it</button>\r\n     </form>\r\n    </div>\r\n          </div>\r\n    <hr style=\"width: 100%; border: black 2px double \"/>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/gust/components/farmlands/farmlands.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/gust/components/farmlands/farmlands.component.ts ***!
  \******************************************************************/
/*! exports provided: FarmlandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmlandsComponent", function() { return FarmlandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FarmlandsComponent = class FarmlandsComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getFarmland().subscribe(data => {
            this.farmlands = data;
            console.log(this.farmlands);
        });
    }
    // leasing the farrland
    onSubmitleaseFarmland(farmland) {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedUser) {
            alert(`Hi, You have to loggin before leasing the farmland`);
            this.router.navigate(['/gust']);
        }
        else {
            this.authService.hireFarmland(farmland, loggedUser._id).subscribe(data => {
                alert(`Hi, ${data.msg}`);
            });
        }
    }
};
FarmlandsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-farmlands',
        template: __webpack_require__(/*! ./farmlands.component.html */ "./src/app/gust/components/farmlands/farmlands.component.html"),
        styles: [__webpack_require__(/*! ./farmlands.component.css */ "./src/app/gust/components/farmlands/farmlands.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], FarmlandsComponent);



/***/ }),

/***/ "./src/app/gust/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gust/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.medium-list{\r\n  width: 100%;\r\n  padding: 0.2em;\r\n  margin: 0 auto 0;\r\n  margin-top: 3em;\r\n}\r\n.list-header-title{\r\n   margin-top: 1em;\r\n   font-weight:lighter;\r\n   color: #2A66A7;\r\n   padding: 0 0 1em;\r\n   font-weight: bold;\r\n   border-bottom: double 4px rgb(16, 236, 82);;\r\n}\r\n.form-container{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nform{\r\n  margin-top: 2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gust/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/gust/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"medium-list\">\r\n    <div class=\"list-viwer-wrapper\">\r\n    <div style=\"margin : 0 auto; text-align: center;margin-top: -3em\">\r\n        <img src=\"../../../assets/smartFarming.jpg\" alt=\"Login icon image\" style=\"margin: 0 auto;\">\r\n    </div>\r\n        <div class=\"list-header-title text-center\">Login to your account </div>\r\n\r\n<form novalidate [formGroup] = \"loginInfo\"  (ngSubmit)=\"onLoginSubmit(loginInfo)\">\r\n         <div class=\"form-container\" >\r\n                    <mat-form-field>\r\n                    <input\r\n                     type=\"text\"\r\n                     id = \"username\"\r\n                     class=\"fas fa-lock\"\r\n                     matInput\r\n                     [(ngModel)] = \"farmer.username\"\r\n                     formControlName=\"username\"\r\n                     placeholder=\"username\"/>\r\n               <!--    <small class =\"text-danger\" *ngIf=\"loginInfo.get('username').hasError('required') && loginInfo.get('username').touched\">username required</small>\r\n                    <small class =\"text-danger\" *ngIf=\"loginInfo.get('username').hasError('minlength') && loginInfo.get('username').touched\">The username hsould have at least 4 characters</small> -->\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                        <input\r\n                         type=\"password\"\r\n                         id = \"password\"\r\n                         matInput\r\n                         [(ngModel)] = \"farmer.password\"\r\n                         formControlName=\"password\"\r\n                         placeholder=\"password\"/>\r\n                   <!--    <small class =\"text-danger\" *ngIf=\"loginInfo.get('username').hasError('required') && loginInfo.get('username').touched\">username required</small>\r\n                        <small class =\"text-danger\" *ngIf=\"loginInfo.get('username').hasError('minlength') && loginInfo.get('username').touched\">The username hsould have at least 4 characters</small> -->\r\n                    </mat-form-field>\r\n\r\n                   <button mat-raised-button\r\n                   type=\"submit\"\r\n                   class=\"mat-raised-button mat-primary\"\r\n                   [disabled] = \"!loginInfo.valid\">Login</button>\r\n      </div>\r\n</form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gust/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gust/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.model */ "./src/app/gust/components/login/login.model.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/services/notification.service */ "./src/app/common/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router, notify) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.notify = notify;
        this.farmer = new _login_model__WEBPACK_IMPORTED_MODULE_3__["LoginModel"]();
        this.hide = true;
        this.admin = false;
    }
    ngOnInit() {
        this.loginInfo = this.formBuilder.group({
            'username': [this.farmer.username, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
                ]
            ],
            'password': [this.farmer.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
                ]
            ]
        });
    }
    onLoginSubmit({ value }) {
        this.authService.authenticateFarmer(value).subscribe(data => {
            if (data.success) {
                this.authService.storeFarmerData(data.token, data.user);
                if (data.user.isAdmin) {
                    this.router.navigate(['admin/farmer-list']);
                }
                else {
                    this.router.navigate(['farmers/home']);
                }
            }
            else {
                this.notify.warn(data.msg);
                this.router.navigate(['gust']);
            }
        });
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/gust/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/gust/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationServiceService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/gust/components/login/login.model.ts":
/*!******************************************************!*\
  !*** ./src/app/gust/components/login/login.model.ts ***!
  \******************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
class LoginModel {
}


/***/ }),

/***/ "./src/app/gust/components/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/gust/components/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-form-field{\r\n  margin: 0.5em\r\n}\r\n"

/***/ }),

/***/ "./src/app/gust/components/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/gust/components/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n    <span>Farmer Registration </span>\r\n    <span  class=\"fill-remaining-space\"></span>\r\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\r\n  </mat-toolbar>\r\n  <form novalidate [formGroup]=\"service.form\" class=\"normal-form\" (submit)=\"onSubmit()\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n            <mat-form-field>\r\n                <input formControlName=\"passport\" matInput placeholder=\"Passport*\">\r\n                <mat-error>This field is mandatory.</mat-error>\r\n              </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"first_name\" matInput placeholder=\"First Name*\">\r\n            <mat-error>This field is mandatory.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n              <input formControlName=\"middle_name\" matInput placeholder=\"Middle Name*\">\r\n              <mat-error>This field is mandatory.</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input formControlName=\"last_name\" matInput placeholder=\"Last Name*\">\r\n                <mat-error>This field is mandatory.</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input formControlName=\"username\" matInput placeholder=\"Username*\">\r\n                  <mat-error>This field is mandatory.</mat-error>\r\n                </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"email\" matInput placeholder=\"Email*\">\r\n            <mat-error>Invalid email address.</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n          <input type=\"password\" formControlName=\"password\" matInput placeholder=\"Password*\">\r\n          <mat-error>This field is mandatory.</mat-error>\r\n        </mat-form-field>\r\n          <mat-form-field>\r\n            <input formControlName=\"phone\" matInput placeholder=\"Mobile*\">\r\n            <mat-error *ngIf=\"service.form.controls['phone'].errors?.required\">This field is mandatory.</mat-error>\r\n            <mat-error *ngIf=\"service.form.controls['phone'].errors?.minlength\">Minimum 8 charactors needed.</mat-error>\r\n          </mat-form-field>\r\n          <div class=\"add-bottom-padding\">\r\n            <mat-radio-group formControlName=\"gender\">\r\n              <mat-radio-button value=\"Male\">Male</mat-radio-button>\r\n              <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n              <mat-radio-button value=\"Other\">Other</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <div class=\"controles-container\">\r\n      <mat-form-field>\r\n          <input formControlName=\"investment_capital\" matInput placeholder=\"Investment Capital*\">\r\n          <mat-error>Tthis field is required</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input formControlName=\"education\" matInput placeholder=\"Education*\">\r\n            <mat-error>Tthis field is required</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n              <input formControlName=\"experiance\" matInput placeholder=\"Experiance*\">\r\n              <mat-error>Tthis field is required</mat-error>\r\n            </mat-form-field>\r\n              <mat-form-field>\r\n                <input formControlName=\"birth_date\" matInput [matDatepicker]=\"picker\" placeholder=\"Birth Date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input formControlName=\"nationality\" matInput placeholder=\"Nationality*\">\r\n                  <mat-error>Tthis field is required</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input formControlName=\"city\" matInput placeholder=\"City*\">\r\n                    <mat-error>Tthis field is required</mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                      <input formControlName=\"subcity\" matInput placeholder=\"Subcity*\">\r\n                      <mat-error>Tthis field is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input formControlName=\"woreda\" matInput placeholder=\"Woreda*\">\r\n                        <mat-error>Tthis field is required</mat-error>\r\n                      </mat-form-field>\r\n                      <mat-form-field>\r\n                          <input formControlName=\"kebele\" matInput placeholder=\"kebele*\">\r\n                          <mat-error>Tthis field is required</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input formControlName=\"house_number\" matInput placeholder=\"House Number*\">\r\n                            <mat-error>Tthis field is required</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field>\r\n                              <input formControlName=\"post_box\" matInput placeholder=\"Post Box*\">\r\n                              <mat-error>Tthis field is required</mat-error>\r\n                            </mat-form-field>\r\n          <div class=\"button-row\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\r\n          </div>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/gust/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gust/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var _common_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/user.service */ "./src/app/common/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let RegisterComponent = class RegisterComponent {
    constructor(authService, router, service, notify, dialogRef) {
        this.authService = authService;
        this.router = router;
        this.service = service;
        this.notify = notify;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    onClear() {
        this.service.form.reset();
        // this.service.initializeFormGroup();
        // this.notify.success(':: Submitted successfully');
    }
    onSubmit() {
        if (this.service.form.valid) {
            console.log(this.service.form.value);
            this.authService.registerFarmer(this.service.form.value).subscribe(data => {
                if (data.success) {
                    this.service.form.reset();
                    // this.service.initializeFormGroup();
                    this.notify.success(`:: ${data.msg}`);
                }
                else {
                    this.notify.warn(`:: ${data.msg}`);
                }
                this.dialogRef.close();
                this.router.navigate(['/gust']);
            });
        }
    }
    onClose() {
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    }
};
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! ./register.component.html */ "./src/app/gust/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/gust/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _common_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationServiceService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/gust/components/welcome/welcome.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gust/components/welcome/welcome.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n  width: 100%;\r\n  height: 85%;\r\n  padding-bottom: 1em;\r\n}\r\n.background-img .bgimg {\r\n  background : url('bd.jpg');\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.col-md-3{\r\n  padding-left: 3em;\r\n  border-left: double 2px blue;\r\n}\r\n.welcome{\r\n  letter-spacing: .1em;\r\n  font-size: 36px;\r\n  line-height: 45px;\r\n  color: #0f0;\r\n  word-spacing: .1em ;\r\n  font-family: Georgia;\r\n  font-style: oblique;\r\n}\r\n.background-img p{\r\n   color: #3bf;\r\n   padding-top: 2em;\r\n   text-shadow: 0px 0px 7px rgba(23, 133, 167, 0.6);\r\n   position: absolute;\r\n   left: 0.6em;\r\n   top: 16.5em;\r\n   font-size: 24px;\r\n}\r\n.background-img p span{\r\n  float: left;\r\n   color: #0f0;\r\n    font-size: 75px;\r\n     line-height: 60px;\r\n      padding-top: 0px;\r\n       padding-right: 8px;\r\n       padding-left: 3px;\r\n        font-family: Georgia;\r\n}\r\n.col-md-3 a{\r\n  margin-left: 2em;\r\n  color: #f00;\r\n}\r\n.signup{\r\n  margin-top: 3em;\r\n  float: left;\r\n}\r\n.signup span {\r\ncolor : red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gust/components/welcome/welcome.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gust/components/welcome/welcome.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n<h1 class=\"welcome text-center\">\r\n  <span style=\"color:#0f0\">Welcome</span ><span style=\"color:#ff0\"> To Smart </span><span style=\"color:#f00\"> Farming</span>\r\n</h1>\r\n  </div>\r\n</div>\r\n<div class=\"row home\">\r\n<div class=\"col-md-9\">\r\n  <div class=\"background-img\">\r\n      <img class=\"bgimg\" src=\"./../../../../assets/images/5.jpg\" alt=\"Photo of Green Maiz\">\r\n          <p><span>T </span>echnology and Agriculture for sustainable food guarantee in Ethiopia! </div>\r\n</div>\r\n  <div class=\"col-md-3\">\r\n       <app-login ></app-login>\r\n       <div class=\"signup\">\r\n          <span style=\"width: 11em; margin-right: 1em;\">Not yet registered?</span>\r\n        <button mat-raised-button\r\n               type=\"submit\"\r\n               class=\"mat-raised-button mat-primary\" (click) = 'loadRegisterComponenet()'>Sign Up</button>\r\n              </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gust/components/welcome/welcome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gust/components/welcome/welcome.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register.component */ "./src/app/gust/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let WelcomeComponent = class WelcomeComponent {
    constructor(matDialog) {
        this.matDialog = matDialog;
    }
    ngOnInit() {
    }
    loadRegisterComponenet() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '80%';
        dialogConfig.height = '90%';
        this.matDialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], dialogConfig);
    }
};
WelcomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/gust/components/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/gust/components/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/gust/gust.component.css":
/*!*****************************************!*\
  !*** ./src/app/gust/gust.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gust/gust.component.html":
/*!******************************************!*\
  !*** ./src/app/gust/gust.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/gust/gust.component.ts":
/*!****************************************!*\
  !*** ./src/app/gust/gust.component.ts ***!
  \****************************************/
/*! exports provided: GustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GustComponent", function() { return GustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GustComponent = class GustComponent {
    constructor() {
        this.sliderArray = [];
    }
    ngOnInit() {
        //   this.data.getData().subscribe((result) => {
        //     this.sliderArray = result.sliderArray;
        // })
    }
};
GustComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gust',
        template: __webpack_require__(/*! ./gust.component.html */ "./src/app/gust/gust.component.html"),
        styles: [__webpack_require__(/*! ./gust.component.css */ "./src/app/gust/gust.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GustComponent);



/***/ }),

/***/ "./src/app/gust/gust.module.ts":
/*!*************************************!*\
  !*** ./src/app/gust/gust.module.ts ***!
  \*************************************/
/*! exports provided: GustModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GustModule", function() { return GustModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gust_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gust.component */ "./src/app/gust/gust.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/gust/components/login/login.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_farmlands_farmlands_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/farmlands/farmlands.component */ "./src/app/gust/components/farmlands/farmlands.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/gust/components/contact/contact.component.ts");
/* harmony import */ var _components_aboutUs_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/aboutUs/aboutus.component */ "./src/app/gust/components/aboutUs/aboutus.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/gust/components/register/register.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/gust/components/welcome/welcome.component.ts");
/* harmony import */ var _components_crops_crops_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/crops/crops.component */ "./src/app/gust/components/crops/crops.component.ts");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/material/material.module */ "./src/app/material/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let GustModule = class GustModule {
};
GustModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            app_material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCDF9nb_A3VLB5oOQDwFZGVWGKWqPmLiuI'
            })
        ],
        declarations: [
            _gust_component__WEBPACK_IMPORTED_MODULE_2__["GustComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _components_farmlands_farmlands_component__WEBPACK_IMPORTED_MODULE_9__["FarmlandsComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _components_aboutUs_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
            _components_crops_crops_component__WEBPACK_IMPORTED_MODULE_14__["CropsComponent"],
        ],
        exports: [_gust_component__WEBPACK_IMPORTED_MODULE_2__["GustComponent"],],
        providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"]]
    })
], GustModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        ],
        declarations: []
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\deploy\client-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map