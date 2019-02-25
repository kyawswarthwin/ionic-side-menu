import { Component, Input } from '@angular/core';
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
  badge?: Observable<SideMenuBadge>;
  path?: string;
  handler?: () => void;
}
export interface SideMenuBadge {
  text: string;
  color?: string;
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
