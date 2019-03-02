import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [SideMenuComponent, SideMenuItemComponent],
  exports: [SideMenuComponent]
})
export class IonicSideMenuModule {}
