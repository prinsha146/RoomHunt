import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LtabsPage } from './ltabs';

@NgModule({
  declarations: [
    LtabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LtabsPage),
  ],
})
export class LtabsPageModule {}
