import { OnInit } from '@angular/core';
import { isObservable } from 'rxjs';
import { SideMenuOptions } from '../../shared/models/side-menu.model';
export declare class SideMenuComponent implements OnInit {
    options: SideMenuOptions;
    isObservable: typeof isObservable;
    constructor();
    ngOnInit(): void;
}
