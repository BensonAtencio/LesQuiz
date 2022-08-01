import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizSelectionPageRoutingModule } from './quiz-selection-routing.module';

import { QuizSelectionPage } from './quiz-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizSelectionPageRoutingModule
  ],
  declarations: [QuizSelectionPage]
})
export class QuizSelectionPageModule {}
