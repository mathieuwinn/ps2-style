webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard_leaderboard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splash_splash__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.leaderboardPage = __WEBPACK_IMPORTED_MODULE_2__leaderboard_leaderboard__["a" /* Leaderboard */];
        this.notificationsPage = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* Notifications */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* Signup */];
        this.splashPage = __WEBPACK_IMPORTED_MODULE_5__splash_splash__["a" /* Splash */];
        this.bannerShow = true;
        this.buttonActed = false;
        this.buttonSuccess = false;
        this.buttonFail = false;
    }
    HomePage.prototype.ngOnInit = function () {
        // this.navCtrl.push(Splash);
    };
    HomePage.prototype.closeBanner = function () {
        this.bannerShow = !this.bannerShow;
    };
    HomePage.prototype.buttonAct = function () {
        var _this = this;
        setTimeout(function () {
            _this.buttonActed = true;
        }, 300);
        setTimeout(function () {
            _this.buttonSuccess = true;
            _this.buttonActed = false;
        }, 2200);
        setTimeout(function () {
            _this.buttonSuccess = false;
        }, 4000);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="navbar-profile-space">\n\n        <div class="profile-avatar profile-avatar_navbar">\n          <div class="party-avatar"></div>\n        </div>\n\n        <div class="navbar-profile-score">\n          <span class="score-item icon-right">12<ion-icon name="heart-circle"></ion-icon></span>\n          <span class="score-item icon-right">22.2k<ion-icon name="money-circle"></ion-icon></span>\n          <span class="score-item icon-right">120<ion-icon name="users-circle"></ion-icon></span>\n          <span class="score-item icon-right">13<ion-icon name="bolt-circle"></ion-icon></span>\n        </div>\n\n\n      </div>\n\n      <ion-buttons end class="buttons-menu">\n        <button ion-button icon-only [navPush]="notificationsPage">\n          <ion-icon name="bell"></ion-icon>\n        </button>\n        <button ion-button icon-only [navPush]="leaderboardPage">\n          <ion-icon name="trophy"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div class="header-segment">\n    <ion-segment [(ngModel)]="tripPage" (ionchange)="onSegmentChange($event)">\n      <ion-segment-button value="actions">Activités</ion-segment-button>\n      <ion-segment-button value="ressources">Ressources</ion-segment-button>\n      <ion-segment-button value="investments">Investissements</ion-segment-button>\n      <ion-segment-button value="international">International</ion-segment-button>\n      <ion-segment-button value="president">Président</ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class="banner banner_header-live hide" padding-horizontal [ngClass]="bannerShow ? \'is-shown\' : \'\'">\n    <button ion-button clear icon-only class="banner_btn-close" (click)="closeBanner();">\n      <ion-icon name="chevron-up"></ion-icon>\n    </button>\n    <ion-item text-wrap>\n      <h4 class="banner-title">Super ! 👍</h4>\n      <p class="banner-text"><strong>Bravo !</strong> L’opération de tractage s’est bien passée! Vous recevez beaucoup d’<strong>encouragements </strong> et de <strong>nouveaux militants</strong> vous rejoignent ! </p>\n      <div class="banner-rewards">\n        <span item-right class="score-item score-item_price icon-right">+12<ion-icon name="heart-circle"></ion-icon></span>\n        <span item-right class="score-item score-item_price icon-right">+188<ion-icon name="users-circle"></ion-icon></span>\n      </div>\n    </ion-item>\n  </div>\n\n\n\n\n</ion-header>\n\n<ion-content class="sand-bg">\n\n  <div class="card-top-elements card-top-elements_invest-country" padding-horizontal>\n\n        <div class="flag flag_big">\n          <span class="flag-icon flag-icon-fr"></span>\n        </div>\n\n      <h6 class="card-title-top">Bonjour ! Vous investissez actuellement en France.</h6>\n\n      <ion-select [(ngModel)]="country" class="card-title-select">\n        <ion-option value="fr" selected><span class="flag-icon flag-icon-fr"></span>France</ion-option>\n        <ion-option value="us"><span class="flag-icon flag-icon-us"></span>USA</ion-option>\n        <ion-option value="en"><span class="flag-icon flag-icon-en"></span>England</ion-option>\n        <ion-option value="br"><span class="flag-icon flag-icon-br"></span>Brazil</ion-option>\n        <ion-option value="tr"><span class="flag-icon flag-icon-tr"></span>Turkey</ion-option>\n        <ion-option value="sw"><span class="flag-icon flag-icon-sw"></span>Sweden</ion-option>\n      </ion-select>\n  </div>\n\n\n\n<div padding-horizontal>\n\n  <ion-card class="card card_action">\n\n    <ion-item text-wrap>\n      <h2 class="card-title">Distribuer des tracts</h2>\n      <p class="card-rewards"><span class="score-item score-item_reward icon-left"><ion-icon name="users-circle"></ion-icon>++</span></p>\n      <p class="card-description">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes,...</p>\n    </ion-item>\n    <ion-item>\n      <div class="card-price" item-right [ngClass]="[buttonActed ? \'is-hidden\' : \'\', buttonSuccess ? \'is-hidden\' : \'\']">\n        <span class="score-item score-item_price score-item_is-touchable score-item_is-set icon-right">4<ion-icon name="heart-circle"></ion-icon></span>\n        <span class="score-item score-item_price icon-right">120<ion-icon name="users-circle"></ion-icon></span>\n        <span class="score-item score-item_price icon-right">200<ion-icon name="money-circle"></ion-icon></span>\n      </div>\n      <button ion-button item-end small class="button_action" (click)="buttonAct();" [ngClass]="[buttonActed ? \'button_loading\' : \'\', buttonSuccess ? \'button_success\' : \'\']">\n        <ion-spinner class="button-spinner" name="crescent">  </ion-spinner>\n        <span class="button_action-text">Click me</span>\n        <span class="button_action-text_success"><span class="emoji-thumb-up">👍</span> Success!</span>\n        <span class="button_action-text_fail"><span class="emoji-thumb-down">👎</span> Failed</span>\n      </button>\n    </ion-item>\n\n\n  </ion-card>\n\n  <ion-card class="card card_action">\n\n    <ion-item text-wrap>\n      <h2 class="card-title">Distribuer des tracts</h2>\n       <p class="card-rewards"><span class="score-item score-item_reward icon-left"><ion-icon name="users-circle"></ion-icon>++</span></p>\n      <p class="card-description">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes,...</p>\n    </ion-item>\n    <ion-item>\n      <div class="card-price" item-right>\n        <span class="score-item score-item_price score-item_is-touchable icon-right">0<ion-icon name="heart-circle"></ion-icon></span>\n        <span class="score-item score-item_price icon-right">70<ion-icon name="money-circle"></ion-icon></span>\n      </div>\n      <button ion-button item-end small>\n        Action\n      </button>\n    </ion-item>\n\n\n  </ion-card>\n\n  <ion-card class="card card_action">\n\n    <ion-item text-wrap>\n      <h2 class="card-title">Investissez dans les entreprises étrangères</h2>\n      <p class="card-rewards">Coût/heure : <span class="score-item score-item_reward icon-right">150<ion-icon name="money-circle"></ion-icon></span></p>\n\n      <p class="card-description">Tant de projets à financer et si peu d’argent. Aidez les entreprises à se développer, prenez les dividendes au passage.</p>\n    </ion-item>\n    <ion-item>\n      <div class="card-price" item-right>\n        <span class="score-item score-item_price icon-right">70<ion-icon name="money-circle"></ion-icon></span>\n      </div>\n      <button ion-button item-end small>\n        Action\n      </button>\n    </ion-item>\n\n\n  </ion-card>\n\n  <ion-card class="card card_action">\n\n    <ion-item text-wrap>\n      <!-- <span class="card-status card-status_new">Nouveau</span>-->\n      <h2 class="card-title">Distribuer des tracts</h2>\n      <p class="card-description">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes,...</p>\n    </ion-item>\n\n    <div class="card-needs">\n      <ion-item text-wrap>\n        <span item-left class="text-small text-muted">Nécessite</span>\n        <ul class="card-needs-list">\n          <li class="card-needs-item card-needs-item_is-checked"><strong>1x</strong> camionette de campagne</li>\n          <li class="card-needs-item"><strong>1x</strong> valise d’argent sale</li>\n        </ul>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <div class="card-price" item-right>\n        <span class="score-item score-item_price icon-right">70<ion-icon name="money-circle"></ion-icon></span>\n      </div>\n      <button ion-button icon-left item-end small disabled>\n        <ion-icon name="lock"></ion-icon> Action\n      </button>\n    </ion-item>\n\n\n  </ion-card>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leaderboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usermodal_usermodal__ = __webpack_require__(194);
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
 * Generated class for the Leaderboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Leaderboard = (function () {
    function Leaderboard(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Leaderboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Leaderboard');
    };
    Leaderboard.prototype.openUser1Modal = function () {
        var activityModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__usermodal_usermodal__["a" /* Usermodal */]);
        activityModal.present();
    };
    Leaderboard.prototype.ngOnInit = function () {
        this.openUser1Modal();
    };
    return Leaderboard;
}());
Leaderboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/leaderboard/leaderboard.html"*/'<!--\n  Generated template for the Leaderboard page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Leaderboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="sand-bg">\n\n  <div class="card-top-elements">\n    <h4 class="card-title-top">Classement général</h4>\n  </div>\n\n  <ion-card class="card card_list">\n    <button ion-item class="item_profile" (click)="openUser1Modal()">\n      <span item-start class="item-position">1.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>mrobert</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n    <button ion-item class="item_profile">\n      <span item-start class="item-position">2.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>jlavergne</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n    <button ion-item class="item_profile">\n      <span item-start class="item-position">3.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>msalles</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n  </ion-card>\n\n  <div class="card-top-elements">\n    <h4 class="card-title-top">Mon parti</h4>\n\n  </div>\n\n  <ion-card class="card card_list">\n    <button ion-item class="item_profile">\n      <span item-start class="item-position">1.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>mrobert</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n    <button ion-item class="item_profile">\n      <span item-start class="item-position">2.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>jlavergne</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n    <button ion-item class="item_profile">\n      <span item-start class="item-position">3.</span>\n      <ion-avatar item-start>\n        <img src="../assets/img/profile-avatar.png">\n      </ion-avatar>\n      <h2>msalles</h2>\n      <span item-right class="score-item score-item_list text-small text-muted">10k <ion-icon name="money-circle"></ion-icon></span>\n    </button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/leaderboard/leaderboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], Leaderboard);

//# sourceMappingURL=leaderboard.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usermodal; });
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


/**
 * Generated class for the Usermodal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Usermodal = (function () {
    function Usermodal(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Usermodal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Usermodal');
    };
    return Usermodal;
}());
Usermodal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usermodal',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/usermodal/usermodal.html"*/'<!--\n  Generated template for the Usermodal page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="modal modal_user">\n\n  <button clear ion-button icon-only class="modal_user-settings">\n    <ion-icon name="settings"></ion-icon>\n  </button>\n\n  <ion-item class="modal_user-profile" text-wrap>\n    <ion-avatar item-start>\n      <img src="../assets/img/profile-avatar.png">\n    </ion-avatar>\n    <h2>mrobert</h2>\n    <p>Membre du Parti UltraMarine depuis le 1er sept 2017</p>\n  </ion-item>\n\n  <ion-grid class="modal_user-score">\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-lg-3>\n          <ion-icon class="modal_user-score-icon" name="heart-circle"></ion-icon>\n          <strong>12</strong> points d’honnêteté\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-lg-3>\n          <ion-icon class="modal_user-score-icon" name="bolt-circle"></ion-icon>\n          <strong>7</strong> actions de jenesaiskoi\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-lg-3>\n          <ion-icon class="modal_user-score-icon" name="money-circle"></ion-icon>\n          <strong>12.2k</strong> de monnaie\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-lg-3>\n          <ion-icon class="modal_user-score-icon" name="money-circle"></ion-icon>\n          <strong>12.2k</strong> d\'argent sale\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-lg-3>\n          <ion-icon class="modal_user-score-icon" name="users-circle"></ion-icon>\n          <strong>192</strong> militants avec vous\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  <ion-item class="modal_user-score" text-wrap>\n\n  </ion-item>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/usermodal/usermodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Usermodal);

//# sourceMappingURL=usermodal.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
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


var Notifications = (function () {
    function Notifications(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Notifications.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Notifications');
    };
    return Notifications;
}());
Notifications = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the Notifications page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="sand-bg">\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Notifications);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = (function () {
    function Login(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */];
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Password forgotten',
            message: "We'll send you an email with a link to reset your password",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Send',
                }
            ]
        });
        prompt.present();
    };
    Login.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Logging in...",
            duration: 3000
        });
        loader.present();
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  <ion-list no-margin class="form form_login">\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding-horizontal text-right>\n    <button ion-button small clear text-right (click)="showPrompt()">Forgot password?</button>\n  </div>\n\n  <div margin text-center>\n      <button ion-button block disabled (click)="presentLoading()">Log in</button>\n    </div>\n\n    <div class="form-link-container">\n      <p padding-horizontal text-center class="text-small text-muted">Didn\'t sign up yet?</p>\n      <button ion-button outline small text-center [navPush]="signupPage">Create an account</button>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_leaderboard_leaderboard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_usermodal_usermodal__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_leaderboard_leaderboard__["a" /* Leaderboard */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_9__pages_usermodal_usermodal__["a" /* Usermodal */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* Splash */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_leaderboard_leaderboard__["a" /* Leaderboard */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* Notifications */],
            __WEBPACK_IMPORTED_MODULE_9__pages_usermodal_usermodal__["a" /* Usermodal */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* Splash */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Splash = (function () {
    function Splash(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */];
    }
    Splash.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Splash');
    };
    return Splash;
}());
Splash = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-splash',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/splash/splash.html"*/'\n<ion-content class="content_splash">\n\n\n<div class="splash-container">\n\n  <div class="splash-container-top">\n\n    <div class="splash-bg-anim">\n\n    </div>\n\n    <div class="splash-logo">\n      <img src="assets/img/ps-logo-splash.svg" alt="">\n    </div>\n\n    <div class="splash-bg-character">\n      <img src="assets/img/ps-bg-character.png" alt="">\n    </div>\n\n\n  </div>\n\n<div class="splash-container-bottom">\n  <div class="splash-text">\n    <p padding text-center>Gain <strong>influence</strong>, destroy your <strong>enemies</strong>, <br/>rise to <strong>power</strong>.</p>\n  </div>\n</div>\n\n\n\n</div>\n\n\n\n\n\n</ion-content>\n\n<div class="footer_actions" padding-horizontal>\n  <button ion-button block [navPush]="signupPage">Get started</button>\n  <button ion-button small outline block class="btn-dark btn-dark_outline" [navPush]="loginPage">I already have an account</button>\n</div>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/splash/splash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Splash);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Signup = (function () {
    function Signup(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */];
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Creating your profile...",
            duration: 3000
        });
        loader.present();
    };
    Signup.prototype.ngOnInit = function () {
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/signup/signup.html"*/'<!--\n  Generated template for the Signup page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create an account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list no-margin class="form form_signup">\n\n    <ion-item>\n      <ion-input type="text" placeholder="Pick a username"></ion-input>\n      <ion-icon name="check-circle" item-right class="input-icon input-icon_right input-icon_valid"></ion-icon>\n    <!--  <ion-icon name="cancel-circle" item-right class="input-icon input-icon_right input-icon_invalid"></ion-icon> -->\n\n\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="email" placeholder="Email address"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Select your country</ion-label>\n      <ion-select [(ngModel)]="country">\n        <ion-option value="fr" selected><span class="flag-icon flag-icon-fr"></span>France</ion-option>\n        <ion-option value="us"><span class="flag-icon flag-icon-us"></span>USA</ion-option>\n        <ion-option value="en"><span class="flag-icon flag-icon-en"></span>England</ion-option>\n        <ion-option value="br"><span class="flag-icon flag-icon-br"></span>Brazil</ion-option>\n        <ion-option value="tr"><span class="flag-icon flag-icon-tr"></span>Turkey</ion-option>\n        <ion-option value="sw"><span class="flag-icon flag-icon-sw"></span>Sweden</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n    <div margin text-center>\n\n      <button ion-button block disabled (click)="presentLoading()">Create an account</button>\n    </div>\n\n\n    <div class="form-link-container">\n      <p padding-horizontal text-center class="text-small text-muted">Already have an account?</p>\n      <button ion-button outline small center [navPush]="loginPage">Log in</button>\n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mathieu/Documents/Work/PoliticsSimulator/ionicStyle/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map