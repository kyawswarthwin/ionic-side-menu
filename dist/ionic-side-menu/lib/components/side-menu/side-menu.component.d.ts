import { Observable } from 'rxjs';
export interface SideMenuOptions {
    header?: SideMenuHeader;
    menus: SideMenu[];
}
export interface SideMenuHeader {
    background?: string;
    profile?: Observable<SideMenuProfile>;
    handler?: () => void;
}
export interface SideMenuProfile {
    picture: string;
    name: string;
    email?: string;
}
export interface SideMenu {
    header?: string;
    items?: SideMenuItem[];
    isDivider?: boolean;
}
export interface SideMenuItem {
    icon?: string;
    title: string;
    badge?: string;
    badgeColor?: string;
    path?: string;
    handler?: () => void;
}
export declare class SideMenuComponent {
    options: SideMenuOptions;
    constructor();
}
