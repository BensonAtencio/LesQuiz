import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizSelectionPage } from './quiz-selection.page';

const routes: Routes = [
  {
    path: '',
    component: QuizSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizSelectionPageRoutingModule {}
