import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngQuizPageRoutingModule } from './eng-quiz-routing.module';

import { EngQuizPage } from './eng-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngQuizPageRoutingModule
  ],
  declarations: [EngQuizPage]
})
export class EngQuizPageModule {}
