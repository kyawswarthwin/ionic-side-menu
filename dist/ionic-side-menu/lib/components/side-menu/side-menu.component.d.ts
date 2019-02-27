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
    can?: () => Observable<boolean>;
}
export interface SideMenuItem {
    icon?: string;
    title: string;
    badge?: Observable<SideMenuBadge>;
    path?: string;
    children?: SideMenuItem[];
    handler?: () => void;
    can?: () => Observable<boolean>;
}
export interface SideMenuBadge {
    text: string;
    color?: string;
}
export declare class SideMenuComponent {
    options: SideMenuOptions;
    constructor();
}
