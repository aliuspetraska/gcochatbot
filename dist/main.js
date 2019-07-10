(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm5/microsoft-adal-angular6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], pathMatch: 'full', canActivate: [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"chatWindow\">\n    <div [ngClass]=\"isMinimalized ? 'hide-conversation' : ''\" class=\"robot\">\n      <img class=\"robotman\" src=\"/assets/img/bot-img.png\" />\n    </div>\n    <div class=\"window\">\n      <div class=\"windowBar\" (click)=\"onMinimalize()\">\n        <div class=\"botNameBar\">\n          <img\n            [ngClass]=\"!isMinimalized ? 'hide-conversation' : ''\"\n            class=\"robotImg\"\n            src=\"/assets/img/bot-img.png\"\n          />\n          <span class=\"firstPartName\">Ask </span> <span class=\"botName\">Gunhild</span>\n          <a class=\"minimalizeButton\">–</a>\n        </div>\n      </div>\n      <div [ngClass]=\"isMinimalized ? 'hide-conversation' : ''\">\n        <conversation (conversationIdEmitter)=\"sendConversationId($event)\"></conversation>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm5/microsoft-adal-angular6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(adalSvc) {
        this.adalSvc = adalSvc;
        this.title = 'app';
        this.isMinimalized = true;
        this.getToken();
    }
    AppComponent.prototype.getToken = function () {
        var _this = this;
        this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe(function (token) {
            _this.token = token;
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.onMinimalize = function () {
        if (this.isMinimalized) {
            this.isMinimalized = false;
            this.setFocus();
        }
        else {
            this.isMinimalized = true;
        }
    };
    AppComponent.prototype.setFocus = function () {
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.inputText').focus();
        }, 50);
    };
    AppComponent.prototype.sendConversationId = function (conversationId) {
        this.conversationId = conversationId;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_1__["MsAdalAngular6Service"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: reducerToken, AppModule, getBaseHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerToken", function() { return reducerToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseHref", function() { return getBaseHref; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_conversation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/conversation.component */ "./src/app/components/conversation.component.ts");
/* harmony import */ var _components_botMessage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/botMessage.component */ "./src/app/components/botMessage.component.ts");
/* harmony import */ var _components_customerMessage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customerMessage.component */ "./src/app/components/customerMessage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/rating.component */ "./src/app/components/rating.component.ts");
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.providers */ "./src/app/app.providers.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm5/microsoft-adal-angular6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_adalConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/adalConfig */ "./src/app/models/adalConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var reducerToken = new _models_adalConfig__WEBPACK_IMPORTED_MODULE_14__["AdalConfig"](_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].tenant, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].clientId, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].redirectUri, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].navigateToLoginRequestUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].cacheLocation); // Injector.create(AppConfig).get<ILoginDetailsService>(ILoginDetailsServiceToken).getLoginDetails();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_conversation_component__WEBPACK_IMPORTED_MODULE_4__["ConversationComponent"],
                _components_botMessage_component__WEBPACK_IMPORTED_MODULE_5__["BotMessageComponent"],
                _components_customerMessage_component__WEBPACK_IMPORTED_MODULE_6__["CustomerMessageComponent"],
                _components_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"],
                _components_botMessage_component__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_11__["MsAdalAngular6Module"].forRoot(reducerToken)
            ],
            providers: [_app_providers__WEBPACK_IMPORTED_MODULE_9__["AppProviders"], microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_11__["AuthenticationGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["APP_BASE_HREF"], useFactory: getBaseHref }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseHref() {
    return window.location.pathname + window.location.search;
}


/***/ }),

/***/ "./src/app/app.providers.ts":
/*!**********************************!*\
  !*** ./src/app/app.providers.ts ***!
  \**********************************/
/*! exports provided: AppProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProviders", function() { return AppProviders; });
/* harmony import */ var _services_conversation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/conversation.service */ "./src/app/services/conversation.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _configs_api_details_service_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/api-details-service.interface */ "./src/app/configs/api-details-service.interface.ts");
/* harmony import */ var _configs_api_details_service_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configs/api-details.service.prod */ "./src/app/configs/api-details.service.prod.ts");
/* harmony import */ var _configs_login_details_service_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/login-details-service.interface */ "./src/app/configs/login-details-service.interface.ts");
/* harmony import */ var _configs_login_details_service_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/login-details.service.prod */ "./src/app/configs/login-details.service.prod.ts");






var providers = [
    _services_conversation_service__WEBPACK_IMPORTED_MODULE_0__["ConversationService"],
    _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
];
providers.push({ provide: _configs_api_details_service_interface__WEBPACK_IMPORTED_MODULE_2__["IApiDetailsServiceToken"], useClass: _configs_api_details_service_prod__WEBPACK_IMPORTED_MODULE_3__["ApiDetailsServiceProd"] });
providers.push({ provide: _configs_login_details_service_interface__WEBPACK_IMPORTED_MODULE_4__["ILoginDetailsServiceToken"], useClass: _configs_login_details_service_prod__WEBPACK_IMPORTED_MODULE_5__["LoginDetailsServiceProd"] });
var AppProviders = [
    providers
];


/***/ }),

/***/ "./src/app/components/botMessage.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/botMessage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"icon\" src=\"/assets/img/bot-img.png\" />\n<div class=\"message\">\n  <span id=\"message\">\n    <div *ngFor=\"let botMsg of botMsg\">\n      <div *ngIf=\"botMsg.responseType == 'text'\">\n        <div id=\"{{ botMsg.answerId }}\" *ngIf=\"botMsg.text != null\" [innerHTML]=\"botMsg.text | safeHtml\"></div>\n      </div>\n      <div *ngIf=\"botMsg.responseType == 'option'\">\n        <div *ngIf=\"botMsg.title != null\" [innerHTML]=\"botMsg.title\"></div>\n        <div *ngIf=\"botMsg.description != null\" [innerHTML]=\"botMsg.description\"></div>\n        <div id=\"{{ botMsg.answerId }}\">\n          <button\n            type=\"button\"\n            class=\"bulletpoint\"\n            *ngFor=\"let option of botMsg.optionList\"\n            (click)=\"onOptionClick(option.label, option.value)\"\n          >\n            <i class=\"fas fa-circle bullet\"></i>\n            <div class=\"bulletpointText\">{{ option.label }}</div>\n          </button>\n        </div>\n      </div>\n      <div *ngIf=\"botMsg.responseType == 'image'\">\n        <div *ngIf=\"botMsg.imageSource != null\">\n          <div *ngIf=\"botMsg.title != null\" [innerHTML]=\"botMsg.title\"></div>\n          <div *ngIf=\"botMsg.description != null\" [innerHTML]=\"botMsg.description\"></div>\n          <img class=\"imgContainer\" src=\"{{ botMsg.imageSource }}\" alt=\"{{ botMsg.imageSource }}\" />\n          <div>\n            <a href=\"{{ botMsg.imageSource }}\" target=\"_blank\" class=\"clickImageLink\">Click to open</a>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"botMsg.responseType == 'mail'\">\n        <div>Would you like to add a comment?</div>\n        <div id=\"{{ botMsg.answerId }}\">\n          <button type=\"button\" class=\"bulletpoint\" (click)=\"onCommentOptionClick(0, botMsg.answerId)\">\n            <i class=\"fas fa-circle bullet\"></i>\n            <div class=\"bulletpointText\">No thanks, please send the question now</div>\n          </button>\n          <button type=\"button\" class=\"bulletpoint\" (click)=\"onCommentOptionClick(1, botMsg.answerId)\">\n            <i class=\"fas fa-circle bullet\"></i>\n            <div class=\"bulletpointText\">Yes</div>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showCommentBox\">\n      <input\n        class=\"commentBox\"\n        [(ngModel)]=\"commentToMail\"\n        (keyup.enter)=\"onSendMailClick()\"\n        placeholder=\"Write your comment here...\"\n      />\n      <i class=\"fas fa-paper-plane\" (click)=\"onSendMailClick()\"></i>\n    </div>\n    <div *ngIf=\"showCommentBoxThumbDown\">\n      <input\n        class=\"commentBox\"\n        [(ngModel)]=\"commentToThumbDown\"\n        (keyup.enter)=\"onSendCommentClick()\"\n        placeholder=\"Write your comment here...\"\n      />\n      <i class=\"fas fa-paper-plane\" (click)=\"onSendCommentClick()\"></i>\n    </div>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/botMessage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/botMessage.component.ts ***!
  \****************************************************/
/*! exports provided: SafeHtmlPipe, BotMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMessageComponent", function() { return BotMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_conversation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/conversation.service */ "./src/app/services/conversation.service.ts");
/* harmony import */ var _models_sendMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/sendMail */ "./src/app/models/sendMail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var BotMessageComponent = /** @class */ (function () {
    function BotMessageComponent(conversationService) {
        this.conversationService = conversationService;
        this.optionChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendMailButtonChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCommentSection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.noButtonChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendCommentChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCommentBox = false;
        this.showCommentBoxThumbDown = false;
    }
    BotMessageComponent.prototype.ngOnInit = function () {
        this.botMsg = this.botMessages;
        if (this.botMsg.length > 0 && this.botMsg[0].responseType === 'mail') {
            this.answerIdToSendMail = this.botMsg[0].answerId;
        }
        this.disablePreviousButtons();
        this.answerIds.push(this.answerId);
    };
    BotMessageComponent.prototype.disablePreviousButtons = function () {
        if (this.answerIds.length >= 1) {
            var firstAnswerId = this.answerIds[1];
            var lastAnswerId = this.answerIds[this.answerIds.length - 1];
            for (var i = firstAnswerId; i <= lastAnswerId; i++) {
                var previousOptionButton = 'div#' + i + '>button';
                var yesNoButton = 'div#' + (this.answerId - 1) + '>button';
                var sendMailButton = 'div#' + (this.answerId - 1) + '>p>button.sendMail';
                var sendMailButton2 = 'div#' + (this.answerId - 1) + '>ol>li>button.sendMail';
                var leaveCommentButton = 'div#' + (this.answerId - 1) + '>ol>li>button.leaveComment';
                var leaveCommentButton2 = 'div#' + (this.answerId - 1) + '>p>button.leaveComment';
                jquery__WEBPACK_IMPORTED_MODULE_2__(previousOptionButton).attr('disabled', 'true');
                jquery__WEBPACK_IMPORTED_MODULE_2__(sendMailButton).attr('disabled', 'true');
                jquery__WEBPACK_IMPORTED_MODULE_2__(sendMailButton2).attr('disabled', 'true');
                jquery__WEBPACK_IMPORTED_MODULE_2__(yesNoButton).attr('disabled', 'true');
                jquery__WEBPACK_IMPORTED_MODULE_2__(leaveCommentButton).attr('disabled', 'true');
                jquery__WEBPACK_IMPORTED_MODULE_2__(leaveCommentButton2).attr('disabled', 'true');
            }
        }
    };
    BotMessageComponent.prototype.onOptionClick = function (selectedText, selectedValue) {
        var optionButton = 'div#' + this.answerId + '>button';
        jquery__WEBPACK_IMPORTED_MODULE_2__(optionButton).attr('disabled', 'true');
        this.optionChosen.emit({ text: selectedText, value: selectedValue, answerId: this.answerId });
    };
    BotMessageComponent.prototype.sendMail = function (commentToMail) {
        var _this = this;
        this.sendMailData = new _models_sendMail__WEBPACK_IMPORTED_MODULE_4__["SendMail"]();
        this.sendMailData.AnswerId = this.answerIdToSendMail;
        this.sendMailData.Comment = commentToMail;
        this.sendMailData.ConversationId = this.conversationId;
        this.conversationService.sendMail(this.sendMailData).subscribe(function (res) {
        }, function (error) {
            _this.error = error;
        });
    };
    BotMessageComponent.prototype.onClick = function (e) {
        this.event = e;
        if (this.event.target.className === 'sendMail' || this.event.target.className === 'yesButton') {
            this.showCommentSection.emit();
        }
        else if (this.event.target.className === 'noButton') {
            this.noButtonChosen.emit();
        }
        if (this.event.target.className === 'sendMail' || this.event.target.className === 'yesButton'
            || this.event.target.className === 'noButton') {
            var yesNoButton = 'div#' + this.answerId + '>button';
            var sendMailButton = 'div#' + this.answerId + '>p>button.sendMail';
            var sendMailButton2 = 'div#' + this.answerId + '>ol>li>button.sendMail';
            jquery__WEBPACK_IMPORTED_MODULE_2__(sendMailButton).attr('disabled', 'true');
            jquery__WEBPACK_IMPORTED_MODULE_2__(sendMailButton2).attr('disabled', 'true');
            jquery__WEBPACK_IMPORTED_MODULE_2__(yesNoButton).attr('disabled', 'true');
        }
        if (this.event.target.className === 'leaveComment') {
            this.showCommentBoxThumbDown = true;
            var leaveCommentButton = 'div#' + this.answerId + '>ol>li>button.leaveComment';
            var leaveCommentButton2 = 'div#' + this.answerId + '>p>button.leaveComment';
            jquery__WEBPACK_IMPORTED_MODULE_2__(leaveCommentButton).attr('disabled', 'true');
            jquery__WEBPACK_IMPORTED_MODULE_2__(leaveCommentButton2).attr('disabled', 'true');
        }
    };
    BotMessageComponent.prototype.onCommentOptionClick = function (answer, commentCounter) {
        var optionButton = 'div#' + commentCounter + '>button';
        jquery__WEBPACK_IMPORTED_MODULE_2__(optionButton).attr('disabled', 'true');
        if (answer === 1) {
            this.showCommentBox = true;
        }
        else {
            this.onSendMailClick();
        }
    };
    BotMessageComponent.prototype.onSendMailClick = function () {
        this.showCommentBox = false;
        this.sendMail(this.commentToMail);
        this.sendMailButtonChosen.emit();
    };
    BotMessageComponent.prototype.onSendCommentClick = function () {
        var commentToThumbDown = {
            answerId: this.answerId,
            comment: this.commentToThumbDown
        };
        if (!this.checkIfStringIsBlank(this.commentToThumbDown)) {
            this.showCommentBoxThumbDown = false;
            this.sendCommentChosen.emit(commentToThumbDown);
        }
    };
    BotMessageComponent.prototype.checkIfStringIsBlank = function (text) {
        return text === undefined || text === null || text === '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BotMessageComponent.prototype, "botMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BotMessageComponent.prototype, "answerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotMessageComponent.prototype, "conversationId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BotMessageComponent.prototype, "answerIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotMessageComponent.prototype, "optionChosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotMessageComponent.prototype, "sendMailButtonChosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotMessageComponent.prototype, "showCommentSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotMessageComponent.prototype, "noButtonChosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BotMessageComponent.prototype, "sendCommentChosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BotMessageComponent.prototype, "onClick", null);
    BotMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'botMessage',
            template: __webpack_require__(/*! ./botMessage.component.html */ "./src/app/components/botMessage.component.html")
        }),
        __metadata("design:paramtypes", [_services_conversation_service__WEBPACK_IMPORTED_MODULE_3__["ConversationService"]])
    ], BotMessageComponent);
    return BotMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/conversation.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/conversation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"windowContent\" #scrollMe>\n    <div id=\"Conversation\" class=\"right-container\">\n\n        <div class=\"messages\">\n            <div class=\"message-container\">\n                <div class=\"pull-down-table\">\n                    <div class=\"pull-down-cell\" id=\"chatLog\">\n                        <div *ngFor=\"let message of messages\" #messages>\n                            <div class=\"botMessage\" id=\"botMessage\">\n                                <botMessage *ngIf=\"message.isBotMessage\" [botMessages]=\"message.botMessages\" [answerId]=\"message.answerId\" \n                                    [conversationId]=\"conversationId\" [answerIds]=\"answerIds\"\n                                    (optionChosen)=\"onOptionClick($event)\" (sendMailButtonChosen)=\"onSendMailCommentClick()\"\n                                    (showCommentSection)=\"showCommentMessage()\" (noButtonChosen)=\"onNoButtonClick()\"\n                                    (sendCommentChosen)=\"onSendCommentClick($event)\"></botMessage>\n                                <div *ngIf=\"message.isRankNeeded\">\n                                    <rating [answerId]=\"message.answerId\" (ratingClick)=\"ratingComponentClick($event)\"></rating>\n                                </div>\n                            </div>\n                            <customerMessage *ngIf=\"message.isCustomerMessage\" [inputMessage]=\"message.textCustomer\" [initials]=\"initialsName\"></customerMessage>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<div class=\"windowInput\">\n    <input class=\"inputText\" [(ngModel)]=\"customerMessageInput\" (keyup.enter)=\"onInputMessage()\" placeholder=\"Type here your question...\"/>\n    <button type=\"button\" class=\"sendButton\" (click)=\"onInputMessage()\"><i class=\"fas fa-paper-plane\"></i></button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/conversation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/conversation.component.ts ***!
  \******************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/conversation.service */ "./src/app/services/conversation.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(conversationService, authService) {
        this.conversationService = conversationService;
        this.authService = authService;
        this.conversationIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messages = [];
        this.buttons = [];
        this.options = [];
    }
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.answerIds = [];
        // for initial message
        this.conversationService.initConversation().subscribe(function (res) {
            _this.conversationId = res.conversationId;
            _this.conversationIdEmitter.emit(_this.conversationId);
            _this.wrongAnswersCounter = res.wrongAnswersCounter;
            _this.system = res.system;
            _this.botMessages = res.messageAnswers;
            _this.pushBotMessageToMessagesArray(_this.botMessages, false);
        }, function (errors) {
            _this.error = errors;
        });
        this.initialsName = this.getInitials();
        this.scrollToBottom();
    };
    ConversationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messagesContainer.changes.subscribe(function () {
            _this.scrollToBottom(), _this.ratingCounter++;
        });
    };
    ConversationComponent.prototype.getInitials = function () {
        var userName = this.authService.getName();
        var initials = userName
            .split(' ')
            .map(function (n) { return n[0]; })
            .join('');
        return initials;
    };
    ConversationComponent.prototype.onInputMessage = function () {
        var _this = this;
        var inputMessage = this.customerMessageInput;
        this.inputCustomerMessage = inputMessage;
        if (!this.checkIfStringIsBlank(inputMessage)) {
            var customerMsg = {
                conversationId: this.conversationId,
                text: inputMessage,
                system: this.system,
                wrongAnswersCounter: this.wrongAnswersCounter,
            };
            this.conversationService.sendCustomerInput(customerMsg).subscribe(function (res) {
                _this.pushCustomerMessageToMessagesArray(inputMessage, false);
                _this.conversationId = res.conversationId;
                _this.system = res.system;
                _this.wrongAnswersCounter = res.wrongAnswersCounter;
                _this.readMessageAnswers(res);
            }, function (errors) {
                _this.error = errors;
            });
        }
        else {
            return;
        }
        this.customerMessageInput = '';
    };
    ConversationComponent.prototype.onButtonClick = function (button) {
        var customerMsg = {
            conversationId: this.conversationId,
            text: button.value,
            system: this.system,
            wrongAnswersCounter: this.wrongAnswersCounter,
        };
        this.conversationService.sendCustomerInput(customerMsg);
    };
    ConversationComponent.prototype.readMessageAnswers = function (res) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](res.messageAnswers, function (element) {
            _this.answerIdToComment = element.answerId;
        });
        this.botMessages = res.messageAnswers;
        this.pushBotMessageToMessagesArray(this.botMessages, true, this.answerIdToComment);
    };
    // run after every customer input
    ConversationComponent.prototype.pushBotMessageToMessagesArray = function (botMessages, isRankNeeded, answerId) {
        var message = {
            isBotMessage: true,
            isCustomerMessage: false,
            botMessages: botMessages,
            isRankNeeded: isRankNeeded,
            answerId: answerId,
        };
        this.messages.push(message);
    };
    ConversationComponent.prototype.pushCustomerMessageToMessagesArray = function (custMsg, isRankNeeded) {
        // run after every output
        var message = {
            isBotMessage: false,
            isCustomerMessage: true,
            textCustomer: custMsg,
            isRankNeeded: isRankNeeded,
        };
        this.messages.push(message);
    };
    ConversationComponent.prototype.onOptionClick = function (event) {
        var customerMsg = {
            conversationId: this.conversationId,
            text: event.text,
            optionValue: event.value,
            system: this.system,
            wrongAnswersCounter: this.wrongAnswersCounter,
        };
        this.inputCustomerMessage = event.text;
        this.postMessageToApi(customerMsg);
    };
    ConversationComponent.prototype.postMessageToApi = function (customerMsg) {
        var _this = this;
        this.conversationService.sendCustomerInput(customerMsg).subscribe(function (res) {
            _this.pushCustomerMessageToMessagesArray(_this.inputCustomerMessage, true);
            _this.conversationId = res.conversationId;
            _this.system = res.system;
            _this.wrongAnswersCounter = res.wrongAnswersCounter;
            _this.readMessageAnswers(res);
        }, function (errors) {
            _this.error = errors;
        });
    };
    ConversationComponent.prototype.ratingComponentClick = function (rate) {
        this.rateScore = rate;
        if (this.rateScore === 0) {
            this.pushBotMessageToMessagesArray([
                {
                    responseType: 'text',
                    answerId: this.answerIdToComment,
                    // tslint:disable-next-line:max-line-length
                    text: '<p>I’m sorry my answer wasn’t helpful. Please either rephrase your question or leave a comment <button class="leaveComment">HERE</button> so I can learn</p>',
                },
            ], false, this.answerIdToComment);
        }
        else if (this.rateScore === 1) {
            this.pushBotMessageToMessagesArray([
                {
                    responseType: 'text',
                    text: 'Glad I could help!',
                },
            ], false);
        }
    };
    ConversationComponent.prototype.onSendMailCommentClick = function () {
        this.pushBotMessageToMessagesArray([
            {
                responseType: 'text',
                text: 'Email was sent. Thank you',
            },
        ], false, this.answerIdToComment);
    };
    ConversationComponent.prototype.showCommentMessage = function () {
        this.pushBotMessageToMessagesArray([
            {
                responseType: 'mail',
                answerId: this.answerIdToComment,
            },
        ], false, this.answerIdToComment);
    };
    ConversationComponent.prototype.onNoButtonClick = function () {
        this.pushBotMessageToMessagesArray([
            {
                responseType: 'text',
                text: 'So is there anything else I can do for you?',
            },
        ], false, this.answerIdToComment);
    };
    ConversationComponent.prototype.onSendCommentClick = function (userComment) {
        var _this = this;
        this.conversationService.sendComment(userComment).subscribe(function (res) {
            _this.pushBotMessageToMessagesArray([
                {
                    responseType: 'text',
                    text: 'Thank you! Your comment was saved',
                },
            ], false, _this.answerIdToComment);
        }, function (error) {
            _this.error = error;
        });
    };
    ConversationComponent.prototype.scrollToBottom = function () {
        var _this = this;
        // add short delay to allow response content to load first
        setTimeout(function () { return (_this.scrollContainer.nativeElement.scrollTop = _this.scrollContainer.nativeElement.scrollHeight); }, 400);
    };
    ConversationComponent.prototype.checkIfStringIsBlank = function (text) {
        return text === undefined || text === null || text === '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('messages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConversationComponent.prototype, "messagesContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConversationComponent.prototype, "scrollContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "conversationIdEmitter", void 0);
    ConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'conversation',
            template: __webpack_require__(/*! ./conversation.component.html */ "./src/app/components/conversation.component.html"),
        }),
        __metadata("design:paramtypes", [_services_conversation_service__WEBPACK_IMPORTED_MODULE_1__["ConversationService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/components/customerMessage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/customerMessage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customerMessage\">\n    <span class=\"message\">\n        {{customerMessageText}}\n    </span>\n    <div class=\"nameCircle\">\n        {{nameCircle}}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/customerMessage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/customerMessage.component.ts ***!
  \*********************************************************/
/*! exports provided: CustomerMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMessageComponent", function() { return CustomerMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerMessageComponent = /** @class */ (function () {
    function CustomerMessageComponent() {
    }
    CustomerMessageComponent.prototype.ngOnInit = function () {
        this.customerMessageText = this.inputMessage;
        this.nameCircle = this.initials;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomerMessageComponent.prototype, "inputMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomerMessageComponent.prototype, "initials", void 0);
    CustomerMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customerMessage',
            template: __webpack_require__(/*! ./customerMessage.component.html */ "./src/app/components/customerMessage.component.html")
        })
    ], CustomerMessageComponent);
    return CustomerMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/rating.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/rating.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rateId != null\" class=\"userRating\">\n    <div class=\"rateText\">Did it help? </div>\n    <div id=\"starSystem\" class=\"acidjs-rating-stars rating\">\n       <button type=\"button\" id=\"0-{{rateId}}\" class=\"thumbDown\" (click)='onThumbDownClick(0)'><i class=\"far fa-thumbs-down\"></i></button>\n       <button type=\"button\" id=\"1-{{rateId}}\" class=\"thumbUp\" (click)='onThumbUpClick(1)'><i class=\"far fa-thumbs-up\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/rating.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/rating.component.ts ***!
  \************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/conversation.service */ "./src/app/services/conversation.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingComponent = /** @class */ (function () {
    function RatingComponent(conversationService) {
        this.conversationService = conversationService;
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.rateId = this.answerId;
        for (var i = 0; i < 2; i++) {
            var button = 'button[id="' + i + '-' + (this.rateId - 1) + '"]';
            jquery__WEBPACK_IMPORTED_MODULE_2__(button).attr('disabled', 'true');
            jquery__WEBPACK_IMPORTED_MODULE_2__(button).addClass('cursor-not-allowed');
        }
    };
    RatingComponent.prototype.sendRating = function (rating) {
        this.rating = rating;
        var starRate = {
            answerId: this.rateId,
            rating: rating
        };
        this.conversationService.sendRating(starRate).subscribe(function (res) { });
        this.ratingClick.emit(rating);
    };
    RatingComponent.prototype.onThumbUpClick = function (rating) {
        for (var i = 0; i < 2; i++) {
            var button = 'button[id="' + i + '-' + this.rateId + '"]';
            jquery__WEBPACK_IMPORTED_MODULE_2__(button).attr('disabled', 'true');
        }
        var thumbClicked = 'button[id="1-' + this.rateId + '"].thumbUp>i';
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbClicked).removeClass('fa-thumbs-o-up');
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbClicked).addClass('fa-thumbs-up');
        var thumbNotClicked = 'button[id="0-' + this.rateId + '"].thumbDown>i';
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbNotClicked).addClass('grey-thumb');
        this.sendRating(rating);
    };
    RatingComponent.prototype.onThumbDownClick = function (rating) {
        for (var i = 0; i < 2; i++) {
            var button = 'button[id="' + i + '-' + this.rateId + '"]';
            jquery__WEBPACK_IMPORTED_MODULE_2__(button).attr('disabled', 'true');
        }
        var thumbClicked = 'button[id="0-' + this.rateId + '"].thumbDown>i';
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbClicked).removeClass('fa-thumbs-o-down');
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbClicked).addClass('fa-thumbs-down');
        var thumbNotClicked = 'button[id="1-' + this.rateId + '"].thumbUp>i';
        jquery__WEBPACK_IMPORTED_MODULE_2__(thumbNotClicked).addClass('grey-thumb');
        this.sendRating(rating);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "ratingClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "answerId", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/rating.component.html")
        }),
        __metadata("design:paramtypes", [_services_conversation_service__WEBPACK_IMPORTED_MODULE_1__["ConversationService"]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/configs/api-details-service.interface.ts":
/*!**********************************************************!*\
  !*** ./src/app/configs/api-details-service.interface.ts ***!
  \**********************************************************/
/*! exports provided: IApiDetailsServiceToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IApiDetailsServiceToken", function() { return IApiDetailsServiceToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var IApiDetailsServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('.api-details-service.interface');


/***/ }),

/***/ "./src/app/configs/api-details.service.prod.ts":
/*!*****************************************************!*\
  !*** ./src/app/configs/api-details.service.prod.ts ***!
  \*****************************************************/
/*! exports provided: ApiDetailsServiceProd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDetailsServiceProd", function() { return ApiDetailsServiceProd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiDetailsServiceProd = /** @class */ (function () {
    function ApiDetailsServiceProd() {
        this.apiUrl = '/';
    }
    ApiDetailsServiceProd.prototype.getApiUrl = function () {
        return this.apiUrl;
    };
    ApiDetailsServiceProd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiDetailsServiceProd);
    return ApiDetailsServiceProd;
}());



/***/ }),

/***/ "./src/app/configs/login-details-service.interface.ts":
/*!************************************************************!*\
  !*** ./src/app/configs/login-details-service.interface.ts ***!
  \************************************************************/
/*! exports provided: ILoginDetailsServiceToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ILoginDetailsServiceToken", function() { return ILoginDetailsServiceToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ILoginDetailsServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('.login-details-service.interface');


/***/ }),

/***/ "./src/app/configs/login-details.service.prod.ts":
/*!*******************************************************!*\
  !*** ./src/app/configs/login-details.service.prod.ts ***!
  \*******************************************************/
/*! exports provided: LoginDetailsServiceProd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDetailsServiceProd", function() { return LoginDetailsServiceProd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginDetailsServiceProd = /** @class */ (function () {
    function LoginDetailsServiceProd() {
        this.adalConfig = {
            tenant: 'f10e34fe-8994-4b52-a7da-4f7aa9068ca0',
            clientId: 'f9023644-edfd-4c74-8297-22183f9bd41f',
            redirectUri: this.getOrigin() + window.location.pathname,
            navigateToLoginRequestUrl: false,
            cacheLocation: 'localStorage'
        };
    }
    LoginDetailsServiceProd.prototype.getLoginDetails = function () {
        return this.adalConfig;
    };
    LoginDetailsServiceProd.prototype.getOrigin = function () {
        if (!window.location.origin) {
            var port = window.location.port ? ':' + window.location.port : '';
            return window.location.protocol + '//' + window.location.hostname + port;
        }
        else {
            return window.location.origin;
        }
    };
    LoginDetailsServiceProd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginDetailsServiceProd);
    return LoginDetailsServiceProd;
}());



/***/ }),

/***/ "./src/app/models/adalConfig.ts":
/*!**************************************!*\
  !*** ./src/app/models/adalConfig.ts ***!
  \**************************************/
/*! exports provided: AdalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdalConfig", function() { return AdalConfig; });
var AdalConfig = /** @class */ (function () {
    function AdalConfig(tenant, clientId, redirectUri, navigateToLoginRequestUrl, cacheLocation) {
        this.tenant = tenant;
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.navigateToLoginRequestUrl = navigateToLoginRequestUrl;
        this.cacheLocation = cacheLocation;
    }
    return AdalConfig;
}());



/***/ }),

/***/ "./src/app/models/sendMail.ts":
/*!************************************!*\
  !*** ./src/app/models/sendMail.ts ***!
  \************************************/
/*! exports provided: SendMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMail", function() { return SendMail; });
var SendMail = /** @class */ (function () {
    function SendMail() {
    }
    return SendMail;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microsoft-adal-angular6 */ "./node_modules/microsoft-adal-angular6/fesm5/microsoft-adal-angular6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(adalSrv) {
        this.adalSrv = adalSrv;
        this._adalSvc = adalSrv;
    }
    // constructor(private adalSvc: MsAdalAngular6Service) {
    //     this.adalSvc.init(this._config);
    //   }  constructor(private_adal:Adal5Service) {
    //     this.adalSvc.init(this._config);
    // }
    AuthService.prototype.isLoggedIn = function () {
        return true;
    };
    AuthService.prototype.getToken = function () {
        return this._adalSvc.accessToken;
    };
    AuthService.prototype.signout = function () {
        this._adalSvc.logout();
    };
    AuthService.prototype.startAuthentication = function () {
        this._adalSvc.login();
    };
    AuthService.prototype.getName = function () {
        return this._adalSvc.userInfo.profile.name;
    };
    AuthService.prototype.completeAuthentication = function () {
        this._adalSvc.handleCallback();
        // this._adalSvc.getUser().subscribe(user=> {
        //   this._user=user;
        //   console.log(this.adalSvc.userInfo);
        //   var expireIn=user.profile.exp-newDate().getTime();
        // });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [microsoft_adal_angular6__WEBPACK_IMPORTED_MODULE_0__["MsAdalAngular6Service"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/conversation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/conversation.service.ts ***!
  \**************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_api_details_service_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/api-details-service.interface */ "./src/app/configs/api-details-service.interface.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ConversationService = /** @class */ (function () {
    function ConversationService(http, apiDetailsService, authService) {
        this.http = http;
        this.apiDetailsService = apiDetailsService;
        this.authService = authService;
        this.baseUrl = apiDetailsService.getApiUrl();
        this.bearerToken = authService.getToken();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                Authorization: 'Bearer ' + this.bearerToken,
            }),
            withCredentials: true,
        };
    }
    ConversationService.prototype.sendCustomerInput = function (inputMessage) {
        var url = this.baseUrl + 'api/Conversation/message';
        var response = this.http.post(url, inputMessage, this.httpOptions);
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ConversationService.prototype.getBotOutput = function (inputMessage) {
        var url = this.baseUrl + 'api/Conversation/message';
        return this.http.post(url, inputMessage, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res, idx) {
            if (idx === void 0) { idx = 0; }
            return res;
        }));
    };
    ConversationService.prototype.initConversation = function () {
        var url = this.baseUrl + 'api/Conversation/initConversation';
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ConversationService.prototype.sendRating = function (rating) {
        var url = this.baseUrl + 'api/Rating/rate';
        return this.http.post(url, rating, this.httpOptions).pipe();
    };
    ConversationService.prototype.sendComment = function (comment) {
        var url = this.baseUrl + 'api/Rating/comment';
        return this.http.post(url, comment, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ConversationService.prototype.sendMail = function (sendMailData) {
        var url = this.baseUrl + 'api/Email/sendMail';
        var data = sendMailData;
        return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    ConversationService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json().Errors);
    };
    ConversationService.prototype.handleResponse = function (response) {
        return response.json().Result;
    };
    ConversationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_api_details_service_interface__WEBPACK_IMPORTED_MODULE_4__["IApiDetailsServiceToken"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object, _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/environments/environment.model.ts":
/*!***********************************************!*\
  !*** ./src/environments/environment.model.ts ***!
  \***********************************************/
/*! exports provided: EnviromentModel, EnviromentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviromentModel", function() { return EnviromentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviromentType", function() { return EnviromentType; });
var EnviromentModel = /** @class */ (function () {
    function EnviromentModel(type, tenant, clientId, redirectUri, navigateToLoginRequestUrl, cacheLocation, production, apiUrl) {
        this.type = type;
        this.tenant = tenant;
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.navigateToLoginRequestUrl = navigateToLoginRequestUrl;
        this.cacheLocation = cacheLocation;
        this.production = false;
        this.apiUrl = apiUrl;
    }
    return EnviromentModel;
}());

var EnviromentType;
(function (EnviromentType) {
    EnviromentType[EnviromentType["local"] = 0] = "local";
    EnviromentType[EnviromentType["test"] = 1] = "test";
    EnviromentType[EnviromentType["prod"] = 2] = "prod";
})(EnviromentType || (EnviromentType = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _environment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.model */ "./src/environments/environment.model.ts");

var environment = new _environment_model__WEBPACK_IMPORTED_MODULE_0__["EnviromentModel"](_environment_model__WEBPACK_IMPORTED_MODULE_0__["EnviromentType"].prod, 'f10e34fe-8994-4b52-a7da-4f7aa9068ca0', // tenant
'f9023644-edfd-4c74-8297-22183f9bd41f', // clientId
getOrigin() + window.location.pathname, // redirectUri
false, // navigateToLoginRequestUrl
'localStorage', // cacheLocation
true, '/' // apiUrl
);
function getOrigin() {
    if (!window.location.origin) {
        var port = window.location.port ? ':' + window.location.port : '';
        return window.location.protocol + '//' + window.location.hostname + port;
    }
    else {
        return window.location.origin;
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aliuspetraska/Documents/Git/arla.chatbot.frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map