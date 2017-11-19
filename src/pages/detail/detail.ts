import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  firstName = "First";
  lastName = "Last";
  address = "KMUTT ถนน พุทธบูชา แขวง บางมด เขต ทุ่งครุ กรุงเทพมหานคร";
  telephone = "0888888888";
  weight = 2.5;
  height = 16;
  width = 14;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  goToHome() {
    this.navCtrl.push(HomePage);
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm finish',
      message: 'Do you want to finish?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Ok clicked');
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
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      message: 'Do you want to report wrong address?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Ok clicked');
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
