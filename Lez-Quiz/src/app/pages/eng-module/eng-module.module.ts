import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngModulePageRoutingModule } from './eng-module-routing.module';

import { EngModulePage } from './eng-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngModulePageRoutingModule
  ],
  declarations: [EngModulePage]
})
export class EngModulePageModule {}
