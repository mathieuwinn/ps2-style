import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController, LoadingController  } from 'ionic-angular';

import { Signup } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

signupPage = Signup;


constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  showPrompt() {
  let prompt = this.alertCtrl.create({
    title: 'Password forgotten',
    message: "We'll send you an email with a link to reset your password",
    inputs: [
      {
        name: 'email',
        placeholder: 'Your email'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Send',
      }
    ]
  });
  prompt.present();
}

presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Logging in...",
    duration: 3000
  });
  loader.present();
}

}
