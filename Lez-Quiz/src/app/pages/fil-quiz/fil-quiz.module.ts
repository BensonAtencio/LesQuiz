import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilQuizPageRoutingModule } from './fil-quiz-routing.module';

import { FilQuizPage } from './fil-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilQuizPageRoutingModule
  ],
  declarations: [FilQuizPage]
})
export class FilQuizPageModule {}
