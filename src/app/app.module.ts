import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Leaderboard } from '../pages/leaderboard/leaderboard';
import { Notifications } from '../pages/notifications/notifications';
import { Usermodal } from '../pages/usermodal/usermodal';
import { Actionmodal } from '../pages/actionmodal/actionmodal';
import { Signup } from '../pages/signup/signup';
import { Splash } from '../pages/splash/splash';
import { Login } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Dashboard,
    Leaderboard,
    Notifications,
    Usermodal,
    Actionmodal,
    Signup,
    Splash,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Dashboard,
    Leaderboard,
    Notifications,
    Usermodal,
    Actionmodal,
    Signup,
    Splash,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
