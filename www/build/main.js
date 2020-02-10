webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PDP_tabs_PDP_tabs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_PDP_profileData__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_PDP_bookingData__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_PDP_dashboardData__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_controller_tabs_controller__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_PDP_menuData__ = __webpack_require__(31);
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
    LoginPage.prototype.custLogin = function (custId) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/custLogin1';
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
            console.log('data', data);
            //pdp
            if (data == false) {
                _this.PDPLogin(custId);
                // localStorage.setItem("loginid","3");
                // var url = 'https://foodie1234.herokuapp.com/updateDashboard';
                // this.http.get(url).subscribe();    
                // console.log("In /updateDashboard");
                // this.dashboardData.getDashboardData();
                // this.bookingData.getBookingsData();
                // this.profileData.getProfileData();
                // this.menusData.getMenusData(data[0].custID);
                // this.menusData.getMenuItemsData();
                // setTimeout(() => {
                //   this.navCtrl.setRoot(PDPTabsPage);
                //   this.loading.dismiss();
                // }, 2000);
            }
            else {
                localStorage.setItem("loginid", data[0].custID);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
                _this.loading.dismiss();
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.PDPLogin = function (PDPId) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/PDPLogin';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            custId: PDPId,
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
            console.log('data', data);
            localStorage.setItem("loginid", data[0].id);
            var url = 'https://foodie1234.herokuapp.com/updateDashboard';
            _this.http.get(url).subscribe();
            console.log("In /updateDashboard");
            _this.dashboardData.getDashboardData();
            _this.bookingData.getBookingsData();
            _this.profileData.getProfileData();
            _this.menusData.getMenusData(data[0].id);
            _this.menusData.getMenuItemsData();
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__PDP_tabs_PDP_tabs__["a" /* PDPTabsPage */]);
                _this.loading.dismiss();
            }, 2000);
        }
        //customer
        // if (data[0].custID == 2) {
        //   localStorage.setItem("loginid","2")
        //   this.navCtrl.push(TabsControllerPage);
        //   this.loading.dismiss();
        // } 
        // else if (data == false){
        //   console.log("Not authorized username");
        //   this.loading.dismiss();
        // }
        , function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.login = function (custId) {
        this.loading.present();
        this.custLogin(custId);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-page',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\login-page\login-page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login Page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <form id="loginPage-form1">\n\n    <img src="../../assets/imgs/logo-foodie.jpg"/>\n\n    <ion-item id="loginPage-input1" class="markdown login-field-con">\n\n      <ion-label>\n\n        Username : \n\n      </ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" [ngModelOptions]="{standalone:true}" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="loginPage-button1" class="login-btn" ion-button color="positive" block (click)="login(this.username)">\n\n    Login\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\login-page\login-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_PDP_dashboardData__["a" /* DashboardData */], __WEBPACK_IMPORTED_MODULE_5__providers_PDP_bookingData__["a" /* BookingsData */], __WEBPACK_IMPORTED_MODULE_8__providers_PDP_menuData__["a" /* MenusData */], __WEBPACK_IMPORTED_MODULE_4__providers_PDP_profileData__["a" /* ProfileData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login-page.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_booking_details_PDP_booking_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
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
    function DashboardPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    DashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Dashboard').then(function (val) {
            console.log(val);
            _this.bookings = val;
            console.log('Get Dashboard completed');
        });
    };
    DashboardPage.prototype.goToBookingDetails = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PDP_booking_details_PDP_booking_details__["a" /* BookingDetailsPage */], {
            data: booking,
            preNav: "dashboard"
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-dashboard',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-dashboard\PDP-dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Upcoming Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <!-- <h2 id="dashboard-heading6" style="color:#000000;">\n\n    Upcoming Bookings\n\n  </h2> -->\n\n  <ion-card id="dashboard-card24" *ngFor="let booking of bookings" class="each-booking-con">\n\n    <ion-list>\n\n      <ion-item color="none" id="dashboard-list-item49">\n\n        <ion-avatar item-left>\n\n          <img src="{{ booking?.custImage }}" />\n\n        </ion-avatar>\n\n        <h2 style="margin-bottom:0;font-weight:500;">\n\n        {{ booking?.custName }}\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right style="transform: scale(0.8);"></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item52">\n\n        <ion-icon name="calendar" item-left style="color:#929292;font-size:2rem;"></ion-icon>\n\n        {{ booking?.bookDate }} - {{ booking?.bookTime }}\n\n      </ion-item>\n\n      <ion-item color="none" id="dashboard-list-item51">\n\n        <ion-icon name="people" item-left style="color:#929292;font-size:2rem;"></ion-icon>\n\n        {{ booking?.bookPax }}\n\n      </ion-item>\n\n      <ion-item color="assertive" id="dashboard-list-item50">\n\n        <ion-icon name="create" item-left style="color:#929292;font-size:2rem;"></ion-icon>\n\n        {{ booking?.bookNotes }}\n\n      </ion-item>\n\n      <button id="dashboard-button2" class="view-details-btn" ion-button clear color="positive" block style="border-radius:0px 0px 0px 0px;" (click)="goToBookingDetails(booking)">\n\n        View Booking Details\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-dashboard\PDP-dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=PDP-dashboard.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_PDP_dashboardData__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_PDP_bookingData__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PDP_bookings_PDP_bookings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PDP_dashboard_PDP_dashboard__ = __webpack_require__(108);
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
    function BookingDetailsPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, dashboardData, bookingData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dashboardData = dashboardData;
        this.bookingData = bookingData;
        this.booking = navParams.get('data');
        console.log(this.booking);
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Cancelling'
        });
    }
    BookingDetailsPage.prototype.bookingStatus = function () {
        return this.booking.bookStatus.toLowerCase() == "ongoing".toLowerCase();
    };
    BookingDetailsPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancellation',
            message: 'Do you want to cancel this booking?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.cancelBooking();
                        _this.loading.present();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    BookingDetailsPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Booking has been cancelled',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        if (_this.navParams.get('preNav') == "dashboard")
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__PDP_dashboard_PDP_dashboard__["a" /* DashboardPage */]);
                        else
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__PDP_bookings_PDP_bookings__["a" /* BookingsPage */]);
                    }
                }]
        });
        alert.present();
    };
    BookingDetailsPage.prototype.cancelBooking = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/cancelBooking';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            bookingID: this.booking.bookID
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /cancelBooking");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.dashboardData.getDashboardData();
            _this.bookingData.getBookingsData();
            _this.loading.dismiss();
            _this.presentAlert();
            _this.booking.bookStatus = "Cancelled";
        });
    };
    BookingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-booking-details',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-booking-details\PDP-booking-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Booking Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <h1 id="bookingDetails-heading1" style="color:#000000;">\n\n    {{ booking.bookDate }}\n\n  </h1>\n\n  <h2 id="bookingDetails-heading2" style="color:#000000;">\n\n    {{ booking.bookTime }}\n\n  </h2>\n\n  <ion-card id="bookingDetails-card21">\n\n    <ion-list>\n\n      <ion-item color="none" id="bookingDetails-list-item16">\n\n        <ion-avatar item-left>\n\n          <ion-img [src]="booking?.custImage"></ion-img>\n\n        </ion-avatar>\n\n        <h2>\n\n          {{ booking.custName }}\n\n        </h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" id="bookingDetails-list-item18">\n\n        <ion-icon name="people" item-left></ion-icon>\n\n        {{ booking.bookPax }}\n\n      </ion-item>\n\n      <ion-item color="assertive" id="bookingDetails-list-item19">\n\n        <ion-icon name="create" item-left></ion-icon>\n\n        {{ booking.bookNotes }}\n\n      </ion-item>\n\n      <ion-item color="assertive" id="bookingDetails-list-item19">\n\n        <ion-icon name="information-circle" item-left></ion-icon>\n\n        {{ booking.bookStatus }}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button id="bookingDetails-button1" ion-button color="danger" block *ngIf="bookingStatus()" (click)="presentConfirm()">\n\n    Cancel Booking\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-booking-details\PDP-booking-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_PDP_dashboardData__["a" /* DashboardData */], __WEBPACK_IMPORTED_MODULE_4__providers_PDP_bookingData__["a" /* BookingsData */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=PDP-booking-details.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PDP_Bookings__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardData = /** @class */ (function () {
    function DashboardData(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    DashboardData.prototype.getDashboardData = function () {
        var _this = this;
        var booking = [];
        console.log("In /getBookingsDashboard");
        var url = 'https://foodie1234.herokuapp.com/getBookingsDashboard';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.result = data;
            for (var i = 0; i < _this.result.length; i++) {
                booking.push(new __WEBPACK_IMPORTED_MODULE_2__models_PDP_Bookings__["a" /* Booking */](_this.result[i].bookID, _this.result[i].custImage, _this.result[i].custName, _this.result[i].bookDate, _this.result[i].bookTime, _this.result[i].bookPax, _this.result[i].bookNotes, _this.result[i].bookStatus));
            }
            _this.storage.set('Dashboard', booking);
        });
    };
    DashboardData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DashboardData);
    return DashboardData;
}());

//# sourceMappingURL=PDP-dashboardData.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PDP_Bookings__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingsData = /** @class */ (function () {
    function BookingsData(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    BookingsData.prototype.getBookingsData = function () {
        var _this = this;
        var booking = [];
        console.log("In /getBookings");
        var url = 'https://foodie1234.herokuapp.com/getBookings';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.result = data;
            for (var i = 0; i < _this.result.length; i++) {
                booking.push(new __WEBPACK_IMPORTED_MODULE_2__models_PDP_Bookings__["a" /* Booking */](_this.result[i].bookID, _this.result[i].custImage, _this.result[i].custName, _this.result[i].bookDate, _this.result[i].bookTime, _this.result[i].bookPax, _this.result[i].bookNotes, _this.result[i].bookStatus));
            }
            _this.storage.set('Bookings', booking);
        });
    };
    BookingsData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BookingsData);
    return BookingsData;
}());

//# sourceMappingURL=PDP-bookingData.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_booking_details_PDP_booking_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
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
    function BookingsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.default = { option: null };
    }
    BookingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Bookings').then(function (val) {
            _this.bookings = val;
            console.log('Get Bookings completed');
            _this.filterBookings = _this.bookings;
            console.log(_this.filterBookings);
        });
        this.default.option = "none";
    };
    BookingsPage.prototype.bookingsFilter = function ($ev) {
        console.log($ev);
        if ($ev == "ongoing")
            this.filterBookings = this.bookings.filter(function (val) { return val.bookStatus.toLowerCase() == "ongoing"; });
        else if ($ev == "completed")
            this.filterBookings = this.bookings.filter(function (val) { return val.bookStatus.toLowerCase() == "completed"; });
        else if ($ev == "cancelled")
            this.filterBookings = this.bookings.filter(function (val) { return val.bookStatus.toLowerCase() == "cancelled"; });
        else
            this.filterBookings = this.bookings;
        console.log(this.filterBookings);
    };
    BookingsPage.prototype.goToBookingDetails = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PDP_booking_details_PDP_booking_details__["a" /* BookingDetailsPage */], {
            data: booking
        });
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-bookings',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-bookings\PDP-bookings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="bookings-form1">\n\n    <ion-item id="bookings-select2">\n\n      <ion-label>\n\n        Filter\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="default.option" [ngModelOptions]="{standalone: true}" (ionChange)="bookingsFilter($event)">\n\n        <ion-option value="none">\n\n          None\n\n        </ion-option>\n\n        <ion-option value="ongoing">\n\n          Ongoing\n\n        </ion-option>\n\n        <ion-option value="completed">\n\n          Completed\n\n        </ion-option>\n\n        <ion-option value="cancelled">\n\n          Cancelled\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <ion-list id="bookings-list2">\n\n    <ion-item color="none" id="bookings-list-item11" *ngFor="let booking of filterBookings" (click)="goToBookingDetails(booking)">\n\n    {{ booking?.bookDate }} - {{ booking?.bookTime }}\n\n    <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-bookings\PDP-bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=PDP-bookings.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_edit_profile_PDP_edit_profile__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page_login_page__ = __webpack_require__(107);
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
    function ProfilePage(app, navCtrl, storage, loadingCtrl, alertCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Logging out'
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var id = localStorage.getItem('loginid');
        this.storage.get('Profile').then(function (val) {
            console.log(val);
            _this.profiles = val;
            for (var i = 0; i < _this.profiles.length; i++) {
                if (_this.profiles[i].id == id) {
                    _this.profile = _this.profiles[i];
                }
            }
            console.log('Get Profile completed');
            console.log(_this.profile);
        });
    };
    ProfilePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.loading.present();
                        _this.storage.remove('loginid');
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_page_login_page__["a" /* LoginPage */]);
                        _this.loading.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.goToEditProfile = function (profile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PDP_edit_profile_PDP_edit_profile__["a" /* EditProfilePage */], {
            data: profile
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-profile',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-profile\PDP-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-left solid (click)="presentConfirm()">\n\n        <ion-icon name="exit"></ion-icon>\n\n        Log out\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <img src="{{ profile?.image }}" />\n\n  <h1 id="profile-heading10" style="color:#000000;">\n\n  {{ profile?.fName }}\n\n  </h1>\n\n  <div id="profile-markdown19">\n\n    <h5>Description</h5>\n\n    {{ profile?.desc }}\n\n    <h5>Location</h5>\n\n    {{ profile?.add }}\n\n    <h5>Mobile</h5>\n\n    {{ profile?.phone }}\n\n    <h5>Email</h5>\n\n    {{ profile?.email }}\n\n  </div>\n\n  <button id="profile-button10" ion-button color="positive" block on-click="goToEditProfile(profile)">\n\n    Edit Profile\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-profile\PDP-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=PDP-profile.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_PDP_Profile__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileData = /** @class */ (function () {
    function ProfileData(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ProfileData.prototype.getProfileData = function () {
        var _this = this;
        var profile = [];
        console.log("In /getProfile");
        var url = 'https://foodie1234.herokuapp.com/getProfile';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.result = data;
            for (var i = 0; i < _this.result.length; i++) {
                profile.push(new __WEBPACK_IMPORTED_MODULE_3__models_PDP_Profile__["a" /* Profile */](_this.result[i].id, _this.result[i].fName, _this.result[i].description, _this.result[i].location, _this.result[i].phone, _this.result[i].email, _this.result[i].img));
            }
            _this.storage.set('Profile', profile);
        });
    };
    ProfileData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProfileData);
    return ProfileData;
}());

//# sourceMappingURL=PDP-profileData.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_make_booking_make_booking__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_CUST_submitReview_submitReview__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_CUST_reviews_reviews__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(8);
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
        this.getFavAnot();
        this.getTopReview();
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
                if (word.menuId == _this.details.menuId) {
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
    MenuDetailsPage.prototype.favmenu = function () {
        if (this.visible == true) {
            this.getDeleteFavMenu();
            console.log("Deleted FaveMenu");
        }
        else if (this.visible == false) {
            this.getInsertFavMenu();
            console.log("Inserted FaveMenu");
        }
    };
    MenuDetailsPage.prototype.getDeleteFavMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getDeleteFavMenu';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: this.details.menuId,
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            _this.visible = false;
        }, function (error) {
            console.log(error);
        });
    };
    MenuDetailsPage.prototype.getInsertFavMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getInsertFavMenu';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: this.details.menuId,
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            _this.visible = true;
        }, function (error) {
            console.log(error);
        });
    };
    MenuDetailsPage.prototype.getFavAnot = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getFavAnot';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: this.details.menuId,
            loginId: localStorage.getItem('loginid'),
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            _this.visible = data;
        }, function (error) {
            console.log(error);
        });
    };
    MenuDetailsPage.prototype.getTopReview = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getTopReview';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: this.details.menuId,
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            if (data == false) {
                _this.hvInfo = true;
            }
            else {
                _this.hvInfo = false;
                _this.TopReview = data;
                for (var i = 0; i < _this.TopReview.length; i++) {
                    if (_this.TopReview[i].cleanlinessRating == 1) {
                        console.log("1", _this.TopReview[i].cleanlinessRating);
                        _this.TopReview[i].cleanlinessRating = "../../assets/icon/broom.png";
                    }
                    else if (_this.TopReview[i].foodQualityRating == 1) {
                        console.log("2", _this.TopReview[i].foodQualityRating);
                        _this.TopReview[i].cleanlinessRating = "../../assets/icon/food.png";
                    }
                    else if (_this.TopReview[i].priceRating == 1) {
                        console.log("3", _this.TopReview[i].priceRating);
                        _this.TopReview[i].cleanlinessRating = "../../assets/icon/money.png";
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    MenuDetailsPage.prototype.navSubmitReview = function () {
        console.log(this.details);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */], {
            item: this.details
        });
    };
    MenuDetailsPage.prototype.allReviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_CUST_reviews_reviews__["a" /* CustReviewsPage */], {
            item: this.details
        });
    };
    MenuDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-menu-details",template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\menu-details\menu-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{this.details.fName}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="favmenu()">\n\n          <ion-icon [name]="visible ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="page6">\n\n  <div class="details-image">\n\n    <img src="{{this.details.menu_image}}" alt="" />\n\n  </div>\n\n  <div padding>\n\n    <h4 id="menuDetails-heading3" style="color:#232323;font-weight:600;margin-bottom:5px;">\n\n      {{this.details.menuName}}\n\n    </h4>\n\n    <div style="margin-bottom:15px;color:#232323;">{{this.details.description}}</div>\n\n    <div class="details-info-list">\n\n      <div\n\n        id="menuDetails-markdown5"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pin"></ion-icon>\n\n        <p ion-text>{{this.details.location}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="pricetag"></ion-icon>\n\n        <p ion-text>{{this.details.menu_category}}</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="list-box"></ion-icon>\n\n        <p ion-text>~${{this.details.menu_price}}/pax</p>\n\n      </div>\n\n      <div\n\n        id="menuDetails-markdown6"\n\n        class="show-list-numbers-and-dots details-info-each"\n\n      >\n\n        <ion-icon name="call"></ion-icon>\n\n        <a href="tel:{{this.details.phone}}">{{this.details.phone}}</a>\n\n      </div>\n\n    </div>\n\n    <h5 id="menuDetails-heading4" style="color:#000000;font-size:1.6rem;">\n\n      Menu\n\n    </h5>\n\n    <ion-list id="menuDetails-list1" class="menu-list">\n\n      <ion-item color="none" id="menuDetails-list-item8" class="menu-item-each active" *ngFor="let item of menuList">\n\n        <img src="{{item.menuImg}}" alt="" (click)="popupImage($event)" />\n\n        <p ion-text color="black">{{item.menuItem}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button class="wholebutton" (click)="navSubmitReview()">\n\n        <h3 style="color:lightgreen">Write a Review</h3>\n\n      </button>\n\n      <h5 id="menuDetails-heading5" style="color:#000000;font-size:1.6rem;">\n\n          Reviews\n\n        </h5>\n\n      <ion-card *ngFor="let rev of TopReview" [hidden]="hvInfo">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12 >\n\n              <ion-avatar style="width:90px;height:90px;margin:0 auto;">\n\n                <img src="{{rev.cleanlinessRating}}">\n\n              </ion-avatar>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row >\n\n            <ion-col col-12 text-center style="margin-top:-15px;">         \n\n                <ionic3-star-rating rating="{{rev.rating}}" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#FFC300"\n\n                defaultColor="#aaaaaa" readonly="true"  fontSize="28px" >\n\n              </ionic3-star-rating>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12> \n\n              {{rev.comments}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style="margin-top:10px;">\n\n            <ion-col col-6 text-left style="color:grey">\n\n              <ion-icon name="calendar"></ion-icon>   {{rev.datein | date: "dd MMM yyyy" }}\n\n            </ion-col>\n\n            <ion-col col-6 text-right>\n\n        <b style="font-style:italic;">-{{rev.custName}}</b>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>\n\n      <button class="wholebutton" (click)="allReviews()" style="margin-bottom:50px;">\n\n        <h3 style="color:lightgreen">See all Reviews</h3>\n\n      </button>\n\n    <!-- <h5 id="menuDetails-heading5" style="color:#000000;font-size:1.6rem;">\n\n      Reviews\n\n    </h5>\n\n    <ion-list id="menuDetails-list2">\n\n      <ion-item color="none" id="menuDetails-list-item14">\n\n        Review 1\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item15">\n\n        Review 2\n\n      </ion-item>\n\n      <ion-item color="none" id="menuDetails-list-item16">\n\n        Review 3\n\n      </ion-item>\n\n    </ion-list> -->\n\n  </div>\n\n</ion-content>\n\n<ion-item class="popup-image" (click)="popupImage()" [class.active]="this.showImage">\n\n  <img src="{{this.popupSrc}}" alt="">\n\n</ion-item>\n\n<div class="book-cta">\n\n  <button class="book-cta-btn" (click)="goToMakeBookingPage($event, this.details)">\n\n    Book Now\n\n  </button>\n\n</div>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\menu-details\menu-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MenuDetailsPage);
    return MenuDetailsPage;
}());

//# sourceMappingURL=menu-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustSubmitReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
    function CustSubmitReviewPage(navCtrl, navParams, loadingCtrl, http, loc, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.loc = loc;
        this.storage = storage;
        this.isValid = true;
        this.press = true;
        this.press1 = true;
        // arr:SubmitReview[];
        this.datein = new Date().toISOString().substr(0, 10);
        this.menuTitle = navParams.get('item');
    }
    CustSubmitReviewPage.prototype.hitme = function (point) {
        this.point = point;
        this.press = false;
        if (this.press1 == false && this.press == false) {
            this.isValid = false;
        }
    };
    CustSubmitReviewPage.prototype.logRatingChange = function (rating) {
        this.press1 = false;
        if (this.press1 == false && this.press == false) {
            this.isValid = false;
        }
    };
    CustSubmitReviewPage.prototype.submitReview = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/submitReview';
        var postData;
        if (this.point == "hygenie") {
            postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: this.menuTitle.menuId,
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
            postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: this.menuTitle.menuId,
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
            postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                menuId: this.menuTitle.menuId,
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
            if (data == true) {
                _this.navCtrl.pop();
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading_1.present();
                setTimeout(function () {
                    loading_1.dismiss();
                }, 2000);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CustSubmitReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submitReview',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-submitReview\submitReview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <label>Rate {{menuTitle.menuName}} </label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5" class="body">\n\n    <ion-label text-center class="text">Rate my Service</ion-label>\n\n    <div>\n\n      <ion-grid>\n\n        <ion-col col-12>\n\n          <ionic3-star-rating [(ngModel)]="rating" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#FFC300"\n\n          defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="40px" (ratingChanged)="logRatingChange($event)"> \n\n        </ionic3-star-rating>\n\n        </ion-col>\n\n      </ion-grid>\n\n\n\n    </div>\n\n    <!-- <ion-label text-center class="text">Food Quality</ion-label> -->\n\n      <!-- <ionic3-star-rating [(ngModel)]="rating2" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating> -->\n\n      <div text-center>\n\n        <ion-label text-center class="text1">Category</ion-label>\n\n        <div style="width:30%;display:inline-block;">\n\n        <label>\n\n          <input type="radio" name="point" (click)="hitme(\'hygenie\')">\n\n          <img src="../../assets/icon/broom.png">       \n\n        </label>\n\n        <p class="p-text" text-center>Hygiene</p>\n\n      </div>\n\n      <div style="width:30%;display:inline-block;">\n\n        <label>\n\n        <input type="radio" name="point" (click)="hitme(\'food\')">\n\n        <img src="../../assets/icon/food.png">\n\n      </label>\n\n      <p class="p-text" text-center>Food</p>\n\n    </div>\n\n    <div style="width:30%;display:inline-block;">\n\n      <label>\n\n        <input type="radio" name="point" (click)="hitme(\'money\')">\n\n        <img src="../../assets/icon/money.png">\n\n      </label>\n\n      <p class="p-text" text-center>Price</p>\n\n    </div>\n\n    </div>\n\n      <!-- <div text-center class="upup">\n\n        <ion-label text-center class="text">My Strongest point</ion-label>\n\n        <label>\n\n          <input type="radio" name="point" (click)="hitme(\'hygenie\')">\n\n          <img class="btn-img" src="../../assets/icon/broom.png">\n\n          <p style="display:none;">aaa</p>         \n\n        </label>\n\n        <label>\n\n        <input type="radio" name="point" (click)="hitme(\'food\')">\n\n        <img class="btn-img" src="../../assets/icon/food.png">\n\n      </label>\n\n      <label>\n\n        <input type="radio" name="point" (click)="hitme(\'money\')">\n\n        <img class="btn-img" src="../../assets/icon/money.png">\n\n      </label>\n\n    </div> -->\n\n    <!-- <ion-label text-center class="text">Price</ion-label>\n\n    <ion-item class="no-border ">\n\n      <ionic3-star-rating [(ngModel)]="rating3" class="center" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#F2F92F"\n\n        defaultColor="#aaaaaa" readonly="false" rating="0" fontSize="32px">\n\n      </ionic3-star-rating>\n\n    </ion-item> -->\n\n\n\n    <ion-item class="border-text">\n\n      <ion-textarea [(ngModel)]="myText" [maxlength]="100" autoGrow="true" placeholder="Describe your experience (optional)"></ion-textarea>\n\n    </ion-item>\n\n      <ion-label class="right">Characters Remaining: {{myText?.length || 0}}/100</ion-label>\n\n    <button class="center" ion-button [disabled]="isValid" color="positive" (click)="submitReview()">Submit Review</button>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-submitReview\submitReview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], CustSubmitReviewPage);
    return CustSubmitReviewPage;
}());

//# sourceMappingURL=submitReview.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
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
    function CustReviewsPage(navCtrl, navParams, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.details = navParams.get('item');
    }
    // ngOnInit(){
    //   let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //   loading.present();
    //   setTimeout(() => {
    //     loading.dismiss();
    //   }, 2000);
    // }
    CustReviewsPage.prototype.getPDP = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getReviewName';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: this.details.menuId,
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
            for (var i = 0; i < _this.allReview.length; i++) {
                if (data[i].cleanlinessRating == 1) {
                    data[i].cleanlinessRating = "../../assets/icon/broom.png";
                }
                else if (data[i].foodQualityRating == 1) {
                    data[i].cleanlinessRating = "../../assets/icon/food.png";
                }
                else if (data[i].priceRating == 1) {
                    data[i].cleanlinessRating = "../../assets/icon/money.png";
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CustReviewsPage.prototype.ionViewWillEnter = function () {
        this.getPDP();
    };
    CustReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Reviews\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <ion-card *ngFor="let rev of allReview">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 >\n\n          <ion-avatar style="width:90px;height:90px;margin:0 auto;">\n\n            <img src="{{rev.cleanlinessRating}}">\n\n          </ion-avatar>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col col-12 text-center style="margin-top:-15px;">         \n\n            <ionic3-star-rating rating="{{rev.rating}}" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#FFC300"\n\n            defaultColor="#aaaaaa" readonly="true" fontSize="28px" (ratingChanged)="logRatingChange($event)">\n\n          </ionic3-star-rating>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12> \n\n          {{rev.comments}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style="margin-top:10px;">\n\n        <ion-col col-6 text-left style="color:grey">\n\n          <ion-icon name="calendar"></ion-icon>   {{rev.datein | date: "dd MMM yyyy" }}\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n    <b style="font-style:italic;">-{{rev.custName}}</b>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CustReviewsPage);
    return CustReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustMenuInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_reviews_reviews__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CUST_submitReview_submitReview__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
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
    function CustMenuInfoPage(navCtrl, navParams, http, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data1 = navParams.get('item');
    }
    CustMenuInfoPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    CustMenuInfoPage.prototype.ionViewWillEnter = function () {
        this.getTopReview();
        this.getAvgRating();
        this.getFavAnot();
        console.log('ionViewWillEnter MenuPage');
    };
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
            if (data == false) {
                _this.hvInfo = true;
            }
            else {
                _this.hvInfo = false;
                _this.TopReview = data;
                for (var i = 0; i < _this.TopReview.length; i++) {
                    _this.rating2 = data[i].rating;
                    if (data[i].cleanlinessRating == 1) {
                        console.log("1", data[i].cleanlinessRating);
                        data[i].cleanlinessRating = "../../assets/icon/broom.png";
                    }
                    else if (data[i].foodQualityRating == 1) {
                        console.log("2", data[i].foodQualityRating);
                        data[i].cleanlinessRating = "../../assets/icon/food.png";
                    }
                    else if (data[i].priceRating == 1) {
                        console.log("3", data[i].priceRating);
                        data[i].cleanlinessRating = "../../assets/icon/money.png";
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
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
            _this.visible = data;
        }, function (error) {
            console.log(error);
        });
    };
    CustMenuInfoPage.prototype.allReviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_reviews_reviews__["a" /* CustReviewsPage */]);
    };
    CustMenuInfoPage.prototype.navSubmitReview = function (menuname) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */], {
            item: menuname
        });
    };
    CustMenuInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuinfo',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-menuinfo\menuinfo.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-title text-center>\n\n      {{data1}} Details\n\n    </ion-title>\n\n    <!-- <ion-buttons slot="end" >\n\n      <button [ngStyle]="" class="heartbutton" (click)="favmenu(friend)">\n\n      <ion-icon size="large" [name]="visible ? \'heart\' : \'heart-empty\'"></ion-icon>\n\n    </button>\n\n    </ion-buttons> -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="favmenu()">\n\n        <ion-icon [name]="visible ? \'heart\' : \'heart-outline\'"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n<ion-content>\n\n  <h3><Menu></Menu> INFO</h3>\n\n  <ion-list>\n\n    <ion-item *ngFor="let pdp of menuInfo">\n\n      <p>{{pdp.fName}}</p>\n\n      <p>{{pdp.menuName}}</p>\n\n    </ion-item>\n\n    <ion-item class="side-side">\n\n      <ionic3-star-rating [(ngModel)]="rating" style="width:auto;" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#FFC300"\n\n        defaultColor="#aaaaaa" readonly="true" fontSize="32px" (ratingChanged)="logRatingChange($event)">\n\n      </ionic3-star-rating>\n\n      <input class="rate" [(ngModel)]="ratingNum" type="decimal" disabled="true" size="3"/>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button class="wholebutton" (click)="navSubmitReview(data1)">\n\n    <h3 style="color:lightgreen">Write a Review</h3>\n\n  </button>\n\n  <h1 text-center>Reviews</h1>\n\n  <ion-card *ngFor="let rev of TopReview;let img of imgInfo" [hidden]="hvInfo">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 >\n\n          <ion-avatar style="width:90px;height:90px;margin:0 auto;">\n\n            <img src="{{rev.cleanlinessRating}}">\n\n          </ion-avatar>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-col col-12 text-center style="margin-top:-15px;">         \n\n            <ionic3-star-rating [(ngModel)]="rating2" halfStar="false" activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#FFC300"\n\n            defaultColor="#aaaaaa" readonly="true" fontSize="28px" (ratingChanged)="logRatingChange($event)">\n\n          </ionic3-star-rating>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12> \n\n          {{rev.comments}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style="margin-top:10px;">\n\n        <ion-col col-6 text-left style="color:grey">\n\n          <ion-icon name="calendar"></ion-icon>   {{rev.datein | date: "dd MMM yyyy" }}\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n    <b style="font-style:italic;">-{{rev.custName}}</b>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n  <button class="wholebutton" (click)="allReviews()">\n\n    <h3 style="color:lightgreen">See all Reviews</h3>\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-menuinfo\menuinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], CustMenuInfoPage);
    return CustMenuInfoPage;
}());

//# sourceMappingURL=menuinfo.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
    function CustMenuPage(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
    }
    CustMenuPage.prototype.getPDP = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getMenu';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.menuPage = data;
        });
    };
    CustMenuPage.prototype.goToMenuPage = function (menuid, menuname) {
        // this.getFavanotData(menuid,localStorage.getItem("loginid"));
        localStorage.setItem("cust_menuid", menuid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */], {
            item: menuname
        });
    };
    CustMenuPage.prototype.ngOnInit = function () {
        this.getPDP();
    };
    CustMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Menu</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item *ngFor="let menu of menuPage">\n\n        <ion-label class="fulllabel">\n\n          <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId,menu.menuName)">\n\n            <h3 text-left>{{menu.fName}} </h3>\n\n            <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n            <p text-left>{{menu.menu_category}} </p>\n\n          </button>\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], CustMenuPage);
    return CustMenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDPTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_dashboard_PDP_dashboard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PDP_bookings_PDP_bookings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PDP_menus_PDP_menus__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PDP_profile_PDP_profile__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PDPTabsPage = /** @class */ (function () {
    function PDPTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__PDP_dashboard_PDP_dashboard__["a" /* DashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__PDP_bookings_PDP_bookings__["a" /* BookingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__PDP_menus_PDP_menus__["a" /* MenusPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__PDP_profile_PDP_profile__["a" /* ProfilePage */];
    }
    PDPTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-tabs',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-tabs\PDP-tabs.html"*/'<ion-tabs id="tabs-tabs1">\n\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="home" id="tabs-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Bookings" tabIcon="calendar" id="tabs-tab3"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Menus" tabIcon="book" id="tabs-tab2"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="contact" id="tabs-tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-tabs\PDP-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PDPTabsPage);
    return PDPTabsPage;
}());

//# sourceMappingURL=PDP-tabs.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking(bookID, custImage, custName, bookDate, bookTime, bookPax, bookNotes, bookStatus) {
        this.bookID = bookID;
        this.custImage = custImage;
        this.custName = custName;
        this.bookDate = bookDate;
        this.bookTime = bookTime;
        this.bookPax = bookPax;
        this.bookNotes = bookNotes;
        this.bookStatus = bookStatus;
    }
    return Booking;
}());

//# sourceMappingURL=PDP-Bookings.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_new_dish_PDP_new_dish__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PDP_edit_menu_PDP_edit_menu__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PDP_edit_dish_PDP_edit_dish__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_PDP_menuData__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(8);
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
    function MenuPage(navCtrl, navParams, storage, http, alertCtrl, loadingCtrl, menusData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menusData = menusData;
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuPrice = 0;
        this.menuData = this.navParams.get('data');
        console.log(this.menuData.menuID);
        this.storage.get('Menus').then(function (val) {
            for (var i = 0; i < val.length; i++) {
                if (val[i].menuID == _this.menuData.menuID) {
                    _this.menu = val[i];
                }
            }
            console.log(_this.menu);
            console.log('Get Menu completed');
        });
        this.storage.get('MenuItems').then(function (val) {
            console.log(val);
            _this.menuItems = val.filter(function (val) { return val.menuID == _this.menu.menuID; });
            console.log('Get Menu Items completed');
            console.log(_this.menuItems);
            for (var i = 0; i < _this.menuItems.length; i++) {
                _this.menuPrice += _this.menuItems[i].menuItemPrice;
            }
        });
    };
    MenuPage.prototype.createLoader = function () {
        this.deleting = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Deleting'
        });
    };
    MenuPage.prototype.deleteConfirm = function (menuItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm save',
            message: 'Are you sure you want to delete the dish?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.createLoader();
                        _this.deleting.present();
                        _this.deleteDish(menuItem);
                    }
                }
            ]
        });
        alert.present();
    };
    MenuPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'The dish has been deleted',
            buttons: [{
                    text: 'Dismiss',
                    handler: function () {
                        _this.storage.get('MenuItems').then(function (val) {
                            _this.menuPrice = 0;
                            _this.menuItems = val.filter(function (val) { return val.menuID == _this.menu.menuID; });
                            for (var i = 0; i < _this.menuItems.length; i++) {
                                _this.menuPrice += _this.menuItems[i].menuItemPrice;
                            }
                        });
                    }
                }]
        });
        alert.present();
    };
    MenuPage.prototype.deleteDish = function (menuItem) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/deleteDish';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            dishID: menuItem.menuItemID
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /deleteDish");
            console.log('SQL Result: ', data);
            _this.menusData.getMenuItemsData();
            setTimeout(function () {
                _this.deleting.dismiss();
                _this.deleteAlert();
            }, 500);
        });
    };
    MenuPage.prototype.goToNewDish = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PDP_new_dish_PDP_new_dish__["a" /* NewDishPage */], {
            data: this.menu.menuID
        });
    };
    MenuPage.prototype.goToEditMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__PDP_edit_menu_PDP_edit_menu__["a" /* EditMenuPage */], {
            data: this.menu
        });
    };
    MenuPage.prototype.goToEditDish = function (menuItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__PDP_edit_dish_PDP_edit_dish__["a" /* EditDishPage */], {
            data: menuItem
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-menu',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-menu\PDP-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Menu\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left solid (click)="goToEditMenu(menu)">\n\n        <ion-icon name="create"></ion-icon>\n\n        Edit Menu\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n  <img src="{{ menu?.menuImg }}" />\n\n  <div *ngIf=\'menu?.menuImg == ""\' style="width:100%;height:177px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n  </div>\n\n  <h2 id="menu-heading9" style="color:#000000;">\n\n    {{ menu?.menuName }} (${{ menuPrice | number:\'1.2-2\' }})\n\n  </h2>\n\n  <div id="menu-markdown18" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000; float:left;">\n\n      Category:\n\n      <strong>\n\n      {{ menu?.menuCategory }}\n\n      </strong>\n\n    </p>\n\n  </div>\n\n  <button id="menu-button18" ion-button color="positive" block on-click="goToNewDish()">\n\n    New Dish\n\n  </button>\n\n  <ion-card id="menu-card29" *ngFor="let menuItem of menuItems">\n\n    <ion-list>\n\n      <img src="{{ menuItem?.menuItemImg }}" />\n\n      <div *ngIf=\'menuItem?.menuItemImg == ""\' style="width:100%;height:177px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menu-list-item66">\n\n        {{ menuItem.menuItemName }} (${{ menuItem.menuItemPrice | number:\'1.2-2\' }})\n\n      </ion-item>\n\n      <button id="menu-button6" ion-button color="positive" (click)="goToEditDish(menuItem)">\n\n        Manage\n\n      </button>\n\n      <button id="menu-button7" ion-button color="danger" (click)="deleteConfirm(menuItem)">\n\n        Remove\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-menu\PDP-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_PDP_menuData__["a" /* MenusData */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=PDP-menu.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__ = __webpack_require__(31);
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
    function NewDishPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, camera, menusData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.menusData = menusData;
        this.formInput = { menuItemName: '', menuItemPrice: '',
        };
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Saving'
        });
        this.newDish = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            menuItemName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            menuItemPrice: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
        });
    }
    NewDishPage.prototype.presentConfirm = function () {
        var _this = this;
        if (!this.newDish.controls.menuItemName.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Dish name cannot be empty.',
                buttons: [{
                        text: 'Dismiss'
                    }]
            });
            alert_1.present();
        }
        else if (!this.newDish.controls.menuItemPrice.valid) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Dish price cannot be empty.',
                buttons: [{
                        text: 'Dismiss'
                    }]
            });
            alert_2.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Confirm save',
                message: 'Would you like to save your new dish?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            console.log('No');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Yes');
                            _this.loading.present();
                            _this.createNewDish();
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    NewDishPage.prototype.createNewDish = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/createNewDish';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID;
            menuItemName: this.newDish.value['menuItemName'],
            menuItemPrice: this.newDish.value['menuItemPrice'],
            menuItemImg: '',
            menuID: this.navParams.get('data')
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /createNewDish");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.menusData.getMenuItemsData();
            setTimeout(function () {
                _this.loading.dismiss();
                _this.presentAlert();
            }, 500);
        });
    };
    NewDishPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Your new dish "' + this.newDish.value['menuItemName'] + '" has been created',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    NewDishPage.prototype.presentCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancel',
            message: 'Would you like to cancel and go back?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.pop();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    NewDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-new-dish',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-new-dish\PDP-new-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      New Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <form id="newDish-form9" [formGroup]="newDish">\n\n    <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n    </div>\n\n    <button id="newDish-button24" ion-button color="positive" block>\n\n      Upload Image\n\n    </button>\n\n    <ion-item id="newDish-input8">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Fish &amp; Chips" formControlName="menuItemName"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="newDish-input9">\n\n      <ion-label>\n\n        Price ($)\n\n      </ion-label>\n\n      <ion-input type="number" placeholder="18.50" formControlName="menuItemPrice"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="newDish-button25" ion-button color="positive" block (click)="presentConfirm()">\n\n    Save\n\n  </button>\n\n  <button id="newDish-button26" ion-button color="positive" block (click)="presentCancel()">\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-new-dish\PDP-new-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__["a" /* MenusData */]])
    ], NewDishPage);
    return NewDishPage;
}());

//# sourceMappingURL=PDP-new-dish.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PDP_menus_PDP_menus__ = __webpack_require__(54);
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
    function EditMenuPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, camera, menuData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.menuData = menuData;
        this.default = { option: null };
        this.formInput = { menuName: '', menuCategory: '', menuImg: '' };
        this.menu = navParams.get('data');
        this.default.option = this.menu.menuCategory;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Saving'
        });
        this.deleting = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Deleting'
        });
        this.editMenu = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            menuName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            menuCategory: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            menuImg: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    EditMenuPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm save',
            message: 'Would you like to save your changes?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.loading.present();
                        _this.updateMenu();
                    }
                }
            ]
        });
        alert.present();
    };
    EditMenuPage.prototype.presentCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancel',
            message: 'Would you like to discard your changes and go back?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    EditMenuPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'The menu has been updated',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    EditMenuPage.prototype.updateMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/updateMenu';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            menuName: this.editMenu.value['menuName'],
            menuCategory: this.editMenu.value['menuCategory'],
            menuImg: this.menu.menuImg,
            menuID: this.menu.menuID
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /updateMenu");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.menuData.getMenusData(_this.menu.pdpID);
            setTimeout(function () {
                _this.loading.dismiss();
                _this.presentAlert();
            }, 2000);
        });
    };
    EditMenuPage.prototype.deleteConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm save',
            message: 'Are you sure you want to delete the menu?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.deleting.present();
                        _this.deleteMenu();
                    }
                }
            ]
        });
        alert.present();
    };
    EditMenuPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'The menu has been deleted',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__PDP_menus_PDP_menus__["a" /* MenusPage */]);
                    }
                }]
        });
        alert.present();
    };
    EditMenuPage.prototype.deleteMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/deleteMenu';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            menuID: this.menu.menuID
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /deleteMenu");
            console.log('SQL Result: ', data);
            _this.menuData.getMenusData(_this.menu.pdpID);
            setTimeout(function () {
                _this.deleting.dismiss();
                _this.deleteAlert();
            }, 2000);
        });
    };
    EditMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-edit-menu',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-edit-menu\PDP-edit-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <form id="editMenu-form12" [formGroup]="editMenu">\n\n    <img src="{{ menu?.menuImg }}" />\n\n    <div *ngIf=\'menu?.menuImg == ""\' style="width:100%;height:177px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n    </div>\n\n    <button id="editMenu-button21" ion-button color="positive" block>\n\n      Change Image\n\n    </button>\n\n    <ion-item id="editMenu-input6">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ menu.menuName }}" formControlName="menuName"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editMenu-select6">\n\n      <ion-label>\n\n        Category\n\n      </ion-label>\n\n      <ion-select name="" [(ngModel)]="default.option" formControlName="menuCategory">\n\n        <ion-option>Chinese</ion-option>\n\n        <ion-option>Western</ion-option>\n\n        <ion-option>Korean</ion-option>\n\n        <ion-option>Japanese</ion-option>\n\n        <ion-option>Malay</ion-option>\n\n        <ion-option>Indian</ion-option>\n\n        <ion-option>Thai</ion-option>\n\n        <ion-option>Vietnamese</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editMenu-button22" ion-button color="positive" block (click)="presentConfirm()">\n\n    Save Menu\n\n  </button>\n\n  <button id="editMenu-button24" ion-button color="positive" block (click)="presentCancel()">\n\n    Cancel\n\n  </button>\n\n  <button id="editMenu-button23" ion-button color="danger" block (click)="deleteConfirm()">\n\n    Delete Menu\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-edit-menu\PDP-edit-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__["a" /* MenusData */]])
    ], EditMenuPage);
    return EditMenuPage;
}());

//# sourceMappingURL=PDP-edit-menu.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_PDP_menuData__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
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
    function EditDishPage(navCtrl, http, navParams, alertCtrl, loadingCtrl, camera, menusData) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.menusData = menusData;
        this.formInput = { dishName: '', dishPrice: '', dishImg: '' };
        this.dish = this.navParams.get('data');
        console.log(this.dish);
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Saving'
        });
        this.editDish = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            dishName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            dishPrice: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            dishImg: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]()
        });
    }
    EditDishPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm save',
            message: 'Would you like to save your changes?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes');
                        _this.loading.present();
                        _this.updateDish();
                    }
                }
            ]
        });
        alert.present();
    };
    EditDishPage.prototype.presentCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancel',
            message: 'Would you like to discard your changes and go back?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.pop();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    EditDishPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'The dish has been updated',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    EditDishPage.prototype.updateDish = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/updateDish';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            dishID: this.dish.menuItemID,
            dishName: this.editDish.value['dishName'],
            dishPrice: this.editDish.value['dishPrice'],
            dishImg: this.dish.menuItemImg // this.editDish.value['dishImg']
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /updateDish");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.menusData.getMenuItemsData();
            setTimeout(function () {
                _this.loading.dismiss();
                _this.presentAlert();
            }, 500);
        });
    };
    EditDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-edit-dish',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-edit-dish\PDP-edit-dish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Dish\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page15">\n\n  <form id="editDish-form10" [formGroup]="editDish">\n\n    <img src="{{ dish?.menuItemImg }}" />\n\n    <div *ngIf=\'dish?.menuItemImg == ""\' style="width:100%;height:177px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n    </div>\n\n    <button id="editDish-button27" ion-button color="positive" block>\n\n      Change Image\n\n    </button>\n\n    <ion-item id="editDish-input9">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ dish.menuItemName }}" formControlName="dishName"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editDish-input10">\n\n      <ion-label>\n\n        Price ($)\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ dish.menuItemPrice }}" formControlName="dishPrice"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editDish-button28" ion-button color="positive" block (click)="presentConfirm()">\n\n    Save\n\n  </button>\n\n  <button id="editDish-button29" ion-button color="positive" block (click)="presentCancel()">\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-edit-dish\PDP-edit-dish.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers_PDP_menuData__["a" /* MenusData */]])
    ], EditDishPage);
    return EditDishPage;
}());

//# sourceMappingURL=PDP-edit-dish.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PDP_menus_PDP_menus__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewMenuPage = /** @class */ (function () {
    function NewMenuPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, camera, menusData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.menusData = menusData;
        this.default = { option: null };
        this.formInput = { menuName: '', menuCategory: '',
        };
        this.pdp_id = navParams.get('data');
        this.default.option = "Chinese";
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Saving'
        });
        this.newMenu = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            menuName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            menuCategory: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
    }
    NewMenuPage.prototype.presentConfirm = function () {
        var _this = this;
        if (!this.newMenu.controls.menuName.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Menu name cannot be empty.',
                buttons: [{
                        text: 'Dismiss'
                    }]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirm save',
                message: 'Would you like to save your new menu?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            console.log('No');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.createNewMenu();
                            _this.loading.present();
                            console.log('Yes');
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    NewMenuPage.prototype.createNewMenu = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/createNewMenu';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID;
            menuName: this.newMenu.value['menuName'],
            menuCategory: this.newMenu.value['menuCategory'],
            menuImg: '',
            pdpID: this.pdp_id
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /createNewMenu");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.menusData.getMenusData(_this.pdp_id);
            setTimeout(function () {
                _this.loading.dismiss();
                _this.presentAlert();
            }, 2000);
        });
    };
    NewMenuPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Your new menu "' + this.newMenu.value['menuName'] + '" has been created',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__PDP_menus_PDP_menus__["a" /* MenusPage */]);
                    }
                }]
        });
        alert.present();
    };
    NewMenuPage.prototype.presentCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancel',
            message: 'Would you like to cancel and go back?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.pop();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    NewMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-new-menu',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-new-menu\PDP-new-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      New Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <form id="newMenu-form12" [formGroup]="newMenu">\n\n    <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n    </div>\n\n    <button id="newMenu-button21" ion-button color="positive" block>\n\n      Upload Image\n\n    </button>\n\n    <ion-item id="newMenu-input6">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="French Friday" formControlName="menuName"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="newMenu-select6">\n\n      <ion-label>\n\n        Category\n\n      </ion-label>\n\n      <ion-select name="" [(ngModel)]="default.option" formControlName="menuCategory">\n\n        <ion-option>Chinese</ion-option>\n\n        <ion-option>Western</ion-option>\n\n        <ion-option>Korean</ion-option>\n\n        <ion-option>Japanese</ion-option>\n\n        <ion-option>Malay</ion-option>\n\n        <ion-option>Indian</ion-option>\n\n        <ion-option>Thai</ion-option>\n\n        <ion-option>Vietnamese</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="newMenu-button22" ion-button color="positive" block (click)="presentConfirm()">\n\n    Save Menu\n\n  </button>\n\n  <button id="newMenu-button23" ion-button color="positive" block (click)="presentCancel()">\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-new-menu\PDP-new-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_PDP_menuData__["a" /* MenusData */]])
    ], NewMenuPage);
    return NewMenuPage;
}());

//# sourceMappingURL=PDP-new-menu.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_PDP_profileData__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PDP_profile_PDP_profile__ = __webpack_require__(113);
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
    function EditProfilePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, camera, profileData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.profileData = profileData;
        this.formInput = { fName: '', desc: '', add: '', phone: '', email: '',
        };
        this.profile = navParams.get('data');
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Saving'
        });
        this.editProfile = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            fName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            desc: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            add: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
        });
    }
    EditProfilePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm save',
            message: 'Would you like to save your changes?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.updateProfile();
                        _this.loading.present();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    EditProfilePage.prototype.presentCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm cancel',
            message: 'Would you like to discard your changes and go back?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.pop();
                        console.log('Yes');
                    }
                }
            ]
        });
        alert.present();
    };
    EditProfilePage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Your profile has been updated',
            buttons: [{
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__PDP_profile_PDP_profile__["a" /* ProfilePage */]);
                    }
                }]
        });
        alert.present();
    };
    EditProfilePage.prototype.updateProfile = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/updateProfile';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            profileID: this.profile.id,
            profileName: this.editProfile.value['fName'],
            profileLocation: this.editProfile.value['add'],
            profileDesc: this.editProfile.value['desc'],
            profilePhone: this.editProfile.value['phone'],
            profileEmail: this.editProfile.value['email'],
            profileImg: this.profile.image // this.editProfile.value['img']
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            console.log("In /updateProfile");
            console.log('postData:', postData);
            console.log('SQL Result: ', data);
            _this.profileData.getProfileData();
            setTimeout(function () {
                _this.loading.dismiss();
                _this.presentAlert();
            }, 500);
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-edit-profile',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-edit-profile\PDP-edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <form id="editProfile-form8" [formGroup]="editProfile">\n\n    <img src="{{ profile?.image }}" />\n\n    <button id="editProfile-button12" ion-button color="positive" block>\n\n      Change Image\n\n    </button>\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ profile.fName }}" formControlName="fName"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-textarea1">\n\n      <ion-label>\n\n        Description\n\n      </ion-label>\n\n      <ion-textarea value="{{ profile.desc }}" formControlName="desc"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Location\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ profile.add }}" formControlName="add"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Mobile\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ profile.phone }}" formControlName="phone"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input7">\n\n      <ion-label>\n\n        Email\n\n      </ion-label>\n\n      <ion-input type="text" value="{{ profile.email }}" formControlName="email"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editProfile-button19" ion-button color="positive" block (click)="presentConfirm()">\n\n    Save\n\n  </button>\n\n  <button id="editProfile-button19" ion-button color="positive" block (click)="presentCancel()">\n\n    Cancel\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-edit-profile\PDP-edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_PDP_profileData__["a" /* ProfileData */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=PDP-edit-profile.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_favourites_favourites__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CUST_profile_profile__ = __webpack_require__(228);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__CUST_favourites_favourites__["a" /* CustFavouritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__["a" /* CustBookingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__CUST_profile_profile__["a" /* CustProfilePage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1 main-tabs"> \n\n  <ion-tab [root]="tab1Root" tabTitle="Discover" tabIcon="compass" id="tabsController-tab1"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favourites" tabIcon="heart-outline" id="tabsController-tab2"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Bookings" tabIcon="calendar" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="contact" id="tabsController-tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_details_menu_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
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
        var url = "https://foodie1234.herokuapp.com/discoverprofiles";
        this.data = this.http.get(url);
        this.subscription = this.data.subscribe(function (data) {
            _this.profileList = data;
            console.log(data);
            _this.setCardHeight();
        });
    };
    DiscoverPage.prototype.setCardHeight = function () {
        setTimeout(function () {
            var tallest = -1;
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".discover-card-each .discover-image img").each(function () {
                tallest = __WEBPACK_IMPORTED_MODULE_4_jquery__(this).outerHeight() > tallest ? __WEBPACK_IMPORTED_MODULE_4_jquery__(this).outerHeight() : tallest;
            });
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".discover-card-each .discover-image img").each(function () {
                __WEBPACK_IMPORTED_MODULE_4_jquery__(this).css("height", tallest);
            });
        }, 2000);
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
    DiscoverPage.prototype.sortProfiles = function ($event) {
        if ($event == "distance_closest") {
            this.profileList.sort(function (a, b) { return (a.location_distance > b.location_distance) ? 1 : -1; });
        }
        else if ($event == "distance_furthest") {
            this.profileList.sort(function (a, b) { return (b.location_distance > a.location_distance) ? 1 : -1; });
        }
        else if ($event == "price_low_high") {
            this.profileList.sort(function (a, b) { return (a.menu_price > b.menu_price) ? 1 : -1; });
        }
        else if ($event == "price_high_low") {
            this.profileList.sort(function (a, b) { return (b.menu_price > a.menu_price) ? 1 : -1; });
        }
        else if ($event == "reviews_low_high") {
            this.profileList.sort(function (a, b) { return (a.menu_ratings > b.menu_ratings) ? 1 : -1; });
        }
        else if ($event == "reviews_high_low") {
            this.profileList.sort(function (a, b) { return (a.menu_ratings < b.menu_ratings) ? 1 : -1; });
        }
    };
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-discover",template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\discover\discover.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Foodie\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <form id="discover-form1">\n\n    <ion-searchbar\n\n      placeholder="Search"\n\n      name="search"\n\n      id="discover-search1"\n\n      (ionInput)="getItems($event)"\n\n    ></ion-searchbar>\n\n    <ion-item id="discover-select1" class="discover-filter">\n\n      <ion-label>\n\n        Sort by:\n\n      </ion-label>\n\n      <ion-select name="filter" (ionChange)="sortProfiles($event)">\n\n        <ion-option value="distance_closest">Distance (Closest)</ion-option>\n\n        <ion-option value="distance_furthest">Distance (Furthest)</ion-option>\n\n        <ion-option value="price_low_high">Price (Low to High)</ion-option>\n\n        <ion-option value="price_high_low">Price (High to Low)</ion-option>\n\n        <ion-option value="reviews_low_high">Reviews (Low to High)</ion-option>\n\n        <ion-option value="reviews_high_low">Reviews (High to Low)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <h4 id="discover-heading1" class="header-m">\n\n    Discover around <span class="color-darkyellow">Kovan</span>\n\n  </h4>\n\n  <div class="discover-each-con">\n\n    <ion-card\n\n      id="discover-card21"\n\n      class="discover-card-each"\n\n      *ngFor="let profile of profileList"\n\n    >\n\n      <ion-list>\n\n        <ion-item color="none" id="discover-list-item3" (click)="goToMenuDetailsPage($event, profile)">\n\n          <ion-avatar item-left>\n\n            <img src="{{profile.img}}" />\n\n          </ion-avatar>\n\n          <h2\n\n            style="margin-bottom:0;font-weight:500;color:#424242;"\n\n          >\n\n            {{profile.fName}}\n\n          </h2>\n\n        </ion-item>\n\n        <div class="discover-image">\n\n          <img src="{{profile.menu_image}}" alt="" />\n\n        </div>\n\n        <div class="discover-info">\n\n          <h5\n\n            id="discover-heading2"\n\n            class="discover-menuname"\n\n            style="color:#424242;font-weight:600;font-size:1.6rem;"\n\n            (click)="goToMenuDetailsPage($event, profile)"\n\n          >\n\n            {{profile.menuName}}\n\n          </h5>\n\n          <div class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n            <ion-icon name="list-box" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n            <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n              ~${{profile.menu_price}}/pax\n\n            </p>\n\n          </div>\n\n          <div id="discover-markdown3" class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n            <ion-icon name="pin" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n            <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n              {{profile.location}}\n\n            </p>\n\n          </div>\n\n          <div id="discover-markdown4" class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n            <ion-icon name="pricetag" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n            <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n              {{profile.menu_category}}\n\n            </p>\n\n          </div>\n\n          <div class="discover-ratings">\n\n            <span\n\n              class="each-star"\n\n              [ngClass]="{\'active\' : profile.menu_ratings > 0}"\n\n            >\n\n              <svg\n\n                xmlns="http://www.w3.org/2000/svg"\n\n                width="24"\n\n                height="24"\n\n                viewBox="0 0 24 24"\n\n              >\n\n                <path\n\n                  d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n                />\n\n              </svg>\n\n            </span>\n\n            <span\n\n              class="each-star"\n\n              [ngClass]="{\'active\' : profile.menu_ratings > 1}"\n\n            >\n\n              <svg\n\n                xmlns="http://www.w3.org/2000/svg"\n\n                width="24"\n\n                height="24"\n\n                viewBox="0 0 24 24"\n\n              >\n\n                <path\n\n                  d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n                />\n\n              </svg>\n\n            </span>\n\n            <span\n\n              class="each-star"\n\n              [ngClass]="{\'active\' : profile.menu_ratings > 2}"\n\n            >\n\n              <svg\n\n                xmlns="http://www.w3.org/2000/svg"\n\n                width="24"\n\n                height="24"\n\n                viewBox="0 0 24 24"\n\n              >\n\n                <path\n\n                  d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n                />\n\n              </svg>\n\n            </span>\n\n            <span\n\n              class="each-star"\n\n              [ngClass]="{\'active\' : profile.menu_ratings > 3}"\n\n            >\n\n              <svg\n\n                xmlns="http://www.w3.org/2000/svg"\n\n                width="24"\n\n                height="24"\n\n                viewBox="0 0 24 24"\n\n              >\n\n                <path\n\n                  d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n                />\n\n              </svg>\n\n            </span>\n\n            <span\n\n              class="each-star"\n\n              [ngClass]="{\'active\' : profile.menu_ratings > 4}"\n\n            >\n\n              <svg\n\n                xmlns="http://www.w3.org/2000/svg"\n\n                width="24"\n\n                height="24"\n\n                viewBox="0 0 24 24"\n\n              >\n\n                <path\n\n                  d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n                />\n\n              </svg>\n\n            </span>\n\n            <span class="rating-amount">{{profile.menu_rating_amt}} reviews</span>\n\n          </div>\n\n        </div>\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\discover\discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
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
        this.bookingDetails = navParams.get("item");
    }
    MakeBookingPage.prototype.ionViewDidLoad = function () {
        localStorage.setItem("name", this.bookingDetails.fName);
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
    MakeBookingPage.prototype.noDate = function () {
        var alert = this.alertCtrl.create({
            title: 'Booking date cannot be empty',
            message: 'Please select a date!',
            buttons: ['Ok']
        });
        alert.present();
    };
    MakeBookingPage.prototype.noTime = function () {
        var alert = this.alertCtrl.create({
            title: 'Booking time cannot be empty',
            message: 'Please select a time!',
            buttons: ['Ok']
        });
        alert.present();
    };
    MakeBookingPage.prototype.noPax = function () {
        var alert = this.alertCtrl.create({
            title: 'Pax cannot be empty',
            message: 'Please select the number of people!',
            buttons: ['Ok']
        });
        alert.present();
    };
    MakeBookingPage.prototype.bookingSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Booking successful!',
            message: 'See you soon!',
            buttons: ['Ok']
        });
        alert.present();
    };
    MakeBookingPage.prototype.makeBooking = function () {
        var _this = this;
        var url = "https://foodie1234.herokuapp.com/makeBooking";
        var bookDate = localStorage.getItem("bookDate");
        var bookTime = localStorage.getItem("bookTime");
        var bookPax = localStorage.getItem("bookPax");
        if (bookDate == null) {
            this.noDate();
        }
        else if (bookTime == null) {
            this.noTime();
        }
        else if (bookPax == null) {
            this.noPax();
        }
        else {
            var postData = JSON.stringify({
                //these fields MUST match the server.js request.body.XXX;
                bookDate: localStorage.getItem("bookDate"),
                bookTime: localStorage.getItem("bookTime"),
                bookPax: localStorage.getItem("bookPax"),
                bookNotes: localStorage.getItem("bookNotes"),
                custID: localStorage.getItem("loginid"),
                menuID: this.bookingDetails.menuId,
                pdpID: this.bookingDetails.pdp_id
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
            this.bookingSuccess();
            this.navCtrl.pop();
        }
    };
    MakeBookingPage.prototype.cancelBooking = function () {
        this.navCtrl.pop();
    };
    MakeBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-make-booking",template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\make-booking\make-booking.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Make Booking\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <h4\n\n    id="makeBooking-heading6"\n\n    style="color:#000000;font-size:1.7rem;margin-bottom:15px;"\n\n  >\n\n    Confirm Booking\n\n  </h4>\n\n  <ion-list id="makeBooking-list3" class="booking-details-list">\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item20"\n\n      class="booking-details-each"\n\n    >\n\n      <p ion-text class="label-text" color="black">Chef</p>\n\n      <p ion-text class="label-detail" color="black">\n\n        {{this.bookingDetails.fName}}\n\n      </p>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item23"\n\n      class="booking-details-each"\n\n    >\n\n      <p ion-text class="label-text" color="black">Location</p>\n\n      <p ion-text class="label-detail" color="black">\n\n        {{this.bookingDetails.location}}\n\n      </p>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item21"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Date</ion-label>\n\n      <ion-datetime\n\n        displayFormat="DD MMM YYYY"\n\n        class="label-detail label-date"\n\n        color="black"\n\n        [(ngModel)]="date"\n\n        (ionChange)="updateMyDate($event)"\n\n      ></ion-datetime>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item22"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Time</ion-label>\n\n      <ion-select\n\n        value="1300-1500"\n\n        okText="Okay"\n\n        cancelText="Cancel"\n\n        placeholder="Select a time"\n\n        class="select-field"\n\n        (ionChange)="updateMyTime($event)"\n\n      >\n\n        <ion-option value="1300-1500">1300 - 1500</ion-option>\n\n        <ion-option value="1600-1800">1600 - 1800</ion-option>\n\n        <ion-option value="1900-2100">1900 - 2100</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item24"\n\n      class="booking-details-each"\n\n    >\n\n      <ion-label class="label-text" color="black">Pax</ion-label>\n\n      <ion-select\n\n        value="1"\n\n        okText="Okay"\n\n        cancelText="Cancel"\n\n        placeholder="How many pax"\n\n        class="select-field"\n\n        (ionChange)="updateMyPax($event)"\n\n      >\n\n        <ion-option value="1">1</ion-option>\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="4">4</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="6">6</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item\n\n      color="none"\n\n      id="makeBooking-list-item25"\n\n      class="booking-details-each ion-textarea-con"\n\n    >\n\n      <ion-label class="label-text" color="black">Notes</ion-label>\n\n      <ion-textarea\n\n        class="ion-textarea-element"\n\n        (input)="updateMyNotes($event.target.value)"\n\n      ></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="make-booking-cta">\n\n    <button\n\n      id="makeBooking-button3"\n\n      class="cancel-btn"\n\n      ion-button\n\n      outline\n\n      color="black"\n\n      (click)="cancelBooking()"\n\n    >\n\n      Cancel\n\n    </button>\n\n    <button\n\n      id="makeBooking-button4"\n\n      ion-button\n\n      color="yellow"\n\n      (click)="makeBooking()"\n\n    >\n\n      Confirm\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\make-booking\make-booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MakeBookingPage);
    return MakeBookingPage;
}());

//# sourceMappingURL=make-booking.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustBookingsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CustBookingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CustBookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\bookings\bookings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bookings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4"></ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\bookings\bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CustBookingsPage);
    return CustBookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustProfilePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CustProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CustProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CustProfilePage);
    return CustProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_PDP_dashboard_PDP_dashboard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_PDP_bookings_PDP_bookings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_PDP_menus_PDP_menus__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_PDP_booking_details_PDP_booking_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menuinfo_menuinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_CUST_favourites_favourites__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bookings_bookings__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_controller_tabs_controller__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_details_menu_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_make_booking_make_booking__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_CUST_menu_menu__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_CUST_reviews_reviews__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_CUST_submitReview_submitReview__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_CUST_tabs_tabs2__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_PDP_bookingData__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_PDP_new_menu_PDP_new_menu__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login_page_login_page__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_PDP_menuData__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_PDP_profileData__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_PDP_dashboardData__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera_ngx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_PDP_tabs_PDP_tabs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_PDP_profile_PDP_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_CUST_profile_profile__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_PDP_menu_PDP_menu__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_PDP_edit_menu_PDP_edit_menu__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_PDP_edit_profile_PDP_edit_profile__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_PDP_new_dish_PDP_new_dish__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_PDP_edit_dish_PDP_edit_dish__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DashboardPage } from '../pages/dashboard/dashboard';



// import { MenusPage } from '../pages/menus/menus';

// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { MenusPage } from '../pages/menus/menus';

// import { BookingDetailsPage } from '../pages/booking-details/booking-details';
// import { CustMenuPage } from '../pages/CUST-menu/menu';

// // import { EditMenuPage } from '../pages/edit-menu/edit-menu';
// // import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// // import { NewDishPage } from '../pages/new-dish/new-dish';
// // import { EditDishPage } from '../pages/edit-dish/edit-dish';

// import { LoginPage } from '../pages/login-page/login-page';
// import { StarRatingModule } from 'ionic3-star-rating';





// import { StatusBar } from "@ionic-native/status-bar";
// import { SplashScreen } from "@ionic-native/splash-screen";
// import { HttpClientModule } from "@angular/common/http";
// import { CustReviewsPage } from '../pages/CUST-reviews/reviews'
// import { CustSubmitReviewPage } from '../pages/CUST-submitReview/submitReview'
// import { CustTabsPage } from '../pages/CUST-tabs/tabs2'
// import { BookingsData } from '../providers/PDP-bookingData';
// import { IonicStorageModule } from '@ionic/storage';
// import { NewMenuPage } from '../pages/PDP-new-menu/PDP-new-menu';
// import { DashboardPage } from '../pages/PDP-dashboard/PDP-dashboard';
// import { BookingsPage } from '../pages/PDP-bookings/PDP-bookings';
// import { MenusPage } from '../pages/PDP-menus/PDP-menus';
// import { PDPTabsPage } from '../pages/PDP-tabs/PDP-tabs';
// import { ProfilePage } from '../pages/PDP-profile/PDP-profile';
// import { BookingDetailsPage } from '../pages/PDP-booking-details/PDP-booking-details';
// import { MenuPage } from '../pages/PDP-menu/PDP-menu';
// import { EditMenuPage } from '../pages/PDP-edit-menu/PDP-edit-menu';
// import { EditProfilePage } from '../pages/PDP-edit-profile/PDP-edit-profile';
// import { NewDishPage } from '../pages/PDP-new-dish/PDP-new-dish';
// import { EditDishPage } from '../pages/PDP-edit-dish/PDP-edit-dish';

// import { CustFavouritesPage } from '../pages/CUST-favourites/favourites' 
// import { CustMenuInfoPage } from '../pages/CUST-menuinfo/menuinfo'























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_PDP_bookings_PDP_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_PDP_menus_PDP_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_PDP_booking_details_PDP_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_CUST_menu_menu__["a" /* CustMenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_PDP_edit_menu_PDP_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_PDP_edit_profile_PDP_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_PDP_new_dish_PDP_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_PDP_edit_dish_PDP_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_login_page_login_page__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_PDP_dashboard_PDP_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_PDP_bookings_PDP_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_PDP_menus_PDP_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_PDP_tabs_PDP_tabs__["a" /* PDPTabsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_PDP_profile_PDP_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_CUST_profile_profile__["a" /* CustProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_PDP_menu_PDP_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_PDP_new_menu_PDP_new_menu__["a" /* NewMenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bookings_bookings__["a" /* CustBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_make_booking_make_booking__["a" /* MakeBookingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_CUST_reviews_reviews__["a" /* CustReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_CUST_tabs_tabs2__["a" /* CustTabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot()
                // TabsControllerPage,
                // MenuDetailsPage,
                // MakeBookingPage
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_CUST_favourites_favourites__["a" /* CustFavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_PDP_bookings_PDP_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_PDP_menus_PDP_menus__["a" /* MenusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs2_tabs2__["a" /* Tabs2Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_PDP_booking_details_PDP_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_CUST_menu_menu__["a" /* CustMenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_PDP_edit_menu_PDP_edit_menu__["a" /* EditMenuPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_PDP_edit_profile_PDP_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_PDP_new_dish_PDP_new_dish__["a" /* NewDishPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_PDP_edit_dish_PDP_edit_dish__["a" /* EditDishPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_login_page_login_page__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_details_menu_details__["a" /* MenuDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bookings_bookings__["a" /* CustBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_make_booking_make_booking__["a" /* MakeBookingPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_PDP_dashboard_PDP_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_PDP_tabs_PDP_tabs__["a" /* PDPTabsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_PDP_profile_PDP_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_CUST_profile_profile__["a" /* CustProfilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_PDP_menu_PDP_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_PDP_new_menu_PDP_new_menu__["a" /* NewMenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_CUST_reviews_reviews__["a" /* CustReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_CUST_submitReview_submitReview__["a" /* CustSubmitReviewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_CUST_tabs_tabs2__["a" /* CustTabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera_ngx__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_30__providers_PDP_dashboardData__["a" /* DashboardData */],
                __WEBPACK_IMPORTED_MODULE_24__providers_PDP_bookingData__["a" /* BookingsData */],
                __WEBPACK_IMPORTED_MODULE_29__providers_PDP_profileData__["a" /* ProfileData */],
                __WEBPACK_IMPORTED_MODULE_28__providers_PDP_menuData__["a" /* MenusData */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_page_login_page__ = __webpack_require__(107);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(menuID, menuName, menuCategory, menuImg, pdpID) {
        this.menuID = menuID;
        this.menuName = menuName;
        this.menuCategory = menuCategory;
        this.menuImg = menuImg;
        this.pdpID = pdpID;
    }
    return Menu;
}());

//# sourceMappingURL=PDP-Menus.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var MenuItems = /** @class */ (function () {
    function MenuItems(menuItemID, menuItemName, menuItemPrice, menuItemImg, menuID) {
        this.menuItemID = menuItemID;
        this.menuItemName = menuItemName;
        this.menuItemPrice = menuItemPrice;
        this.menuItemImg = menuItemImg;
        this.menuID = menuID;
    }
    return MenuItems;
}());

//# sourceMappingURL=PDP-MenuItems.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile(id, fName, desc, add, phone, email, image) {
        this.id = id;
        this.fName = fName;
        this.desc = desc;
        this.add = add;
        this.phone = phone;
        this.email = email;
        this.image = image;
    }
    return Profile;
}());

//# sourceMappingURL=PDP-Profile.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_PDP_Menus__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_PDP_MenuItems__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenusData = /** @class */ (function () {
    function MenusData(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MenusData.prototype.getMenusData = function (pdp_id) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getMenus';
        var postData = JSON.stringify({
            // post data MUSt match the request.body.userID; 
            profileID: pdp_id
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            var menu = [];
            console.log("In /getMenus");
            _this.result = data;
            for (var i = 0; i < _this.result.length; i++) {
                menu.push(new __WEBPACK_IMPORTED_MODULE_3__models_PDP_Menus__["a" /* Menu */](_this.result[i].menuId, _this.result[i].menuName, _this.result[i].menu_category, _this.result[i].menu_image, _this.result[i].pdp_id));
            }
            _this.storage.remove('Menus');
            _this.storage.set('Menus', menu);
        });
    };
    MenusData.prototype.getMenuItemsData = function () {
        var _this = this;
        var menuItems = [];
        console.log("In /getMenuItems");
        var url = 'https://foodie1234.herokuapp.com/getMenuItems';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.result = data;
            for (var i = 0; i < _this.result.length; i++) {
                menuItems.push(new __WEBPACK_IMPORTED_MODULE_4__models_PDP_MenuItems__["a" /* MenuItems */](_this.result[i].id, _this.result[i].menuItem, _this.result[i].price, _this.result[i].menuImg, _this.result[i].menuId));
            }
            _this.storage.remove('MenuItems');
            _this.storage.set('MenuItems', menuItems);
        });
    };
    MenusData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MenusData);
    return MenusData;
}());

//# sourceMappingURL=PDP-menuData.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CUST_favourites_favourites__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menu_menu__ = __webpack_require__(119);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__CUST_favourites_favourites__["a" /* CustFavouritesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__CUST_menu_menu__["a" /* CustMenuPage */];
    }
    Tabs2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs2',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\tabs2\tabs2.html"*/'<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="home" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="heart" id="tabsController-tab2"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\tabs2\tabs2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Tabs2Page);
    return Tabs2Page;
}());

//# sourceMappingURL=tabs2.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CUST_favourites_favourites__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menu_menu__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustTabsPage = /** @class */ (function () {
    function CustTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__CUST_favourites_favourites__["a" /* CustFavouritesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__CUST_menu_menu__["a" /* CustMenuPage */];
    }
    CustTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs2',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-tabs\tabs2.html"*/'<ion-tabs id="tabsController-tabs1">\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="home" id="tabsController-tab3"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="heart" id="tabsController-tab2"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-tabs\tabs2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CustTabsPage);
    return CustTabsPage;
}());

//# sourceMappingURL=tabs2.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PDP_menu_PDP_menu__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PDP_new_menu_PDP_new_menu__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
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
    function MenusPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    MenusPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var id = localStorage.getItem('loginid');
        this.storage.get('Profile').then(function (val) {
            console.log(val);
            _this.profiles = val;
            for (var i = 0; i < _this.profiles.length; i++) {
                if (_this.profiles[i].id == id) {
                    _this.profile = _this.profiles[i];
                }
            }
            console.log('Get Profile completed');
            console.log(_this.profile);
        });
        this.storage.get('Menus').then(function (val) {
            console.log(val);
            _this.menus = val;
            console.log('Get Menus completed');
        });
    };
    MenusPage.prototype.goToMenu = function (menu) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PDP_menu_PDP_menu__["a" /* MenuPage */], {
            data: menu
        });
    };
    MenusPage.prototype.goToNewMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__PDP_new_menu_PDP_new_menu__["a" /* NewMenuPage */], {
            data: this.profile.id
        });
    };
    MenusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-PDP-menus',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\PDP-menus\PDP-menus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-left solid (click)="goToNewMenu()">\n\n        <ion-icon name="add"></ion-icon>\n\n        New Menu\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Menus\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <ion-card id="menus-card28" *ngFor="let menu of menus">\n\n    <ion-list>\n\n      <img src="{{ menu?.menuImg }}" />\n\n      <div *ngIf=\'menu?.menuImg == ""\' style="width:100%;height:177px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n\n      </div>\n\n      <ion-item color="none" id="menus-list-item61">\n\n        {{ menu?.menuName }}\n\n      </ion-item>\n\n      <button id="menus-button4" class="manage-menu-btn" ion-button clear color="positive" block on-click="goToMenu(menu)">\n\n        Manage Menu\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\PDP-menus\PDP-menus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=PDP-menus.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustFavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_details_menu_details__ = __webpack_require__(115);
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
    function CustFavouritesPage(navCtrl, navParams, loadingCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.storage = storage;
    }
    CustFavouritesPage.prototype.ngOnInit = function () {
    };
    CustFavouritesPage.prototype.ionViewWillEnter = function () {
        this.getFavs();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    CustFavouritesPage.prototype.goToMenuPage = function (menuId) {
        //this.router.navigateByUrl('/pdpMenuPage/' + this.custId + '/' + menuId);
        localStorage.setItem('cust_menuid', menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CUST_menuinfo_menuinfo__["a" /* CustMenuInfoPage */]);
    };
    CustFavouritesPage.prototype.goToMenuDetailsPage = function (event, item) {
        localStorage.setItem('cust_menuid', item.menuId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_details_menu_details__["a" /* MenuDetailsPage */], {
            item: item
        });
        console.log(item);
    };
    CustFavouritesPage.prototype.getFavs = function () {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/findFavs';
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
            if (data == false) {
                _this.ishidden = true;
                _this.ishiddenimg = false;
            }
            else {
                _this.ishidden = false;
                _this.ishiddenimg = true;
                _this.favs = data;
                console.log(_this.favs);
                // for(var i =0; i<this.favs.length;i++){
                // this.getTotalReviews(this.favs[i].menuId,i);
                // }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CustFavouritesPage.prototype.getTotalReviews = function (menuId, index) {
        var _this = this;
        var url = 'https://foodie1234.herokuapp.com/getTotalReviews';
        var postData = JSON.stringify({
            //these fields MUST match the server.js request.body.XXX;  
            menuId: menuId,
        });
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
            })
        };
        this.http.post(url, postData, httpOptions).subscribe(function (data) {
            _this.totalReviews = data;
            console.log("data22", _this.totalReviews);
            console.log("menuidd", menuId);
            console.log("index", index);
        }, function (error) {
            console.log(error);
        });
    };
    CustFavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"D:\School Project\Latest\ELP\src\pages\CUST-favourites\favourites.html"*/'<!--\n\n  Generated template for the FavouritesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Favourites</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-content style="width:100%;" [hidden]="ishidden">\n\n  <ion-list>\n\n    <ion-item *ngFor="let menu of favs" >\n\n      <ion-label class="fulllabel" >\n\n        <button class="wholebutton" item-right (click)="goToMenuPage(menu.menuId)">\n\n          <h3 text-left>{{menu.fName}} </h3>\n\n          <p text-left style="color:grey;">{{menu.menuName}} </p>\n\n          <p text-left>{{menu.menu_category}} </p>\n\n        </button>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-content style="width:100%;" [hidden]="ishiddenimg">\n\n  <ion-label class="fulllabel" >\n\n    <img src="../../assets/imgs/fav_ss.jpg"/> \n\n    </ion-label>\n\n</ion-content> -->\n\n<ion-content padding id="page2" [hidden]="ishidden">\n\n  <ion-card\n\n    id="discover-card21"\n\n    class="discover-card-each"\n\n    *ngFor="let profile of favs"\n\n  >\n\n    <ion-list>\n\n      <ion-item color="none" id="discover-list-item3">\n\n        <ion-avatar item-left>\n\n          <img src="{{profile.img}}" />\n\n        </ion-avatar>\n\n        <h2\n\n          style="margin-bottom:0;font-weight:500;"\n\n          (click)="goToMenuDetailsPage($event, profile)"\n\n        >\n\n          {{profile.fName}}\n\n        </h2>\n\n      </ion-item>\n\n      <div class="discover-image">\n\n        <img src="{{profile.menu_image}}" alt="" />\n\n      </div>\n\n      <div class="discover-info">\n\n        <h5\n\n          id="discover-heading2"\n\n          class="discover-menuname"\n\n          style="color:#424242;font-weight:600;font-size:1.6rem;"\n\n          (click)="goToMenuDetailsPage($event, profile)"\n\n        >\n\n          {{profile.menuName}}\n\n        </h5>\n\n        <div class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n          <ion-icon name="list-box" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n          <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n            ~${{profile.menu_price}}/pax\n\n          </p>\n\n        </div>\n\n        <div id="discover-markdown3" class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n          <ion-icon name="pin" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n          <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n            {{profile.location}}\n\n          </p>\n\n        </div>\n\n        <div id="discover-markdown4" class="show-list-numbers-and-dots" style="display:flex;align-items:center;margin-bottom:5px;">\n\n          <ion-icon name="pricetag" style="color:#929292;width:15px;text-align:center;"></ion-icon>\n\n          <p style="color:#000000;margin-left:7px;margin-bottom:0;font-size:1.4rem;">\n\n            {{profile.menu_category}}\n\n          </p>\n\n        </div>\n\n        <div class="discover-ratings" >\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.avgRating > 0}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.avgRating > 1}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.avgRating > 2}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.avgRating > 3}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span\n\n            class="each-star"\n\n            [ngClass]="{\'active\' : profile.avgRating > 4}"\n\n          >\n\n            <svg\n\n              xmlns="http://www.w3.org/2000/svg"\n\n              width="24"\n\n              height="24"\n\n              viewBox="0 0 24 24"\n\n            >\n\n              <path\n\n                d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"\n\n              />\n\n            </svg>\n\n          </span>\n\n          <span class="rating-amount">{{profile.totalReviews}} reviews</span>\n\n        </div>\n\n      </div>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-content style="width:100%;" [hidden]="ishiddenimg">\n\n    <ion-label class="fulllabel" >\n\n      <img src="../../assets/imgs/fav_ss.jpg"/> \n\n      </ion-label>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\School Project\Latest\ELP\src\pages\CUST-favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], CustFavouritesPage);
    return CustFavouritesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=favourites.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map