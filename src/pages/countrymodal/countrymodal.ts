import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-countrymodal',
  templateUrl: 'countrymodal.html',
})
export class Countrymodal {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Countrymodal');
  }

}
