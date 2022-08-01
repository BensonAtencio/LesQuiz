import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fil-quiz',
  templateUrl: './fil-quiz.page.html',
  styleUrls: ['./fil-quiz.page.scss'],
})
export class FilQuizPage implements OnInit {

  qstn: any;
  questions: any;
  qAnswer: any;
  show: boolean;

  index: number = 0;
  items: number;
  score: number = 0;

  constructor(private afs: AngularFirestore, private auth: AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    

    fetch('./assets/data/filipino.json').then(res => res.json())
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
        
        this.alert('Mahusay!', 'Tama ang iyong sagot!');
        this.qAnswer = null;
        this.index += 1;
        return this.score += 1;
      }
      else if(this.qAnswer != this.qstn[this.index].answer){
        this.alert('Sorry mali ang sagot mo', `Ang tamang sagot ay: ${this.qstn[this.index].answer}`);
        this.qAnswer = null;
        this.index += 1;
      }
    }
    
    else if(this.index >= this.items - 1){
      this.show = false;
      this.alert('Congratulations', `Ang iyong score ay ${this.score} out of ${this.items - 1}`)
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
