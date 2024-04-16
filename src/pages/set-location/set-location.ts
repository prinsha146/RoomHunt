import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocationProvider } from '../../providers/location/location';

/**
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})

export class SetLocationPage {
  mark: any;
  lat:any;
  lng:any;
  @ViewChild('map') mapRef: ElementRef;
  //map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,public locationService: LocationProvider) {
  }

  

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(27.741451, 85.269069);

    const options = {
      center: location,
      zoom: 8
    }

    var map = new google.maps.Map(this.mapRef.nativeElement, options);

    var marker
    google.maps.event.addListener(map, 'click', function (event) {
      placeMarker(event.latLng);
       this.lat = event.latLng.lat();
       this.lng = event.latLng.lng();
        
      console.log("Latitude:" + this.lat + "Longitude:" + this.lng);
    });

    function placeMarker(location) {
      if (marker) {
        //if marker already was created change positon
        marker.setPosition(location);
        
      } else {
        //create a marker
        marker = new google.maps.Marker({
          position: location,
          map: map,
          draggable: true
        });
      }
    }
  }

  onConfirm() {
    this.viewCtrl.dismiss();
    this.setLatValue(this.lat);
    this.setLngValue(this.lng);
    //console.log("Confirm:"+ this. +" "+ th);
  }

  onAbort() {
    this.viewCtrl.dismiss();
  }

  setLatValue(lat)
  {
    this.locationService.setLatValue(lat);
  }

  setLngValue(lng)
  {
    this.locationService.setLngValue(lng);
  }

}
