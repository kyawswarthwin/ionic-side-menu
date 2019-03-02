import { OnInit } from '@angular/core';
import { isObservable } from 'rxjs';
import { SideMenuOptions, SideMenuHeader } from '../../shared/models/side-menu.model';
export declare class SideMenuComponent implements OnInit {
    options: SideMenuOptions;
    isObservable: typeof isObservable;
    expanded: boolean;
    constructor();
    ngOnInit(): void;
    setHeaderStyle(header: SideMenuHeader): {};
}
