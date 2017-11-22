import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailParcelPage } from './detail-parcel';

@NgModule({
  declarations: [
    DetailParcelPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailParcelPage),
  ],
})
export class DetailParcelPageModule {}
