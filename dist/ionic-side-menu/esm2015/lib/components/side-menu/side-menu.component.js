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
    SideMenuItem.prototype.url;
    /** @type {?|undefined} */
    SideMenuItem.prototype.children;
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
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <div *ngIf=\"(header.profile | async) as profile\" class=\"profile\">\r\n    <img class=\"picture\" [src]=\"profile.picture\">\r\n    <h2 class=\"name\">{{ profile.name }}</h2>\r\n    <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n  </div>\r\n</div>\r\n\r\n<ion-list *ngFor=\"let menu of options.menus\" class=\"content\" lines=\"none\"\r\n  no-padding>\r\n  <ng-container *ngIf=\"menu.can ? (menu.can() | async) : true\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"></ion-side-menu-item>\r\n    <hr *ngIf=\"menu.divider\" class=\"divider\">\r\n  </ng-container>\r\n</ion-list>\r\n",
                styles: [".header{background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));height:160px;margin-bottom:8px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUd6RCxxQ0FHQzs7O0lBRkMsaUNBQXdCOztJQUN4QixnQ0FBa0I7Ozs7O0FBRXBCLG9DQUdDOzs7SUFGQyxvQ0FBb0I7O0lBQ3BCLGlDQUFzQzs7Ozs7QUFFeEMscUNBSUM7OztJQUhDLGtDQUFnQjs7SUFDaEIsK0JBQWE7O0lBQ2IsZ0NBQWU7Ozs7O0FBRWpCLDhCQUtDOzs7SUFKQywwQkFBZ0I7O0lBQ2hCLHlCQUF1Qjs7SUFDdkIsMkJBQWtCOztJQUNsQix1QkFBZ0M7Ozs7O0FBRWxDLGtDQVFDOzs7SUFQQyw0QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCw2QkFBa0M7O0lBQ2xDLDJCQUFhOztJQUNiLGdDQUEwQjs7SUFDMUIsK0JBQXFCOztJQUNyQiwyQkFBZ0M7Ozs7O0FBRWxDLG1DQUdDOzs7SUFGQyw2QkFBYTs7SUFDYiw4QkFBZTs7QUFRakIsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixnQkFBZSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFWZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHkzQkFBeUM7O2FBRTFDOzs7OztzQkFFRSxLQUFLOzs7O0lBQU4sb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVPcHRpb25zIHtcclxuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcclxuICBtZW51czogU2lkZU1lbnVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG4gIHByb2ZpbGU/OiBPYnNlcnZhYmxlPFNpZGVNZW51UHJvZmlsZT47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xyXG4gIHBpY3R1cmU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudSB7XHJcbiAgaGVhZGVyPzogc3RyaW5nO1xyXG4gIGl0ZW1zPzogU2lkZU1lbnVJdGVtW107XHJcbiAgZGl2aWRlcj86IGJvb2xlYW47XHJcbiAgY2FuPzogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SXRlbSB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJhZGdlPzogT2JzZXJ2YWJsZTxTaWRlTWVudUJhZGdlPjtcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgY2hpbGRyZW4/OiBTaWRlTWVudUl0ZW1bXTtcclxuICBoYW5kbGVyPzogKCkgPT4gdm9pZDtcclxuICBjYW4/OiAoKSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVCYWRnZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=