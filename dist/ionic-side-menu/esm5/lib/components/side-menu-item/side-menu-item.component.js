/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isObservable } from 'rxjs';
var SideMenuItemComponent = /** @class */ (function () {
    function SideMenuItemComponent(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.depth = 0;
        this.isObservable = isObservable;
    }
    /**
     * @return {?}
     */
    SideMenuItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.router.events.subscribe(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var disabled, _a, hidden, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(event instanceof NavigationEnd)) return [3 /*break*/, 7];
                        if (!isObservable(this.item.disabled)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.item.disabled.toPromise()];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this.item.disabled;
                        _c.label = 3;
                    case 3:
                        disabled = _a;
                        if (!isObservable(this.item.hidden)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.item.hidden.toPromise()];
                    case 4:
                        _b = _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _b = this.item.hidden;
                        _c.label = 6;
                    case 6:
                        hidden = _b;
                        if (event.urlAfterRedirects.startsWith(this.item.url) && !disabled && !hidden) {
                            this.expanded = true;
                        }
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    SideMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu-item',
                    template: "<div *ngIf=\"item.children && item.children.length; then parentItemTemplate else\r\n  normalItemTemplate\"></div>\r\n<ng-template #parentItemTemplate>\r\n  <ion-item [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async) :\r\n    item.hidden\" [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: '\r\n    + (depth + 1) * 16 + 'px')\" button detail=\"false\"\r\n    (click)=\"expanded=!expanded\">\r\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let child of item.children\" [item]=\"child\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #normalItemTemplate>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item [disabled]=\"isObservable(item.disabled) ? (item.disabled | async)\r\n      : item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden |\r\n      async) : item.hidden\"\r\n      [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n      1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n  <ion-label>{{ item.label }}</ion-label>\r\n  <ng-container *ngIf=\"item.badge as badge\">\r\n    <div *ngIf=\"isObservable(badge); then asyncBadgeTemplate else\r\n      normalBadgeTemplate\"></div>\r\n    <ng-template #asyncBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge |\r\n        async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge\r\n        }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #badgeTemplate let-badge=\"badge\">\r\n      <ion-badge slot=\"end\" [color]=\"badge.color\">{{ badge.text }}</ion-badge>\r\n    </ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n",
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
    SideMenuItemComponent.prototype.isObservable;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlwQztJQVlFLCtCQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUd5QyxDQUFDOzs7O0lBRXRFLHdDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQU0sS0FBSzs7Ozs7NkJBQ2xDLENBQUEsS0FBSyxZQUFZLGFBQWEsQ0FBQSxFQUE5Qix3QkFBOEI7NkJBQ2YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQWhDLHdCQUFnQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFwQyxLQUFBLFNBQW9DLENBQUE7Ozt3QkFDcEMsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTs7O3dCQUZoQixRQUFRLEtBRVE7NkJBQ1AsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQTlCLHdCQUE4Qjt3QkFDekMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFsQyxLQUFBLFNBQWtDLENBQUE7Ozt3QkFDbEMsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTs7O3dCQUZkLE1BQU0sS0FFUTt3QkFDcEIsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3lCQUN0Qjs7Ozs7YUFFSixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDJoRkFBOEM7O2lCQUUvQzs7OztnQkFWUSxZQUFZO2dCQUNaLE1BQU07Ozt1QkFXWixLQUFLO3dCQUNMLEtBQUs7O0lBc0JSLDRCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4QlkscUJBQXFCOzs7SUFDaEMscUNBQTRCOztJQUM1QixzQ0FBMkI7O0lBRTNCLDZDQUE0Qjs7SUFDNUIseUNBQWtCOztJQUVOLDBDQUE4Qjs7Ozs7SUFBRSx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgU2lkZU1lbnVJdGVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9zaWRlLW1lbnUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBTaWRlTWVudUl0ZW07XHJcbiAgQElucHV0KCkgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gIGlzT2JzZXJ2YWJsZSA9IGlzT2JzZXJ2YWJsZTtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBpc09ic2VydmFibGUodGhpcy5pdGVtLmRpc2FibGVkKVxyXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLml0ZW0uZGlzYWJsZWQudG9Qcm9taXNlKClcclxuICAgICAgICAgIDogdGhpcy5pdGVtLmRpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGlzT2JzZXJ2YWJsZSh0aGlzLml0ZW0uaGlkZGVuKVxyXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLml0ZW0uaGlkZGVuLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICA6IHRoaXMuaXRlbS5oaWRkZW47XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkgJiYgIWRpc2FibGVkICYmICFoaWRkZW4pIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==