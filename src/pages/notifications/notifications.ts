import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class Notifications {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
