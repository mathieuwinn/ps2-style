import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';

import { Leaderboard } from '../leaderboard/leaderboard';
import { Notifications } from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

leaderboardPage = Leaderboard;
notificationsPage = Notifications;

  constructor(public navCtrl: NavController) {

  }

  bannerShow = true;
    closeBanner() {
     this.bannerShow = !this.bannerShow;
    }

}
