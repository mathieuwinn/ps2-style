import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController  } from 'ionic-angular';

import { Signup } from '../signup/signup';
import { Login } from '../login/login';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class Splash {

signupPage = Signup;
loginPage = Login;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Splash');
  }

}
