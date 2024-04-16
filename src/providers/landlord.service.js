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
/*
  Generated class for the LandlordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LandlordProvider = /** @class */ (function () {
    function LandlordProvider(http) {
        this.http = http;
        console.log('Hello LandlordProvider Provider');
    }
    LandlordProvider.prototype.getData = function () {
        return this.http.get("http://localhost:50379/api/landlord");
    };
    LandlordProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], LandlordProvider);
    return LandlordProvider;
}());
export { LandlordProvider };
//# sourceMappingURL=landlord.service.js.map