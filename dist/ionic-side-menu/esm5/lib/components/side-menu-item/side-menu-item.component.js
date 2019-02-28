/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
var SideMenuItemComponent = /** @class */ (function () {
    function SideMenuItemComponent(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.depth = 0;
    }
    /**
     * @return {?}
     */
    SideMenuItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects.startsWith(_this.item.url)) {
                    _this.expanded = true;
                }
            }
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl4RDtJQVdFLCtCQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKekQsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUkwQyxDQUFDOzs7O0lBRXRFLHdDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNoQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNyRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtckRBQThDOztpQkFFL0M7Ozs7Z0JBVFEsWUFBWTtnQkFDWixNQUFNOzs7dUJBVVosS0FBSzt3QkFDTCxLQUFLOztJQWVSLDRCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlkscUJBQXFCOzs7SUFDaEMscUNBQTRCOztJQUM1QixzQ0FBMkI7O0lBRTNCLHlDQUFrQjs7SUFFTiwwQ0FBOEI7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU2lkZU1lbnVJdGVtIH0gZnJvbSAnLi4vc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBTaWRlTWVudUl0ZW07XHJcbiAgQElucHV0KCkgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3RhcnRzV2l0aCh0aGlzLml0ZW0udXJsKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19