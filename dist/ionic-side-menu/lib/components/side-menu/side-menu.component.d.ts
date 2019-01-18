export interface SideMenuOptions {
    header?: SideMenuHeader;
    menus: SideMenu[];
}
export interface SideMenuHeader {
    background?: string;
    profile?: SideMenuProfile;
    onClick?: Function;
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
    onClick?: Function;
}
export declare class SideMenuComponent {
    options: SideMenuOptions;
    constructor();
}
