/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function SideMenuOptions() { }
if (false) {
    /** @type {?|undefined} */
    SideMenuOptions.prototype.header;
    /** @type {?} */
    SideMenuOptions.prototype.menus;
}
/**
 * @record
 */
export function SideMenuHeader() { }
if (false) {
    /** @type {?|undefined} */
    SideMenuHeader.prototype.background;
    /** @type {?|undefined} */
    SideMenuHeader.prototype.profile;
    /** @type {?|undefined} */
    SideMenuHeader.prototype.handler;
}
/**
 * @record
 */
export function SideMenuProfile() { }
if (false) {
    /** @type {?} */
    SideMenuProfile.prototype.picture;
    /** @type {?} */
    SideMenuProfile.prototype.name;
    /** @type {?|undefined} */
    SideMenuProfile.prototype.email;
}
/**
 * @record
 */
export function SideMenu() { }
if (false) {
    /** @type {?|undefined} */
    SideMenu.prototype.header;
    /** @type {?|undefined} */
    SideMenu.prototype.items;
    /** @type {?|undefined} */
    SideMenu.prototype.isDivider;
}
/**
 * @record
 */
export function SideMenuItem() { }
if (false) {
    /** @type {?|undefined} */
    SideMenuItem.prototype.icon;
    /** @type {?} */
    SideMenuItem.prototype.title;
    /** @type {?|undefined} */
    SideMenuItem.prototype.badge;
    /** @type {?|undefined} */
    SideMenuItem.prototype.badgeColor;
    /** @type {?|undefined} */
    SideMenuItem.prototype.path;
    /** @type {?|undefined} */
    SideMenuItem.prototype.handler;
}
export class SideMenuComponent {
    constructor() { }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\"\r\n  (click)=\"header.handler && header.handler()\">\r\n  <div *ngIf=\"header.profile\" class=\"profile\">\r\n    <div class=\"picture\">\r\n      <img [src]=\"header.profile.picture\">\r\n    </div>\r\n    <h2 class=\"name\">{{ header.profile.name }}</h2>\r\n    <p *ngIf=\"header.profile.email\" class=\"email\">{{ header.profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding class=\"content\" *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n    <ion-item [routerLink]=\"item.path ? item.path : []\"\r\n      [routerLinkActive]=\"item.path ? 'active' : []\"\r\n      [routerDirection]=\"item.path && 'root'\" (click)=\"item.handler &&\r\n      item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"item.badge\" slot=\"end\" [color]=\"item.badgeColor &&\r\n        item.badgeColor\">{{ item.badge }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n  <hr *ngIf=\"menu.isDivider\" class=\"divider\">\r\n</ion-list>\r\n",
                styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{height:64px;width:64px}.header .profile .picture img{border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content ion-item{color:var(--ion-color-step-600,#666)}.content .active{--background:var(--border-color)}.content .active ion-icon,.content .active ion-label{color:var(--ion-color-primary,#3880ff)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
            }] }
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [];
SideMenuComponent.propDecorators = {
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUlDOzs7SUFIQyxvQ0FBb0I7O0lBQ3BCLGlDQUEwQjs7SUFDMUIsaUNBQXFCOzs7OztBQUV2QixxQ0FJQzs7O0lBSEMsa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYixnQ0FBZTs7Ozs7QUFFakIsOEJBSUM7OztJQUhDLDBCQUFnQjs7SUFDaEIseUJBQXVCOztJQUN2Qiw2QkFBb0I7Ozs7O0FBRXRCLGtDQU9DOzs7SUFOQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBZTs7SUFDZixrQ0FBb0I7O0lBQ3BCLDRCQUFjOztJQUNkLCtCQUFxQjs7QUFRdkIsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixnQkFBZSxDQUFDOzs7WUFSakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwM0NBQXlDOzthQUUxQzs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVPcHRpb25zIHtcclxuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcclxuICBtZW51czogU2lkZU1lbnVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG4gIHByb2ZpbGU/OiBTaWRlTWVudVByb2ZpbGU7XHJcbiAgaGFuZGxlcj86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xyXG4gIHBpY3R1cmU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudSB7XHJcbiAgaGVhZGVyPzogc3RyaW5nO1xyXG4gIGl0ZW1zPzogU2lkZU1lbnVJdGVtW107XHJcbiAgaXNEaXZpZGVyPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SXRlbSB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJhZGdlPzogc3RyaW5nO1xyXG4gIGJhZGdlQ29sb3I/OiBzdHJpbmc7XHJcbiAgcGF0aD86IHN0cmluZztcclxuICBoYW5kbGVyPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNpZGVNZW51T3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==