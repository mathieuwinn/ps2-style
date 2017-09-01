import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Countrymodal } from './countrymodal';

@NgModule({
  declarations: [
    Countrymodal,
  ],
  imports: [
    IonicPageModule.forChild(Countrymodal),
  ],
})
export class CountrymodalModule {}
