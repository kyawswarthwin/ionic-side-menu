/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
export class SideMenuItemComponent {
    /**
     * @param {?} sanitizer
     * @param {?} router
     */
    constructor(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.depth = 0;
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
                template: "<div *ngIf=\"item.children && item.children.length; then thenBlock else\r\n  elseBlock\"></div>\r\n<ng-template #thenBlock>\r\n  <ion-item button detail=\"false\"\r\n    [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n    1) * 16 + 'px')\" (click)=\"expanded=!expanded\">\r\n    <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n    <ion-label>{{ item.title }}</ion-label>\r\n    <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n      [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    <ion-icon slot=\"end\" [name]=\"expanded ? 'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n  </ion-item>\r\n  <ng-container *ngIf=\"expanded\">\r\n    <ion-side-menu-item *ngFor=\"let item of item.children\" [item]=\"item\"\r\n      [depth]=\"depth + 1\"></ion-side-menu-item>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #elseBlock>\r\n  <ion-menu-toggle auto-hide=\"false\">\r\n    <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\r\n      [routerLink]=\"item.url ? item.url : []\" [routerLinkActive]=\"item.url ?\r\n      'active' : []\" [routerDirection]=\"item.url && 'root'\"\r\n      [style]=\"sanitizer.bypassSecurityTrustStyle('--padding-start: ' + (depth +\r\n      1) * 16 + 'px')\" (click)=\"item.handler && item.handler()\">\r\n      <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n      <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\r\n        [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ng-template>\r\n",
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
    SideMenuItemComponent.prototype.expanded;
    /** @type {?} */
    SideMenuItemComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    SideMenuItemComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVN4RCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU1oQyxZQUFtQixTQUF1QixFQUFVLE1BQWM7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKekQsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUkwQyxDQUFDOzs7O0lBRXRFLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO2dCQUNsQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbXJEQUE4Qzs7YUFFL0M7Ozs7WUFUUSxZQUFZO1lBQ1osTUFBTTs7O21CQVVaLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLHFDQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUUzQix5Q0FBa0I7O0lBRU4sMENBQThCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNpZGVNZW51SXRlbSB9IGZyb20gJy4uL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbTogU2lkZU1lbnVJdGVtO1xyXG4gIEBJbnB1dCgpIGRlcHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==