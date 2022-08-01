import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilQuizPage } from './fil-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: FilQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilQuizPageRoutingModule {}
