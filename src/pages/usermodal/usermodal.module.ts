import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Usermodal } from './usermodal';

@NgModule({
  declarations: [
    Usermodal,
  ],
  imports: [
    IonicPageModule.forChild(Usermodal),
  ],
})
export class UsermodalModule {}
