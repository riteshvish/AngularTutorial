webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
var ClientRoutingModule = (function () {
    function ClientRoutingModule() {
    }
    return ClientRoutingModule;
}());
ClientRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], ClientRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\n<app-login></app-login>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works 2!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__loader_loader_component__["a" /* LoaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* ClientRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__chat_service__["a" /* ChatService */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatService = (function () {
    function ChatService() {
        this.url = 'http://localhost:5000';
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.message);
        this.message = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat',
        template: "\n    <p>\n      REPTILEHAUS NG2 CHAT DEMO\n    </p>\n    <div *ngFor=\"let message of messages\">\n      {{message.text}}\n    </div>\n    <input [(ngModel)]=\"message\"  /><button (click)=\"sendMessage()\">Send</button>  \n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: "\n  <app-chat></app-chat>"
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  height: inherit;\n  width: inherit;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(255,255,255,0.5);\n}\n.cube-container {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.cube-container #cube {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-animation: cubeAnimation 6s ease infinite;\n          animation: cubeAnimation 6s ease infinite;\n}\n.cube-container #cube div {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n}\n.cube-container #cube .front {\n  background: #3498db;\n  -webkit-transform: translateZ(25px);\n          transform: translateZ(25px);\n}\n.cube-container #cube .back {\n  background: #5ec6ce;\n  -webkit-transform: rotateX(-180deg) translateZ(25px);\n          transform: rotateX(-180deg) translateZ(25px);\n}\n.cube-container #cube .right {\n  background: #9b59b6;\n  -webkit-transform: rotateY(90deg) translateZ(25px);\n          transform: rotateY(90deg) translateZ(25px);\n}\n.cube-container #cube .left {\n  background: #e74c3c;\n  -webkit-transform: rotateY(-90deg) translateZ(25px);\n          transform: rotateY(-90deg) translateZ(25px);\n}\n.cube-container #cube .top {\n  background: #2ecc71;\n  -webkit-transform: rotateX(90deg) translateZ(25px);\n          transform: rotateX(90deg) translateZ(25px);\n}\n.cube-container #cube .bottom {\n  background: #f1c40f;\n  -webkit-transform: rotateX(-90deg) translateZ(25px);\n          transform: rotateX(-90deg) translateZ(25px);\n}\n@-webkit-keyframes cubeAnimation {\n  16.5% {\n    -webkit-transform: translateZ(-25px) rotateX(-90deg);\n            transform: translateZ(-25px) rotateX(-90deg);\n  }\n  33% {\n    -webkit-transform: translateZ(-25px) rotateX(90deg);\n            transform: translateZ(-25px) rotateX(90deg);\n  }\n  49.5% {\n    -webkit-transform: translateZ(-25px) rotateY(-90deg);\n            transform: translateZ(-25px) rotateY(-90deg);\n  }\n  66% {\n    -webkit-transform: translateZ(-25px) rotateY(90deg);\n            transform: translateZ(-25px) rotateY(90deg);\n  }\n  82% {\n    -webkit-transform: translateZ(-25px) rotateX(-180deg);\n            transform: translateZ(-25px) rotateX(-180deg);\n  }\n}\n@keyframes cubeAnimation {\n  16.5% {\n    -webkit-transform: translateZ(-25px) rotateX(-90deg);\n            transform: translateZ(-25px) rotateX(-90deg);\n  }\n  33% {\n    -webkit-transform: translateZ(-25px) rotateX(90deg);\n            transform: translateZ(-25px) rotateX(90deg);\n  }\n  49.5% {\n    -webkit-transform: translateZ(-25px) rotateY(-90deg);\n            transform: translateZ(-25px) rotateY(-90deg);\n  }\n  66% {\n    -webkit-transform: translateZ(-25px) rotateY(90deg);\n            transform: translateZ(-25px) rotateY(90deg);\n  }\n  82% {\n    -webkit-transform: translateZ(-25px) rotateX(-180deg);\n            transform: translateZ(-25px) rotateX(-180deg);\n  }\n}\n.mtt {\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  color: #999;\n  text-decoration: none;\n}\n.mtt span {\n  color: #e74c3c;\n}\n.mtt:hover {\n  color: #666;\n}\n.mtt:hover span {\n  color: #c0392b;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"body\">\n  <div class=\"cube-container\">\n    <div id=\"cube\">\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n      <div class=\"right\"></div>\n      <div class=\"left\"></div>\n      <div class=\"top\"></div>\n      <div class=\"bottom\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #15171c;\n}\n.cube-container {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.cube-container #cube {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-animation: cubeAnimation 6s ease infinite;\n          animation: cubeAnimation 6s ease infinite;\n}\n.cube-container #cube div {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n}\n.cube-container #cube .front {\n  background: #3498db;\n  -webkit-transform: translateZ(25px);\n          transform: translateZ(25px);\n}\n.cube-container #cube .back {\n  background: #5ec6ce;\n  -webkit-transform: rotateX(-180deg) translateZ(25px);\n          transform: rotateX(-180deg) translateZ(25px);\n}\n.cube-container #cube .right {\n  background: #9b59b6;\n  -webkit-transform: rotateY(90deg) translateZ(25px);\n          transform: rotateY(90deg) translateZ(25px);\n}\n.cube-container #cube .left {\n  background: #e74c3c;\n  -webkit-transform: rotateY(-90deg) translateZ(25px);\n          transform: rotateY(-90deg) translateZ(25px);\n}\n.cube-container #cube .top {\n  background: #2ecc71;\n  -webkit-transform: rotateX(90deg) translateZ(25px);\n          transform: rotateX(90deg) translateZ(25px);\n}\n.cube-container #cube .bottom {\n  background: #f1c40f;\n  -webkit-transform: rotateX(-90deg) translateZ(25px);\n          transform: rotateX(-90deg) translateZ(25px);\n}\n@-webkit-keyframes cubeAnimation {\n  16.5% {\n    -webkit-transform: translateZ(-25px) rotateX(-90deg);\n            transform: translateZ(-25px) rotateX(-90deg);\n  }\n  33% {\n    -webkit-transform: translateZ(-25px) rotateX(90deg);\n            transform: translateZ(-25px) rotateX(90deg);\n  }\n  49.5% {\n    -webkit-transform: translateZ(-25px) rotateY(-90deg);\n            transform: translateZ(-25px) rotateY(-90deg);\n  }\n  66% {\n    -webkit-transform: translateZ(-25px) rotateY(90deg);\n            transform: translateZ(-25px) rotateY(90deg);\n  }\n  82% {\n    -webkit-transform: translateZ(-25px) rotateX(-180deg);\n            transform: translateZ(-25px) rotateX(-180deg);\n  }\n}\n@keyframes cubeAnimation {\n  16.5% {\n    -webkit-transform: translateZ(-25px) rotateX(-90deg);\n            transform: translateZ(-25px) rotateX(-90deg);\n  }\n  33% {\n    -webkit-transform: translateZ(-25px) rotateX(90deg);\n            transform: translateZ(-25px) rotateX(90deg);\n  }\n  49.5% {\n    -webkit-transform: translateZ(-25px) rotateY(-90deg);\n            transform: translateZ(-25px) rotateY(-90deg);\n  }\n  66% {\n    -webkit-transform: translateZ(-25px) rotateY(90deg);\n            transform: translateZ(-25px) rotateY(90deg);\n  }\n  82% {\n    -webkit-transform: translateZ(-25px) rotateX(-180deg);\n            transform: translateZ(-25px) rotateX(-180deg);\n  }\n}\n.mtt {\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  color: #999;\n  text-decoration: none;\n}\n.mtt span {\n  color: #e74c3c;\n}\n.mtt:hover {\n  color: #666;\n}\n.mtt:hover span {\n  color: #c0392b;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--\nAuthor: DesignMaz\nAuthor URL: https://www.designmaz.net\nLicense URL: https://www.designmaz.net/licence/\n--*/\n/* start editing from here */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0;padding:0;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/* start editing from here */\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{\tvertical-align:baseline;}/* vertical align baseline */\n.vertical-top{\tvertical-align:top;}/* vertical align top */\n.underline{\tpadding-bottom:5px;\tborder-bottom: 1px solid #eee; margin:0 0 20px 0;}/* Add 5px bottom padding and a underline */\nnav.vertical ul li{\tdisplay:block;}/* vertical menu */\nnav.horizontal ul li{\tdisplay: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*end reset*/\n/*--sign up page start here--*/\n.body{\n\tfont-family: 'Open Sans', sans-serif;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ");\n  height: calc(100vh -  60px);\n  padding-top: 60px;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: cover;\n}\nh1 {\n  font-size: 2.3em;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n  margin: 1em 0em 0em 0em;\n}\n.login {\n  /*width: 31%;*/\n\twidth: 350px;\n  margin: 0px auto;\n  padding: 15px 0px 0px 0px;\n  border-radius: 5px;\n  background:#fff;\n}\n.login h2 {\n  font-size: 30px;\n  font-weight: 700;\n  color: #000;\n  text-align:center;\n}\n.login form input[type=\"text\"] {\n  outline: none;\n  font-size: 15px;\n  font-weight: 400;\n  color: #c0c0c0;\n  padding: 10px 20px 10px 46px;\n  border: 1px solid #2DC2BC;\n  border-radius: 5px;\n  margin: 0 auto 15px;\n  width: 60%;\n  -webkit-appearance: none;\n}\nform {\n  padding: 22px 0px 0px 0px;\n}\n.login input[type=\"password\"] {\n  outline: none;\n  font-size: 19px;\n  font-weight: 400;\n  padding: 10px 20px 10px 45px;\n  border: 1px solid #2DC2BC;\n  border-radius: 5px;\n  margin: 0 auto 11px;\n  width: 60%;\n  -webkit-appearance: none;\n  color:#c0c0c0;\n}\n.login-bwn {\n  text-align: center;\n}\n.login input[type=\"submit\"] {\n  background: #2DC2BC;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 6px 0px;\n  width: 20%;\n  cursor: pointer;\n  outline: none;\n  margin: 15px 0px 5px 0px;\n  border: none;\n  border-radius: 5px;\n}\n.login input[type=\"submit\"]:hover {\n\tbackground:rgb(160, 6, 6);\n\ttransition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n}\n.login form input.user {\n  /*background: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png')no-repeat 15px 7px #fff;*/\n  display: block;\n}\n.login form input.lock {\n  /*background: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png')no-repeat 15px 7px #fff;*/\n  display: block;\n}\nlabel.checkbox {\n  float: left;\n}\n.forgot input[type=\"checkbox\"] {\n  display: none;\n}\n.forgot.checkbox input {\n\tposition: absolute;\n\tleft: -9999px;\n}\n.forgot.checkbox i {\n\tborder-color: #fff;\n\ttransition: border-color 0.3s;\n\t-o-transition: border-color 0.3s;\n\t-ms-transition: border-color 0.3s;\n\t-moz-transition: border-color 0.3s;\n\t-webkit-transition: border-color 0.3s;\n\n}\n.forgot.checkbox i:hover {\n\tborder-color:red;\n\n}\n.forgot i:before {\n\tbackground-color: #2da5da;\n}\n.forgot  .rating label {\n\tcolor: #ccc;\n\ttransition: color 0.3s;\n\t-o-transition: color 0.3s;\n\t-ms-transition: color 0.3s;\n\t-moz-transition: color 0.3s;\n\t-webkit-transition: color 0.3s;\n}\n.forgot .checkbox input + i:after {\n\tposition: absolute;\n\topacity: 0;\n\ttransition: opacity 0.1s;\n\t-o-transition: opacity 0.1s;\n\t-ms-transition: opacity 0.1s;\n\t-moz-transition: opacity 0.1s;\n\t-webkit-transition: opacity 0.1s;\n}\n.forgot .checkbox input + i:after {\n  content: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png') no-repeat 7px 1px;\n    top: 2px;\n  left: 2px;\n  width: 15px;\n  height: 15px;\n}\n.forgot .checkbox {\n\tpadding: 6px 0px 0px 22px;\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tline-height: 5px;\n\tcolor:#c0c0c0;\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: block;\n\tfloat: left;\n}\n.forgot .checkbox:hover {\n\ttext-decoration: none;\n}\n.forgot .checkbox i {\n position: absolute;\n  top: 1px;\n  left: 0px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  outline: none;\n  border: none;\n  background: #DDD8D8;\n  border-radius: 3px;\n}\n.forgot  .checkbox input + i:after {\n\tposition: absolute;\n\topacity: 0;\n\ttransition: opacity 0.1s;\n\t-o-transition: opacity 0.1s;\n\t-ms-transition: opacity 0.1s;\n\t-moz-transition: opacity 0.1s;\n\t-webkit-transition: opacity 0.1s;\n}\n.forgot .checkbox input + i:after {\n\tcolor: #2da5da;\n}\n.forgot.checkbox input:checked + i,\n.forgot . input:checked + i {\n\tborder-color: #2da5da;\n}\n.forgot .rating input:checked ~ label {\n\tcolor: #2da5da;\n}\n\n.forgot .checkbox input:checked + i:after {\n\topacity: 1;\n}\n.login-bottom {\n  text-align: center;\n  background: rgba(236, 236, 236, 0.29);\n  padding: 0px 0px 40px 0px;\n  border-bottom-left-radius:5px;\n   border-bottom-right-radius:5px;\n     padding: 0 1.5em 2em;\n}\n.login-bottom h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n  padding: 25px 0px 0px 0px;\n}\n.login-bottom p {\n  font-size: 15px;\n  font-weight: 400;\n  color: #000;\n  margin: 4px 0px 10px 0px;\n}\n.face-bwn {\n  width: 20%;\n  display: inline-block;\n  margin: 40px 0px 40px 0px;\n}\n.forgot {\n  width: 75%;\n  margin: 0 auto;\n}\n.login-para p {\n  padding: 0px 4px 0px 0px;\n}\n.login-check {\n  float: left;\n}\n.login-para {\n  float: right;\n}\n.login-para p a {\n  font-size: 15px;\n  font-weight: 400;\n  color: rgb(219, 0, 0);\n}\n.login-para p a:hover {\n   color:#999;\n   transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n}\n.login-bottom h4 {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n  margin: 8px 0px 0px 0px;\n}\n.login-bottom h4 a{\n  font-size: 16px;\n  font-weight: 400;\n  color:rgb(219, 0, 0);\n}\n.login-bottom h4 a:hover{\n\tcolor: #2DC2BC;\n\ttransition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n}\n.reg-bwn {\n  margin: 25px 0px 0px 0px;\n}\n.reg-bwn a {\n  font-size: 16px;\n  font-weight: 500;\n  color: #fff;\n  background: #2DC2BC;\n  padding: 8px 25px;\n  border-radius: 5px;\n}\n.reg-bwn a:hover{\n  background: rgb(219, 0, 0);\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n}\n.button a {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n  margin: 0px 1.5% 0px 0px;\n  border-radius: 4px;\n  float:left;\n  width:32.33%;\n    padding: 0px 0;\n}\n.button a.tw {\n  background: #1DAEE3;\n float: left;\n\n}\n.button a.fa {\n  background:#3B5998;\n float: left;\n\n}\n.button a span {\n  margin-top: 8px;\n  display: block;\n}\n.button a.go {\n  background:#D34836;\n margin:0;\n float: left;\n}\n.button a.tw:hover{\n  background:#1CA4D6;\n}\n.button a.fa:hover{\n  background:#37528C;\n}\n.button a.go:hover{\n  background:#C74534;\n}\ni.anc-tw {\n  background: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png')no-repeat 10px 9px #1CA4D6;\n  width: 26px;\n  height: 19px;\n  display: inline-block;\n  padding: 10px 6px;\n float: left;\n  border-radius: 4px 0px 0px 4px;\n}\ni.anc-fa {\nfloat: left;\n  background: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png')no-repeat 6px 9px #37528C;\n  width: 26px;\n  height: 19px;\n  display: inline-block;\n  padding: 10px 6px;\n\n  border-radius: 4px 0px 0px 4px;\n}\ni.anc-go {\n  background: url('http://professor-excel.com/wp-content/uploads/2016/01/Wallpaper_Mobile_4.png')no-repeat 9px 9px #C74534;\n  width: 26px;\n  height: 19px;\n  display: inline-block;\n  padding: 10px 6px;\n float: left;\n  border-radius: 4px 0px 0px 4px;\n}\n.button {\n  padding: 2px 0px 12px 0px;\n  border-bottom: 1px solid #ccc;\n}\nh3 {\n  font-size: 2em;\n  font-weight: 600;\n  color: #fff;\n  text-align: center;\n  margin-top: 1em;\n}\n.clear{\n\tclear:both;\n}\n.copyright {\n  margin: 3em 0em 2em 0em;\n  text-align: center;\n}\n.copyright p {\n  font-size: 1em;\n  font-weight: 400;\n  color: #fff;\n}\n.copyright p a{\n  font-size: 1em;\n  font-weight: 400;\n  color:#fff ;\n}\n.copyright p a:hover{\n\tcolor: #D34836;\n\t transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n}\n/*--media quries start here--*/\n@media(max-width:1440px){\n.login-para p {\n  padding: 0px 0px 0px 0px;\n}\n.forgot {\n  width: 73%;\n}\n.face-bwn {\n  width: 22%;\n}\n}\n@media(max-width:1366px){\n.forgot {\n  width: 75%;\n}\n}\n@media(max-width:1280px){\n.button a {\n  font-size: 13px;\n}\n.button a span {\n  margin-top: 10px;\n}\n.reg-bwn a {\n  font-size: 14px;\n}\n}\n@media(max-width:1024px){\n.login {\n  /*width: 41%;*/\n\twidth: 350px;\n}\n}\n@media(max-width:768px){\n.login {\n  /*width: 55%;*/\n\twidth: 350px;\n}\n}\n@media (max-width: 640px){\n.login {\n  /*width: 70%;*/\n\twidth: 350px;\n}\n}\n@media (max-width: 480px){\n.login {\n  /*width: 88%;*/\n\twidth: 350px;\n}\n}\n@media(max-width:440px){\n.button a {\n  float: none;\n  width: 100%;\n  margin-bottom: 1em;\n}\n}\n@media (max-width: 620px){\nh1 {\n  font-size: 1.5em;\n}\n.body{\n  padding-top: 0;\n  background-image: none;\n}\n.login {\n  width: 320px;\nborder-radius: 0px;\npadding-top: 20px;\n}\n.login h2 {\n  font-size: 22px;\n}\nform {\n  padding: 15px 0px 0px 0px;\n}\n.login form input[type=\"text\"],.login input[type=\"password\"] {\n  font-size: 13px;\n    padding: 9px 20px 9px 45px;\n\twidth: 66%;\n}\n.forgot {\n  width: 90%;\n}\n.forgot .checkbox {\n  font-size: 13px;\n}\n .login-check {\n  margin-top: 3px;\n}\n.login-para p a {\n  font-size: 13px;\n}\n.login input[type=\"submit\"] {\n  font-size: 15px;\n    width: 25%;\n}\n.button a {\n  float: none;\n  width:32.33%;\n  margin-bottom: 1em;\n}\n.button {\n  padding: 2px 0px 8px 0px;\n}\n.login-bottom h4,.login-bottom h4 a {\n  font-size: 13px;\n}\n.reg-bwn a {\n  padding: 6px 18px;\n}\n.login-bottom h3 {\n  padding: 5px 0px 0px 0px;\n  margin-top: 0.51em;\n}\nbody {\n  min-height: 748px;\n}\n.copyright p a {\n  font-size: 0.9em;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"body\">\n\n\n\n<div class=\"login\">\n\t<app-loader></app-loader>\n\t<h2>Login</h2>\n\t<form>\n\t\t<input type=\"text\" class=\"user active\" value=\"User name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'User name';}\"/>\n\t\t<input type=\"password\" class=\"lock active\" value=\"Password\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Password';}\"/>\n\t</form>\n\t<div class=\"forgot\">\n \t\t  <div class=\"login-para\">\n \t\t\t<p><a href=\"#\"> Forgot Password? </a></p>\n \t\t </div>\n\t\t<div class=\"clear\"> </div>\n\t</div>\n\t<div class=\"login-bwn\">\n\t   <input type=\"submit\" value=\"Log in\" />\n\t</div>\n\t<div class=\"login-bottom\">\n\t\t<h3>Login</h3>\n\n\t\t<p>With your social media account</p>\n\t <div class=\"social-icons\">\n\t\t<div class=\"button\">\n\t\t\t<a class=\"tw\" href=\"#\"> <i class=\"anc-tw\"> </i> <span>Twit</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t<a class=\"fa\" href=\"#\"> <i class=\"anc-fa\"> </i> <span>GB</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t<a class=\"go\" href=\"#\"><i class=\"anc-go\"> </i><span>G+</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t\t<div class=\"clear\"> </div>\n\t\t</div>\n\t\t<h4>Don,t have an Account? <a href=\"#\"> Register Now!</a></h4>\n\t\t<div class=\"reg-bwn\"><a href=\"#\">REGISTER</a></div>\n\t</div>\n  </div>\n</div>\n</div>\n\n<!-- <div class=\"body\">\n\n\n<div class=\"login\">\n\t<h2>REGISTER</h2>\n\t<form>\n\t\t<input type=\"text\" class=\"user active\" value=\"User name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'User name';}\"/>\n\t\t<input type=\"text\" class=\"user active\" value=\"User name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'User name';}\"/>\n\t\t<input type=\"password\" class=\"lock active\" value=\"Password\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Password';}\"/>\n\t</form>\n\n\t<div class=\"login-bwn\">\n\t   <input type=\"submit\" style=\"width: 36%;\" value=\"REGISTER\" />\n\t</div>\n\t<div class=\"login-bottom\">\n\t\t<h3>Login</h3>\n\t\t<p>With your social media account</p>\n\t <div class=\"social-icons\">\n\t\t<div class=\"button\">\n\t\t\t<a class=\"tw\" href=\"#\"> <i class=\"anc-tw\"> </i> <span>Twit</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t<a class=\"fa\" href=\"#\"> <i class=\"anc-fa\"> </i> <span>GB</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t<a class=\"go\" href=\"#\"><i class=\"anc-go\"> </i><span>G+</span>\n\t\t\t<div class=\"clear\"> </div></a>\n\t\t\t\t<div class=\"clear\"> </div>\n\t\t</div>\n\t\t<h4>Have an Account? <a href=\"#\">Login</a></h4>\n\t</div>\n  </div>\n</div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.2.css"), __webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.43d16fdaa535681c0d0c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map