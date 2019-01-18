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
                    template: "<div class=\"side-menu-container\">\n  <div *ngIf=\"options.header\" class=\"side-menu-header\"\n    [ngStyle]=\"options.header.background && {'background-image': 'url(' +\n    options.header.background + ')'}\" (click)=\"options.header.onClick &&\n    options.header.onClick()\">\n    <div *ngIf=\"options.header.profile\" class=\"profile\">\n      <div class=\"picture\">\n        <img [src]=\"options.header.profile.picture\">\n      </div>\n      <h2 class=\"name\">{{ options.header.profile.name }}</h2>\n      <p *ngIf=\"options.header.profile.email\" class=\"email\">{{\n        options.header.profile.email }}</p>\n    </div>\n  </div>\n  <ion-list lines=\"none\" no-padding>\n    <div *ngFor=\"let menu of options.menus\">\n      <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of menu.items\">\n        <ion-item [routerLink]=\"item.path && item.path\"\n          [routerLinkActive]=\"item.path && 'active'\"\n          [routerDirection]=\"item.path && 'root'\" (click)=\"item.onClick &&\n          item.onClick()\">\n          <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\n          <ion-label>{{ item.title }}</ion-label>\n          <ion-badge *ngIf=\"item.badge\" slot=\"end\" [color]=\"item.badgeColor &&\n            item.badgeColor\">{{ item.badge }}</ion-badge>\n        </ion-item>\n      </ion-menu-toggle>\n      <hr *ngIf=\"menu.isDivider\" class=\"divider\">\n    </div>\n  </ion-list>\n</div>\n",
                    styles: [".side-menu-container .side-menu-header{background-repeat:no-repeat;background-position:center;background-size:cover;height:160px;margin-bottom:8px;border-bottom:1px solid rgba(0,0,0,.13);padding:16px}.side-menu-container .side-menu-header .profile .picture{height:64px;width:64px}.side-menu-container .side-menu-header .profile .picture img{border-radius:50%}.side-menu-container .side-menu-header .profile .email,.side-menu-container .side-menu-header .profile .name{margin:0;font-size:14px;line-height:24px;color:#fff}.side-menu-container .side-menu-header .profile .name{margin-top:16px;font-weight:500}.side-menu-container .side-menu-header .profile .email{font-weight:400}.side-menu-container ion-list-header{margin-top:-8px}.side-menu-container .active{--background:var(--border-color)}.side-menu-container .active ion-icon,.side-menu-container .active ion-label{color:var(--ion-color-primary)}.side-menu-container .divider{border-bottom:1px solid rgba(0,0,0,.13)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUlDOzs7SUFIQyxvQ0FBb0I7O0lBQ3BCLGlDQUEwQjs7SUFDMUIsaUNBQW1COzs7OztBQUVyQixxQ0FJQzs7O0lBSEMsa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYixnQ0FBZTs7Ozs7QUFFakIsOEJBSUM7OztJQUhDLDBCQUFnQjs7SUFDaEIseUJBQXVCOztJQUN2Qiw2QkFBb0I7Ozs7O0FBRXRCLGtDQU9DOzs7SUFOQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBZTs7SUFDZixrQ0FBb0I7O0lBQ3BCLDRCQUFjOztJQUNkLCtCQUFtQjs7QUFHckI7SUFRRTtJQUFlLENBQUM7O2dCQVJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLCtnREFBeUM7O2lCQUUxQzs7Ozs7MEJBRUUsS0FBSzs7SUFHUix3QkFBQztDQUFBLEFBVEQsSUFTQztTQUpZLGlCQUFpQjs7O0lBQzVCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudU9wdGlvbnMge1xuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcbiAgbWVudXM6IFNpZGVNZW51W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgcHJvZmlsZT86IFNpZGVNZW51UHJvZmlsZTtcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xuICBwaWN0dXJlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51IHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICBpdGVtcz86IFNpZGVNZW51SXRlbVtdO1xuICBpc0RpdmlkZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUl0ZW0ge1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbiAgYmFkZ2VDb2xvcj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgb25DbGljaz86IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==