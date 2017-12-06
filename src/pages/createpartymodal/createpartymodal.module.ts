import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Createpartymodal } from './createpartymodal';

@NgModule({
  declarations: [
    Createpartymodal,
  ],
  imports: [
    IonicPageModule.forChild(Createpartymodal),
  ],
})
export class CreatepartymodalModule {}
