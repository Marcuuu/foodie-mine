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
		280,
		0
	],
	"../pages/cust_menuinfo/menuinfo.module": [
		281,
		1
	],
	"../pages/dash-board/dash-board.module": [
		282,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
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
    function MakeBookingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingDetails = navParams.get("item");
    }
    MakeBookingPage.prototype.ionViewDidLoad = function () {
        console.log(this.bookingDetails);
        this.date = new Date().toISOString();
    };
    MakeBookingPage.prototype.makeBooking = function () {
        var url = "https://elp-tutorial.herokuapp.com/makeBooking";
        /* this.data = this.http.get(url);
        this.subscription = this.data.subscribe(data => {
          this.profileList = data;
        }); */
    };
    MakeBookingPage.prototype.cancelBooking = function () {
        this.navCtrl.pop();
    };
    MakeBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-make-booking",template:/*ion-inline-start:"D:\Work\ELP\src\pages\make-booking\make-booking.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Make Booking\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <h4\n    id="makeBooking-heading6"\n    style="color:#000000;font-size:1.7rem;margin-bottom:15px;"\n  >\n    Confirm Booking\n  </h4>\n  <ion-list id="makeBooking-list3" class="booking-details-list">\n    <ion-item\n      color="none"\n      id="makeBooking-list-item20"\n      class="booking-details-each"\n    >\n      <p ion-text class="label-text" color="black">Chef</p>\n      <p ion-text class="label-detail" color="black">\n        {{this.bookingDetails.fName}}\n      </p>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item21"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Date</ion-label>\n      <ion-datetime\n        displayFormat="DD MMM YYYY"\n        class="label-detail label-date"\n        color="black"\n        [(ngModel)]="date"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item23"\n      class="booking-details-each"\n    >\n      <p ion-text class="label-text" color="black">Location</p>\n      <p ion-text class="label-detail" color="black">\n        {{this.bookingDetails.location}}\n      </p>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item22"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Time</ion-label>\n      <ion-select\n        value="1300-1500"\n        okText="Okay"\n        cancelText="Cancel"\n        placeholder="Select a time"\n        class="select-field"\n      >\n        <ion-option value="1300-1500">1300 - 1500</ion-option>\n        <ion-option value="1600-1800">1600 - 1800</ion-option>\n        <ion-option value="1900-2100">1900 - 2100</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item24"\n      class="booking-details-each"\n    >\n      <ion-label class="label-text" color="black">Pax</ion-label>\n      <ion-select\n        value="1"\n        okText="Okay"\n        cancelText="Cancel"\n        placeholder="How many pax"\n        class="select-field"\n      >\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item\n      color="none"\n      id="makeBooking-list-item25"\n      class="booking-details-each ion-textarea-con"\n    >\n      <ion-label class="label-text" color="black">Notes</ion-label>\n      <ion-textarea class="ion-textarea-element"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div class="make-booking-cta">\n    <button\n      id="makeBooking-button3"\n      class="cancel-btn"\n      ion-button\n      outline\n      color="black"\n      (click)="cancelBooking()"\n    >\n      Cancel\n    </button>\n    <button id="makeBooking-button4" ion-button color="yellow">\n      Confirm\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\ELP\src\pages\make-booking\make-booking.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], MakeBookingPage);
    return MakeBookingPage;
    var _a, _b;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(50);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_make_booking_make_booking__["a" /* MakeBookingPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cust_menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust_menuinfo/menuinfo.module#MenuInfoPageModule', name: 'MenuInfoPage', segment: 'menuinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dash-board/dash-board.module#DashBoardPageModule', name: 'DashBoardPage', segment: 'dash-board', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_make_booking_make_booking__["a" /* MakeBookingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map