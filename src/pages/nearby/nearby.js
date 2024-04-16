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
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';
var NearbyPage = /** @class */ (function () {
    function NearbyPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    NearbyPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    NearbyPage.prototype.showMap = function () {
        //const location = new google.maps.latlng(27.741451,
        //-85.269069);
        //
        //Map options
        var options = {
            center: { lat: 27.741451, lng: 85.269069 },
            zoom: 8
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    };
    NearbyPage.prototype.filter = function (event) {
        var popover = this.popoverCtrl.create(FilterComponent);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (popoverData) {
            console.log(popoverData);
        });
    };
    NearbyPage.prototype.onInput = function (event) { };
    NearbyPage.prototype.onCancel = function (event) { };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], NearbyPage.prototype, "mapRef", void 0);
    NearbyPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-nearby',
            templateUrl: 'nearby.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController])
    ], NearbyPage);
    return NearbyPage;
}());
export { NearbyPage };
//# sourceMappingURL=nearby.js.map