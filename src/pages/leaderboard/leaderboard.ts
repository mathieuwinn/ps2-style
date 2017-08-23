import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController  } from 'ionic-angular';
import { Usermodal } from '../usermodal/usermodal';


/**
 * Generated class for the Leaderboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class Leaderboard {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Leaderboard');
  }



  openUser1Modal() {
      let activityModal = this.modalCtrl.create(Usermodal);
      activityModal.present();
    }

  ngOnInit(){
    // this.openUser1Modal();
  }

}
