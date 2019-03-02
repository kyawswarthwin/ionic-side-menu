(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@ionic/angular'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/router'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ionic-side-menu', ['exports', '@angular/common', '@ionic/angular', '@angular/core', '@angular/platform-browser', '@angular/router', 'rxjs'], factory) :
    (factory((global['ionic-side-menu'] = {}),global.ng.common,global.angular,global.ng.core,global.ng.platformBrowser,global.ng.router,global.rxjs));
}(this, (function (exports,common,angular,core,platformBrowser,router,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideMenuComponent = /** @class */ (function () {
        function SideMenuComponent() {
            this.isObservable = rxjs.isObservable;
        }
        /**
         * @return {?}
         */
        SideMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} header
         * @return {?}
         */
        SideMenuComponent.prototype.setHeaderStyle = /**
         * @param {?} header
         * @return {?}
         */
            function (header) {
                /** @type {?} */
                var style = {};
                if (header.background) {
                    style['background-image'] = "url(" + header.background + ")";
                }
                if (header.menus && header.menus.length) {
                    style['cursor'] = 'pointer';
                }
                return style;
            };
        SideMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-side-menu',
                        template: "<div *ngIf=\"options.header as header\" class=\"header\"\r\n  [ngStyle]=\"setHeaderStyle(header)\" (click)=\"header.menus &&\r\n  header.menus.length && expanded=!expanded\">\r\n  <ng-container *ngIf=\"header.profile as profile\">\r\n    <div *ngIf=\"isObservable(profile); then asyncProfileTemplate else\r\n      normalProfileTemplate\"></div>\r\n    <ng-template #asyncProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile | async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #profileTemplate let-profile=\"profile\">\r\n      <div class=\"profile\">\r\n        <img class=\"picture\" [src]=\"profile.picture\">\r\n        <h2 class=\"name\">{{ profile.name }}</h2>\r\n        <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n        <ion-icon *ngIf=\"header.menus && header.menus.length\" [name]=\"expanded ?\r\n          'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div *ngIf=\"expanded; then profileMenuTemplate else normalMenuTemplate\"></div>\r\n<ng-template #profileMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus:\r\n    options.header.menus }\"></ng-container>\r\n</ng-template>\r\n<ng-template #normalMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus: options.menus\r\n    }\"></ng-container>\r\n</ng-template>\r\n<ng-template #menuTemplate let-menus=\"menus\">\r\n  <ion-list *ngFor=\"let menu of menus\" class=\"content\" no-padding lines=\"none\">\r\n    <div [hidden]=\"isObservable(menu.hidden) ? (menu.hidden | async) :\r\n      menu.hidden\">\r\n      <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n      <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"\r\n        (click)=\"expanded=false\"></ion-side-menu-item>\r\n      <hr *ngIf=\"menu.type === 'divider'\" class=\"divider\">\r\n    </div>\r\n  </ion-list>\r\n</ng-template>\r\n",
                        styles: [".header{height:160px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px;margin-bottom:8px;background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header .profile{position:relative;height:128px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.header .profile ion-icon{position:absolute;right:0;bottom:0;font-size:24px}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
                    }] }
        ];
        /** @nocollapse */
        SideMenuComponent.ctorParameters = function () { return []; };
        SideMenuComponent.propDecorators = {
            options: [{ type: core.Input }]
        };
        return SideMenuComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideMenuItemComponent = /** @class */ (function () {
        function SideMenuItemComponent(sanitizer, router$$1) {
            this.sanitizer = sanitizer;
            this.router = router$$1;
            this.depth = 0;
            this.isObservable = rxjs.isObservable;
        }
        /**
         * @return {?}
         */
        SideMenuItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var disabled, _a, hidden, _b;
                    var _this = this;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!rxjs.isObservable(this.item.disabled))
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.item.disabled.toPromise()];
                            case 1:
                                _a = _c.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _a = this.item.disabled;
                                _c.label = 3;
                            case 3:
                                disabled = _a;
                                if (!rxjs.isObservable(this.item.hidden))
                                    return [3 /*break*/, 5];
                                return [4 /*yield*/, this.item.hidden.toPromise()];
                            case 4:
                                _b = _c.sent();
                                return [3 /*break*/, 6];
                            case 5:
                                _b = this.item.hidden;
                                _c.label = 6;
                            case 6:
                                hidden = _b;
                                this.router.events.subscribe(function (event) {
                                    if (event instanceof router.NavigationEnd) {
                                        if (event.urlAfterRedirects.startsWith(_this.item.url) && !disabled && !hidden) {
                                            _this.expanded = true;
                                        }
                                    }
                                });
                                if (this.router.url.startsWith(this.item.url) && !disabled && !hidden) {
                                    this.expanded = true;
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        SideMenuItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-side-menu-item',
                        template: "<div *ngIf=\"item.children && item.children.length; then parentItemTemplate else\r\n  normalItemTemplate\"></div>\r\n<ng-template #parentItemTemplate>\r\n  <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n    (depth + 1) * 16 + 'px')\" button detail=\"false\" (click)=\"expanded=!expanded\"\r\n    [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async) :\r\n    item.hidden\">\r\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let child of item.children\" [item]=\"child\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #normalItemTemplate>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n      (depth + 1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\"\r\n      [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n      item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async)\r\n      : item.hidden\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n  <ion-label>{{ item.label }}</ion-label>\r\n  <ng-container *ngIf=\"item.badge as badge\">\r\n    <div *ngIf=\"isObservable(badge); then asyncBadgeTemplate else\r\n      normalBadgeTemplate\"></div>\r\n    <ng-template #asyncBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge |\r\n        async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge\r\n        }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #badgeTemplate let-badge=\"badge\">\r\n      <ion-badge slot=\"end\" [color]=\"badge.color\">{{ badge.text }}</ion-badge>\r\n    </ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n",
                        styles: ["ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}"]
                    }] }
        ];
        /** @nocollapse */
        SideMenuItemComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer },
                { type: router.Router }
            ];
        };
        SideMenuItemComponent.propDecorators = {
            item: [{ type: core.Input }],
            depth: [{ type: core.Input }]
        };
        return SideMenuItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonicSideMenuModule = /** @class */ (function () {
        function IonicSideMenuModule() {
        }
        IonicSideMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, angular.IonicModule, router.RouterModule],
                        declarations: [SideMenuComponent, SideMenuItemComponent],
                        exports: [SideMenuComponent]
                    },] }
        ];
        return IonicSideMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SideMenuComponent = SideMenuComponent;
    exports.IonicSideMenuModule = IonicSideMenuModule;
    exports.ɵa = SideMenuItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionic-side-menu.umd.js.map