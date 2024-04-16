import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LprofilePage } from './lprofile';

@NgModule({
  declarations: [
    LprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(LprofilePage),
  ],
})
export class LprofilePageModule {}
