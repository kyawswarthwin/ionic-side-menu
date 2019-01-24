import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SideMenuComponent {
    constructor() { }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header\" class=\"header\" [ngStyle]=\"options.header.background\r\n  && {'background-image': 'url(' + options.header.background + ')'}\"\r\n  (click)=\"options.header.onClick && options.header.onClick()\">\r\n  <div *ngIf=\"options.header.profile\" class=\"profile\">\r\n    <div class=\"picture\">\r\n      <img [src]=\"options.header.profile.picture\">\r\n    </div>\r\n    <h2 class=\"name\">{{ options.header.profile.name }}</h2>\r\n    <p *ngIf=\"options.header.profile.email\" class=\"email\">{{\r\n      options.header.profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding *ngFor=\"let menu of options.menus\">\r\n  <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n    <ion-item [routerLink]=\"item.path && item.path\"\r\n      [routerLinkActive]=\"item.path && 'active'\" [routerDirection]=\"item.path &&\r\n      'root'\" (click)=\"item.onClick && item.onClick()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"item.badge\" slot=\"end\" [color]=\"item.badgeColor &&\r\n        item.badgeColor\">{{ item.badge }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n  <hr *ngIf=\"menu.isDivider\" class=\"divider\">\r\n</ion-list>\r\n",
                styles: [".header{background-repeat:no-repeat;background-position:center;background-size:cover;height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{height:64px;width:64px}.header .profile .picture img{border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px;color:var(--ion-color-primary-contrast,#fff)}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}.divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
            }] }
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [];
SideMenuComponent.propDecorators = {
    options: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonicSideMenuModule {
}
IonicSideMenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SideMenuComponent],
                imports: [CommonModule, IonicModule, RouterModule],
                exports: [SideMenuComponent]
            },] }
];

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