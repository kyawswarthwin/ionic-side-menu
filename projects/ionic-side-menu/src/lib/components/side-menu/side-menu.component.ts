import { Component, OnInit, Input } from '@angular/core';
import { Observable, isObservable } from 'rxjs';

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

@Component({
  selector: 'ion-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() options: SideMenuOptions;

  isObservable = isObservable;

  constructor() {}

  ngOnInit() {}
}
