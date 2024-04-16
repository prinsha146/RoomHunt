import { Component ,ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google : any;
@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {
    @ViewChild('map') mapRef: ElementRef;
    map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap()
  {
      //const location = new google.maps.latlng(27.741451,
      //-85.269069);
      //

      //Map options
      const options={
      center: {lat: 27.741451, lng: 85.269069 },
        zoom: 8
      }

      this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }
  
 
  filter(event){
    const popover = this.popoverCtrl.create(FilterComponent);
    popover.present({
      ev: event
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
    });
  }
  onInput(event){}
  onCancel(event){}

}
