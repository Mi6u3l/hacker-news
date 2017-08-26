import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class YcombinatorServiceService {
  BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';
  constructor(
     private http: Http
  ) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

   getTopStories() {
    return this.http.get(`${this.BASE_URL}/topstories.json`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

}
