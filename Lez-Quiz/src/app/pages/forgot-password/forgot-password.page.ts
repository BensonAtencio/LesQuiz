import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ForgotPasswordPageForm } from './forgot-password.page.form';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form: FormGroup
  email: string;

  constructor(
    private afauth: AngularFireAuth,
    private toaster: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = new ForgotPasswordPageForm(this.formBuilder).createForm();
  }

  async resetPassword(){
    if(this.email){
      const loading = await this.loadingCtrl.create({
        message: 'Sending reset password link...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.sendPasswordResetEmail(this.email).then(() => {
        loading.dismiss();
        this.toast('Please check your email', 'sucess');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    } else {
      this.toast('Please enter your email address!!', 'danger');
    }

  }

  async toast(message, status){
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 3000
    });
    toast.present();
  }
}