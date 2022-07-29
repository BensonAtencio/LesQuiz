import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilModulePageRoutingModule } from './fil-module-routing.module';

import { FilModulePage } from './fil-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilModulePageRoutingModule
  ],
  declarations: [FilModulePage]
})
export class FilModulePageModule {}
