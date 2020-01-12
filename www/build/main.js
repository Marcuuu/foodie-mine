webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-new-dish',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\new-dish\new-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      New Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="newDish-button24" ion-button color="positive" block>\n\n    Upload Image\n\n  </button>\n\n  <form id="newDish-form9">\n\n    <ion-item id="newDish-input8">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="newDish-button25" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="newDish-button26" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\new-dish\new-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], NewDishPage);
    return NewDishPage;
}());

//# sourceMappingURL=new-dish.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-edit-dish',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\edit-dish\edit-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page15">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editDish-button27" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editDish-form10">\n\n    <ion-item id="editDish-input9">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editDish-button28" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="editDish-button29" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\edit-dish\edit-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EditDishPage);
    return EditDishPage;
}());

//# sourceMappingURL=edit-dish.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submitReview_submitReview__ = __webpack_require__(162);
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
            selector: 'page-menuinfo',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\cust_menuinfo\menuinfo.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-title text-center>\n\n      PDP Menu Page\n\n    </ion-title>\n\n    <!-- <ion-buttons slot="end" >\n\n      <button [ngStyle]="" class="heartbutton" (click)="favmenu(friend)">\n\n      <ion-icon size="large" [name]="visible ? \'heart\' : \'heart-empty\'"></ion-icon>\n\n    </button>\n\n    </ion-buttons> -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="heart"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n<ion-content>\n\n  <h3><Menu></Menu> INFO</h3>\n\n  <ion-list>\n\n    <ion-item *ngFor="let pdp of menuInfo">\n\n      <p>{{pdp.fName}}</p>\n\n      <p>{{pdp.menuName}}</p>\n\n    </ion-item>\n\n    <ion-item class="margin border">\n\n      <ionic3-star-rating [(ngModel)]="rating" class="center" halfStar="true" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="true" fontSize="32px" (ratingChanged)="logRatingChange($event)">\n\n      </ionic3-star-rating>\n\n      <input class="rate" [(ngModel)]="ratingNum" type="decimal" disabled="true" size="3"/>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="navSubmitReview()">\n\n    <h3 style="color:lightgreen">Write a Review</h3>\n\n  </button>\n\n  <ion-label><h1 text-center>Reviews</h1></ion-label>\n\n  <ion-list>\n\n    <ion-item  *ngFor="let rev of TopReview">\n\n      <ion-label>{{rev.comments}}</ion-label>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="allReviews()">\n\n    <h3 style="color:lightgreen">See all Reviews</h3>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\cust_menuinfo\menuinfo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], MenuInfoPage);
    return MenuInfoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=menuinfo.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\ELP\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cust_menu/menu.module": [
		294,
		4
	],
	"../pages/cust_menuinfo/menuinfo.module": [
		295,
		3
	],
	"../pages/dash-board/dash-board.module": [
		296,
		0
	],
	"../pages/favourites/favourites.module": [
		297,
		2
	],
	"../pages/profile/profile.module": [
		298,
		1
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
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
            selector: 'page-reviews',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\reviews\reviews.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reviews\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n    <ion-list>\n      <ion-item *ngFor="let rev of allReview">\n        <ion-label class="fulllabel">\n            <h3 text-left>{{rev.comments}} </h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(35);
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
            selector: 'page-submitReview',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\submitReview\submitReview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Rate this menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n    <ion-label class="text">Hygenie</ion-label>\n    <ion-item class="margin border">\n      <ionic3-star-rating [(ngModel)]="rating1" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n      </ionic3-star-rating>\n    </ion-item>\n    <ion-label class="text">Food Quality</ion-label>\n    <ion-item class="margin border">\n      <ionic3-star-rating [(ngModel)]="rating2" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n      </ionic3-star-rating>\n    </ion-item>\n    <ion-label class="text">Price</ion-label>\n    <ion-item class="margin border ">\n      <ionic3-star-rating [(ngModel)]="rating3" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n      </ionic3-star-rating>\n    </ion-item>\n\n    <ion-item class="margintext border">\n      Share your experience\n      <ion-textarea [(ngModel)]="myText" [maxlength]="200" autoGrow="true" placeholder="(optional)"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label class="right">Characters Remaining: {{myText?.length || 0}}/200</ion-label>\n    </ion-item>\n    <ion-item>\n      <button class="center button" (click)="submitReview()">Submit Review</button>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\submitReview\submitReview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]])
    ], SubmitReview);
    return SubmitReview;
}());

//# sourceMappingURL=submitReview.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs2_tabs2__ = __webpack_require__(211);
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
            selector: 'page-login-page',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\login-page\login-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <form id="loginPage-form1">\n    <img src="../../assets/imgs/logo-foodie.jpg"/>\n    <ion-item id="loginPage-input1" class="markdown">\n      <ion-label>\n        Username : \n      </ion-label>\n      <ion-input type="text" [(ngModel)]="username" [ngModelOptions]="{standalone:true}" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="loginPage-button1" ion-button color="positive" block (click)="login(this.username)">\n    Login\n  </button>\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\login-page\login-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_dish_new_dish__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_dish_edit_dish__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookings_bookings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menus_menus__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favourites_favourites__ = __webpack_require__(53);
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
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_10__favourites_favourites__["a" /* FavouritesPage */];
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__["a" /* MenuPage */]);
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
            selector: 'page-tabs',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\tabs\tabs.html"*/'<ion-tabs id="tabs-tabs1">\n\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="home" id="tabs-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Bookings" tabIcon="calendar" id="tabs-tab3"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Menus" tabIcon="book" id="tabs-tab2"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="person" id="tabs-tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\School Project\ELP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(52);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Dashboard\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <h2 id="dashboard-heading6" style="color:#000000;">\n\n    Upcoming Bookings\n\n  </h2>\n\n  <h3 id="dashboard-heading7" style="color:#000000;">\n\n    Today - 11th Jan\n\n  </h3>\n\n  <ion-card id="dashboard-card24">\n\n    <ion-list>\n\n      <ion-item color="none" id="dashboard-list-item49">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Amy\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item51">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        2\n\n      </ion-item>\n\n      <ion-item color="assertive" id="dashboard-list-item50">\n\n        <ion-icon color="danger" name="information-circle" item-left></ion-icon>\n\n        Allergic to prawns!\n\n      </ion-item>\n\n      <button id="dashboard-button2" ion-button clear color="positive" block style="border-radius:0px 0px 0px 0px;" on-click="goToBookingDetails()">\n\n        View Booking Details\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <h3 id="dashboard-heading8" style="color:#000000;">\n\n    Tomorrow - 12th Jan\n\n  </h3>\n\n  <ion-card id="dashboard-card25">\n\n    <ion-list>\n\n      <ion-item color="none" id="dashboard-list-item52">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Bob\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item53">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        4\n\n      </ion-item>\n\n      <ion-item color="balanced" id="dashboard-list-item54">\n\n        <ion-icon color="secondary" name="information-circle" item-left></ion-icon>\n\n        No food allergies!\n\n      </ion-item>\n\n      <button id="dashboard-button3" ion-button clear color="positive" block on-click="goToBookingDetails()">\n\n        View Booking Details\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(52);
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
            selector: 'page-bookings',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\bookings\bookings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="bookings-form1">\n\n    <ion-item id="bookings-select2">\n\n      <ion-label>\n\n        Month\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          January\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <ion-list id="bookings-list2">\n\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item11">\n\n      11th Jan - 6pm\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item37">\n\n      12th Jan - 3pm\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item12">\n\n      14th Jan - 7pm\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToBookingDetails()" id="bookings-list-item13">\n\n      21st Jan - 8pm\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\bookings\bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_menu_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_dish_new_dish__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_dish_edit_dish__ = __webpack_require__(104);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cust_menu_menu__["a" /* MenuPage */]);
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
            selector: 'page-menus',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\menus\menus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-left solid>\n\n        <ion-icon name="add"></ion-icon>\n\n        New Menu\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Menus\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <ion-card id="menus-card28">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menus-list-item61">\n\n        Western Wednesday\n\n      </ion-item>\n\n      <button id="menus-button4" ion-button clear color="positive" block on-click="goToMenu()">\n\n        Manage Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card id="menus-card212">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menus-list-item71">\n\n        Thai Thursday\n\n      </ion-item>\n\n      <button id="menus-button14" ion-button clear color="positive" block on-click="goToMenu()">\n\n        Manage Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\menus\menus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__ = __webpack_require__(42);
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
            selector: 'page-tabs2',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\tabs2\tabs2.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="home" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="heart" id="tabsController-tab2"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\School Project\ELP\src\pages\tabs2\tabs2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Tabs2Page);
    return Tabs2Page;
}());

//# sourceMappingURL=tabs2.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bookings_bookings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menus_menus__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booking_details_booking_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cust_menu_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cust_menuinfo_menuinfo__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_menu_create_menu__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_menu_edit_menu__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_dish_new_dish__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_dish_edit_dish__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favourites_favourites__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_submitReview_submitReview__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_page_login_page__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic3_star_rating__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cust_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cust_menuinfo_menuinfo__["a" /* MenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_dish_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_submitReview_submitReview__["a" /* SubmitReview */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_page_login_page__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cust_menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cust_menuinfo/menuinfo.module#MenuInfoPageModule', name: 'MenuInfoPage', segment: 'menuinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dash-board/dash-board.module#DashBoardPageModule', name: 'DashBoardPage', segment: 'dash-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourites/favourites.module#FavouritesPageModule', name: 'FavouritesPage', segment: 'favourites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cust_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cust_menuinfo_menuinfo__["a" /* MenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_dish_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_submitReview_submitReview__["a" /* SubmitReview */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_page_login_page__["a" /* LoginPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_page_login_page__ = __webpack_require__(206);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_page_login_page__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\School Project\ELP\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\School Project\ELP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-create-menu',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\create-menu\create-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Create Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="createMenu-button17" ion-button color="positive" block>\n\n    Upload Image\n\n  </button>\n\n  <form id="createMenu-form6">\n\n    <ion-item id="createMenu-input1">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="createMenu-select3">\n\n      <ion-label>\n\n        Tags\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Western\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="createMenu-button15" ion-button color="positive" block>\n\n    Save Menu\n\n  </button>\n\n  <button id="createMenu-button16" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\create-menu\create-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CreateMenuPage);
    return CreateMenuPage;
}());

//# sourceMappingURL=create-menu.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-edit-menu',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\edit-menu\edit-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editMenu-button21" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editMenu-form12">\n\n    <ion-item id="editMenu-input6">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editMenu-select6">\n\n      <ion-label>\n\n        Tags\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Western\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editMenu-button22" ion-button color="positive" block>\n\n    Save Menu\n\n  </button>\n\n  <button id="editMenu-button23" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\edit-menu\edit-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EditMenuPage);
    return EditMenuPage;
}());

//# sourceMappingURL=edit-menu.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editProfile-button12" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editProfile-form8">\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Tony&#039;s Cafe"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-textarea1">\n\n      <ion-label>\n\n        Description\n\n      </ion-label>\n\n      <ion-textarea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></ion-textarea>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editProfile-button19" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="editProfile-button20" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cust_menuinfo_menuinfo__ = __webpack_require__(105);
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
            selector: 'page-menu',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\cust_menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let menu of menuPage">\n\n        <ion-label class="fulllabel">\n\n          <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n            <h3 text-left>{{menu.fName}} </h3>\n\n            <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n            <p text-left>{{menu.menu_category}} </p>\n\n          </button>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\ELP\src\pages\cust_menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], MenuPage);
    return MenuPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-booking-details',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\booking-details\booking-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Booking Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <h1 id="bookingDetails-heading1" style="color:#000000;">\n\n    11th January\n\n  </h1>\n\n  <h2 id="bookingDetails-heading2" style="color:#000000;">\n\n    Time: 6pm\n\n  </h2>\n\n  <ion-card id="bookingDetails-card21">\n\n    <ion-list>\n\n      <ion-item color="none" id="bookingDetails-list-item16">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Amy Tan\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="bookingDetails-list-item18">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        2\n\n      </ion-item>\n\n      <ion-item color="assertive" id="bookingDetails-list-item19">\n\n        <ion-icon name="information-circle" item-left></ion-icon>\n\n        Allergic to prawns!\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button id="bookingDetails-button1" ion-button color="assertive" block>\n\n    Cancel Booking\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\ELP\src\pages\booking-details\booking-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
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
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    FavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
    };
    FavouritesPage.prototype.getFavs = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getFavs';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            custId: localStorage.getItem("loginid"),
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
            _this.favs = data;
        }, function (error) {
            console.log(error);
        });
    };
    FavouritesPage.prototype.goToMenuPage = function (menuId) {
        //this.router.navigateByUrl('/pdpMenuPage/' + this.custId + '/' + menuId);
    };
    FavouritesPage.prototype.ngOnInit = function () {
        //this.custId = this.activatedRoute.snapshot.paramMap.get('custId');
        this.getFavs();
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"D:\School Project\ELP\src\pages\favourites\favourites.html"*/'<!--\n\n  Generated template for the FavouritesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Favourites</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="width:100%;">\n\n  <ion-list>\n\n    <ion-item *ngFor="let menu of menuPage">\n\n      <ion-label class="fulllabel">\n\n        <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n          <h3 text-left>{{menu.fName}} </h3>\n\n          <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n          <p text-left>{{menu.menu_category}} </p>\n\n        </button>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\ELP\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map