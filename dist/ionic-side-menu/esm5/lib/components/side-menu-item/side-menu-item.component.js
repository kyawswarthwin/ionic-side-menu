/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SideMenuItemComponent = /** @class */ (function () {
    function SideMenuItemComponent() {
    }
    SideMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-side-menu-item',
                    template: "<ion-menu-toggle auto-hide=\"false\">\n  <ion-item *ngIf=\"item.can ? (item.can() | async) : true\"\n    [routerLink]=\"item.path ? item.path : []\" [routerLinkActive]=\"item.path ?\n    'active' : []\" [routerDirection]=\"item.path && 'root'\" (click)=\"item.handler\n    && item.handler()\">\n    <ion-icon *ngIf=\"item.icon\" slot=\"start\" [name]=\"item.icon\"></ion-icon>\n    <ion-label>{{ item.title }}</ion-label>\n    <ion-badge *ngIf=\"(item.badge | async) as badge\" slot=\"end\"\n      [color]=\"badge.color && badge.color\">{{ badge.text }}</ion-badge>\n  </ion-item>\n</ion-menu-toggle>\n",
                    styles: ["ion-item{color:var(--ion-color-step-600,#666)}.active{--background:var(--border-color)}.active ion-icon,.active ion-label{color:var(--ion-color-primary,#3880ff)}"]
                }] }
    ];
    /** @nocollapse */
    SideMenuItemComponent.ctorParameters = function () { return []; };
    SideMenuItemComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return SideMenuItemComponent;
}());
export { SideMenuItemComponent };
if (false) {
    /** @type {?} */
    SideMenuItemComponent.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2lkZS1tZW51LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlqRDtJQVFFO0lBQWUsQ0FBQzs7Z0JBUmpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixzbUJBQThDOztpQkFFL0M7Ozs7O3VCQUVFLEtBQUs7O0lBR1IsNEJBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxxQkFBcUI7OztJQUNoQyxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNpZGVNZW51SXRlbSB9IGZyb20gJy4uL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtOiBTaWRlTWVudUl0ZW07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19