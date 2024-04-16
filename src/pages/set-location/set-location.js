var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
var SetLocationPage = /** @class */ (function () {
    //map: any;
    function SetLocationPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SetLocationPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    SetLocationPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(27.741451, 85.269069);
        var options = {
            center: location,
            zoom: 8
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        var marker;
        google.maps.event.addListener(map, 'click', function (event) {
            placeMarker(event.latLng);
            console.log("Latitude:" + event.latLng.lat() + "Longitude:" + event.latLng.lng());
        });
        function placeMarker(location) {
            if (marker) {
                //if marker already was created change positon
                marker.setPosition(location);
            }
            else {
                //create a marker
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    draggable: true
                });
            }
        }
    };
    SetLocationPage.prototype.onConfirm = function () {
        this.viewCtrl.dismiss();
    };
    SetLocationPage.prototype.onAbort = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], SetLocationPage.prototype, "mapRef", void 0);
    SetLocationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-set-location',
            templateUrl: 'set-location.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            ViewController])
    ], SetLocationPage);
    return SetLocationPage;
}());
export { SetLocationPage };
//# sourceMappingURL=set-location.js.map