/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isObservable } from 'rxjs';
export class SideMenuItemComponent {
    /**
     * @param {?} sanitizer
     * @param {?} router
     */
    constructor(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.depth = 0;
        this.isObservable = isObservable;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects.startsWith(this.item.url)) {
                    this.expanded = true;
                }
            }
        });
    }
}
SideMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu-item',
                template: "<div *ngIf=\"item.children && item.children.length; then thenBlock else\r\n  elseBlock\"></div>\r\n<ng-template #thenBlock>\r\n  <ion-item [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start:\r\n    ' + (depth + 1) * 16 + 'px')\" button detail=\"false\"\r\n    (click)=\"expanded=!expanded\">\r\n    <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n    <ion-label>{{ item.label }}</ion-label>\r\n    <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n      [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let item of item.children\" [item]=\"item\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #elseBlock>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\r\n      [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n      item.disabled\"\r\n      [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n      1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.label }}</ion-label>\r\n      <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n        [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n",
                styles: ["ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}"]
            }] }
];
/** @nocollapse */
SideMenuItemComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: Router }
];
SideMenuItemComponent.propDecorators = {
    item: [{ type: Input }],
    depth: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBU3BDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBT2hDLFlBQW1CLFNBQXVCLEVBQVUsTUFBYztRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx6RCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO0lBR3lDLENBQUM7Ozs7SUFFdEUsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixzM0RBQThDOzthQUUvQzs7OztZQVZRLFlBQVk7WUFDWixNQUFNOzs7bUJBV1osS0FBSztvQkFDTCxLQUFLOzs7O0lBRE4scUNBQTRCOztJQUM1QixzQ0FBMkI7O0lBRTNCLDZDQUE0Qjs7SUFDNUIseUNBQWtCOztJQUVOLDBDQUE4Qjs7Ozs7SUFBRSx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgU2lkZU1lbnVJdGVtIH0gZnJvbSAnLi4vc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpb24tc2lkZS1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBTaWRlTWVudUl0ZW07XHJcbiAgQElucHV0KCkgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gIGlzT2JzZXJ2YWJsZSA9IGlzT2JzZXJ2YWJsZTtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==