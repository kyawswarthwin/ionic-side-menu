import { Component, Input } from '@angular/core';

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

@Component({
  selector: 'ion-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() options: SideMenuOptions;

  constructor() {}
}