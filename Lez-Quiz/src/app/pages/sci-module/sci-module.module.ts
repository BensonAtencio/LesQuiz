import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SciModulePageRoutingModule } from './sci-module-routing.module';

import { SciModulePage } from './sci-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciModulePageRoutingModule
  ],
  declarations: [SciModulePage]
})
export class SciModulePageModule {}
