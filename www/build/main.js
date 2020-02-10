webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustMenuInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_reviews_reviews__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CUST_submitReview_submitReview__ = __webpack_require__(291);
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
var CustMenuInfoPage = /** @class */ (function () {
    function CustMenuInfoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    CustMenuInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        this.getMenuInfo();
    };
    CustMenuInfoPage.prototype.ionViewWillEnter = function () {
        this.getTopReview();
        this.getAvgRating();
        this.getFavAnot();
        console.log('ionViewWillEnter MenuPage');
    };
    CustMenuInfoPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave MenuPage');
    };
    CustMenuInfoPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave MenuPage');
    };
    // ngOnInit() {
    //   this.getMenuInfo();
    //   this.getTopReview();
    //   this.getAvgRating();
    //   // this.getPDPfName();
    // }
    CustMenuInfoPage.prototype.favmenu = function () {
        if (this.visible == true) {
            this.getDeleteFavMenu();
            console.log("Deleted FaveMenu");
        }
        else if (this.visible == false) {
            this.getInsertFavMenu();
            console.log("Inserted FaveMenu");
        }
    };
    CustMenuInfoPage.prototype.getDeleteFavMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getDeleteFavMenu';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postDataaaa:', postData);
            console.log(data);
            _this.visible = false;
        }, function (error) {
            console.log(error);
        });
    };
    CustMenuInfoPage.prototype.getInsertFavMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getInsertFavMenu';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('postDatabbbb:', postData);
            console.log(data);
            _this.visible = true;
        }, function (error) {
            console.log(error);
        });
    };
    CustMenuInfoPage.prototype.getTopReview = function () {
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
            console.log("topReview", data);
            if (data == false) {
                _this.hvInfo = true;
            }
            else {
                _this.hvInfo = false;
                _this.TopReview = data;
                _this.rating2 = data[0].rating;
            }
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
    CustMenuInfoPage.prototype.getMenuInfo = function () {
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
    CustMenuInfoPage.prototype.getAvgRating = function () {
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
            if (_this.ratingNum == false) {
                _this.rating = 0;
                _this.ratingNum = 0;
            }
            else {
                _this.rating = data[0].avgFood;
                _this.ratingNum = data[0].avgFood;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CustMenuInfoPage.prototype.getFavAnot = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getFavAnot';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: localStorage.getItem('cust_menuid'),
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log('getFavAnot()postData:', postData);
            console.log(data);
            console.log('FavAnotAAAA', _this.visible);
            _this.visible = data;
            console.log('favANOTbbb', _this.visible);
        }, function (error) {
            console.log(error);
        });
    };
    CustMenuInfoPage.prototype.allReviews = function () {
        //this.router.navigateByUrl('/allReview/' + this.menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_reviews_reviews__["a" /* CustReviewsPage */]);
    };
    CustMenuInfoPage.prototype.navSubmitReview = function () {
        //this.router.navigateByUrl('/submitReview/' + this.custId +  '/' + this.menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */]);
    };
    CustMenuInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuinfo',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-menuinfo\menuinfo.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-title text-center>\n\n      PDP Menu Page\n\n    </ion-title>\n\n    <!-- <ion-buttons slot="end" >\n\n      <button [ngStyle]="" class="heartbutton" (click)="favmenu(friend)">\n\n      <ion-icon size="large" [name]="visible ? \'heart\' : \'heart-empty\'"></ion-icon>\n\n    </button>\n\n    </ion-buttons> -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="favmenu()">\n\n        <ion-icon [name]="visible ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n<ion-content>\n\n  <h3><Menu></Menu> INFO</h3>\n\n  <ion-list>\n\n    <ion-item *ngFor="let pdp of menuInfo">\n\n      <p>{{pdp.fName}}</p>\n\n      <p>{{pdp.menuName}}</p>\n\n    </ion-item>\n\n    <ion-item class="side-side">\n\n      <ionic3-star-rating [(ngModel)]="rating" style="width:auto;" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#36648b"\n\n        defaultColor="#aaaaaa" readonly="true" fontSize="32px" (ratingChanged)="logRatingChange($event)">\n\n      </ionic3-star-rating>\n\n      <input class="rate" [(ngModel)]="ratingNum" type="decimal" disabled="true" size="3"/>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="navSubmitReview()">\n\n    <h3 style="color:lightgreen">Write a Review</h3>\n\n  </button>\n\n  <ion-label><h1 text-center>Reviews</h1></ion-label>\n\n  <!-- <ion-list >\n\n    <ion-item *ngFor="let rev of TopReview" >\n\n        <ion-label style="width:100%;">{{rev.custName}}</ion-label>\n\n        <ion-label style="width:100%;">\n\n          <ionic3-star-rating [(ngModel)]="rating2" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n          defaultColor="#aaaaaa" readonly="true" fontSize="15px" (ratingChanged)="logRatingChange($event)">\n\n        </ionic3-star-rating>\n\n      </ion-label>\n\n      <ion-label style="white-space: normal;align-self: stretch;">{{rev.comments}}</ion-label>\n\n    </ion-item>\n\n  </ion-list> -->\n\n  <ion-grid *ngFor="let rev of TopReview" [hidden]="hvInfo">\n\n    <ion-row justify-content-start>\n\n      <ion-col col-12>\n\n        <div class="text-name">{{rev.custName}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-start>\n\n      <ion-col col-5>\n\n        <div>          \n\n          <ionic3-star-rating [(ngModel)]="rating2" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#36648b"\n\n          defaultColor="#aaaaaa" readonly="true" fontSize="15px" (ratingChanged)="logRatingChange($event)">\n\n        </ionic3-star-rating>\n\n      </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div style="margin-top:5px;">{{rev.datein | date: "dd/MMM/yyyy" }}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row justify-content-start>\n\n      <ion-col col-12>\n\n        <div style="margin-left:4px;">{{rev.comments}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <button class="wholebutton" (click)="allReviews()">\n\n    <h3 style="color:lightgreen">See all Reviews</h3>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-menuinfo\menuinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CustMenuInfoPage);
    return CustMenuInfoPage;
}());

//# sourceMappingURL=menuinfo.js.map

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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dash-board/dash-board.module": [
		299,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(199);
throw new Error("Cannot find module \"../favourites/favourites\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__ = __webpack_require__(202);
throw new Error("Cannot find module \"../profile/profile\"");
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__favourites_favourites__["FavouritesPage"];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__["a" /* BookingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["ProfilePage"];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1 main-tabs"> \n\n  <ion-tab [root]="tab1Root" tabTitle="Discover" tabIcon="compass" id="tabsController-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favourites" tabIcon="heart-outline" id="tabsController-tab2"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Bookings" tabIcon="book" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="contact" id="tabsController-tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_details_menu_details__ = __webpack_require__(200);
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
            selector: "page-discover",template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\discover\discover.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Foodie\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <form id="discover-form1">\n\n    <ion-searchbar\n\n      placeholder="Search"\n\n      name="search"\n\n      id="discover-search1"\n\n      (ionInput)="getItems($event)"\n\n    ></ion-searchbar>\n\n    <ion-item id="discover-select1" class="discover-filter">\n\n      <ion-label>\n\n        Filter by:\n\n      </ion-label>\n\n      <ion-select name="filter">\n\n        <ion-option>Distance (Closest)</ion-option>\n\n        <ion-option>Distance (Furthest)</ion-option>\n\n        <ion-option>Price (Low to High)</ion-option>\n\n        <ion-option>Price (High to Low)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <h4 id="discover-heading1" class="header-m">\n\n    Discover around <span class="color-darkyellow">Kovan</span>\n\n  </h4>\n\n  <ion-card\n\n    id="discover-card21"\n\n    class="discover-card-each"\n\n    *ngFor="let profile of profileList"\n\n  >\n\n    <ion-list>\n\n      <ion-item color="none" id="discover-list-item3">\n\n        <ion-avatar item-left>\n\n          <img src="{{profile.img}}" />\n\n        </ion-avatar>\n\n        <h2\n\n          style="margin-bottom:0;font-weight:500;"\n\n          (click)="goToMenuDetailsPage($event, profile)"\n\n        >\n\n          {{profile.fName}}\n\n        </h2>\n\n      </ion-item>\n\n      <div class="discover-image">\n\n        <img src="{{profile.menu_image}}" alt="" />\n\n      </div>\n\n      <div class="discover-info">\n\n        <h5\n\n          id="discover-heading2"\n\n          class="discover-menuname"\n\n          style="color:#000000;font-weight:600;"\n\n          (click)="goToMenuDetailsPage($event, profile)"\n\n        >\n\n          {{profile.menuName}}\n\n        </h5>\n\n        <div id="discover-markdown3" class="show-list-numbers-and-dots">\n\n          <p style="color:#000000;">\n\n            {{profile.location}}\n\n          </p>\n\n        </div>\n\n        <div id="discover-markdown4" class="show-list-numbers-and-dots">\n\n          <p style="color:#000000;font-size:1.3rem;">\n\n            {{profile.menu_tags}}\n\n          </p>\n\n        </div>\n\n        <div class="discover-ratings">\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.menu_ratings > 0}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.menu_ratings > 1}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.menu_ratings > 2}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.menu_ratings > 3}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.menu_ratings > 4}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span class="rating-amount">{{profile.menu_rating_amt}} reviews</span>\n\n        </div>\n\n      </div>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\discover\discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_make_booking_make_booking__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(19);
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
            selector: "page-menu-details",template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\menu-details\menu-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{this.details.fName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="page6">\n\n  <div class="details-image">\n\n    <img src="{{this.details.menu_image}}" alt="" />\n\n  </div>\n\n  <div padding>\n\n    <h4 id="menuDetails-heading3" style="color:#232323;font-weight:600;margin-bottom:5px;">\n\n      {{this.details.menuName}}\n\n    </h4>\n\n    <div style="margin-bottom:15px;color:#232323;">{{this.details.description}}</div>\n\n    <div class="details-info-list">\n\n      <div\n\n        id="menuDetails-markdown5"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pin"></ion-icon>\n\n        <p ion-text>{{this.details.location}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        <p ion-text>{{this.details.menu_tags}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="list-box"></ion-icon>\n\n        <p ion-text>~${{this.details.menu_price}}/pax</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="call"></ion-icon>\n\n        <a href="tel:{{this.details.phone}}">{{this.details.phone}}</a>\n\n      </div>\n\n    </div>\n\n    <h5 id="menuDetails-heading4" style="color:#000000;font-size:1.6rem;">\n\n      Menu\n\n    </h5>\n\n    <ion-list id="menuDetails-list1" class="menu-list">\n\n      <ion-item color="none" id="menuDetails-list-item8" class="menu-item-each active" *ngFor="let item of menuList">\n\n        <img src="{{item.menuImg}}" alt="" (click)="popupImage($event)" />\n\n        <p ion-text color="black">{{item.menuItem}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <h5 id="menuDetails-heading5" style="color:#000000;font-size:1.6rem;">\n\n      Reviews\n\n    </h5>\n\n    <ion-list id="menuDetails-list2">\n\n      <ion-item color="none" id="menuDetails-list-item14">\n\n        Review 1\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item15">\n\n        Review 2\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item16">\n\n        Review 3\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-item class="popup-image" (click)="popupImage()" [class.active]="this.showImage">\n\n  <img src="{{this.popupSrc}}" alt="">\n\n</ion-item>\n\n<div class="book-cta">\n\n  <button class="book-cta-btn" (click)="goToMakeBookingPage($event, this.details)">\n\n    Book Now\n\n  </button>\n\n</div>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\menu-details\menu-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MenuDetailsPage);
    return MenuDetailsPage;
}());

//# sourceMappingURL=menu-details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
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
    function MakeBookingPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.bookingSuccess = false;
        this.bookingDetails = navParams.get("item");
    }
    MakeBookingPage.prototype.ionViewDidLoad = function () {
        console.log(this.bookingDetails);
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
    // makeBooking() {
    //   var url = "https://elp-tutorial.herokuapp.com/makeBooking";
    //   this.data = this.http.get(url);
    //   this.subscription = this.data.subscribe(data => {
    //     this.profileList = data;
    //   });
    // }
    MakeBookingPage.prototype.makeBooking = function () {
        var _this = this;
        var url = "https://elp-tutorial.herokuapp.com/makeBooking";
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;
            bookDate: localStorage.getItem("bookDate"),
            bookTime: localStorage.getItem("bookTime"),
            bookPax: localStorage.getItem("bookPax"),
            bookNotes: localStorage.getItem("bookNotes")
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
        this.navCtrl.pop();
        this.bookingSuccess = !this.bookingSuccess;
    };
    MakeBookingPage.prototype.cancelBooking = function () {
        this.navCtrl.pop();
    };
    MakeBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-make-booking",template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\make-booking\make-booking.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Make Booking\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <h4\n\n    id="makeBooking-heading6"\n\n    style="color:#000000;font-size:1.7rem;margin-bottom:15px;"\n\n  >\n\n    Confirm Booking\n\n  </h4>\n\n  <ion-list id="makeBooking-list3" class="booking-details-list">\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item20"\n\n      class="booking-details-each"\n\n    >\n\n      <p ion-text class="label-text" color="black">Chef</p>\n\n      <p ion-text class="label-detail" color="black">\n\n        {{this.bookingDetails.fName}}\n\n      </p>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item23"\n\n      class="booking-details-each"\n\n    >\n\n      <p ion-text class="label-text" color="black">Location</p>\n\n      <p ion-text class="label-detail" color="black">\n\n        {{this.bookingDetails.location}}\n\n      </p>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item21"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Date</ion-label>\n\n      <ion-datetime\n\n        displayFormat="DD MMM YYYY"\n\n        class="label-detail label-date"\n\n        color="black"\n\n        [(ngModel)]="date"\n\n        (ionChange)="updateMyDate($event)"\n\n      ></ion-datetime>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item22"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Time</ion-label>\n\n      <ion-select\n\n        value="1300-1500"\n\n        okText="Okay"\n\n        cancelText="Cancel"\n\n        placeholder="Select a time"\n\n        class="select-field"\n\n        (ionChange)="updateMyTime($event)"\n\n      >\n\n        <ion-option value="1300-1500">1300 - 1500</ion-option>\n\n        <ion-option value="1600-1800">1600 - 1800</ion-option>\n\n        <ion-option value="1900-2100">1900 - 2100</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item24"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Pax</ion-label>\n\n      <ion-select\n\n        value="1"\n\n        okText="Okay"\n\n        cancelText="Cancel"\n\n        placeholder="How many pax"\n\n        class="select-field"\n\n        (ionChange)="updateMyPax($event)"\n\n      >\n\n        <ion-option value="1">1</ion-option>\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="4">4</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="6">6</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item25"\n\n      class="booking-details-each ion-textarea-con"\n\n    >\n\n      <ion-label class="label-text" color="black">Notes</ion-label>\n\n      <ion-textarea\n\n        class="ion-textarea-element"\n\n        (input)="updateMyNotes($event.target.value)"\n\n      ></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="make-booking-cta">\n\n    <button\n\n      id="makeBooking-button3"\n\n      class="cancel-btn"\n\n      ion-button\n\n      outline\n\n      color="black"\n\n      (click)="cancelBooking()"\n\n    >\n\n      Cancel\n\n    </button>\n\n    <button\n\n      id="makeBooking-button4"\n\n      ion-button\n\n      color="yellow"\n\n      (click)="makeBooking()"\n\n    >\n\n      Confirm\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\make-booking\make-booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MakeBookingPage);
    return MakeBookingPage;
}());

//# sourceMappingURL=make-booking.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
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


var BookingsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function BookingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\bookings\bookings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4"></ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\bookings\bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 203:
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
            selector: 'page-new-dish',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\new-dish\new-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      New Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="newDish-button24" ion-button color="positive" block>\n\n    Upload Image\n\n  </button>\n\n  <form id="newDish-form9">\n\n    <ion-item id="newDish-input8">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="newDish-button25" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="newDish-button26" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\new-dish\new-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NewDishPage);
    return NewDishPage;
}());

//# sourceMappingURL=new-dish.js.map

/***/ }),

/***/ 204:
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
            selector: 'page-edit-dish',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-dish\edit-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page15">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editDish-button27" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editDish-form10">\n\n    <ion-item id="editDish-input9">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Fish &amp; Chips"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editDish-button28" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="editDish-button29" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-dish\edit-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EditDishPage);
    return EditDishPage;
}());

//# sourceMappingURL=edit-dish.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs2_tabs2__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_booking_details_booking_details__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menu_menu__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_CUST_menuinfo_menuinfo__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_CUST_favourites_favourites__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_page_login_page__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic3_star_rating__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_discover_discover__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_bookings_bookings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_controller_tabs_controller__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_menu_details_menu_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_make_booking_make_booking__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_CUST_reviews_reviews__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_CUST_submitReview_submitReview__ = __webpack_require__(291);
throw new Error("Cannot find module \"../pages/CUST-tabs/tabs2\"");
throw new Error("Cannot find module \"../providers/PDP-bookingData\"");
throw new Error("Cannot find module \"../pages/PDP-new-menu/PDP-new-menu\"");
throw new Error("Cannot find module \"../providers/PDP-menuData\"");
throw new Error("Cannot find module \"../providers/PDP-profileData\"");
throw new Error("Cannot find module \"../providers/PDP-dashboardData\"");
throw new Error("Cannot find module \"@ionic-native/camera/ngx\"");
throw new Error("Cannot find module \"../pages/PDP-tabs/PDP-tabs\"");
throw new Error("Cannot find module \"../pages/PDP-profile/PDP-profile\"");
throw new Error("Cannot find module \"../pages/PDP-menu/PDP-menu\"");
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
                __WEBPACK_IMPORTED_MODULE_19__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menu_menu__["a" /* CustMenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_page_login_page__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_PDP_tabs_PDP_tabs__["PDPTabsPage"],
                __WEBPACK_IMPORTED_MODULE_37__pages_PDP_profile_PDP_profile__["ProfilePage"],
                __WEBPACK_IMPORTED_MODULE_31__pages_PDP_new_menu_PDP_new_menu__["NewMenuPage"],
                __WEBPACK_IMPORTED_MODULE_16__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_CUST_reviews_reviews__["a" /* CustReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_CUST_tabs_tabs2__["CustTabsPage"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dash-board/dash-board.module#DashBoardPageModule', name: 'DashBoardPage', segment: 'dash-board', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_make_booking_make_booking__["a" /* MakeBookingPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menu_menu__["a" /* CustMenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_menu_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_dish_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_dish_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_page_login_page__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_make_booking_make_booking__["a" /* MakeBookingPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_PDP_tabs_PDP_tabs__["PDPTabsPage"],
                __WEBPACK_IMPORTED_MODULE_37__pages_PDP_profile_PDP_profile__["ProfilePage"],
                __WEBPACK_IMPORTED_MODULE_38__pages_PDP_menu_PDP_menu__["MenuPage"],
                __WEBPACK_IMPORTED_MODULE_31__pages_PDP_new_menu_PDP_new_menu__["NewMenuPage"],
                __WEBPACK_IMPORTED_MODULE_27__pages_CUST_reviews_reviews__["a" /* CustReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_CUST_tabs_tabs2__["CustTabsPage"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera_ngx__["Camera"],
                __WEBPACK_IMPORTED_MODULE_34__providers_PDP_dashboardData__["DashboardData"],
                __WEBPACK_IMPORTED_MODULE_30__providers_PDP_bookingData__["BookingsData"],
                __WEBPACK_IMPORTED_MODULE_33__providers_PDP_profileData__["ProfileData"],
                __WEBPACK_IMPORTED_MODULE_32__providers_PDP_menuData__["MenusData"],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(198);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
throw new Error("Cannot find module \"../cust_menu/menu\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_dish_new_dish__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_dish_edit_dish__ = __webpack_require__(204);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cust_menu_menu__["MenuPage"]);
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
            selector: 'page-menus',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\menus\menus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-left solid>\n\n        <ion-icon name="add"></ion-icon>\n\n        New Menu\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Menus\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <ion-card id="menus-card28">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menus-list-item61">\n\n        Western Wednesday\n\n      </ion-item>\n\n      <button id="menus-button4" ion-button clear color="positive" block on-click="goToMenu()">\n\n        Manage Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card id="menus-card212">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menus-list-item71">\n\n        Thai Thursday\n\n      </ion-item>\n\n      <button id="menus-button14" ion-button clear color="positive" block on-click="goToMenu()">\n\n        Manage Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\menus\menus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(286);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
throw new Error("Cannot find module \"../favourites/favourites\"");
throw new Error("Cannot find module \"../cust_menu/menu\"");
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__["FavouritesPage"];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cust_menu_menu__["MenuPage"];
    }
    Tabs2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs2',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs2\tabs2.html"*/'<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="home" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="heart" id="tabsController-tab2"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\tabs2\tabs2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Tabs2Page);
    return Tabs2Page;
}());

//# sourceMappingURL=tabs2.js.map

/***/ }),

/***/ 288:
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
            selector: 'page-booking-details',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\booking-details\booking-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Booking Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <h1 id="bookingDetails-heading1" style="color:#000000;">\n\n    11th January\n\n  </h1>\n\n  <h2 id="bookingDetails-heading2" style="color:#000000;">\n\n    Time: 6pm\n\n  </h2>\n\n  <ion-card id="bookingDetails-card21">\n\n    <ion-list>\n\n      <ion-item color="none" id="bookingDetails-list-item16">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Amy Tan\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="bookingDetails-list-item18">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        2\n\n      </ion-item>\n\n      <ion-item color="assertive" id="bookingDetails-list-item19">\n\n        <ion-icon name="information-circle" item-left></ion-icon>\n\n        Allergic to prawns!\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button id="bookingDetails-button1" ion-button color="assertive" block>\n\n    Cancel Booking\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\booking-details\booking-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__ = __webpack_require__(100);
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
var CustMenuPage = /** @class */ (function () {
    function CustMenuPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    CustMenuPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MenuPage');
    };
    CustMenuPage.prototype.getPDP = function () {
        var _this = this;
        console.log("In getPDP()");
        var url = 'https://foodie1234.herokuapp.com/getMenu';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.menuPage = data;
            console.log(data);
        });
    };
    CustMenuPage.prototype.goToMenuPage = function (menuid) {
        localStorage.setItem("cust_menuid", menuid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */]);
    };
    CustMenuPage.prototype.ngOnInit = function () {
        this.getPDP();
    };
    CustMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let menu of menuPage">\n\n        <ion-label class="fulllabel">\n\n          <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n            <h3 text-left>{{menu.fName}} </h3>\n\n            <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n            <p text-left>{{menu.menu_category}} </p>\n\n          </button>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CustMenuPage);
    return CustMenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustReviewsPage = /** @class */ (function () {
    function CustReviewsPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    CustReviewsPage.prototype.getPDP = function () {
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
    CustReviewsPage.prototype.ngOnInit = function () {
        this.getPDP();
    };
    CustReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Reviews\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n    <ion-list>\n\n      <ion-item *ngFor="let rev of allReview">\n\n        <ion-label class="fulllabel">\n\n            <h3 text-left>{{rev.comments}} </h3>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CustReviewsPage);
    return CustReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustSubmitReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustSubmitReviewPage = /** @class */ (function () {
    function CustSubmitReviewPage(navCtrl, http, loc) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loc = loc;
        this.isValid = true;
        this.datein = new Date().toISOString().substr(0, 10);
    }
    CustSubmitReviewPage.prototype.hitme = function (point) {
        this.point = point;
    };
    CustSubmitReviewPage.prototype.ngOnInit = function () {
        this.getMenuInfo();
    };
    CustSubmitReviewPage.prototype.logRatingChange = function (rating) {
        this.isValid = false;
    };
    CustSubmitReviewPage.prototype.submitReview = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/submitReview';
        if (this.point == "hygenie") {
            var postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: localStorage.getItem("cust_menuid"),
                custId: localStorage.getItem("loginid"),
                rating: this.rating,
                cleanlinessRating: 1,
                foodQualityRating: 0,
                priceRating: 0,
                comments: this.myText,
                datein: this.datein,
            });
        }
        else if (this.point == "food") {
            var postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: localStorage.getItem("cust_menuid"),
                custId: localStorage.getItem("loginid"),
                rating: this.rating,
                cleanlinessRating: 0,
                foodQualityRating: 1,
                priceRating: 0,
                comments: this.myText,
                datein: this.datein,
            });
        }
        else {
            var postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: localStorage.getItem("cust_menuid"),
                custId: localStorage.getItem("loginid"),
                rating: this.rating,
                cleanlinessRating: 0,
                foodQualityRating: 0,
                priceRating: 1,
                comments: this.myText,
                datein: this.datein,
            });
        }
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
    CustSubmitReviewPage.prototype.getMenuInfo = function () {
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
    CustSubmitReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submitReview',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-submitReview\submitReview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title *ngFor="let menu of menuInfo">\n\n      <label>Rate {{menu.menuName}} </label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5" class="body">\n\n    <ion-label text-center class="text">Rate my Service</ion-label>\n\n    <div>\n\n      <ionic3-star-rating [(ngModel)]="rating" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#36648b"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px" (ratingChanged)="logRatingChange($event)"> \n\n      </ionic3-star-rating>\n\n    </div>\n\n    <!-- <ion-label text-center class="text">Food Quality</ion-label> -->\n\n      <!-- <ionic3-star-rating [(ngModel)]="rating2" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating> -->\n\n      <div text-center>\n\n        <ion-label text-center class="text">My Strongest point</ion-label>\n\n        <div style="width:30%;display:inline-block;">\n\n        <label>\n\n          <input type="radio" name="point" (click)="hitme(\'hygenie\')">\n\n          <img src="../../assets/icon/broom.png">       \n\n        </label>\n\n        <p class="p-text" text-center>Hygenie</p>\n\n      </div>\n\n      <div style="width:30%;display:inline-block;">\n\n        <label>\n\n        <input type="radio" name="point" (click)="hitme(\'food\')">\n\n        <img src="../../assets/icon/food.png">\n\n      </label>\n\n      <p class="p-text" text-center>Food</p>\n\n    </div>\n\n    <div style="width:30%;display:inline-block;">\n\n      <label>\n\n        <input type="radio" name="point" (click)="hitme(\'money\')">\n\n        <img src="../../assets/icon/money.png">\n\n      </label>\n\n      <p class="p-text" text-center>Price</p>\n\n    </div>\n\n    </div>\n\n      <!-- <div text-center class="upup">\n\n        <ion-label text-center class="text">My Strongest point</ion-label>\n\n        <label>\n\n          <input type="radio" name="point" (click)="hitme(\'hygenie\')">\n\n          <img class="btn-img" src="../../assets/icon/broom.png">\n\n          <p style="display:none;">aaa</p>         \n\n        </label>\n\n        <label>\n\n        <input type="radio" name="point" (click)="hitme(\'food\')">\n\n        <img class="btn-img" src="../../assets/icon/food.png">\n\n      </label>\n\n      <label>\n\n        <input type="radio" name="point" (click)="hitme(\'money\')">\n\n        <img class="btn-img" src="../../assets/icon/money.png">\n\n      </label>\n\n    </div> -->\n\n    <!-- <ion-label text-center class="text">Price</ion-label>\n\n    <ion-item class="no-border ">\n\n      <ionic3-star-rating [(ngModel)]="rating3" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating>\n\n    </ion-item> -->\n\n\n\n    <ion-item class="border-text">\n\n      <ion-textarea [(ngModel)]="myText" [maxlength]="100" autoGrow="true" placeholder="Describe your experience (optional)"></ion-textarea>\n\n    </ion-item>\n\n      <ion-label class="right">Characters Remaining: {{myText?.length || 0}}/100</ion-label>\n\n    <button class="center" ion-button [disabled]="isValid" color="positive" (click)="submitReview()">Submit Review</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-submitReview\submitReview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]])
    ], CustSubmitReviewPage);
    return CustSubmitReviewPage;
}());

//# sourceMappingURL=submitReview.js.map

/***/ }),

/***/ 292:
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
            selector: 'page-create-menu',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\create-menu\create-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Create Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="createMenu-button17" ion-button color="positive" block>\n\n    Upload Image\n\n  </button>\n\n  <form id="createMenu-form6">\n\n    <ion-item id="createMenu-input1">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="createMenu-select3">\n\n      <ion-label>\n\n        Tags\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Western\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="createMenu-button15" ion-button color="positive" block>\n\n    Save Menu\n\n  </button>\n\n  <button id="createMenu-button16" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\create-menu\create-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CreateMenuPage);
    return CreateMenuPage;
}());

//# sourceMappingURL=create-menu.js.map

/***/ }),

/***/ 293:
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
            selector: 'page-edit-menu',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-menu\edit-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editMenu-button21" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editMenu-form12">\n\n    <ion-item id="editMenu-input6">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Western Wednesday"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editMenu-select6">\n\n      <ion-label>\n\n        Tags\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Western\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editMenu-button22" ion-button color="positive" block>\n\n    Save Menu\n\n  </button>\n\n  <button id="editMenu-button23" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-menu\edit-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EditMenuPage);
    return EditMenuPage;
}());

//# sourceMappingURL=edit-menu.js.map

/***/ }),

/***/ 294:
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
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <button id="editProfile-button12" ion-button color="positive" block>\n\n    Change Image\n\n  </button>\n\n  <form id="editProfile-form8">\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Tony&#039;s Cafe"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-textarea1">\n\n      <ion-label>\n\n        Description\n\n      </ion-label>\n\n      <ion-textarea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></ion-textarea>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editProfile-button19" ion-button color="positive" block>\n\n    Save\n\n  </button>\n\n  <button id="editProfile-button20" ion-button color="positive" block>\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustFavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__ = __webpack_require__(100);
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
var CustFavouritesPage = /** @class */ (function () {
    function CustFavouritesPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    CustFavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
    };
    CustFavouritesPage.prototype.ionViewWillEnter = function () {
        this.getFavs();
        console.log('ionViewWillEnter FavouritePage', this.ishiddenimg);
    };
    CustFavouritesPage.prototype.getFavs = function () {
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
            console.log("data", data);
            if (data == false) {
                _this.ishidden = true;
                _this.ishiddenimg = false;
                console.log('ionViewWillEnter FavouritePage1', _this.ishidden);
                console.log('ionViewWillEnter FavouritePage2', _this.ishiddenimg);
            }
            else {
                _this.ishidden = false;
                _this.ishiddenimg = true;
                console.log('ionViewWillEnter FavouritePage3', _this.ishidden);
                console.log('ionViewWillEnter FavouritePage4', _this.ishiddenimg);
                _this.favs = data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CustFavouritesPage.prototype.goToMenuPage = function (menuId) {
        //this.router.navigateByUrl('/pdpMenuPage/' + this.custId + '/' + menuId);
        localStorage.setItem('cust_menuid', menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */]);
    };
    CustFavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-favourites\favourites.html"*/'<!--\n\n  Generated template for the FavouritesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Favourites</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="width:100%;" [hidden]="ishidden">\n\n  <ion-list>\n\n    <ion-item *ngFor="let menu of favs" >\n\n      <ion-label class="fulllabel" >\n\n        <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n          <h3 text-left>{{menu.fName}} </h3>\n\n          <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n          <p text-left>{{menu.menu_category}} </p>\n\n        </button>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-content style="width:100%;" [hidden]="ishiddenimg">\n\n  <ion-label class="fulllabel" >\n\n    <img src="../../assets/imgs/fav_ss.jpg"/> \n\n    </ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\CUST-favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CustFavouritesPage);
    return CustFavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(19);
throw new Error("Cannot find module \"../PDP-tabs/PDP-tabs\"");
throw new Error("Cannot find module \"../../providers/PDP-profileData\"");
throw new Error("Cannot find module \"../../providers/PDP-bookingData\"");
throw new Error("Cannot find module \"../../providers/PDP-dashboardData\"");
throw new Error("Cannot find module \"../CUST-tabs/tabs2\"");
throw new Error("Cannot find module \"../../providers/PDP-menuData\"");
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
    function LoginPage(navCtrl, http, loadingCtrl, dashboardData, bookingData, menusData, profileData) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dashboardData = dashboardData;
        this.bookingData = bookingData;
        this.menusData = menusData;
        this.profileData = profileData;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Authenticating'
        });
    }
    LoginPage.prototype.login = function (custId) {
        var _this = this;
        this.loading.present();
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
                var url = 'https://foodie1234.herokuapp.com/updateDashboard';
                if (_this.http.get(url).subscribe())
                    console.log("In /updateDashboard");
                localStorage.setItem("loginid", "3");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__PDP_tabs_PDP_tabs__["PDPTabsPage"]);
                _this.loading.dismiss();
                _this.dashboardData.getDashboardData();
                _this.bookingData.getBookingsData();
                _this.profileData.getProfileData();
                _this.menusData.getMenusData(data[0].custID);
                _this.menusData.getMenuItemsData();
            }
            //customer
            if (data[0].custID == 2) {
                localStorage.setItem("loginid", "2");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__CUST_tabs_tabs2__["CustTabsPage"]);
                _this.loading.dismiss();
            }
            else if (data == false) {
                console.log("Not authorized username");
                _this.loading.dismiss();
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-page',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\login-page\login-page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login Page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <form id="loginPage-form1">\n\n    <img src="../../assets/imgs/logo-foodie.jpg"/>\n\n    <ion-item id="loginPage-input1" class="markdown">\n\n      <ion-label>\n\n        Username : \n\n      </ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" [ngModelOptions]="{standalone:true}" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="loginPage-button1" ion-button color="positive" block (click)="login(this.username)">\n\n    Login\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\login-page\login-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__providers_PDP_dashboardData__["DashboardData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_PDP_dashboardData__["DashboardData"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_PDP_bookingData__["BookingsData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_PDP_bookingData__["BookingsData"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__providers_PDP_menuData__["MenusData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_PDP_menuData__["MenusData"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_PDP_profileData__["ProfileData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_PDP_profileData__["ProfileData"]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_details_booking_details__ = __webpack_require__(288);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Dashboard\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <h2 id="dashboard-heading6" style="color:#000000;">\n\n    Upcoming Bookings\n\n  </h2>\n\n  <h3 id="dashboard-heading7" style="color:#000000;">\n\n    Today - 11th Jan\n\n  </h3>\n\n  <ion-card id="dashboard-card24">\n\n    <ion-list>\n\n      <ion-item color="none" id="dashboard-list-item49">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Amy\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item51">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        2\n\n      </ion-item>\n\n      <ion-item color="assertive" id="dashboard-list-item50">\n\n        <ion-icon color="danger" name="information-circle" item-left></ion-icon>\n\n        Allergic to prawns!\n\n      </ion-item>\n\n      <button id="dashboard-button2" ion-button clear color="positive" block style="border-radius:0px 0px 0px 0px;" on-click="goToBookingDetails()">\n\n        View Booking Details\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <h3 id="dashboard-heading8" style="color:#000000;">\n\n    Tomorrow - 12th Jan\n\n  </h3>\n\n  <ion-card id="dashboard-card25">\n\n    <ion-list>\n\n      <ion-item color="none" id="dashboard-list-item52">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Bob\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item53">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        4\n\n      </ion-item>\n\n      <ion-item color="balanced" id="dashboard-list-item54">\n\n        <ion-icon color="secondary" name="information-circle" item-left></ion-icon>\n\n        No food allergies!\n\n      </ion-item>\n\n      <button id="dashboard-button3" ion-button clear color="positive" block on-click="goToBookingDetails()">\n\n        View Booking Details\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\19B772K\Documents\Foodie\ELP\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map