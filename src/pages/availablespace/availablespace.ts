import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { DropdownProvider } from '../../providers/dropdown.service';

import { SpaceProvider } from '../../providers/space.service';
import { MypostPage } from '../mypost/mypost';
import { LocationProvider } from '../../providers/location/location';
/**
 * Generated class for the AvailablespacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare var google;

 
@IonicPage()

@Component({
  selector: 'page-availablespace',
  templateUrl: 'availablespace.html',
})
export class AvailablespacePage {
  spaceForm : FormGroup;
  lat: any;
  lng: any;

  bathroomList:any;
  kitchenList:any;
  spacetypeList:any;
  houseList:any;
  parkingList:any;
  waterList:any;
  environmentList:any;
  suitableforList:any;
  preferenceList:any;
  priceList:any;


  myPhoto: any;
  @ViewChild(Slides) slides: Slides;
  

  constructor(private modalCtrl:ModalController,
    public navCtrl: NavController, public navParams: NavParams,
    private form: FormBuilder, private geo: Geolocation, 
    private camera:Camera,
    public dropdownService:DropdownProvider,
    public spaceService:SpaceProvider,
    public markerLoc: LocationProvider
    ) {

      this.getBathroomList();
      this.getEnvironmentList();
      this.getHouseList();
      this.getKitchenList();
      this.getParkingList();
      this.getPreferenceList();
      this.getPriceList();
      this.getSpacetypeList();
      this.getSuitableForList();
      this.getWaterList();

    this.spaceForm = this.form.group({
      spacetype:['4',Validators.required],
      location: '',
      address: ['',Validators.compose([Validators.required])],
      price: ['',Validators.compose([Validators.required])],
      priceunit:'',
      housetype:'0',
      storeyno:'',
      roomno: ['',Validators.compose([Validators.required])],
      negotiable:'false',
      bathroomno:'',
      bathroom:'0',
      kitchen:'0',
      watertype:'0',
      water:'false',
      internet:'false',
      lift:'false',
      fan: 'false',
      generator:'false',
      parking:'0',
      suitable:['',Validators.compose([Validators.required])],
      preference:'0',
      environment:'0',
      description:'',
    });
  }

  spacein()
  {
    console.log(this.spaceForm.value);
    let spaceInfo = this.spaceForm.value;
    let postInfo = {
      LandlordId : '2',
      SpaceTypeId : spaceInfo.spacetype,
      HouseTyeId: spaceInfo.spacetype,
      A_Address: spaceInfo.address,
      Latitude: this.lat,
      Longitude: this.lng,
      Price: spaceInfo.price,
      IsPriceNegotiable : spaceInfo.negotiable,
      PriceTypeId : spaceInfo.priceunit,
      NoOfStorey: spaceInfo.storeyno,
      NoOfRooms : spaceInfo.roomno,
      NoOfBathroom : spaceInfo.bathroomno,
      BathroomTypeId : spaceInfo.bathroom,
      KitchenTypeId : spaceInfo.kitchen,
      EnvironmentId : spaceInfo.environment,
      SuitableForId : spaceInfo.suitable,
      PreferenceId : spaceInfo.preference,
      Description : spaceInfo.description,
      WaterTypeId: spaceInfo.watertype,
      ParkingForId: spaceInfo.parking,
      IsWater24: spaceInfo.water,
      Generator: spaceInfo.generator,
      Internet : spaceInfo.internet,
      Lift : spaceInfo.lift,
      Fan: spaceInfo.fan,
    }
    this.postSpace(postInfo);
    this.navCtrl.push(MypostPage);
  }

  postSpace(postInfo)
  {
    this.spaceService.postAvailableSpace(postInfo).subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablespacePage');
  }
  nextSlide()
  {
    console.log(this.spaceForm.value);
    let i = this.slides.getActiveIndex();
    this.slides.slideTo(i+1);
  }

  previousSlide()
  {
    let i = this.slides.getActiveIndex();
    this.slides.slideTo(i-1);
  }

  onOpenMap()
  {
    const modal = this.modalCtrl.create(SetLocationPage);
    modal.present();
    this.lat = this.markerLoc.getLatValue();
    this.lng = this.markerLoc.getLngValue();
    console.log(this.lng);

  }

  onLocate(){
    this.geo.getCurrentPosition()
    .then(
      pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      } 
      
    )
    .catch(
      error => {
        console.log(error);
      }
      
    )
  }

  openCamera()
  {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) =>
    {
      //imageData is either a base64 encoded string or a file URI
      //if it's base64
      this.myPhoto = 'data:image/jpeg;base64,'+imageData;
    },
    (err) => {
      console.log(err);
    });
  }

  openGallery()
  {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) =>{
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    },
    (err) => {

    });
  }

  getBathroomList()
  {
    this.dropdownService.getBathroomType().subscribe(
      data => {
        this.bathroomList = data;
        console.log(this.bathroomList);
      }
    );
  }

  getKitchenList()
  {
    this.dropdownService.getKitchenType().subscribe(
      data => {
        this.kitchenList = data;
        console.log(this.kitchenList);
      }
    );
  }

  getSpacetypeList()
  {
    this.dropdownService.getSpaceType().subscribe(
      data => {
        this.spacetypeList = data;
        console.log(this.spacetypeList);
      }
    );
  }

  getHouseList()
  {
    this.dropdownService.getHouseType().subscribe(
      data => {
        this.houseList = data;
        console.log(this.houseList);
      }
    );

  }

  getWaterList()
  {
    this.dropdownService.getWaterType().subscribe(
      data => {
        this.waterList = data;
        console.log(this.waterList);
      }
    );
  }

  getEnvironmentList()
  {
    this.dropdownService.getEnvironment().subscribe(
      data => {
        this.environmentList = data;
        console.log(this.environmentList);
      }
    );
  }

  getSuitableForList()
  {
    this.dropdownService.getSuitableFor().subscribe(
      data => {
        this.suitableforList = data;
        console.log(this.suitableforList);
      }
    );
  }

  getPreferenceList()
  {
    this.dropdownService.getPreferenceType().subscribe(
      data => {
        this.preferenceList = data;
        console.log(this.preferenceList);
      }
    );
  }

  getPriceList()
  {
    this.dropdownService.getPriceType().subscribe(
      data => {
        this.priceList = data;
        console.log(this.priceList);
      }
    );
  }

  getParkingList()
  {
    this.dropdownService.getParkingType().subscribe(
      data => {
        this.parkingList = data;
        console.log(this.parkingList);
      }
    );
  }

}