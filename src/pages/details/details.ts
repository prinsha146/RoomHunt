import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  image= [
    "assets/imgs/1.jpeg",
    "assets/imgs/2.jpeg",
    "assets/imgs/3.jpg",
    "assets/imgs/4.jpg"
      ];

    @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  dismiss(data){
    this.viewCtrl.dismiss(data);
  }

  slideChanged(){
    this.slides.startAutoplay();
  }

}
