import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu',
                    template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\"\r\n  (click)=\"header.handler && header.handler()\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <div class=\"picture\">\r\n      <img [src]=\"profile.picture\">\r\n    </div>\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding class=\"content\" *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n    <ion-item [routerLink]=\"item.path ? item.path : []\"\r\n      [routerLinkActive]=\"item.path ? 'active' : []\"\r\n      [routerDirection]=\"item.path && 'root'\" (click)=\"item.handler &&\r\n      item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n        [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n  <hr *ngIf=\"menu.isDivider\" class=\"divider\">\r\n</ion-list>\r\n",
                    styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{height:64px;width:64px}.header .profile .picture img{border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content ion-item{color:var(--ion-color-step-600,#666)}.content .active{--background:var(--border-color)}.content .active ion-icon,.content .active ion-label{color:var(--ion-color-primary,#3880ff)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
                }] }
    ];
    /** @nocollapse */
    SideMenuComponent.ctorParameters = function () { return []; };
    SideMenuComponent.propDecorators = {
        options: [{ type: Input }]
    };
    return SideMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonicSideMenuModule = /** @class */ (function () {
    function IonicSideMenuModule() {
    }
    IonicSideMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SideMenuComponent],
                    imports: [CommonModule, IonicModule, RouterModule],
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

export { SideMenuComponent, IonicSideMenuModule };

//# sourceMappingURL=ionic-side-menu.js.map