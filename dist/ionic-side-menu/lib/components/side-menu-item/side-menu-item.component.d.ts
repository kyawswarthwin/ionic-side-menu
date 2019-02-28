import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SideMenuItem } from '../side-menu/side-menu.component';
export declare class SideMenuItemComponent implements OnInit {
    sanitizer: DomSanitizer;
    private router;
    item: SideMenuItem;
    depth: number;
    expanded: boolean;
    constructor(sanitizer: DomSanitizer, router: Router);
    ngOnInit(): void;
}
