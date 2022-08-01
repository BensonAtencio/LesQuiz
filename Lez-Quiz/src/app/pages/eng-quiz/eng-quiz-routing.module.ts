import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngQuizPage } from './eng-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: EngQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngQuizPageRoutingModule {}
