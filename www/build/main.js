webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"D:\ConvertSmilePoint\src\pages\news\news.html"*/'\n<ion-header>\n  <ion-toolbar >\n    <div>\n  <ion-navbar>       \n      <ion-title>             \n            <span text-color="my-custom-color">ข่าวสาร</span>\n         \n      </ion-title>       \n          <ion-buttons  right>              \n        <ion-icon text-color="my-custom-color" name="notifications"></ion-icon>\n        &nbsp;\n         <ion-icon text-color="my-custom-color" name="mail"></ion-icon>\n         &nbsp;\n         &nbsp;\n      </ion-buttons>  \n  </ion-navbar>\n</div>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\ConvertSmilePoint\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/news/news.module": [
		274,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convertSmilePoint_convertSmilePoint__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(100);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__convertSmilePoint_convertSmilePoint__["a" /* ConvertSmilePointPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ConvertSmilePoint\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="หน้าหลัก" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="สิทธิพิเศษ" tabIcon="md-bowtie"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Smilepoint" tabIcon="md-happy"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="News" tabIcon="md-megaphone"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ConvertSmilePoint\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\ConvertSmilePoint\src\pages\about\about.html"*/'<ion-header>\n  <ion-toolbar >\n    <div>\n  <ion-navbar>       \n      <ion-title>             \n            <span text-color="my-custom-color">สิทธิพิเศษ</span>\n         \n      </ion-title>       \n          <ion-buttons  right>              \n        <ion-icon text-color="my-custom-color" name="notifications"></ion-icon>\n        &nbsp;\n         <ion-icon text-color="my-custom-color" name="mail"></ion-icon>\n         &nbsp;\n         &nbsp;\n      </ion-buttons>  \n  </ion-navbar>\n</div>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>  \n    <ion-list>\n\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/nature.png">\n          </ion-thumbnail>\n          <h2>My Neighbor Totoro</h2>\n          <p>Hayao Miyazaki • 1988</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/weather.png">\n          </ion-thumbnail>\n          <h2>Raiders of the Lost Ark</h2>\n          <p>Steven Spielberg • 1981</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/christmas.png">\n          </ion-thumbnail>\n          <h2>Ghostbusters</h2>\n          <p>Ivan Reitman • 1984</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/nature.png">\n          </ion-thumbnail>\n          <h2>Batman</h2>\n          <p>Tim Burton • 1988</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/cherry.png">\n          </ion-thumbnail>\n          <h2>Back to the Future</h2>\n          <p>Robert Zemeckis • 1985</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/weather.png">\n          </ion-thumbnail>\n          <h2>The Empire Strikes Back</h2>\n          <p>Irvin Kershner • 1980</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n    \n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="img/christmas.png">\n          </ion-thumbnail>\n          <h2>The Terminator</h2>\n          <p>James Cameron • 1984</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>    \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ConvertSmilePoint\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertSmilePointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConvertSmilePointPage = /** @class */ (function () {
    function ConvertSmilePointPage(navCtrl, inAppBrowser, atrCtrl) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.atrCtrl = atrCtrl;
        this.currentNumber = 0;
        this.currentSmilePoint = 100;
        this.currentEsticker = 10000;
        this.amountSmilePoint = 0;
    }
    ConvertSmilePointPage.prototype.openWebPage = function (url) {
        var options = {
            zoom: 'no'
        };
        var browser = this.inAppBrowser.create(url, '_self', options);
    };
    ConvertSmilePointPage.prototype.increment = function () {
        if (this.currentEsticker > 800) {
            this.currentNumber = this.currentNumber + 800;
            this.currentSmilePoint = this.currentSmilePoint + 1;
            this.amountSmilePoint = this.amountSmilePoint + 1;
            this.currentEsticker = this.currentEsticker - 800;
            this.currentNumber;
            this.currentSmilePoint;
            this.currentEsticker;
            this.amountSmilePoint;
        }
        else {
            return this.currentEsticker;
        }
    };
    ConvertSmilePointPage.prototype.decrement = function () {
        if (this.currentNumber * 1 > 0) {
            this.currentNumber = this.currentNumber - 800;
            this.currentSmilePoint = this.currentSmilePoint - 1;
            this.amountSmilePoint = this.amountSmilePoint - 1;
            this.currentEsticker = this.currentEsticker + 800;
            this.currentNumber;
            this.currentSmilePoint;
            this.currentEsticker;
            this.amountSmilePoint;
        }
        else {
            return this.currentNumber;
        }
    };
    ConvertSmilePointPage.prototype.showConfirmAlert = function () {
        var alertConfirm = this.atrCtrl.create({
            title: '',
            subTitle: 'ต้องการแลก E-Sticker เป็น Smile Point จำนวน&nbsp;' + this.amountSmilePoint + '&nbsp;point ?',
            message: '',
            cssClass: 'method-color',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alertConfirm.present();
    };
    ConvertSmilePointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-convertSmilePoint',template:/*ion-inline-start:"D:\ConvertSmilePoint\src\pages\convertSmilePoint\convertSmilePoint.html"*/'<ion-header>\n<ion-toolbar >\n    <div>\n  <ion-navbar>       \n      <ion-title>             \n            <span text-color="my-custom-color"> SmilePoint </span>\n         \n      </ion-title>       \n          <ion-buttons right>              \n        <ion-icon text-color="my-custom-color" name="notifications"></ion-icon>\n        &nbsp;\n         <ion-icon text-color="my-custom-color" name="mail"></ion-icon>\n         &nbsp;\n         &nbsp;\n      </ion-buttons>  \n  </ion-navbar>\n</div>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid text-center>\n        <ion-row>\n          <ion-col >   \n            <button ion-button  button color="mtl" block large>E-Sticker</button>\n          \n          <ion-card card>\n              <img src="img/Untitled-1.png" width="20" />\n              <ion-card-content>\n                  <h1 ion-text text-center color="mtl">{{currentEsticker}}</h1>      \n              </ion-card-content>\n            </ion-card>\n        </ion-col>\n\n    <ion-col>\n    \n      <button ion-button  button color="light" block large>Smile Point</button>\n    \n    <ion-card card>\n        <img src="img/Untitled-1.png" width="20" />\n        <ion-card-content>   \n          <h1 ion-text text-center color="mtl">{{currentSmilePoint}}</h1>         \n        </ion-card-content>\n      </ion-card>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  <br>\n  <br>\n  <ion-grid>      \n         <ion-row>         \n          <ion-col col-start col-4 push-3 > \n              <button ion-button icon-only name="remove-circle" (click)="decrement()" color="mtl" style="border-radius:100%; right:10px">\n                  <ion-icon name="remove" ></ion-icon>\n                </button>           \n          </ion-col>\n           <ion-col col-center no-padding>             \n              <ion-item float-left>\n                <ion-input  border type="text" value={{currentNumber}} style="max-width: 100%; "></ion-input>              \n              </ion-item>              \n            </ion-col>   \n            &nbsp;\n            &nbsp;\n             &nbsp;\n                <ion-col col-end col-4 push-0 style="padding-right:1px;">                     \n              <button ion-button icon-only name="add-circle" (click)="increment()" color="mtl" style="border-radius:100%; right:10px">\n              <ion-icon name="md-add" ></ion-icon>\n            </button>            \n          </ion-col> \n        </ion-row> \n    </ion-grid>\n    <br> \n  <br>    \n    <ion-grid>  \n      <ion-row>         \n        <ion-col col-start col-2 pull-0></ion-col>\n        &nbsp;             \n         <ion-col col-center>                        \n              <button ion-button  button color="mtl" block large (click)="showConfirmAlert()"  style="left: 4px"><small>แลก Smile Point</small></button>                                      \n          </ion-col>           \n          &nbsp;\n           &nbsp;\n           &nbsp;\n        <ion-col col-end col-2 push-1></ion-col> \n      </ion-row>\n  </ion-grid> \n  <br> \n  <br>\n  <h3 ion-text text-center color="mtl">800 SmilePoint  =   1 E-Sticker</h3>    \n  <ion-grid>\n      <ion-row>\n        <ion-col> \n          <button ion-button  button color="mtl" block large><small>ตรวจสอบคะแนน<br>Smile Point</small></button>       \n      </ion-col>\n  <ion-col>  \n    <button ion-button  button color="mtl" block large onclick="window.open(\'https://google.com\', \'_self\', \'location=yes\',\'footer=yes\'); return false;"><small>สิทธิพิเศษสำหรับลูกค้า<br>เมืองไทย Smile Club </small></button>  \n</ion-col>\n</ion-row>\n</ion-grid>    \n</ion-content>\n\n  '/*ion-inline-end:"D:\ConvertSmilePoint\src\pages\convertSmilePoint\convertSmilePoint.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConvertSmilePointPage);
    return ConvertSmilePointPage;
}());

//# sourceMappingURL=convertSmilePoint.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        this.slides = [
            {
                title: "Welcome to MTL Sixpacks!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "img/logo.png",
            },
            {
                title: "What is MTL Sixpacks?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "img/nature.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "img/weather.png",
            }
        ];
        this.buttonClicked = false; //Whatever you want to initialise it as
    }
    HomePage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ConvertSmilePoint\src\pages\home\home.html"*/'<ion-header>\n    <ion-toolbar >\n        <div>\n      <ion-navbar>       \n          <ion-title>             \n                <span text-color="my-custom-color">หน้าหลัก</span>\n             \n          </ion-title>       \n              <ion-buttons right>              \n            <ion-icon text-color="my-custom-color" name="notifications"></ion-icon>\n            &nbsp;\n             <ion-icon text-color="my-custom-color" name="mail"></ion-icon>\n             &nbsp;\n             &nbsp;\n          </ion-buttons>  \n      </ion-navbar>\n    </div>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    \n  <ion-header >\n    <ion-navbar color="light">\n      <ion-title>Tony Stark</ion-title>\n      \n    </ion-navbar> \n  </ion-header>\n\n        <ion-slides pager>\n                <ion-slide *ngFor="let slide of slides">\n                  <br>\n                    <ion-buttons end>\n                        Skip\n                      <!-- <button ion-button btn color="">Skip</button> -->\n                        &nbsp;\n                        &nbsp;\n                    </ion-buttons>\n                  \n                  <img [src]="slide.image" class="slide-image"/>\n                  <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n                  <p [innerHTML]="slide.description"></p>\n                </ion-slide>\n                <ion-slide>\n                  \n                  <img src="img/christmas.png" class="slide-image"/>\n                  <h2 class="slide-title">Ready to Play?</h2>\n                  <button ion-button large clear icon-end color="primary">\n                    Continue\n                    <ion-icon name="arrow-forward"></ion-icon>\n                  </button>\n                </ion-slide>\n              </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\ConvertSmilePoint\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_convertSmilePoint_convertSmilePoint__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_convertSmilePoint_convertSmilePoint__["a" /* ConvertSmilePointPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_convertSmilePoint_convertSmilePoint__["a" /* ConvertSmilePointPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ConvertSmilePoint\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ConvertSmilePoint\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map