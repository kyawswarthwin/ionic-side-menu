(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@ionic/angular'), require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ionic-side-menu', ['exports', '@angular/common', '@ionic/angular', '@angular/router', '@angular/core'], factory) :
    (factory((global['ionic-side-menu'] = {}),global.ng.common,global.angular,global.ng.router,global.ng.core));
}(this, (function (exports,common,angular,router,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideMenuComponent = /** @class */ (function () {
        function SideMenuComponent() {
        }
        SideMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-side-menu',
                        template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list class=\"content\" lines=\"none\" no-padding *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ng-container *ngFor=\"let item of menu.items\">\r\n      <ion-side-menu-item [item]=\"item\"></ion-side-menu-item>\r\n    </ng-container>\r\n    <hr *ngIf=\"menu.divider\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
                        styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
                    }] }
        ];
        /** @nocollapse */
        SideMenuComponent.ctorParameters = function () { return []; };
        SideMenuComponent.propDecorators = {
            options: [{ type: core.Input }]
        };
        return SideMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideMenuItemComponent = /** @class */ (function () {
        function SideMenuItemComponent() {
        }
        SideMenuItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ion-side-menu-item',
                        template: "<ion-menu-toggle auto-hide=\"false\">\n  <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\n    [routerLink]=\"item.path ? item.path : []\" [routerLinkActive]=\"item.path ?\n    'active' : []\" [routerDirection]=\"item.path && 'root'\" (click)=\"item.handler\n    && item.handler()\">\n    <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\n    <ion-label>{{ item.title }}</ion-label>\n    <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\n      [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\n  </ion-item>\n</ion-menu-toggle>\n",
                        styles: ["ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}"]
                    }] }
        ];
        /** @nocollapse */
        SideMenuItemComponent.ctorParameters = function () { return []; };
        SideMenuItemComponent.propDecorators = {
            item: [{ type: core.Input }]
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
                        declarations: [SideMenuComponent, SideMenuItemComponent],
                        imports: [common.CommonModule, angular.IonicModule, router.RouterModule],
                        exports: [SideMenuComponent]
                    },] }
        ];
        return IonicSideMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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