import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AvailablespacePage } from '../availablespace/availablespace';
import { DetailsPage } from '../details/details';
import { SpaceProvider } from '../../providers/space.service';

/**
 * Generated class for the MypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypost',
  templateUrl: 'mypost.html',
})
export class MypostPage {

  myPostList :any;
  fontColor: any;
  public gollum: boolean = true;
  //landlordid :number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private alertCtrl:AlertController,
  private spaceService:SpaceProvider) {
    this.getMyPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypostPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getMyPosts();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  validPost(id)
  {
    let alert = this.alertCtrl.create({
      title: 'Turn off status',
      message: 'Do you want to turn off?',
      buttons: [
          {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                  console.log(id);
              }
          },
          {
            text: 'Yes',
            handler: () => {
              this.changePostStatus(id);
              //a[i].open = !a[i].open;
              //this.gollum = false;
              console.log(this.gollum);
            }
          }
      ]
  });
  alert.present();
  }


  goToAvailablespace()
  {
    this.navCtrl.push(AvailablespacePage);
  }

  GoToDetails()
  {
    this.navCtrl.push(DetailsPage);
  }

  //data consumption
  getMyPosts()
  {
    this.spaceService.getMyposts(2).subscribe(
      data => {
        this.myPostList = data;
        console.log(this.myPostList);
      }
    );
  }

  changePostStatus(id)
  {
    this.spaceService.putStatusPosts(id).subscribe();
  }

}
