import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { LoginPage } from '../login/login';
import { SeekerProvider } from '../../providers/seeker';



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
   seeker:any;
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              public seekerService:SeekerProvider){
                this.getLandlord();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  presentPopover(myEvent){
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
    });
  }

  logout()
  {
    this.navCtrl.push(LoginPage);
  }

  getLandlord()
  {
    this.seekerService.getSeeker(1).subscribe(
      data => {
        this.seeker = data;
        console.log(this.seeker);
      }
    );
  }

}
