import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeUserPage } from '../home-user/home-user';

/**
 * Generated class for the DetailParcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-parcel',
  templateUrl: 'detail-parcel.html',
})
export class DetailParcelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailParcelPage');
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm finish',
      message: 'Fare: 50฿<br>Date: 30/11/2017',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.navCtrl.setRoot(HomeUserPage, {}, { animate: true, direction: 'forward' });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
