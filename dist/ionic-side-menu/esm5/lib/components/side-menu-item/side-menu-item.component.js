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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var disabled, _a, hidden, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
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
                        this.router.events.subscribe(function (event) {
                            if (event instanceof NavigationEnd) {
                                if (event.urlAfterRedirects.startsWith(_this.item.url) && !disabled && !hidden) {
                                    _this.expanded = true;
                                }
                            }
                        });
                        if (this.router.url.startsWith(this.item.url) && !disabled && !hidden) {
                            this.expanded = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu-item',
                    template: "<div *ngIf=\"item.children && item.children.length; then parentItemTemplate else\r\n  normalItemTemplate\"></div>\r\n<ng-template #parentItemTemplate>\r\n  <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n    (depth + 1) * 16 + 'px')\" button detail=\"false\" (click)=\"expanded=!expanded\"\r\n    [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async) :\r\n    item.hidden\">\r\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let child of item.children\" [item]=\"child\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #normalItemTemplate>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n      (depth + 1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\"\r\n      [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n      item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async)\r\n      : item.hidden\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n  <ion-label>{{ item.label }}</ion-label>\r\n  <ng-container *ngIf=\"item.badge as badge\">\r\n    <div *ngIf=\"isObservable(badge); then asyncBadgeTemplate else\r\n      normalBadgeTemplate\"></div>\r\n    <ng-template #asyncBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge |\r\n        async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge\r\n        }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #badgeTemplate let-badge=\"badge\">\r\n      <ion-badge slot=\"end\" [color]=\"badge.color\">{{ badge.text }}</ion-badge>\r\n    </ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlwQztJQVlFLCtCQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUd5QyxDQUFDOzs7O0lBRWhFLHdDQUFROzs7SUFBZDs7Ozs7Ozs2QkFDbUIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQWhDLHdCQUFnQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFwQyxLQUFBLFNBQW9DLENBQUE7Ozt3QkFDcEMsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTs7O3dCQUZoQixRQUFRLEtBRVE7NkJBQ1AsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQTlCLHdCQUE4Qjt3QkFDekMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFsQyxLQUFBLFNBQWtDLENBQUE7Ozt3QkFDbEMsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTs7O3dCQUZkLE1BQU0sS0FFUTt3QkFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSzs0QkFDaEMsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO2dDQUNsQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQ0FDN0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUNBQ3RCOzZCQUNGO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUVILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3lCQUN0Qjs7Ozs7S0FDRjs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QiwyaEZBQThDOztpQkFFL0M7Ozs7Z0JBVlEsWUFBWTtnQkFDWixNQUFNOzs7dUJBV1osS0FBSzt3QkFDTCxLQUFLOztJQTJCUiw0QkFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLHFCQUFxQjs7O0lBQ2hDLHFDQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUUzQiw2Q0FBNEI7O0lBQzVCLHlDQUFrQjs7SUFFTiwwQ0FBOEI7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFNpZGVNZW51SXRlbSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvc2lkZS1tZW51Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbTogU2lkZU1lbnVJdGVtO1xyXG4gIEBJbnB1dCgpIGRlcHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICBpc09ic2VydmFibGUgPSBpc09ic2VydmFibGU7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBkaXNhYmxlZCA9IGlzT2JzZXJ2YWJsZSh0aGlzLml0ZW0uZGlzYWJsZWQpXHJcbiAgICAgID8gYXdhaXQgdGhpcy5pdGVtLmRpc2FibGVkLnRvUHJvbWlzZSgpXHJcbiAgICAgIDogdGhpcy5pdGVtLmRpc2FibGVkO1xyXG4gICAgY29uc3QgaGlkZGVuID0gaXNPYnNlcnZhYmxlKHRoaXMuaXRlbS5oaWRkZW4pXHJcbiAgICAgID8gYXdhaXQgdGhpcy5pdGVtLmhpZGRlbi50b1Byb21pc2UoKVxyXG4gICAgICA6IHRoaXMuaXRlbS5oaWRkZW47XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3RhcnRzV2l0aCh0aGlzLml0ZW0udXJsKSAmJiAhZGlzYWJsZWQgJiYgIWhpZGRlbikge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkgJiYgIWRpc2FibGVkICYmICFoaWRkZW4pIHtcclxuICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==