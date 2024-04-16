var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvailablespacePage } from '../availablespace/availablespace';
import { DetailsPage } from '../details/details';
/**
 * Generated class for the MypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypostPage = /** @class */ (function () {
    function MypostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MypostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MypostPage');
    };
    MypostPage.prototype.goToAvailablespace = function () {
        this.navCtrl.push(AvailablespacePage);
    };
    MypostPage.prototype.GoToDetails = function () {
        this.navCtrl.push(DetailsPage);
    };
    MypostPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mypost',
            templateUrl: 'mypost.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MypostPage);
    return MypostPage;
}());
export { MypostPage };
//# sourceMappingURL=mypost.js.map