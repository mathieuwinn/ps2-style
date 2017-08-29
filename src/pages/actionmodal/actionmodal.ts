import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';

/**
 * Generated class for the Actionmodal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-actionmodal',
  templateUrl: 'actionmodal.html',
})
export class Actionmodal {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Actionmodal');
  }

}
