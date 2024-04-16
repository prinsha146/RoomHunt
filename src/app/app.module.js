var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { HomePage } from '../pages/home/home';
import { NearbyPage } from '../pages/nearby/nearby';
import { BookmarkPage } from '../pages/bookmark/bookmark';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AvailablespacePage } from '../pages/availablespace/availablespace';
import { SetLocationPage } from '../pages/set-location/set-location';
import { LtabsPage } from '../pages/ltabs/ltabs';
import { MypostPage } from '../pages/mypost/mypost';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverComponent } from '../components/popover/popover';
import { FilterComponent } from '../components/filter/filter';
import { LhomePage } from '../pages/lhome/lhome';
import { LloginPage } from '../pages/llogin/llogin';
import { LsignupPage } from '../pages/lsignup/lsignup';
import { DetailsPage } from '../pages/details/details';
import { SpaceProvider } from '../providers/space.service';
import { LandlordProvider } from '../providers/landlord.service';
import { DropdownProvider } from '../providers/dropdown.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                LhomePage,
                DetailsPage,
                LoginPage,
                LloginPage,
                SignupPage,
                LsignupPage,
                NearbyPage,
                FilterComponent,
                BookmarkPage,
                MypostPage,
                ProfilePage,
                PopoverComponent,
                TabsPage,
                LtabsPage,
                DashboardPage,
                AvailablespacePage,
                SetLocationPage
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                IonicModule.forRoot(MyApp)
                //AgmCoreModule.forRoot({
                //apiKey:'AIzaSyB2h4PMGxptCm_GhmdGBBK1NugwBLInCLo'
                //})
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                DetailsPage,
                LhomePage,
                LoginPage,
                LloginPage,
                SignupPage,
                LsignupPage,
                NearbyPage,
                FilterComponent,
                BookmarkPage,
                MypostPage,
                ProfilePage,
                PopoverComponent,
                TabsPage,
                LtabsPage,
                DashboardPage,
                AvailablespacePage,
                SetLocationPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Geolocation,
                Camera,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                SpaceProvider,
                LandlordProvider,
                DropdownProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map