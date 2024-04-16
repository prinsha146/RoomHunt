import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
import { NearbyPage } from '../nearby/nearby';
import { BookmarkPage} from '../bookmark/bookmark';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NearbyPage;
  tab3Root = BookmarkPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
