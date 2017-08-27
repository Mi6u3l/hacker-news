import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class YcombinatorService {
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

    getStoryDetail(storyId) {
    return this.http.get(`${this.BASE_URL}/item/${storyId}.json`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

   getAuthorDetail(authorId) {
    return this.http.get(`${this.BASE_URL}/user/${authorId}.json`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

   getRandomStories(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

}
