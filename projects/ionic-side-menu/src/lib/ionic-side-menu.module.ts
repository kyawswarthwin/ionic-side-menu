import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [SideMenuComponent]
})
export class IonicSideMenuModule {}
