import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isObservable } from 'rxjs';

import { SideMenuItem } from '../side-menu/side-menu.component';

@Component({
  selector: 'ion-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {
  @Input() item: SideMenuItem;
  @Input() depth: number = 0;

  isObservable = isObservable;
  expanded: boolean;

  constructor(public sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith(this.item.url)) {
          this.expanded = true;
        }
      }
    });
  }
}
