/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
var SideMenuItemComponent = /** @class */ (function () {
    function SideMenuItemComponent(sanitizer, router) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.router = router;
        this.depth = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects.startsWith(_this.item.url)) {
                    _this.expanded = true;
                }
            }
        });
    }
    SideMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu-item',
                    template: "<div *ngIf=\"item.children && item.children.length; then thenBlock else\r\n  elseBlock\"></div>\r\n<ng-template #thenBlock>\r\n  <ion-item button detail=\"false\"\r\n    [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n    1) * 16 + 'px')\" (click)=\"expanded=!expanded\">\r\n    <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n    <ion-label>{{ item.title }}</ion-label>\r\n    <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n      [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let item of item.children\" [item]=\"item\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #elseBlock>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\r\n      [routerLink]=\"item.url ? item.url : []\" [routerLinkActive]=\"item.url ?\r\n      'active' : []\" [routerDirection]=\"item.url && 'root'\"\r\n      [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n      1) * 16 + 'px')\" (click)=\"item.handler && item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n        [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n",
                    styles: ["ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}"]
                }] }
    ];
    /** @nocollapse */
    SideMenuItemComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: Router }
    ]; };
    SideMenuItemComponent.propDecorators = {
        item: [{ type: Input }],
        depth: [{ type: Input }]
    };
    return SideMenuItemComponent;
}());
export { SideMenuItemComponent };
if (false) {
    /** @type {?} */
    SideMenuItemComponent.prototype.item;
    /** @type {?} */
    SideMenuItemComponent.prototype.depth;
    /** @type {?} */
    SideMenuItemComponent.prototype.expanded;
    /** @type {?} */
    SideMenuItemComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    SideMenuItemComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl4RDtJQVdFLCtCQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBbEUsaUJBUUM7UUFSa0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKekQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUt6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2hDLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3JELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG1yREFBOEM7O2lCQUUvQzs7OztnQkFUUSxZQUFZO2dCQUNaLE1BQU07Ozt1QkFVWixLQUFLO3dCQUNMLEtBQUs7O0lBYVIsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHFCQUFxQjs7O0lBQ2hDLHFDQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUUzQix5Q0FBa0I7O0lBRU4sMENBQThCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTaWRlTWVudUl0ZW0gfSBmcm9tICcuLi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IFNpZGVNZW51SXRlbTtcclxuICBASW5wdXQoKSBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3RhcnRzV2l0aCh0aGlzLml0ZW0udXJsKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19