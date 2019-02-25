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
    SideMenu.prototype.divider;
    /** @type {?|undefined} */
    SideMenu.prototype.can;
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
    /** @type {?|undefined} */
    SideMenuItem.prototype.can;
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
                    template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\"\r\n  (click)=\"header.handler && header.handler()\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding class=\"content\" *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n      <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\r\n        [routerLink]=\"item.path ? item.path : []\" [routerLinkActive]=\"item.path\r\n        ? 'active' : []\" [routerDirection]=\"item.path && 'root'\"\r\n        (click)=\"item.handler && item.handler()\">\r\n        <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n        <ion-label>{{ item.title }}</ion-label>\r\n        <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n          [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    <hr *ngIf=\"menu.divider\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
                    styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content ion-item{color:var(--ion-color-step-600,#666)}.content .active{--background:var(--border-color)}.content .active ion-icon,.content .active ion-label{color:var(--ion-color-primary,#3880ff)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUtDOzs7SUFKQywwQkFBZ0I7O0lBQ2hCLHlCQUF1Qjs7SUFDdkIsMkJBQWtCOztJQUNsQix1QkFBZ0M7Ozs7O0FBRWxDLGtDQU9DOzs7SUFOQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLDRCQUFjOztJQUNkLCtCQUFxQjs7SUFDckIsMkJBQWdDOzs7OztBQUVsQyxtQ0FHQzs7O0lBRkMsNkJBQWE7O0lBQ2IsOEJBQWU7O0FBR2pCO0lBUUU7SUFBZSxDQUFDOztnQkFSakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixvZ0RBQXlDOztpQkFFMUM7Ozs7OzBCQUVFLEtBQUs7O0lBR1Isd0JBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxpQkFBaUI7OztJQUM1QixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVPcHRpb25zIHtcclxuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcclxuICBtZW51czogU2lkZU1lbnVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG4gIHByb2ZpbGU/OiBPYnNlcnZhYmxlPFNpZGVNZW51UHJvZmlsZT47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xyXG4gIHBpY3R1cmU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudSB7XHJcbiAgaGVhZGVyPzogc3RyaW5nO1xyXG4gIGl0ZW1zPzogU2lkZU1lbnVJdGVtW107XHJcbiAgZGl2aWRlcj86IGJvb2xlYW47XHJcbiAgY2FuPzogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SXRlbSB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJhZGdlPzogT2JzZXJ2YWJsZTxTaWRlTWVudUJhZGdlPjtcclxuICBwYXRoPzogc3RyaW5nO1xyXG4gIGhhbmRsZXI/OiAoKSA9PiB2b2lkO1xyXG4gIGNhbj86ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUJhZGdlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBvcHRpb25zOiBTaWRlTWVudU9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=