import {
  Component,
  OnInit
} from '@angular/core';
import {
  YcombinatorService
} from '../../services/ycombinator.service';
import {
  Observable
} from "rxjs/Observable";


@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.css']
})
export class TopstoriesComponent implements OnInit {
  topstories: Array < {
    title: String,
    url: String,
    timestamp: String,
    authorId: Number,
    karmaScore: Number
  } > = [];
  constructor(private ycombinator: YcombinatorService) {}

  ngOnInit() {
    this.ycombinator.getTopStories()
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
                authorId: storyDetail['by'],
                karmaScore: resultAuthorDetail['karma']
              })
            })
          });
          console.log(this.topstories);
        });
      });
  }
}
