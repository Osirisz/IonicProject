import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { RegisterUserPage } from './../register-user/register-user';
import { HomeUserPage } from '../home-user/home-user';
/**
 * Generated class for the LoginUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-user',
  templateUrl: 'login-user.html',
})
export class LoginUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUserPage');
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
  }
  goToRegister() {
    this.navCtrl.push(RegisterUserPage);
  }
  goToHome() {
    this.navCtrl.setRoot(HomeUserPage, {}, { animate: true, direction: 'forward' });
  }
}
