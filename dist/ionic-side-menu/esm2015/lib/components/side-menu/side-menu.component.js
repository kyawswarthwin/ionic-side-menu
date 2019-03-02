/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isObservable } from 'rxjs';
export class SideMenuComponent {
    constructor() {
        this.isObservable = isObservable;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeaderStyle(header) {
        /** @type {?} */
        const style = {};
        if (header.background) {
            style['background-image'] = `url(${header.background})`;
        }
        if (header.menus && header.menus.length) {
            style['cursor'] = 'pointer';
        }
        return style;
    }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-side-menu',
                template: "<div *ngIf=\"options.header as header\" class=\"header\"\r\n  [ngStyle]=\"setHeaderStyle(header)\" (click)=\"header.menus &&\r\n  header.menus.length && expanded=!expanded\">\r\n  <ng-container *ngIf=\"header.profile as profile\">\r\n    <div *ngIf=\"isObservable(profile); then asyncProfileTemplate else\r\n      normalProfileTemplate\"></div>\r\n    <ng-template #asyncProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile | async }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #normalProfileTemplate>\r\n      <ng-container *ngTemplateOutlet=\"profileTemplate; context: { profile:\r\n        profile }\"></ng-container>\r\n    </ng-template>\r\n    <ng-template #profileTemplate let-profile=\"profile\">\r\n      <div class=\"profile\">\r\n        <img class=\"picture\" [src]=\"profile.picture\">\r\n        <h2 class=\"name\">{{ profile.name }}</h2>\r\n        <p *ngIf=\"profile.email\" class=\"email\">{{ profile.email }}</p>\r\n        <ion-icon *ngIf=\"header.menus && header.menus.length\" [name]=\"expanded ?\r\n          'arrow-dropup' : 'arrow-dropdown'\"></ion-icon>\r\n      </div>\r\n    </ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div *ngIf=\"expanded; then profileMenuTemplate else normalMenuTemplate\"></div>\r\n<ng-template #profileMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus:\r\n    options.header.menus }\"></ng-container>\r\n</ng-template>\r\n<ng-template #normalMenuTemplate>\r\n  <ng-container *ngTemplateOutlet=\"menuTemplate; context: { menus: options.menus\r\n    }\"></ng-container>\r\n</ng-template>\r\n<ng-template #menuTemplate let-menus=\"menus\">\r\n  <ion-list *ngFor=\"let menu of menus\" class=\"content\" no-padding lines=\"none\">\r\n    <div [hidden]=\"isObservable(menu.hidden) ? (menu.hidden | async) :\r\n      menu.hidden\">\r\n      <ion-list-header *ngIf=\"menu.header\">{{ menu.header }}</ion-list-header>\r\n      <ion-side-menu-item *ngFor=\"let item of menu.items\" [item]=\"item\"\r\n        (click)=\"expanded=false\"></ion-side-menu-item>\r\n      <hr *ngIf=\"menu.type === 'divider'\" class=\"divider\">\r\n    </div>\r\n  </ion-list>\r\n</ng-template>\r\n",
                styles: [".header{height:160px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));padding:16px;margin-bottom:8px;background:var(--ion-side-menu-header-background,var(--ion-text-color,#000));background-repeat:no-repeat;background-position:center;background-size:cover;color:var(--ion-side-menu-header-color,var(--ion-background-color,#fff));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header .profile{position:relative;height:128px}.header .profile .picture{width:64px;height:64px;border-radius:50%}.header .profile .email,.header .profile .name{margin:0;font-size:14px;line-height:24px}.header .profile .name{margin-top:16px;font-weight:500}.header .profile .email{font-weight:400}.header .profile ion-icon{position:absolute;right:0;bottom:0;font-size:24px}.content ion-list-header{margin-top:-8px;color:var(--ion-color-step-400,#999)}.content .divider{border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}"]
            }] }
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [];
SideMenuComponent.propDecorators = {
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SideMenuComponent.prototype.options;
    /** @type {?} */
    SideMenuComponent.prototype.isObservable;
    /** @type {?} */
    SideMenuComponent.prototype.expanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNpZGUtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBU3BDLE1BQU0sT0FBTyxpQkFBaUI7SUFNNUI7UUFIQSxpQkFBWSxHQUFHLFlBQVksQ0FBQztJQUdiLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsY0FBYyxDQUFDLE1BQXNCOztjQUM3QixLQUFLLEdBQUcsRUFBRTtRQUNoQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDckIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUM7U0FDekQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUM3QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIseXNFQUF5Qzs7YUFFMUM7Ozs7O3NCQUVFLEtBQUs7Ozs7SUFBTixvQ0FBa0M7O0lBRWxDLHlDQUE0Qjs7SUFDNUIscUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgU2lkZU1lbnVPcHRpb25zLCBTaWRlTWVudUhlYWRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvc2lkZS1tZW51Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uLXNpZGUtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvcHRpb25zOiBTaWRlTWVudU9wdGlvbnM7XHJcblxyXG4gIGlzT2JzZXJ2YWJsZSA9IGlzT2JzZXJ2YWJsZTtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHNldEhlYWRlclN0eWxlKGhlYWRlcjogU2lkZU1lbnVIZWFkZXIpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge307XHJcbiAgICBpZiAoaGVhZGVyLmJhY2tncm91bmQpIHtcclxuICAgICAgc3R5bGVbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB1cmwoJHtoZWFkZXIuYmFja2dyb3VuZH0pYDtcclxuICAgIH1cclxuICAgIGlmIChoZWFkZXIubWVudXMgJiYgaGVhZGVyLm1lbnVzLmxlbmd0aCkge1xyXG4gICAgICBzdHlsZVsnY3Vyc29yJ10gPSAncG9pbnRlcic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==