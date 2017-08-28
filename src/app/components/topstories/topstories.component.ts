import { Component, OnInit } from '@angular/core';
import { YcombinatorService } from '../../services/ycombinator.service';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.css']
})
export class TopstoriesComponent implements OnInit {
  busy: Subscription;
  topstories: Array < {
    title: String,
    url: String,
    timestamp: String,
    score: Number,
    authorId: Number,
    authorKarmaScore: Number
  } > = [];

  constructor(private ycombinator: YcombinatorService) {}

  ngOnInit() {
    this.busy = this.ycombinator.getTopStories()
      .subscribe((data) => {
        //get 10 random story ids
        let topstoriesIds = this.ycombinator.getRandomStories(data, 10);
        //add observables array for story details
        let detailObservables = [];
        topstoriesIds.forEach((storyId) => {
          detailObservables.push(this.ycombinator.getStoryDetail(storyId));
        });
        //iterate through obersvables array to get story detail
        Observable.forkJoin(detailObservables).subscribe((resultStoryDetail) => {
          resultStoryDetail.forEach((storyDetail) => {
            //get author detail for each story
            this.ycombinator.getAuthorDetail(storyDetail['by']).subscribe((resultAuthorDetail) => {
              this.topstories.push({
                title: storyDetail['title'],
                url: storyDetail['url'],
                timestamp: storyDetail['time'],
                score: storyDetail['score'],
                authorId: storyDetail['by'],
                authorKarmaScore: resultAuthorDetail['karma']
              })
            })
          });
        });
      });
  }
}
