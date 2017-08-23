import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Leaderboard } from '../pages/leaderboard/leaderboard';
import { Notifications } from '../pages/notifications/notifications';
import { Usermodal } from '../pages/usermodal/usermodal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Leaderboard,
    Notifications,
    Usermodal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Leaderboard,
    Notifications,
    Usermodal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
