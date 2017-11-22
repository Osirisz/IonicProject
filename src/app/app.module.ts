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

import { LoginUserPage } from './../pages/login-user/login-user';
import { RegisterUserPage } from './../pages/register-user/register-user';
import { HomeUserPage } from './../pages/home-user/home-user';
import { DetailParcelPage } from './../pages/detail-parcel/detail-parcel';
import { DetailUserPage } from './../pages/detail-user/detail-user';
import { ProfileUserPage } from './../pages/profile-user/profile-user';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    HistoryPage,
    DetailPage,
    ProfilePage,
    EditProfilePage,
    LoginUserPage,
    RegisterUserPage,
    HomeUserPage,
    DetailParcelPage,
    DetailUserPage,
    ProfileUserPage
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
    EditProfilePage,
    LoginUserPage,
    RegisterUserPage,
    HomeUserPage,
    DetailParcelPage,
    DetailUserPage,
    ProfileUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
