import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../../app.constants';

/*
  Generated class for the BookmarkServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookmarkServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BookmarkServiceProvider Provider');
  }

  getBookmarkById(id)
  {
    return this.http.get(AppConstants.baseUrl+"bookmark/"+ id);
  }

  postBookmark(bookmark)
  {
    return this.http.post(AppConstants.baseUrl+"bookmark",bookmark);
  }

  deleteBookmark(id)
  {
    return this.http.put(AppConstants.baseUrl + "bookmark/delete/" + id,id);
  }

}
