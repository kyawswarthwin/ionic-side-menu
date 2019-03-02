/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isObservable } from 'rxjs';
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
    /**
     * @param {?} header
     * @return {?}
     */
    SideMenuComponent.prototype.setHeaderStyle = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        /** @type {?} */
        var style = {};
        if (header.background) {
            style['background-image'] = "url(" + header.background + ")";
        }
        if (header.menus && header.menus.length) {
            style['cursor'] = 'pointer';
        }
        return style;
    };
    SideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu',
                    template: "<div *ngIf=\"options.header as header\" class=\"header\"\r\n  [ngStyle]=\"setHeaderStyle(header)\" (click)=\"header.menus &&\r\n  header.menus.length && expanded=!expanded\">\r\n  <ng-container *ngIf=\"header.profile as profile\">\r\n    <div *ngIf=\"isObservable(profile); then asyncProfileTemplate else\r\n      normalProfileTemplate\"></div>\r\n    <ng-template #asyncProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile | async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #profileTemplate let-profile=\"profile\">\r\n      <div class=\"profile\">\r\n        <img class=\"picture\" [src]=\"profile.picture\">\r\n        <h2 class=\"name\">{{ profile.name }}</h2>\r\n        <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n        <ion-icon *ngIf=\"header.menus && header.menus.length\" [name]=\"expanded ?\r\n          'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div *ngIf=\"expanded; then profileMenuTemplate else normalMenuTemplate\"></div>\r\n<ng-template #profileMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus:\r\n    options.header.menus }\"></ng-container>\r\n</ng-template>\r\n<ng-template #normalMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus: options.menus\r\n    }\"></ng-container>\r\n</ng-template>\r\n<ng-template #menuTemplate let-menus=\"menus\">\r\n  <ion-list *ngFor=\"let menu of menus\" class=\"content\" no-padding lines=\"none\">\r\n    <div [hidden]=\"isObservable(menu.hidden) ? (menu.hidden | async) :\r\n      menu.hidden\">\r\n      <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n      <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"\r\n        (click)=\"expanded=false\"></ion-side-menu-item>\r\n      <hr *ngIf=\"menu.type === 'divider'\" class=\"divider\">\r\n    </div>\r\n  </ion-list>\r\n</ng-template>\r\n",
                    styles: [".header{height:160px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px;margin-bottom:8px;background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header .profile{position:relative;height:128px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.header .profile ion-icon{position:absolute;right:0;bottom:0;font-size:24px}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
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
    /** @type {?} */
    SideMenuComponent.prototype.expanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXBDO0lBV0U7UUFIQSxpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUdiLENBQUM7Ozs7SUFFaEIsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYiwwQ0FBYzs7OztJQUFkLFVBQWUsTUFBc0I7O1lBQzdCLEtBQUssR0FBRyxFQUFFO1FBQ2hCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyQixLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxTQUFPLE1BQU0sQ0FBQyxVQUFVLE1BQUcsQ0FBQztTQUN6RDtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5c0VBQXlDOztpQkFFMUM7Ozs7OzBCQUVFLEtBQUs7O0lBbUJSLHdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksaUJBQWlCOzs7SUFDNUIsb0NBQWtDOztJQUVsQyx5Q0FBNEI7O0lBQzVCLHFDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFNpZGVNZW51T3B0aW9ucywgU2lkZU1lbnVIZWFkZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3NpZGUtbWVudS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogU2lkZU1lbnVPcHRpb25zO1xyXG5cclxuICBpc09ic2VydmFibGUgPSBpc09ic2VydmFibGU7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBzZXRIZWFkZXJTdHlsZShoZWFkZXI6IFNpZGVNZW51SGVhZGVyKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG4gICAgaWYgKGhlYWRlci5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgIHN0eWxlWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdXJsKCR7aGVhZGVyLmJhY2tncm91bmR9KWA7XHJcbiAgICB9XHJcbiAgICBpZiAoaGVhZGVyLm1lbnVzICYmIGhlYWRlci5tZW51cy5sZW5ndGgpIHtcclxuICAgICAgc3R5bGVbJ2N1cnNvciddID0gJ3BvaW50ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxufVxyXG4iXX0=