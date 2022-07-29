import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilModulePage } from './fil-module.page';

const routes: Routes = [
  {
    path: '',
    component: FilModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilModulePageRoutingModule {}
