import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'orderByScore',
  pure: false  
})
export class OrderbyScoreComponent implements PipeTransform {
  transform(topstories): Array<any> {
    topstories.sort((a, b) => {
          return a['score'] - b['score'];
      });
    return topstories;
  }
}
