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
    SideMenuHeader.prototype.onClick;
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
    SideMenuItem.prototype.onClick;
}
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu',
                    template: "<div *ngIf=\"options.header\" class=\"header\" [ngStyle]=\"options.header.background\r\n  && {'background-image': 'url(' + options.header.background + ')'}\"\r\n  (click)=\"options.header.onClick && options.header.onClick()\">\r\n  <div *ngIf=\"options.header.profile\" class=\"profile\">\r\n    <div class=\"picture\">\r\n      <img [src]=\"options.header.profile.picture\">\r\n    </div>\r\n    <h2 class=\"name\">{{ options.header.profile.name }}</h2>\r\n    <p *ngIf=\"options.header.profile.email\" class=\"email\">{{\r\n      options.header.profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list lines=\"none\" no-padding class=\"content\" *ngFor=\"let menu of\r\n  options.menus\">\r\n  <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\r\n    <ion-item [routerLink]=\"item.path && item.path\"\r\n      [routerLinkActive]=\"item.path && 'active'\" [routerDirection]=\"item.path &&\r\n      'root'\" (click)=\"item.onClick && item.onClick()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"item.badge\" slot=\"end\" [color]=\"item.badgeColor &&\r\n        item.badgeColor\">{{ item.badge }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n  <hr *ngIf=\"menu.isDivider\" class=\"divider\">\r\n</ion-list>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUlDOzs7SUFIQyxvQ0FBb0I7O0lBQ3BCLGlDQUEwQjs7SUFDMUIsaUNBQW1COzs7OztBQUVyQixxQ0FJQzs7O0lBSEMsa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYixnQ0FBZTs7Ozs7QUFFakIsOEJBSUM7OztJQUhDLDBCQUFnQjs7SUFDaEIseUJBQXVCOztJQUN2Qiw2QkFBb0I7Ozs7O0FBRXRCLGtDQU9DOzs7SUFOQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBZTs7SUFDZixrQ0FBb0I7O0lBQ3BCLDRCQUFjOztJQUNkLCtCQUFtQjs7QUFHckI7SUFRRTtJQUFlLENBQUM7O2dCQVJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGc3Q0FBeUM7O2lCQUUxQzs7Ozs7MEJBRUUsS0FBSzs7SUFHUix3QkFBQztDQUFBLEFBVEQsSUFTQztTQUpZLGlCQUFpQjs7O0lBQzVCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudU9wdGlvbnMge1xuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcbiAgbWVudXM6IFNpZGVNZW51W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgcHJvZmlsZT86IFNpZGVNZW51UHJvZmlsZTtcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xuICBwaWN0dXJlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51IHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICBpdGVtcz86IFNpZGVNZW51SXRlbVtdO1xuICBpc0RpdmlkZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUl0ZW0ge1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbiAgYmFkZ2VDb2xvcj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==