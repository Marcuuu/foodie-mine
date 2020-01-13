webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]])
    ], SubmitReview);
    return SubmitReview;
}());

//# sourceMappingURL=submitReview.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map