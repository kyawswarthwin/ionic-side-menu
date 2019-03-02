import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isObservable } from 'rxjs';
import { SideMenuItem } from '../../shared/models/side-menu.model';
export declare class SideMenuItemComponent implements OnInit {
    sanitizer: DomSanitizer;
    private router;
    item: SideMenuItem;
    depth: number;
    isObservable: typeof isObservable;
    expanded: boolean;
    constructor(sanitizer: DomSanitizer, router: Router);
    ngOnInit(): Promise<void>;
}
