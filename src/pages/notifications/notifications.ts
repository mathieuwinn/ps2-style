import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class Notifications {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notifications');
  }

}
