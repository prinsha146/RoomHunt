import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants'


@Injectable()

export class DropdownProvider{

    constructor(public http: HttpClient) {
        console.log('Hello DropdownProvider Provider');
      }

      getBathroomType()
      {
          return this.http.get(AppConstants.baseUrl+"dropdown/bathroom");
      }

      getKitchenType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/kitchen");
      }

      getPriceType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/price");
      }

      getSuitableFor()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/suitable");
      }

      getEnvironment()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/environment");
      }

      getSpaceType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/space");
      }

      getHouseType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/house");
      }

      getParkingType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/parking");
      }

      getWaterType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/water");
      }

      getPreferenceType()
      {
        return this.http.get(AppConstants.baseUrl+"dropdown/preference");
      }
}