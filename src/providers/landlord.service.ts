import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';

/*
  Generated class for the LandlordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LandlordProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LandlordProvider Provider');
  }

  getData(id)
  {
    return this.http.get(AppConstants.baseUrl+"landlord/"+id);
  }

}
