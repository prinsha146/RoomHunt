var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { SetLocationPage } from '../set-location/set-location';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { DropdownProvider } from '../../providers/dropdown.service';
/**
 * Generated class for the AvailablespacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare var google;
var AvailablespacePage = /** @class */ (function () {
    function AvailablespacePage(modalCtrl, navCtrl, navParams, form, geo, camera, dropdownService) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = form;
        this.geo = geo;
        this.camera = camera;
        this.dropdownService = dropdownService;
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
            spacetype: '',
            location: '',
            address: ['', Validators.compose([Validators.required])],
            price: ['', Validators.compose([Validators.required])],
            priceunit: '',
            housetype: '',
            storeyno: '',
            roomno: ['', Validators.compose([Validators.required])],
            negotiable: 'false',
            bathroomno: '',
            bathroom: '',
            kitchen: '',
            watertype: '',
            water: 'false',
            internet: 'false',
            lift: 'false',
            fan: 'false',
            generator: 'false',
            parking: '',
            suitable: ['', Validators.compose([Validators.required])],
            preference: '',
            environment: '',
            description: ''
        });
    }
    AvailablespacePage.prototype.spacein = function () {
        console.log(this.spaceForm.value);
        this.navCtrl.push(HomePage);
    };
    AvailablespacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvailablespacePage');
    };
    AvailablespacePage.prototype.nextSlide = function () {
        console.log(this.spaceForm.value);
        var i = this.slides.getActiveIndex();
        this.slides.slideTo(i + 1);
    };
    AvailablespacePage.prototype.previousSlide = function () {
        var i = this.slides.getActiveIndex();
        this.slides.slideTo(i - 1);
    };
    AvailablespacePage.prototype.onOpenMap = function () {
        var modal = this.modalCtrl.create(SetLocationPage);
        modal.present();
    };
    AvailablespacePage.prototype.onLocate = function () {
        var _this = this;
        this.geo.getCurrentPosition()
            .then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AvailablespacePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            //imageData is either a base64 encoded string or a file URI
            //if it's base64
            _this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AvailablespacePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    AvailablespacePage.prototype.getBathroomList = function () {
        var _this = this;
        this.dropdownService.getBathroomType().subscribe(function (data) {
            _this.bathroomList = data;
            console.log(_this.bathroomList);
        });
    };
    AvailablespacePage.prototype.getKitchenList = function () {
        var _this = this;
        this.dropdownService.getKitchenType().subscribe(function (data) {
            _this.kitchenList = data;
            console.log(_this.kitchenList);
        });
    };
    AvailablespacePage.prototype.getSpacetypeList = function () {
        var _this = this;
        this.dropdownService.getSpaceType().subscribe(function (data) {
            _this.spacetypeList = data;
            console.log(_this.spacetypeList);
        });
    };
    AvailablespacePage.prototype.getHouseList = function () {
        var _this = this;
        this.dropdownService.getHouseType().subscribe(function (data) {
            _this.houseList = data;
            console.log(_this.houseList);
        });
    };
    AvailablespacePage.prototype.getWaterList = function () {
        var _this = this;
        this.dropdownService.getWaterType().subscribe(function (data) {
            _this.waterList = data;
            console.log(_this.waterList);
        });
    };
    AvailablespacePage.prototype.getEnvironmentList = function () {
        var _this = this;
        this.dropdownService.getEnvironment().subscribe(function (data) {
            _this.environmentList = data;
            console.log(_this.environmentList);
        });
    };
    AvailablespacePage.prototype.getSuitableForList = function () {
        var _this = this;
        this.dropdownService.getSuitableFor().subscribe(function (data) {
            _this.suitableforList = data;
            console.log(_this.suitableforList);
        });
    };
    AvailablespacePage.prototype.getPreferenceList = function () {
        var _this = this;
        this.dropdownService.getPreferenceType().subscribe(function (data) {
            _this.preferenceList = data;
            console.log(_this.preferenceList);
        });
    };
    AvailablespacePage.prototype.getPriceList = function () {
        var _this = this;
        this.dropdownService.getPriceType().subscribe(function (data) {
            _this.priceList = data;
            console.log(_this.priceList);
        });
    };
    AvailablespacePage.prototype.getParkingList = function () {
        var _this = this;
        this.dropdownService.getParkingType().subscribe(function (data) {
            _this.parkingList = data;
            console.log(_this.parkingList);
        });
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], AvailablespacePage.prototype, "slides", void 0);
    AvailablespacePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-availablespace',
            templateUrl: 'availablespace.html',
        }),
        __metadata("design:paramtypes", [ModalController,
            NavController, NavParams,
            FormBuilder, Geolocation,
            Camera,
            DropdownProvider])
    ], AvailablespacePage);
    return AvailablespacePage;
}());
export { AvailablespacePage };
//# sourceMappingURL=availablespace.js.map