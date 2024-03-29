import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuPageRoutingModule } from './side-menu-routing.module';

import { SideMenuPage } from './side-menu.page';

@NgModule({
  declarations: [
    SideMenuPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuPageRoutingModule
  ],
  // declarations: [SideMenuPage]
  exports:[SideMenuPage]
})
export class SideMenuPageModule {}
