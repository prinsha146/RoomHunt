import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocationProvider Provider');
  }

  latVal:any;
  lngVal:any;

  setLatValue(lat)
  {
    this.latVal = lat;
  }

  setLngValue(lng)
  {
    this.lngVal = lng;
  }

  getLatValue()
  {
    return this.latVal;
  }

  getLngValue()
  {
    return this.lngVal;
  }

}
