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
                template: "<div class=\"side-menu-container\">\n  <div *ngIf=\"options.header\" class=\"side-menu-header\"\n    [ngStyle]=\"options.header.background && {'background-image': 'url(' +\n    options.header.background + ')'}\" (click)=\"options.header.onClick &&\n    options.header.onClick()\">\n    <div *ngIf=\"options.header.profile\" class=\"profile\">\n      <div class=\"picture\">\n        <img [src]=\"options.header.profile.picture\">\n      </div>\n      <h2 class=\"name\">{{ options.header.profile.name }}</h2>\n      <p *ngIf=\"options.header.profile.email\" class=\"email\">{{\n        options.header.profile.email }}</p>\n    </div>\n  </div>\n  <ion-list lines=\"none\" no-padding>\n    <div *ngFor=\"let menu of options.menus\">\n      <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\n        <ion-item [routerLink]=\"item.path && item.path\"\n          [routerLinkActive]=\"item.path && 'active'\"\n          [routerDirection]=\"item.path && 'root'\" (click)=\"item.onClick &&\n          item.onClick()\">\n          <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\n          <ion-label>{{ item.title }}</ion-label>\n          <ion-badge *ngIf=\"item.badge\" slot=\"end\" [color]=\"item.badgeColor &&\n            item.badgeColor\">{{ item.badge }}</ion-badge>\n        </ion-item>\n      </ion-menu-toggle>\n      <hr *ngIf=\"menu.isDivider\" class=\"divider\">\n    </div>\n  </ion-list>\n</div>\n",
                styles: [".side-menu-container .side-menu-header{background-repeat:no-repeat;background-position:center;background-size:cover;height:160px;margin-bottom:8px;border-bottom:1px solid rgba(0,0,0,.13);padding:16px}.side-menu-container .side-menu-header .profile .picture{height:64px;width:64px}.side-menu-container .side-menu-header .profile .picture img{border-radius:50%}.side-menu-container .side-menu-header .profile .email,.side-menu-container .side-menu-header .profile .name{margin:0;font-size:14px;line-height:24px;color:#fff}.side-menu-container .side-menu-header .profile .name{margin-top:16px;font-weight:500}.side-menu-container .side-menu-header .profile .email{font-weight:400}.side-menu-container ion-list-header{margin-top:-8px}.side-menu-container .active{--background:var(--border-color)}.side-menu-container .active ion-icon,.side-menu-container .active ion-label{color:var(--ion-color-primary)}.side-menu-container .divider{border-bottom:1px solid rgba(0,0,0,.13)}"]
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