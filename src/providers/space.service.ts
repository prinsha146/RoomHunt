import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';

/*
  Generated class for the SpaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SpaceProvider Provider');
  }

  getAvailableSpace()
  {
    return this.http.get(AppConstants.baseUrl+"availablespace");
  }

  gerAvailableSpaceById(id)
  {
    return this.http.get(AppConstants.baseUrl+"availablespace/"+id);
  }

  
  getMyposts(landlordId)
  {
    return this.http.get(AppConstants.baseUrl+"availablespace/landlordpost/"+landlordId);
  }

  getBookmarkedPosts(seekerId)
  {
    return this.http.get(AppConstants.baseUrl+"bookmark/seeker/"+seekerId);
  }


  postAvailableSpace(spaceData)
  {
    return this.http.post(AppConstants.baseUrl+"availablespace",spaceData);
  }

  updateAvailableSpace()
  {

  }

  deleteAvailableSpace()
  {

  }

  putreportPosts(id)
  {
    return this.http.put(AppConstants.baseUrl+"availablespace/report/"+id,id);
  }

  putStatusPosts(id)
  {
    return this.http.put(AppConstants.baseUrl+"availablespace/status/"+id, id);
  }
 
}
