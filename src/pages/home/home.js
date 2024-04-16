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
import { NavController, AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SpaceProvider } from '../../providers/space.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, spaceService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.spaceService = spaceService;
    }
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.addEvent = function () {
        var _this = this;
        if (this.fontColor != '#009688') {
            var alert_1 = this.alertCtrl.create({
                title: 'Bookmark',
                message: 'Do you want to bookmark this post?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.fontColor = '#009688';
                            console.log('Yes clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Remove Bookmark',
                message: 'Do you want to remove bookmark?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.fontColor = '#222';
                            console.log('Yes clicked');
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    HomePage.prototype.addEvents = function () {
        var _this = this;
        if (this.fontCo != '#f53d3d') {
            var alert_3 = this.alertCtrl.create({
                title: 'Report',
                message: 'Do you want to report this post?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.fontCo = '#f53d3d';
                            console.log('Yes clicked');
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'Unreport',
                message: 'Do you want to unreport?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.fontCo = '#222';
                            console.log('Yes clicked');
                        }
                    }
                ]
            });
            alert_4.present();
        }
    };
    HomePage.prototype.GoToDetails = function () {
        this.navCtrl.push(DetailsPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            SpaceProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map