import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathModulePageRoutingModule } from './math-module-routing.module';

import { MathModulePage } from './math-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathModulePageRoutingModule
  ],
  declarations: [MathModulePage]
})
export class MathModulePageModule {}
