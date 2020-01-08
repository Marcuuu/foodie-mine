webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_dish_new_dish__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_dish_edit_dish__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenuPage.prototype.goToNewDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_dish_new_dish__["a" /* NewDishPage */]);
    };
    MenuPage.prototype.goToEditDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_dish_edit_dish__["a" /* EditDishPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\menu\menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button solid>\n        Edit Menu\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <h2 id="menu-heading9" style="color:#000000;">\n    Western Wednesday\n  </h2>\n  <div id="menu-markdown18" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Tags:\n      <strong>\n        Western\n      </strong>\n    </p>\n  </div>\n  <ion-card id="menu-card29">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="menu-list-item66">\n        Soup of the Day\n      </ion-item>\n      <button id="menu-button6" ion-button color="positive" on-click="goToEditDish()">\n        Manage\n      </button>\n      <button id="menu-button7" ion-button color="assertive">\n        Remove\n      </button>\n    </ion-list>\n  </ion-card>\n  <ion-card id="menu-card211">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="menu-list-item70">\n        Fish & Chips\n      </ion-item>\n      <button id="menu-button8" ion-button color="positive" on-click="goToEditDish()">\n        Manage\n      </button>\n      <button id="menu-button9" ion-button color="assertive">\n        Remove\n      </button>\n    </ion-list>\n  </ion-card>\n  <button id="menu-button18" ion-button color="positive" block on-click="goToNewDish()">\n    New Dish\n  </button>\n  <button id="menu-button11" ion-button color="positive" block>\n    Save\n  </button>\n  <button id="menu-button13" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_dish_new_dish__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_dish_edit_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookings_bookings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menus_menus__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__bookings_bookings__["a" /* BookingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__menus_menus__["a" /* MenusPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_9__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage.prototype.goToBookings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bookings_bookings__["a" /* BookingsPage */]);
    };
    TabsPage.prototype.goToBookingDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__["a" /* BookingDetailsPage */]);
    };
    TabsPage.prototype.goToMenus = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__menus_menus__["a" /* MenusPage */]);
    };
    TabsPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    TabsPage.prototype.goToNewDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_dish_new_dish__["a" /* NewDishPage */]);
    };
    TabsPage.prototype.goToEditDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_dish_edit_dish__["a" /* EditDishPage */]);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\tabs\tabs.html"*/'<ion-tabs id="tabs-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="home" id="tabs-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Bookings" tabIcon="calendar" id="tabs-tab3"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Menus" tabIcon="book" id="tabs-tab2"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabs-tab4"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function DashboardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DashboardPage.prototype.goToBookingDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__["a" /* BookingDetailsPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Dashboard\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <h2 id="dashboard-heading6" style="color:#000000;">\n    Upcoming Bookings\n  </h2>\n  <h3 id="dashboard-heading7" style="color:#000000;">\n    Today - 11th Jan\n  </h3>\n  <ion-card id="dashboard-card24">\n    <ion-list>\n      <ion-item color="none" id="dashboard-list-item49">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Amy\n        </h2>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" id="dashboard-list-item51">\n        <ion-icon name="people" item-left></ion-icon>\n        2\n      </ion-item>\n      <ion-item color="assertive" id="dashboard-list-item50">\n        <ion-icon color="danger" name="information-circle" item-left></ion-icon>\n        Allergic to prawns!\n      </ion-item>\n      <button id="dashboard-button2" ion-button clear color="positive" block style="border-radius:0px 0px 0px 0px;" on-click="goToBookingDetails()">\n        View Booking Details\n      </button>\n    </ion-list>\n  </ion-card>\n  <h3 id="dashboard-heading8" style="color:#000000;">\n    Tomorrow - 12th Jan\n  </h3>\n  <ion-card id="dashboard-card25">\n    <ion-list>\n      <ion-item color="none" id="dashboard-list-item52">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Bob\n        </h2>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" id="dashboard-list-item53">\n        <ion-icon name="people" item-left></ion-icon>\n        4\n      </ion-item>\n      <ion-item color="balanced" id="dashboard-list-item54">\n        <ion-icon color="secondary" name="information-circle" item-left></ion-icon>\n        No food allergies!\n      </ion-item>\n      <button id="dashboard-button3" ion-button clear color="positive" block on-click="goToBookingDetails()">\n        View Booking Details\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function BookingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookingsPage.prototype.goToBookingDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__["a" /* BookingDetailsPage */]);
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\bookings\bookings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bookings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="bookings-form1">\n    <ion-item id="bookings-select2">\n      <ion-label>\n        Month\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          January\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <ion-list id="bookings-list2">\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item11">\n      11th Jan - 6pm\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item37">\n      12th Jan - 3pm\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item12">\n      14th Jan - 7pm\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item13">\n      21st Jan - 8pm\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\bookings\bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_dish_new_dish__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_dish_edit_dish__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenusPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MenusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenusPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    MenusPage.prototype.goToNewDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_dish_new_dish__["a" /* NewDishPage */]);
    };
    MenusPage.prototype.goToEditDish = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_dish_edit_dish__["a" /* EditDishPage */]);
    };
    MenusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menus',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\menus\menus.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-left solid>\n        <ion-icon name="add"></ion-icon>\n        New Menu\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-card id="menus-card28">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="menus-list-item61">\n        Western Wednesday\n      </ion-item>\n      <button id="menus-button4" ion-button clear color="positive" block on-click="goToMenu()">\n        Manage Menu\n      </button>\n    </ion-list>\n  </ion-card>\n  <ion-card id="menus-card212">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item color="none" id="menus-list-item71">\n        Thai Thursday\n      </ion-item>\n      <button id="menus-button14" ion-button clear color="positive" block on-click="goToMenu()">\n        Manage Menu\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\menus\menus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.goToEditProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-left solid>\n        <ion-icon name="exit"></ion-icon>\n        Log out\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <h1 id="profile-heading10" style="color:#000000;"></h1>\n  <div id="profile-markdown19" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It\n      has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n      publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </p>\n  </div>\n  <button id="profile-button10" ion-button color="positive" block on-click="goToEditProfile()">\n    Edit Profile\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfilePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function EditProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Edit Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <button id="editProfile-button12" ion-button color="positive" block>\n    Change Image\n  </button>\n  <form id="editProfile-form8">\n    <ion-item id="editProfile-input7">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="Tony&#039;s Cafe"></ion-input>\n    </ion-item>\n    <ion-item id="editProfile-textarea1">\n      <ion-label>\n        Description\n      </ion-label>\n      <ion-textarea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></ion-textarea>\n    </ion-item>\n  </form>\n  <button id="editProfile-button19" ion-button color="positive" block>\n    Save\n  </button>\n  <button id="editProfile-button20" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bookings_bookings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menus_menus__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_booking_details_booking_details__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__["a" /* EditDishPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__["a" /* EditDishPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateMenuPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CreateMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreateMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-menu',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\create-menu\create-menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Create Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <button id="createMenu-button17" ion-button color="positive" block>\n    Upload Image\n  </button>\n  <form id="createMenu-form6">\n    <ion-item id="createMenu-input1">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n    </ion-item>\n    <ion-item id="createMenu-select3">\n      <ion-label>\n        Tags\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Western\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <button id="createMenu-button15" ion-button color="positive" block>\n    Save Menu\n  </button>\n  <button id="createMenu-button16" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\create-menu\create-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CreateMenuPage);
    return CreateMenuPage;
}());

//# sourceMappingURL=create-menu.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditMenuPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function EditMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-menu',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\edit-menu\edit-menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Edit Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <button id="editMenu-button21" ion-button color="positive" block>\n    Change Image\n  </button>\n  <form id="editMenu-form12">\n    <ion-item id="editMenu-input6">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n    </ion-item>\n    <ion-item id="editMenu-select6">\n      <ion-label>\n        Tags\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Western\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <button id="editMenu-button22" ion-button color="positive" block>\n    Save Menu\n  </button>\n  <button id="editMenu-button23" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\edit-menu\edit-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EditMenuPage);
    return EditMenuPage;
}());

//# sourceMappingURL=edit-menu.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingDetailsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function BookingDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-details',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\booking-details\booking-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Booking Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <h1 id="bookingDetails-heading1" style="color:#000000;">\n    11th January\n  </h1>\n  <h2 id="bookingDetails-heading2" style="color:#000000;">\n    Time: 6pm\n  </h2>\n  <ion-card id="bookingDetails-card21">\n    <ion-list>\n      <ion-item color="none" id="bookingDetails-list-item16">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Amy Tan\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="bookingDetails-list-item18">\n        <ion-icon name="people" item-left></ion-icon>\n        2\n      </ion-item>\n      <ion-item color="assertive" id="bookingDetails-list-item19">\n        <ion-icon name="information-circle" item-left></ion-icon>\n        Allergic to prawns!\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <button id="bookingDetails-button1" ion-button color="assertive" block>\n    Cancel Booking\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\booking-details\booking-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewDishPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function NewDishPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-dish',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\new-dish\new-dish.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      New Dish\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <button id="newDish-button24" ion-button color="positive" block>\n    Upload Image\n  </button>\n  <form id="newDish-form9">\n    <ion-item id="newDish-input8">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n    </ion-item>\n  </form>\n  <button id="newDish-button25" ion-button color="positive" block>\n    Save\n  </button>\n  <button id="newDish-button26" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\new-dish\new-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NewDishPage);
    return NewDishPage;
}());

//# sourceMappingURL=new-dish.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditDishPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function EditDishPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-dish',template:/*ion-inline-start:"C:\Users\19b754p\foodie\src\pages\edit-dish\edit-dish.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Edit Dish\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <button id="editDish-button27" ion-button color="positive" block>\n    Change Image\n  </button>\n  <form id="editDish-form10">\n    <ion-item id="editDish-input9">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n    </ion-item>\n  </form>\n  <button id="editDish-button28" ion-button color="positive" block>\n    Save\n  </button>\n  <button id="editDish-button29" ion-button color="positive" block>\n    Cancel\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\19b754p\foodie\src\pages\edit-dish\edit-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EditDishPage);
    return EditDishPage;
}());

//# sourceMappingURL=edit-dish.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map