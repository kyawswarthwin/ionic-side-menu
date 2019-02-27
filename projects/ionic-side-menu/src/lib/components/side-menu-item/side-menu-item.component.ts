import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SideMenuItem } from '../side-menu/side-menu.component';

@Component({
  selector: 'ion-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent {
  @Input() item: SideMenuItem;
  @Input() depth: number = 0;

  expanded: boolean;

  constructor(public sanitizer: DomSanitizer) {}
}
