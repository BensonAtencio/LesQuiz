import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciModulePage } from './sci-module.page';

const routes: Routes = [
  {
    path: '',
    component: SciModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciModulePageRoutingModule {}
