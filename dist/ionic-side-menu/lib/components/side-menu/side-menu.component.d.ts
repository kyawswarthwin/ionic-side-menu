import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface SideMenuOptions {
    header?: SideMenuHeader;
    menus: SideMenu[];
}
export interface SideMenuHeader {
    background?: string;
    profile?: Observable<SideMenuProfile>;
}
export interface SideMenuProfile {
    picture: string;
    name: string;
    email?: string;
}
export interface SideMenu {
    type?: 'normal' | 'divider';
    header?: string;
    items?: SideMenuItem[];
    can?: () => Observable<boolean>;
}
export interface SideMenuItem {
    icon?: string;
    label: string;
    badge?: Observable<SideMenuBadge>;
    url?: string;
    children?: SideMenuItem[];
    handler?: () => void;
    can?: () => Observable<boolean>;
    disabled?: boolean | Observable<boolean>;
}
export interface SideMenuBadge {
    text: string;
    color?: string;
}
export declare class SideMenuComponent implements OnInit {
    options: SideMenuOptions;
    constructor();
    ngOnInit(): void;
}
