webpackJsonp([3],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cust_menu/menu.module": [
		282,
		0
	],
	"../pages/cust_menuinfo/menuinfo.module": [
		280,
		1
	],
	"../pages/dash-board/dash-board.module": [
		281,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favourites_favourites__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__discover_discover__["a" /* DiscoverPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__favourites_favourites__["a" /* FavouritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__["a" /* BookingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"D:\Work\ELP\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1 main-tabs"> \n\n  <ion-tab [root]="tab1Root" tabTitle="Discover" tabIcon="compass" id="tabsController-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favourites" tabIcon="heart-outline" id="tabsController-tab2"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Bookings" tabIcon="book" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="contact" id="tabsController-tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Work\ELP\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_details_menu_details__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        this.getProfiles();
    };
    DiscoverPage.prototype.getProfiles = function () {
        var _this = this;
        var url = "https://elp-tutorial.herokuapp.com/discoverprofiles";
        this.data = this.http.get(url);
        this.subscription = this.data.subscribe(function (data) {
            _this.profileList = data;
        });
    };
    DiscoverPage.prototype.getItems = function (ev) {
        this.ngOnInit();
        var val = ev.target.value;
        if (val && val.trim() != "") {
            this.subscription.unsubscribe();
            this.profileList = this.profileList.filter(function (item) {
                return item.menuName.toLowerCase().includes(val.toLowerCase());
            });
        }
        else {
            this.ngOnInit();
        }
    };
    DiscoverPage.prototype.goToMenuDetailsPage = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_details_menu_details__["a" /* MenuDetailsPage */], {
            item: item
        });
        console.log(item);
    };
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-discover",template:/*ion-inline-start:"D:\Work\ELP\src\pages\discover\discover.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Foodie\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <form id="discover-form1">\n    <ion-searchbar\n      placeholder="Search"\n      name="search"\n      id="discover-search1"\n      (ionInput)="getItems($event)"\n    ></ion-searchbar>\n    <ion-item id="discover-select1" class="discover-filter">\n      <ion-label>\n        Filter by:\n      </ion-label>\n      <ion-select name="filter">\n        <ion-option>Distance (Closest)</ion-option>\n        <ion-option>Distance (Furthest)</ion-option>\n        <ion-option>Price (Low to High)</ion-option>\n        <ion-option>Price (High to Low)</ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <h4 id="discover-heading1" class="header-m">\n    Discover around <span class="color-darkyellow">Kovan</span>\n  </h4>\n  <ion-card\n    id="discover-card21"\n    class="discover-card-each"\n    *ngFor="let profile of profileList"\n  >\n    <ion-list>\n      <ion-item color="none" id="discover-list-item3">\n        <ion-avatar item-left>\n          <img src="{{profile.img}}" />\n        </ion-avatar>\n        <h2\n          style="margin-bottom:0;font-weight:500;"\n          (click)="goToMenuDetailsPage($event, profile)"\n        >\n          {{profile.fName}}\n        </h2>\n      </ion-item>\n      <div class="discover-image">\n        <img src="{{profile.menu_image}}" alt="" />\n      </div>\n      <div class="discover-info">\n        <h5\n          id="discover-heading2"\n          class="discover-menuname"\n          style="color:#000000;font-weight:600;"\n          (click)="goToMenuDetailsPage($event, profile)"\n        >\n          {{profile.menuName}}\n        </h5>\n        <div id="discover-markdown3" class="show-list-numbers-and-dots">\n          <p style="color:#000000;">\n            {{profile.location}}\n          </p>\n        </div>\n        <div id="discover-markdown4" class="show-list-numbers-and-dots">\n          <p style="color:#000000;font-size:1.3rem;">\n            {{profile.menu_tags}}\n          </p>\n        </div>\n        <div class="discover-ratings">\n          <span\n            class="each-star"\n            [ngClass]="{\'active\' : profile.menu_ratings > 0}"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n              />\n            </svg>\n          </span>\n          <span\n            class="each-star"\n            [ngClass]="{\'active\' : profile.menu_ratings > 1}"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n              />\n            </svg>\n          </span>\n          <span\n            class="each-star"\n            [ngClass]="{\'active\' : profile.menu_ratings > 2}"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n              />\n            </svg>\n          </span>\n          <span\n            class="each-star"\n            [ngClass]="{\'active\' : profile.menu_ratings > 3}"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n              />\n            </svg>\n          </span>\n          <span\n            class="each-star"\n            [ngClass]="{\'active\' : profile.menu_ratings > 4}"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n              />\n            </svg>\n          </span>\n          <span class="rating-amount">{{profile.menu_rating_amt}} reviews</span>\n        </div>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\Work\ELP\src\pages\discover\discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_make_booking_make_booking__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuDetailsPage = /** @class */ (function () {
    function MenuDetailsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.showImage = false;
        this.details = navParams.get("item");
    }
    MenuDetailsPage.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuDetailsPage.prototype.ionViewWillEnter = function () {
        var body = document.getElementsByTagName("BODY")[0];
        body.classList.add("details-active");
    };
    MenuDetailsPage.prototype.ionViewWillLeave = function () {
        var body = document.getElementsByTagName("BODY")[0];
        body.classList.remove("details-active");
    };
    MenuDetailsPage.prototype.goToMakeBookingPage = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_make_booking_make_booking__["a" /* MakeBookingPage */], {
            item: item
        });
    };
    MenuDetailsPage.prototype.getMenu = function () {
        var _this = this;
        var url = "https://elp-tutorial.herokuapp.com/getmenu";
        this.menuData = this.http.get(url);
        this.menuData.subscribe(function (data) {
            _this.menuList = data.filter(function (word) {
                if (word.menuName == _this.details.menuName) {
                    return word;
                }
            });
        });
    };
    MenuDetailsPage.prototype.popupImage = function (event) {
        if (!this.showImage == true) {
            var imgSrc = event.srcElement.src;
            this.popupSrc = imgSrc;
            console.log(this.popupSrc);
        }
        this.showImage = !this.showImage;
    };
    MenuDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-menu-details",template:/*ion-inline-start:"D:\Work\ELP\src\pages\menu-details\menu-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{this.details.fName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="page6">\n\n  <div class="details-image">\n\n    <img src="{{this.details.menu_image}}" alt="" />\n\n  </div>\n\n  <div padding>\n\n    <h4 id="menuDetails-heading3" style="color:#232323;font-weight:600;margin-bottom:5px;">\n\n      {{this.details.menuName}}\n\n    </h4>\n\n    <div style="margin-bottom:15px;color:#232323;">{{this.details.description}}</div>\n\n    <div class="details-info-list">\n\n      <div\n\n        id="menuDetails-markdown5"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pin"></ion-icon>\n\n        <p ion-text>{{this.details.location}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        <p ion-text>{{this.details.menu_tags}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="list-box"></ion-icon>\n\n        <p ion-text>~${{this.details.menu_price}}/pax</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="call"></ion-icon>\n\n        <a href="tel:{{this.details.phone}}">{{this.details.phone}}</a>\n\n      </div>\n\n    </div>\n\n    <h5 id="menuDetails-heading4" style="color:#000000;font-size:1.6rem;">\n\n      Menu\n\n    </h5>\n\n    <ion-list id="menuDetails-list1" class="menu-list">\n\n      <ion-item color="none" id="menuDetails-list-item8" class="menu-item-each active" *ngFor="let item of menuList">\n\n        <img src="{{item.menuImg}}" alt="" (click)="popupImage($event)" />\n\n        <p ion-text color="black">{{item.menuItem}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <h5 id="menuDetails-heading5" style="color:#000000;font-size:1.6rem;">\n\n      Reviews\n\n    </h5>\n\n    <ion-list id="menuDetails-list2">\n\n      <ion-item color="none" id="menuDetails-list-item14">\n\n        Review 1\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item15">\n\n        Review 2\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item16">\n\n        Review 3\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-item class="popup-image" (click)="popupImage()" [class.active]="this.showImage">\n\n  <img src="{{this.popupSrc}}" alt="">\n\n</ion-item>\n\n<div class="book-cta">\n\n  <button class="book-cta-btn" (click)="goToMakeBookingPage($event, this.details)">\n\n    Book Now\n\n  </button>\n\n</div>'/*ion-inline-end:"D:\Work\ELP\src\pages\menu-details\menu-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MenuDetailsPage);
    return MenuDetailsPage;
}());

//# sourceMappingURL=menu-details.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakeBookingPage = /** @class */ (function () {
    function MakeBookingPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.noBookTime = false;
        this.noBookPax = false;
        this.bookingDetails = navParams.get("item");
    }
    MakeBookingPage.prototype.ionViewDidLoad = function () {
        console.log(this.bookingDetails.fName);
        this.date = new Date().toISOString();
    };
    MakeBookingPage.prototype.updateMyDate = function ($event) {
        var year = $event.year;
        var month = $event.month;
        var day = $event.day;
        var full = year + "-" + month + "-" + day;
        localStorage.setItem("bookDate", full);
    };
    MakeBookingPage.prototype.updateMyTime = function ($event) {
        localStorage.setItem("bookTime", $event);
    };
    MakeBookingPage.prototype.updateMyPax = function ($event) {
        localStorage.setItem("bookPax", $event);
    };
    MakeBookingPage.prototype.updateMyNotes = function ($event) {
        localStorage.setItem("bookNotes", $event);
    };
    MakeBookingPage.prototype.emptyBookTime = function () {
        var alert = this.alertCtrl.create({
            title: "Select a time",
            message: "Timeslot cannot be empty",
            buttons: ["Ok"]
        });
        alert.present();
    };
    MakeBookingPage.prototype.emptyBookPax = function () {
        var alert = this.alertCtrl.create({
            title: "Select number of pax",
            message: "Pax cannot be empty",
            buttons: ["Ok"]
        });
        alert.present();
    };
    MakeBookingPage.prototype.bookingSuccess = function () {
        var alert = this.alertCtrl.create({
            title: "Booking Successful",
            message: "See you soon!",
            buttons: ["Ok"]
        });
        alert.present();
    };
    MakeBookingPage.prototype.makeBooking = function () {
        var _this = this;
        var url = "https://elp-tutorial.herokuapp.com/makeBooking";
        var bookTime = localStorage.getItem("bookTime");
        var bookPax = localStorage.getItem("bookPax");
        if (bookTime == null) {
            this.emptyBookTime();
        }
        else if (bookPax == null) {
            this.emptyBookPax();
        }
        else {
            console.log("Booking...");
            var postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                bookDate: localStorage.getItem("bookDate"),
                bookTime: localStorage.getItem("bookTime"),
                bookPax: localStorage.getItem("bookPax"),
                bookNotes: localStorage.getItem("bookNotes"),
                name: this.bookingDetails.fName,
                menuID: this.bookingDetails.menuId
            });
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
                })
            };
            this.http.post(url, postData, httpOptions).subscribe(function (data) {
                console.log("postData:", postData);
                console.log(data);
                _this.bookingData = data;
            }, function (error) {
                console.log(error);
            });
            localStorage.removeItem("bookDate");
            localStorage.removeItem("bookTime");
            localStorage.removeItem("bookPax");
            localStorage.removeItem("bookNotes");
            this.navCtrl.pop();
            this.bookingSuccess();
        }
    };
    MakeBookingPage.prototype.cancelBooking = function () {
        this.navCtrl.pop();
    };
    MakeBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-make-booking",template:/*ion-inline-start:"D:\Work\ELP\src\pages\make-booking\make-booking.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Make Booking\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <h4\n    id="makeBooking-heading6"\n    style="color:#000000;font-size:1.7rem;margin-bottom:15px;"\n  >\n    Confirm Booking\n  </h4>\n  <ion-list id="makeBooking-list3" class="booking-details-list">\n    <ion-item\n      color="none"\n      id="makeBooking-list-item20"\n      class="booking-details-each"\n    >\n      <p ion-text class="label-text" color="black">Chef</p>\n      <p ion-text class="label-detail" color="black">\n        {{this.bookingDetails.fName}}\n      </p>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item23"\n      class="booking-details-each"\n    >\n      <p ion-text class="label-text" color="black">Location</p>\n      <p ion-text class="label-detail" color="black">\n        {{this.bookingDetails.location}}\n      </p>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item21"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Date</ion-label>\n      <ion-datetime\n        displayFormat="DD MMM YYYY"\n        class="label-detail label-date"\n        color="black"\n        [(ngModel)]="date"\n        (ionChange)="updateMyDate($event)"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item22"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Time</ion-label>\n      <ion-select\n        value="1300-1500"\n        okText="Okay"\n        cancelText="Cancel"\n        placeholder="Select a time"\n        class="select-field"\n        (ionChange)="updateMyTime($event)"\n      >\n        <ion-option value="1300-1500">1300 - 1500</ion-option>\n        <ion-option value="1600-1800">1600 - 1800</ion-option>\n        <ion-option value="1900-2100">1900 - 2100</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item24"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Pax</ion-label>\n      <ion-select\n        value="1"\n        okText="Okay"\n        cancelText="Cancel"\n        placeholder="How many pax"\n        class="select-field"\n        (ionChange)="updateMyPax($event)"\n      >\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item25"\n      class="booking-details-each ion-textarea-con"\n    >\n      <ion-label class="label-text" color="black">Notes</ion-label>\n      <ion-textarea\n        class="ion-textarea-element"\n        (input)="updateMyNotes($event.target.value)"\n      ></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div class="make-booking-cta">\n    <button\n      id="makeBooking-button3"\n      class="cancel-btn"\n      ion-button\n      outline\n      color="black"\n      (click)="cancelBooking()"\n    >\n      Cancel\n    </button>\n    <button\n      id="makeBooking-button4"\n      ion-button\n      color="yellow"\n      (click)="makeBooking()"\n    >\n      Confirm\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\ELP\src\pages\make-booking\make-booking.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], MakeBookingPage);
    return MakeBookingPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=make-booking.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouritesPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function FavouritesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"D:\Work\ELP\src\pages\favourites\favourites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Favourites\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\favourites\favourites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"D:\Work\ELP\src\pages\bookings\bookings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4"></ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\bookings\bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Work\ELP\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_discover_discover__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bookings_bookings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_details_menu_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_make_booking_make_booking__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_page_login_page__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_make_booking_make_booking__["a" /* MakeBookingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_page_login_page__["a" /* LoginPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cust_menuinfo/menuinfo.module#MenuInfoPageModule', name: 'MenuInfoPage', segment: 'menuinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dash-board/dash-board.module#DashBoardPageModule', name: 'DashBoardPage', segment: 'dash-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust_menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_make_booking_make_booking__["a" /* MakeBookingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_page_login_page__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(197);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\ELP\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\Work\ELP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submitReview_submitReview__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuInfoPage = /** @class */ (function () {
    function MenuInfoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.visible = false;
    }
    MenuInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        this.getMenuInfo();
    };
    MenuInfoPage.prototype.ionViewWillEnter = function () {
        this.getTopReview();
        this.getAvgRating();
        console.log('ionViewWillEnter MenuPage');
    };
    MenuInfoPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave MenuPage');
    };
    MenuInfoPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave MenuPage');
    };
    // ngOnInit() {
    //   this.getMenuInfo();
    //   this.getTopReview();
    //   this.getAvgRating();
    //   // this.getPDPfName();
    // }
    MenuInfoPage.prototype.favmenu = function () {
        this.visible = !this.visible;
        console.log(this.visible);
    };
    MenuInfoPage.prototype.logRatingChange = function (rating) {
        console.log("changed rating: ", rating);
        // do your stuff
    };
    MenuInfoPage.prototype.getTopReview = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getTopReview';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData:', postData);
            console.log(data);
            _this.TopReview = data;
        }, function (error) {
            console.log(error);
        });
    };
    // getPDPfName() {
    //   var url = 'https://foodie1234.herokuapp.com/getPDPfName';
    //   var postData = JSON.stringify({
    //     //these fields MUST match the server.js request.body.XXX;  
    //     menuId: this.menuId,
    //   });
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
    //     })
    //   };
    //   this.http.post(url, postData, httpOptions).subscribe((data) => {
    //     console.log('postData:', postData)
    //     console.log(data);
    //       this.fName=data;
    //   }, error => {
    //     console.log(error);
    //   });
    // }
    MenuInfoPage.prototype.getMenuInfo = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getMenuInfo';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData:', postData);
            console.log(data);
            _this.menuInfo = data;
        }, function (error) {
            console.log(error);
        });
    };
    MenuInfoPage.prototype.getAvgRating = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getAvgRating';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData1:', postData);
            console.log(data);
            _this.rating = data[0].avgFood;
            _this.ratingNum = data[0].avgFood;
        }, function (error) {
            console.log(error);
        });
    };
    MenuInfoPage.prototype.allReviews = function () {
        //this.router.navigateByUrl('/allReview/' + this.menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */]);
    };
    MenuInfoPage.prototype.navSubmitReview = function () {
        //this.router.navigateByUrl('/submitReview/' + this.custId +  '/' + this.menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__submitReview_submitReview__["a" /* SubmitReview */]);
    };
    MenuInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuinfo',template:/*ion-inline-start:"D:\Work\ELP\src\pages\cust_menuinfo\menuinfo.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-title text-center>\n\n      PDP Menu Page\n\n    </ion-title>\n\n    <!-- <ion-buttons slot="end" >\n\n      <button [ngStyle]="" class="heartbutton" (click)="favmenu(friend)">\n\n      <ion-icon size="large" [name]="visible ? \'heart\' : \'heart-empty\'"></ion-icon>\n\n    </button>\n\n    </ion-buttons> -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="heart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n<ion-content>\n\n  <h3><Menu></Menu> INFO</h3>\n\n  <ion-list>\n\n    <ion-item *ngFor="let pdp of menuInfo">\n\n      <p>{{pdp.fName}}</p>\n\n      <p>{{pdp.menuName}}</p>\n\n    </ion-item>\n\n    <ion-item class="margin border">\n\n      <ionic3-star-rating [(ngModel)]="rating" class="center" halfStar="true" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="true" fontSize="32px" (ratingChanged)="logRatingChange($event)">\n\n      </ionic3-star-rating>\n\n      <input class="rate" [(ngModel)]="ratingNum" type="decimal" disabled="true" size="3"/>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="navSubmitReview()">\n\n    <h3 style="color:lightgreen">Write a Review</h3>\n\n  </button>\n\n  <ion-label><h1 text-center>Reviews</h1></ion-label>\n\n  <ion-list>\n\n    <ion-item  *ngFor="let rev of TopReview">\n\n      <ion-label>{{rev.comments}}</ion-label>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="allReviews()">\n\n    <h3 style="color:lightgreen">See all Reviews</h3>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\cust_menuinfo\menuinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MenuInfoPage);
    return MenuInfoPage;
}());

//# sourceMappingURL=menuinfo.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ReviewsPage.prototype.getPDP = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getReviewName';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem("cust_menuid"),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData:', postData);
            console.log(data);
            _this.allReview = data;
        }, function (error) {
            console.log(error);
        });
    };
    ReviewsPage.prototype.ngOnInit = function () {
        this.getPDP();
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\Work\ELP\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Reviews\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n    <ion-list>\n\n      <ion-item *ngFor="let rev of allReview">\n\n        <ion-label class="fulllabel">\n\n            <h3 text-left>{{rev.comments}} </h3>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitReview = /** @class */ (function () {
    function SubmitReview(navCtrl, http, loc) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loc = loc;
    }
    SubmitReview.prototype.submitReview = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/submitReview';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;
            menuId: localStorage.getItem("cust_menuid"),
            custId: localStorage.getItem("loginid"),
            cleanlinessRating: this.rating1,
            foodQualityRating: this.rating2,
            priceRating: this.rating3,
            comments: this.myText,
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData:', postData);
            console.log(data);
            if (data == true) {
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.log(error);
        });
    };
    SubmitReview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submitReview',template:/*ion-inline-start:"D:\Work\ELP\src\pages\submitReview\submitReview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Rate this menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n    <ion-label class="text">Hygenie</ion-label>\n\n    <ion-item class="margin border">\n\n      <ionic3-star-rating [(ngModel)]="rating1" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating>\n\n    </ion-item>\n\n    <ion-label class="text">Food Quality</ion-label>\n\n    <ion-item class="margin border">\n\n      <ionic3-star-rating [(ngModel)]="rating2" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating>\n\n    </ion-item>\n\n    <ion-label class="text">Price</ion-label>\n\n    <ion-item class="margin border ">\n\n      <ionic3-star-rating [(ngModel)]="rating3" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating>\n\n    </ion-item>\n\n\n\n    <ion-item class="margintext border">\n\n      Share your experience\n\n      <ion-textarea [(ngModel)]="myText" [maxlength]="200" autoGrow="true" placeholder="(optional)"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label class="right">Characters Remaining: {{myText?.length || 0}}/200</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button class="center button" (click)="submitReview()">Submit Review</button>\n\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\submitReview\submitReview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]])
    ], SubmitReview);
    return SubmitReview;
}());

//# sourceMappingURL=submitReview.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_menuinfo_menuinfo__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.getPDP = function () {
        var _this = this;
        console.log("In getPDP()");
        var url = 'https://foodie1234.herokuapp.com/getMenu';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.menuPage = data;
            console.log(data);
        });
    };
    MenuPage.prototype.goToMenuPage = function (menuid) {
        localStorage.setItem("cust_menuid", menuid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cust_menuinfo_menuinfo__["a" /* MenuInfoPage */]);
    };
    MenuPage.prototype.ngOnInit = function () {
        this.getPDP();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\Work\ELP\src\pages\cust_menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let menu of menuPage">\n\n        <ion-label class="fulllabel">\n\n          <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n            <h3 text-left>{{menu.fName}} </h3>\n\n            <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n            <p text-left>{{menu.menu_category}} </p>\n\n          </button>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\ELP\src\pages\cust_menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs2_tabs2__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    LoginPage.prototype.login = function (custId) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/custLogin';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            custId: custId,
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postData:', postData);
            //pdp
            if (data[0].custID == 3) {
                localStorage.setItem("loginid", "3");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            //customer
            if (data[0].custID == 2) {
                localStorage.setItem("loginid", "2");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs2_tabs2__["a" /* Tabs2Page */]);
            }
            else if (data == false) {
                console.log("Not authorized username");
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-page',template:/*ion-inline-start:"D:\Work\ELP\src\pages\login-page\login-page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login Page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <form id="loginPage-form1">\n\n    <img src="../../assets/imgs/logo-foodie.jpg"/>\n\n    <ion-item id="loginPage-input1" class="markdown">\n\n      <ion-label>\n\n        Username : \n\n      </ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" [ngModelOptions]="{standalone:true}" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="loginPage-button1" ion-button color="positive" block (click)="login(this.username)">\n\n    Login\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\Work\ELP\src\pages\login-page\login-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(292);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\ELP\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Work\ELP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Work\ELP\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\ELP\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Work\ELP\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\ELP\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\ELP\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\ELP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tabs2Page = /** @class */ (function () {
    function Tabs2Page(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__["a" /* FavouritesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__["a" /* MenuPage */];
    }
    Tabs2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs2',template:/*ion-inline-start:"D:\Work\ELP\src\pages\tabs2\tabs2.html"*/'<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="home" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="heart" id="tabsController-tab2"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Work\ELP\src\pages\tabs2\tabs2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Tabs2Page);
    return Tabs2Page;
}());

//# sourceMappingURL=tabs2.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map