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
import { IonicPage } from 'ionic-angular';
import { LhomePage } from '../lhome/lhome';
import { NearbyPage } from '../nearby/nearby';
import { ProfilePage } from '../profile/profile';
import { MypostPage } from '../mypost/mypost';
/**
 * Generated class for the LtabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LtabsPage = /** @class */ (function () {
    function LtabsPage() {
        this.tab1Root = LhomePage;
        this.tab2Root = NearbyPage;
        this.tab3Root = MypostPage;
        this.tab4Root = ProfilePage;
    }
    LtabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LtabsPage');
    };
    LtabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-ltabs',
            templateUrl: 'ltabs.html',
        }),
        __metadata("design:paramtypes", [])
    ], LtabsPage);
    return LtabsPage;
}());
export { LtabsPage };
//# sourceMappingURL=ltabs.js.map