/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        this.router.events.subscribe((event) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                const disabled = isObservable(this.item.disabled)
                    ? yield this.item.disabled.toPromise()
                    : this.item.disabled;
                /** @type {?} */
                const hidden = isObservable(this.item.hidden)
                    ? yield this.item.hidden.toPromise()
                    : this.item.hidden;
                if (event.urlAfterRedirects.startsWith(this.item.url) && !disabled && !hidden) {
                    this.expanded = true;
                }
            }
        }));
    }
}
SideMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu-item',
                template: "<div *ngIf=\"item.children && item.children.length; then parentItemTemplate else\r\n  normalItemTemplate\"></div>\r\n<ng-template #parentItemTemplate>\r\n  <ion-item [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async) :\r\n    item.hidden\" [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: '\r\n    + (depth + 1) * 16 + 'px')\" button detail=\"false\"\r\n    (click)=\"expanded=!expanded\">\r\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let child of item.children\" [item]=\"child\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #normalItemTemplate>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item [disabled]=\"isObservable(item.disabled) ? (item.disabled | async)\r\n      : item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden |\r\n      async) : item.hidden\"\r\n      [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n      1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n  <ion-label>{{ item.label }}</ion-label>\r\n  <ng-container *ngIf=\"item.badge as badge\">\r\n    <div *ngIf=\"isObservable(badge); then asyncBadgeTemplate else\r\n      normalBadgeTemplate\"></div>\r\n    <ng-template #asyncBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge |\r\n        async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge\r\n        }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #badgeTemplate let-badge=\"badge\">\r\n      <ion-badge slot=\"end\" [color]=\"badge.color\">{{ badge.text }}</ion-badge>\r\n    </ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVNwQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU9oQyxZQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUd5QyxDQUFDOzs7O0lBRXRFLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtZQUN6QyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7O3NCQUM1QixRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUMvQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7O3NCQUNoQixNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ3BCLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDRjtRQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDJoRkFBOEM7O2FBRS9DOzs7O1lBVlEsWUFBWTtZQUNaLE1BQU07OzttQkFXWixLQUFLO29CQUNMLEtBQUs7Ozs7SUFETixxQ0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFFM0IsNkNBQTRCOztJQUM1Qix5Q0FBa0I7O0lBRU4sMENBQThCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTaWRlTWVudUl0ZW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3NpZGUtbWVudS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IFNpZGVNZW51SXRlbTtcclxuICBASW5wdXQoKSBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgaXNPYnNlcnZhYmxlID0gaXNPYnNlcnZhYmxlO1xyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShhc3luYyBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGlzT2JzZXJ2YWJsZSh0aGlzLml0ZW0uZGlzYWJsZWQpXHJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuaXRlbS5kaXNhYmxlZC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgOiB0aGlzLml0ZW0uZGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgaGlkZGVuID0gaXNPYnNlcnZhYmxlKHRoaXMuaXRlbS5oaWRkZW4pXHJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuaXRlbS5oaWRkZW4udG9Qcm9taXNlKClcclxuICAgICAgICAgIDogdGhpcy5pdGVtLmhpZGRlbjtcclxuICAgICAgICBpZiAoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3RhcnRzV2l0aCh0aGlzLml0ZW0udXJsKSAmJiAhZGlzYWJsZWQgJiYgIWhpZGRlbikge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19