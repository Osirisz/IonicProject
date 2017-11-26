import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from './../history/history';
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firstName = "First";
  lastName = "Last";
  address = "KMUTT ถนน พุทธบูชา แขวง บางมด เขต ทุ่งครุ กรุงเทพมหานคร"
  constructor(public navCtrl: NavController) {

  }
  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }
  goToDetail() {
    this.navCtrl.push(DetailPage);
  }
}
