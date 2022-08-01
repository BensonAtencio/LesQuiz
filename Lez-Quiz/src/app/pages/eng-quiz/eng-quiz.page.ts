import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eng-quiz',
  templateUrl: './eng-quiz.page.html',
  styleUrls: ['./eng-quiz.page.scss'],
})
export class EngQuizPage implements OnInit {

  qstn: any;
  questions: any;
  qAnswer: any;
  show: boolean;

  index: number = 0;
  items: number;
  score: number = 0;

  constructor(private afs: AngularFirestore, private auth: AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    

    fetch('./assets/data/english.json').then(res => res.json())
    .then(json => {
      this.qstn = json['Qstns'];
    });
  }

  answer(){
    this.show = true;
    this.items = this.qstn.length;
    if(this.index < this.items - 1){
      if (this.qAnswer == null){

      }
      else if(this.qAnswer == this.qstn[this.index].answer){
        
        this.alert('Correct!', 'You got the right answer!');
        this.qAnswer = null;
        this.index += 1;
        return this.score += 1;
      }
      else if(this.qAnswer != this.qstn[this.index].answer){
        this.alert('Sorry You got the wrong answer', `Correct answer is: ${this.qstn[this.index].answer}`);
        this.qAnswer = null;
        this.index += 1;
      }
    }
    
    else if(this.index >= this.items - 1){
      this.show = false;
      this.alert('Congratulations', `You've got ${this.score} out of ${this.items - 1} correct answers`)
    }

  }


  async alert(header, message){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
