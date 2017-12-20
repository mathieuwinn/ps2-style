import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';



@Component({
  selector: 'page-partysignup',
  templateUrl: 'partysignup.html',
})
export class Partysignup {
  seat1Active=false;
  seat2Active=false;
  seat3Active=true;
  seat4Active=false;
  seat5Active=false;
  selectedSeats=2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Partysignup');
  }

}
