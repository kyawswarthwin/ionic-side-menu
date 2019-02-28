/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isObservable } from 'rxjs';
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
    SideMenu.prototype.hidden;
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
    SideMenuItem.prototype.disabled;
    /** @type {?|undefined} */
    SideMenuItem.prototype.hidden;
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
        this.isObservable = isObservable;
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
                    template: "<div *ngIf=\"options.header as header\" class=\"header\" [ngStyle]=\"header.background\r\n  && {'background-image': 'url(' + header.background + ')'}\">\r\n  <ng-container *ngIf=\"header.profile as profile\">\r\n    <div *ngIf=\"isObservable(profile); then asyncProfileTemplate else\r\n      normalProfileTemplate\"></div>\r\n    <ng-template #asyncProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile | async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #profileTemplate let-profile=\"profile\">\r\n      <div class=\"profile\">\r\n        <img class=\"picture\" [src]=\"profile.picture\">\r\n        <h2 class=\"name\">{{ profile.name }}</h2>\r\n        <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<ion-list *ngFor=\"let menu of options.menus\" class=\"content\" no-padding\r\n  lines=\"none\">\r\n  <div [hidden]=\"isObservable(menu.hidden) ? (menu.hidden | async) :\r\n    menu.hidden\">\r\n    <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n    <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"></ion-side-menu-item>\r\n    <hr *ngIf=\"menu.type === 'divider'\" class=\"divider\">\r\n  </div>\r\n</ion-list>\r\n",
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
    /** @type {?} */
    SideMenuComponent.prototype.isObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWhELHFDQUdDOzs7SUFGQyxpQ0FBd0I7O0lBQ3hCLGdDQUFrQjs7Ozs7QUFFcEIsb0NBR0M7OztJQUZDLG9DQUFvQjs7SUFDcEIsaUNBQXdEOzs7OztBQUUxRCxxQ0FJQzs7O0lBSEMsa0NBQWdCOztJQUNoQiwrQkFBYTs7SUFDYixnQ0FBZTs7Ozs7QUFFakIsOEJBS0M7OztJQUpDLHdCQUE0Qjs7SUFDNUIsMEJBQWdCOztJQUNoQix5QkFBdUI7O0lBQ3ZCLDBCQUF1Qzs7Ozs7QUFFekMsa0NBU0M7OztJQVJDLDRCQUFjOztJQUNkLDZCQUFjOztJQUNkLDZCQUFrRDs7SUFDbEQsMkJBQWE7O0lBQ2IsZ0NBQTBCOztJQUMxQiwrQkFBcUI7O0lBQ3JCLGdDQUF5Qzs7SUFDekMsOEJBQXVDOzs7OztBQUV6QyxtQ0FHQzs7O0lBRkMsNkJBQWE7O0lBQ2IsOEJBQWU7O0FBR2pCO0lBVUU7UUFGQSxpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUViLENBQUM7Ozs7SUFFaEIsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBWmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1Z0RBQXlDOztpQkFFMUM7Ozs7OzBCQUVFLEtBQUs7O0lBT1Isd0JBQUM7Q0FBQSxBQWJELElBYUM7U0FSWSxpQkFBaUI7OztJQUM1QixvQ0FBa0M7O0lBRWxDLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVPcHRpb25zIHtcclxuICBoZWFkZXI/OiBTaWRlTWVudUhlYWRlcjtcclxuICBtZW51czogU2lkZU1lbnVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVNZW51SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG4gIHByb2ZpbGU/OiBTaWRlTWVudVByb2ZpbGUgfCBPYnNlcnZhYmxlPFNpZGVNZW51UHJvZmlsZT47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudVByb2ZpbGUge1xyXG4gIHBpY3R1cmU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlTWVudSB7XHJcbiAgdHlwZT86ICdub3JtYWwnIHwgJ2RpdmlkZXInO1xyXG4gIGhlYWRlcj86IHN0cmluZztcclxuICBpdGVtcz86IFNpZGVNZW51SXRlbVtdO1xyXG4gIGhpZGRlbj86IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVJdGVtIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYmFkZ2U/OiBTaWRlTWVudUJhZGdlIHwgT2JzZXJ2YWJsZTxTaWRlTWVudUJhZGdlPjtcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgY2hpbGRyZW4/OiBTaWRlTWVudUl0ZW1bXTtcclxuICBoYW5kbGVyPzogKCkgPT4gdm9pZDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIGhpZGRlbj86IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU1lbnVCYWRnZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xyXG5cclxuICBpc09ic2VydmFibGUgPSBpc09ic2VydmFibGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==