import { Component, OnInit, Input } from '@angular/core';
import { isObservable } from 'rxjs';

import { SideMenuOptions } from '../../shared/models/side-menu.model';

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
