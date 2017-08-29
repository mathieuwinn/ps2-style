import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';

import { Leaderboard } from '../leaderboard/leaderboard';
import { Notifications } from '../notifications/notifications';
import { Signup } from '../signup/signup';
import { Splash } from '../splash/splash';



@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

leaderboardPage = Leaderboard;
notificationsPage = Notifications;
signupPage = Signup;
splashPage = Splash;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
  //  this.navCtrl.push(Notifications);
  }


  bannerShow = true;
    closeBanner() {
     this.bannerShow = !this.bannerShow;
    }

    buttonActed = false;
    buttonSuccess = false;
    buttonFail = false;
      buttonAct() {
        setTimeout(() => {
          this.buttonActed = true;
        }, 300);
        setTimeout(() => {
          this.buttonSuccess = true;
          this.buttonActed = false;
        }, 2200);
        setTimeout(() => {
          this.buttonSuccess = false;
        }, 4000);
      }

}
