import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LloginPage } from './llogin';

@NgModule({
  declarations: [
    LloginPage,
  ],
  imports: [
    IonicPageModule.forChild(LloginPage),
  ],
})
export class LloginPageModule {}
