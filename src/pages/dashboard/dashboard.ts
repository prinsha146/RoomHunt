import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { LtabsPage } from '../ltabs/ltabs';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {
  @ViewChild(Slides) slides: Slides;
  image = [
    "assets/imgs/1.jpeg",
    "assets/imgs/2.jpeg",
    "assets/imgs/3.jpg",
    "assets/imgs/4.jpg"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LtabsPage');
  }

  slideChanged() {
      this.slides.startAutoplay();
  }

  navigateToLogin(){
    this.navCtrl.push(LtabsPage);
  }

  navigateToTabs(){
    this.navCtrl.push(TabsPage);
  }
}
