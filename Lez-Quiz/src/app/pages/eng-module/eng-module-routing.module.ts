import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngModulePage } from './eng-module.page';

const routes: Routes = [
  {
    path: '',
    component: EngModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngModulePageRoutingModule {}
