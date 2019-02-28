import { Component, OnInit, Input } from '@angular/core';
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
  url?: string;
  children?: SideMenuItem[];
  handler?: () => void;
  can?: () => Observable<boolean>;
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
export class SideMenuComponent implements OnInit {
  @Input() options: SideMenuOptions;

  constructor() {}

  ngOnInit() {}
}
