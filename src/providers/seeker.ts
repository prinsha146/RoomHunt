import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';

/*
  Generated class for the SeekerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeekerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SeekerProvider Provider');
  }

  getSeeker(id)
  {
    return this.http.get(AppConstants.baseUrl+"seeker/"+id);
  }

}
