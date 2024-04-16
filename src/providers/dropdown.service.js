var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
var DropdownProvider = /** @class */ (function () {
    function DropdownProvider(http) {
        this.http = http;
        console.log('Hello DropdownProvider Provider');
    }
    DropdownProvider.prototype.getBathroomType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/bathroom");
    };
    DropdownProvider.prototype.getKitchenType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/kitchen");
    };
    DropdownProvider.prototype.getPriceType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/price");
    };
    DropdownProvider.prototype.getSuitableFor = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/suitable");
    };
    DropdownProvider.prototype.getEnvironment = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/environment");
    };
    DropdownProvider.prototype.getSpaceType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/space");
    };
    DropdownProvider.prototype.getHouseType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/house");
    };
    DropdownProvider.prototype.getParkingType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/parking");
    };
    DropdownProvider.prototype.getWaterType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/water");
    };
    DropdownProvider.prototype.getPreferenceType = function () {
        return this.http.get(AppConstants.baseUrl + "dropdown/preference");
    };
    DropdownProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DropdownProvider);
    return DropdownProvider;
}());
export { DropdownProvider };
//# sourceMappingURL=dropdown.service.js.map