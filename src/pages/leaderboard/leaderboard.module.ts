import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Leaderboard } from './leaderboard';

@NgModule({
  declarations: [
    Leaderboard,
  ],
  imports: [
    IonicPageModule.forChild(Leaderboard),
  ],
})
export class LeaderboardModule {}
