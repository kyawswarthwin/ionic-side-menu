import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(public sanitizer: DomSanitizer, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith(this.item.path)) {
          this.expanded = true;
        }
      }
    });
  }
}
