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
/**
 * Generated class for the LsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LsignupPage = /** @class */ (function () {
    function LsignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LsignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LsignupPage');
    };
    LsignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-lsignup',
            templateUrl: 'lsignup.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], LsignupPage);
    return LsignupPage;
}());
export { LsignupPage };
//# sourceMappingURL=lsignup.js.map