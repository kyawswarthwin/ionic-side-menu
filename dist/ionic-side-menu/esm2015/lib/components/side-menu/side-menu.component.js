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
export class SideMenuComponent {
    constructor() { }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\"\r\n  (click)=\"header.handler && header.handler()\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <div class=\"picture\">\r\n      <img [src]=\"profile.picture\">\r\n    </div>\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding class=\"content\" *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n    <ion-item [routerLink]=\"item.path ? item.path : []\"\r\n      [routerLinkActive]=\"item.path ? 'active' : []\"\r\n      [routerDirection]=\"item.path && 'root'\" (click)=\"item.handler &&\r\n      item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n        [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n  <hr *ngIf=\"menu.isDivider\" class=\"divider\">\r\n</ion-list>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUlDOzs7SUFIQywwQkFBZ0I7O0lBQ2hCLHlCQUF1Qjs7SUFDdkIsNkJBQW9COzs7OztBQUV0QixrQ0FNQzs7O0lBTEMsNEJBQWM7O0lBQ2QsNkJBQWM7O0lBQ2QsNkJBQWtDOztJQUNsQyw0QkFBYzs7SUFDZCwrQkFBcUI7Ozs7O0FBRXZCLG1DQUdDOzs7SUFGQyw2QkFBYTs7SUFDYiw4QkFBZTs7QUFRakIsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixnQkFBZSxDQUFDOzs7WUFSakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw4M0NBQXlDOzthQUUxQzs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudU9wdGlvbnMge1xyXG4gIGhlYWRlcj86IFNpZGVNZW51SGVhZGVyO1xyXG4gIG1lbnVzOiBTaWRlTWVudVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVIZWFkZXIge1xyXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XHJcbiAgcHJvZmlsZT86IE9ic2VydmFibGU8U2lkZU1lbnVQcm9maWxlPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51UHJvZmlsZSB7XHJcbiAgcGljdHVyZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51IHtcclxuICBoZWFkZXI/OiBzdHJpbmc7XHJcbiAgaXRlbXM/OiBTaWRlTWVudUl0ZW1bXTtcclxuICBpc0RpdmlkZXI/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVJdGVtIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYmFkZ2U/OiBPYnNlcnZhYmxlPFNpZGVNZW51QmFkZ2U+O1xyXG4gIHBhdGg/OiBzdHJpbmc7XHJcbiAgaGFuZGxlcj86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUJhZGdlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBvcHRpb25zOiBTaWRlTWVudU9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=