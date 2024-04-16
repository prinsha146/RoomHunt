import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LhomePage } from '../lhome/lhome';
import { NearbyPage } from '../nearby/nearby';

import { MypostPage } from '../mypost/mypost';
import { LprofilePage } from '../lprofile/lprofile';

/**
 * Generated class for the LtabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ltabs',
  templateUrl: 'ltabs.html',
})
export class LtabsPage {
  
  tab1Root = LhomePage;
  tab2Root = NearbyPage;
  tab3Root = MypostPage;
  tab4Root = LprofilePage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LtabsPage');
  }

}
