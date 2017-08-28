import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController, LoadingController  } from 'ionic-angular';

import { Login } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

loginPage = Login;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }



presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Creating your profile...",
    duration: 3000
  });
  loader.present();
}


  ngOnInit(){
  }

}
