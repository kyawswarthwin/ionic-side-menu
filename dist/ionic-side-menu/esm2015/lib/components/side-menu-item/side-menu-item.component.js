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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const disabled = isObservable(this.item.disabled)
                ? yield this.item.disabled.toPromise()
                : this.item.disabled;
            /** @type {?} */
            const hidden = isObservable(this.item.hidden)
                ? yield this.item.hidden.toPromise()
                : this.item.hidden;
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    if (event.urlAfterRedirects.startsWith(this.item.url) && !disabled && !hidden) {
                        this.expanded = true;
                    }
                }
            });
            if (this.router.url.startsWith(this.item.url) && !disabled && !hidden) {
                this.expanded = true;
            }
        });
    }
}
SideMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu-item',
                template: "<div *ngIf=\"item.children && item.children.length; then parentItemTemplate else\r\n  normalItemTemplate\"></div>\r\n<ng-template #parentItemTemplate>\r\n  <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n    (depth + 1) * 16 + 'px')\" button detail=\"false\" (click)=\"expanded=!expanded\"\r\n    [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n    item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async) :\r\n    item.hidden\">\r\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let child of item.children\" [item]=\"child\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #normalItemTemplate>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' +\r\n      (depth + 1) * 16 + 'px')\" [routerLink]=\"item.url ? item.url : []\"\r\n      [routerLinkActive]=\"item.url ? 'active' : []\" [routerDirection]=\"item.url\r\n      && 'root'\" (click)=\"item.handler && item.handler()\"\r\n      [disabled]=\"isObservable(item.disabled) ? (item.disabled | async) :\r\n      item.disabled\" [hidden]=\"isObservable(item.hidden) ? (item.hidden | async)\r\n      : item.hidden\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: { item: item }\"></ng-container>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n<ng-template #itemTemplate let-item=\"item\">\r\n  <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n  <ion-label>{{ item.label }}</ion-label>\r\n  <ng-container *ngIf=\"item.badge as badge\">\r\n    <div *ngIf=\"isObservable(badge); then asyncBadgeTemplate else\r\n      normalBadgeTemplate\"></div>\r\n    <ng-template #asyncBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge |\r\n        async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalBadgeTemplate>\r\n      <ng-container *ngTemplateOutlet=\"badgeTemplate; context: { badge: badge\r\n        }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #badgeTemplate let-badge=\"badge\">\r\n      <ion-badge slot=\"end\" [color]=\"badge.color\">{{ badge.text }}</ion-badge>\r\n    </ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVNwQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU9oQyxZQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUd5QyxDQUFDOzs7O0lBRWhFLFFBQVE7OztrQkFDTixRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7O2tCQUNoQixNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7b0JBQ2xDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztxQkFDdEI7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQztLQUFBOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDJoRkFBOEM7O2FBRS9DOzs7O1lBVlEsWUFBWTtZQUNaLE1BQU07OzttQkFXWixLQUFLO29CQUNMLEtBQUs7Ozs7SUFETixxQ0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFFM0IsNkNBQTRCOztJQUM1Qix5Q0FBa0I7O0lBRU4sMENBQThCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTaWRlTWVudUl0ZW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL3NpZGUtbWVudS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvbi1zaWRlLW1lbnUtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IFNpZGVNZW51SXRlbTtcclxuICBASW5wdXQoKSBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgaXNPYnNlcnZhYmxlID0gaXNPYnNlcnZhYmxlO1xyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSBpc09ic2VydmFibGUodGhpcy5pdGVtLmRpc2FibGVkKVxyXG4gICAgICA/IGF3YWl0IHRoaXMuaXRlbS5kaXNhYmxlZC50b1Byb21pc2UoKVxyXG4gICAgICA6IHRoaXMuaXRlbS5kaXNhYmxlZDtcclxuICAgIGNvbnN0IGhpZGRlbiA9IGlzT2JzZXJ2YWJsZSh0aGlzLml0ZW0uaGlkZGVuKVxyXG4gICAgICA/IGF3YWl0IHRoaXMuaXRlbS5oaWRkZW4udG9Qcm9taXNlKClcclxuICAgICAgOiB0aGlzLml0ZW0uaGlkZGVuO1xyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkgJiYgIWRpc2FibGVkICYmICFoaWRkZW4pIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucm91dGVyLnVybC5zdGFydHNXaXRoKHRoaXMuaXRlbS51cmwpICYmICFkaXNhYmxlZCAmJiAhaGlkZGVuKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=