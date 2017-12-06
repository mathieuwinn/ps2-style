
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-createpartymodal',
  templateUrl: 'createpartymodal.html',
})
export class Createpartymodal {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Createpartymodal');
  }

}
