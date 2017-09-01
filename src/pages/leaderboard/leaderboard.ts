import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController  } from 'ionic-angular';
import { Usermodal } from '../usermodal/usermodal';
import { Countrymodal } from '../countrymodal/countrymodal';



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
      let userModal = this.modalCtrl.create(Usermodal);
      userModal.present();
    }

  openCountryModal() {
      let countryModal = this.modalCtrl.create(Countrymodal);
      countryModal.present();
    }

  ngOnInit(){
     this.openCountryModal();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
