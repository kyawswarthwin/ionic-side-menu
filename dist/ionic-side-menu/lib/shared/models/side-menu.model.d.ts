import { Observable } from 'rxjs';
export interface SideMenuOptions {
    header?: SideMenuHeader;
    menus: SideMenu[];
}
export interface SideMenuHeader {
    background?: string;
    profile?: SideMenuProfile | Observable<SideMenuProfile>;
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
    hidden?: boolean | Observable<boolean>;
}
export interface SideMenuItem {
    icon?: string;
    label: string;
    badge?: SideMenuBadge | Observable<SideMenuBadge>;
    url?: string;
    children?: SideMenuItem[];
    handler?: () => void;
    disabled?: boolean | Observable<boolean>;
    hidden?: boolean | Observable<boolean>;
}
export interface SideMenuBadge {
    text: string;
    color?: string;
}
