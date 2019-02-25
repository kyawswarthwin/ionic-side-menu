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
    SideMenuItem.prototype.path;
    /** @type {?|undefined} */
    SideMenuItem.prototype.handler;
}
/**
 * @record
 */
export function SideMenuBadge() { }
if (false) {
    /** @type {?} */
    SideMenuBadge.prototype.text;
    /** @type {?|undefined} */
    SideMenuBadge.prototype.color;
}
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
export { SideMenuComponent };
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUlDOzs7SUFIQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7SUFDdEMsaUNBQXFCOzs7OztBQUV2QixxQ0FJQzs7O0lBSEMsa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYixnQ0FBZTs7Ozs7QUFFakIsOEJBSUM7OztJQUhDLDBCQUFnQjs7SUFDaEIseUJBQXVCOztJQUN2Qiw2QkFBb0I7Ozs7O0FBRXRCLGtDQU1DOzs7SUFMQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLDRCQUFjOztJQUNkLCtCQUFxQjs7Ozs7QUFFdkIsbUNBR0M7OztJQUZDLDZCQUFhOztJQUNiLDhCQUFlOztBQUdqQjtJQVFFO0lBQWUsQ0FBQzs7Z0JBUmpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsODNDQUF5Qzs7aUJBRTFDOzs7OzswQkFFRSxLQUFLOztJQUdSLHdCQUFDO0NBQUEsQUFURCxJQVNDO1NBSlksaUJBQWlCOzs7SUFDNUIsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51T3B0aW9ucyB7XHJcbiAgaGVhZGVyPzogU2lkZU1lbnVIZWFkZXI7XHJcbiAgbWVudXM6IFNpZGVNZW51W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUhlYWRlciB7XHJcbiAgYmFja2dyb3VuZD86IHN0cmluZztcclxuICBwcm9maWxlPzogT2JzZXJ2YWJsZTxTaWRlTWVudVByb2ZpbGU+O1xyXG4gIGhhbmRsZXI/OiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVQcm9maWxlIHtcclxuICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnUge1xyXG4gIGhlYWRlcj86IHN0cmluZztcclxuICBpdGVtcz86IFNpZGVNZW51SXRlbVtdO1xyXG4gIGlzRGl2aWRlcj86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUl0ZW0ge1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBiYWRnZT86IE9ic2VydmFibGU8U2lkZU1lbnVCYWRnZT47XHJcbiAgcGF0aD86IHN0cmluZztcclxuICBoYW5kbGVyPzogKCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51QmFkZ2Uge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNpZGVNZW51T3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==