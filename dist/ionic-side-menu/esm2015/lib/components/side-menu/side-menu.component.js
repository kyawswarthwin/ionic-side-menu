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
    SideMenuItem.prototype.children;
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
export class SideMenuComponent {
    constructor() { }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n<ion-list *ngFor=\"let menu of options.menus\" class=\"content\" lines=\"none\"\r\n  no-padding>\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ng-container *ngFor=\"let item of menu.items\">\r\n      <ion-side-menu-item [item]=\"item\"></ion-side-menu-item>\r\n    </ng-container>\r\n    <hr *ngIf=\"menu.divider\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
                styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUtDOzs7SUFKQywwQkFBZ0I7O0lBQ2hCLHlCQUF1Qjs7SUFDdkIsMkJBQWtCOztJQUNsQix1QkFBZ0M7Ozs7O0FBRWxDLGtDQVFDOzs7SUFQQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLGdDQUEwQjs7SUFDMUIsNEJBQWM7O0lBQ2QsK0JBQXFCOztJQUNyQiwyQkFBZ0M7Ozs7O0FBRWxDLG1DQUdDOzs7SUFGQyw2QkFBYTs7SUFDYiw4QkFBZTs7QUFRakIsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixnQkFBZSxDQUFDOzs7WUFSakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixvNkJBQXlDOzthQUUxQzs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudU9wdGlvbnMge1xyXG4gIGhlYWRlcj86IFNpZGVNZW51SGVhZGVyO1xyXG4gIG1lbnVzOiBTaWRlTWVudVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVIZWFkZXIge1xyXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XHJcbiAgcHJvZmlsZT86IE9ic2VydmFibGU8U2lkZU1lbnVQcm9maWxlPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51UHJvZmlsZSB7XHJcbiAgcGljdHVyZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51IHtcclxuICBoZWFkZXI/OiBzdHJpbmc7XHJcbiAgaXRlbXM/OiBTaWRlTWVudUl0ZW1bXTtcclxuICBkaXZpZGVyPzogYm9vbGVhbjtcclxuICBjYW4/OiAoKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVJdGVtIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYmFkZ2U/OiBPYnNlcnZhYmxlPFNpZGVNZW51QmFkZ2U+O1xyXG4gIGNoaWxkcmVuPzogU2lkZU1lbnVJdGVtW107XHJcbiAgcGF0aD86IHN0cmluZztcclxuICBoYW5kbGVyPzogKCkgPT4gdm9pZDtcclxuICBjYW4/OiAoKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVCYWRnZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19