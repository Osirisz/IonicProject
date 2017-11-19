import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfilePage } from './../edit-profile/edit-profile';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  id = 1111;
  firstName = "First";
  lastName = "Last";
  email = "test@gmail.com";
  telephone = "08888888";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editContact() {
    this.navCtrl.push(EditProfilePage);
  }
}
