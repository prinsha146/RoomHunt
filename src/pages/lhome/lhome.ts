import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SpaceProvider } from '../../providers/space.service';

/**
 * Generated class for the LhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lhome',
  templateUrl: 'lhome.html',
})
export class LhomePage {

  postList:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spaceService:SpaceProvider) {
      this.getRecentPosts();
    
  }

  doRefresh(refresher) {
    this.getRecentPosts();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LhomePage');
  }

  GoToDetails()
  {
    this.navCtrl.push(DetailsPage);
  }

  getRecentPosts()
  {
    this.spaceService.getAvailableSpace().subscribe(
      data => {
        this.postList =data;
        console.log(this.postList);
      }
    );
  }
}
