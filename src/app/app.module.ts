import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { HistoryPage } from './../pages/history/history';
import { DetailPage } from './../pages/detail/detail';
import { ProfilePage } from './../pages/profile/profile';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    HistoryPage,
    DetailPage,
    ProfilePage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    HistoryPage,
    DetailPage,
    ProfilePage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
