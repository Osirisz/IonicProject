import { EditProfilePage } from './../edit-profile/edit-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-user',
  templateUrl: 'profile-user.html',
})
export class ProfileUserPage {
  id = 1111;
  firstName = "First";
  lastName = "Last";
  email = "test@gmail.com";
  telephone = "08888888";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUserPage');
  }
  editContact() {
    this.navCtrl.push(EditProfilePage);
  }
}
