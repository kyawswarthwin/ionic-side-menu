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
    header?: string;
    items?: SideMenuItem[];
    divider?: boolean;
}
export interface SideMenuItem {
    icon?: string;
    title: string;
    badge?: Observable<SideMenuBadge>;
    path?: string;
    handler?: () => void;
}
export interface SideMenuBadge {
    text: string;
    color?: string;
}
export declare class SideMenuComponent {
    options: SideMenuOptions;
    constructor();
}
