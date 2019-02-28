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
    SideMenuItem.prototype.label;
    /** @type {?|undefined} */
    SideMenuItem.prototype.badge;
    /** @type {?|undefined} */
    SideMenuItem.prototype.url;
    /** @type {?|undefined} */
    SideMenuItem.prototype.children;
    /** @type {?|undefined} */
    SideMenuItem.prototype.handler;
    /** @type {?|undefined} */
    SideMenuItem.prototype.can;
    /** @type {?|undefined} */
    SideMenuItem.prototype.disabled;
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
    /**
     * @return {?}
     */
    SideMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu',
                    template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n\r\n<ion-list *ngFor=\"let menu of options.menus\" class=\"content\" no-padding\r\n  lines=\"none\">\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"></ion-side-menu-item>\r\n    <hr *ngIf=\"menu.divider\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
                    styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUd6RCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUtDOzs7SUFKQywwQkFBZ0I7O0lBQ2hCLHlCQUF1Qjs7SUFDdkIsMkJBQWtCOztJQUNsQix1QkFBZ0M7Ozs7O0FBRWxDLGtDQVNDOzs7SUFSQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLDJCQUFhOztJQUNiLGdDQUEwQjs7SUFDMUIsK0JBQXFCOztJQUNyQiwyQkFBZ0M7O0lBQ2hDLGdDQUF5Qzs7Ozs7QUFFM0MsbUNBR0M7OztJQUZDLDZCQUFhOztJQUNiLDhCQUFlOztBQUdqQjtJQVFFO0lBQWUsQ0FBQzs7OztJQUVoQixvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFWZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHkzQkFBeUM7O2lCQUUxQzs7Ozs7MEJBRUUsS0FBSzs7SUFLUix3QkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLGlCQUFpQjs7O0lBQzVCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51T3B0aW9ucyB7XHJcbiAgaGVhZGVyPzogU2lkZU1lbnVIZWFkZXI7XHJcbiAgbWVudXM6IFNpZGVNZW51W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUhlYWRlciB7XHJcbiAgYmFja2dyb3VuZD86IHN0cmluZztcclxuICBwcm9maWxlPzogT2JzZXJ2YWJsZTxTaWRlTWVudVByb2ZpbGU+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVQcm9maWxlIHtcclxuICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnUge1xyXG4gIGhlYWRlcj86IHN0cmluZztcclxuICBpdGVtcz86IFNpZGVNZW51SXRlbVtdO1xyXG4gIGRpdmlkZXI/OiBib29sZWFuO1xyXG4gIGNhbj86ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUl0ZW0ge1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBiYWRnZT86IE9ic2VydmFibGU8U2lkZU1lbnVCYWRnZT47XHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIGNoaWxkcmVuPzogU2lkZU1lbnVJdGVtW107XHJcbiAgaGFuZGxlcj86ICgpID0+IHZvaWQ7XHJcbiAgY2FuPzogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVCYWRnZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=