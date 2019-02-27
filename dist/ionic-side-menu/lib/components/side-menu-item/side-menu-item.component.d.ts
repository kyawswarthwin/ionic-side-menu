import { DomSanitizer } from '@angular/platform-browser';
import { SideMenuItem } from '../side-menu/side-menu.component';
export declare class SideMenuItemComponent {
    sanitizer: DomSanitizer;
    item: SideMenuItem;
    depth: number;
    expanded: boolean;
    constructor(sanitizer: DomSanitizer);
}
