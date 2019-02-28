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
    SideMenu.prototype.type;
    /** @type {?|undefined} */
    SideMenu.prototype.header;
    /** @type {?|undefined} */
    SideMenu.prototype.items;
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
                    template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n\r\n<ion-list *ngFor=\"let menu of options.menus\" class=\"content\" no-padding\r\n  lines=\"none\">\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"></ion-side-menu-item>\r\n    <hr *ngIf=\"menu.type === 'divider'\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUd6RCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUtDOzs7SUFKQyx3QkFBNEI7O0lBQzVCLDBCQUFnQjs7SUFDaEIseUJBQXVCOztJQUN2Qix1QkFBZ0M7Ozs7O0FBRWxDLGtDQVNDOzs7SUFSQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLDJCQUFhOztJQUNiLGdDQUEwQjs7SUFDMUIsK0JBQXFCOztJQUNyQiwyQkFBZ0M7O0lBQ2hDLGdDQUF5Qzs7Ozs7QUFFM0MsbUNBR0M7OztJQUZDLDZCQUFhOztJQUNiLDhCQUFlOztBQUdqQjtJQVFFO0lBQWUsQ0FBQzs7OztJQUVoQixvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFWZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG80QkFBeUM7O2lCQUUxQzs7Ozs7MEJBRUUsS0FBSzs7SUFLUix3QkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLGlCQUFpQjs7O0lBQzVCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51T3B0aW9ucyB7XHJcbiAgaGVhZGVyPzogU2lkZU1lbnVIZWFkZXI7XHJcbiAgbWVudXM6IFNpZGVNZW51W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudUhlYWRlciB7XHJcbiAgYmFja2dyb3VuZD86IHN0cmluZztcclxuICBwcm9maWxlPzogT2JzZXJ2YWJsZTxTaWRlTWVudVByb2ZpbGU+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVQcm9maWxlIHtcclxuICBwaWN0dXJlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnUge1xyXG4gIHR5cGU/OiAnbm9ybWFsJyB8ICdkaXZpZGVyJztcclxuICBoZWFkZXI/OiBzdHJpbmc7XHJcbiAgaXRlbXM/OiBTaWRlTWVudUl0ZW1bXTtcclxuICBjYW4/OiAoKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVJdGVtIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYmFkZ2U/OiBPYnNlcnZhYmxlPFNpZGVNZW51QmFkZ2U+O1xyXG4gIHVybD86IHN0cmluZztcclxuICBjaGlsZHJlbj86IFNpZGVNZW51SXRlbVtdO1xyXG4gIGhhbmRsZXI/OiAoKSA9PiB2b2lkO1xyXG4gIGNhbj86ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51QmFkZ2Uge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNpZGVNZW51T3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19