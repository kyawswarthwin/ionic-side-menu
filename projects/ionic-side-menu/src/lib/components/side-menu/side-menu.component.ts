import { Component, OnInit, Input } from '@angular/core';
import { isObservable } from 'rxjs';

import { SideMenuOptions, SideMenuHeader } from '../../shared/models/side-menu.model';

@Component({
  selector: 'ion-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() options: SideMenuOptions;

  isObservable = isObservable;
  expanded: boolean;

  constructor() {}

  ngOnInit() {}

  setHeaderStyle(header: SideMenuHeader) {
    const style = {};
    if (header.background) {
      style['background-image'] = `url(${header.background})`;
    }
    if (header.menus && header.menus.length) {
      style['cursor'] = 'pointer';
    }
    return style;
  }
}
