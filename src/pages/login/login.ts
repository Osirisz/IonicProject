import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { LoginUserPage } from './../login-user/login-user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }
  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginUserPage, {}, { animate: true, direction: 'forward' });
  }
}
