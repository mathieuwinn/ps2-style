import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController  } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { Leaderboard } from '../leaderboard/leaderboard';
import { Notifications } from '../notifications/notifications';
import { Signup } from '../signup/signup';
import { Splash } from '../splash/splash';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

dashboardPage = Dashboard;
leaderboardPage = Leaderboard;
notificationsPage = Notifications;
signupPage = Signup;
splashPage = Splash;


  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.navCtrl.push(Leaderboard);
  }

}
