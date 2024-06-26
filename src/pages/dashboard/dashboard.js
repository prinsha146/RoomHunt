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
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = [
            "assets/imgs/1.jpeg",
            "assets/imgs/2.jpeg",
            "assets/imgs/3.jpg",
            "assets/imgs/4.jpg"
        ];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LtabsPage');
    };
    DashboardPage.prototype.slideChanged = function () {
        this.slides.startAutoplay();
    };
    DashboardPage.prototype.navigateToLogin = function () {
        this.navCtrl.push(LtabsPage);
    };
    DashboardPage.prototype.navigateToTabs = function () {
        this.navCtrl.push(TabsPage);
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dashboard',
            templateUrl: 'dashboard.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.js.map