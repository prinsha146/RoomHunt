import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandlordProvider } from '../../providers/landlord.service';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lprofile',
  templateUrl: 'lprofile.html',
})
export class LprofilePage {
  landlord:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public landlordservice: LandlordProvider, public popoverCtrl: PopoverController) {
    this.getLandlord();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LprofilePage');
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
    this.landlordservice.getData(2).subscribe(
      data => {
        this.landlord =data;
        console.log(this.landlord);
      }
    );
  }


}
