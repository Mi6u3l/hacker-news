import { Component, OnInit } from '@angular/core';
import { YcombinatorService } from '../../services/ycombinator.service';


@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.css']
})
export class TopstoriesComponent implements OnInit {
  topstories;
  constructor(private ycombinator: YcombinatorService) { }

  ngOnInit() {
      this.ycombinator.getTopStories()
      .subscribe((topstories) => {
        this.topstories = this.ycombinator.getRandomStories(topstories, 10);
        console.log(this.topstories);
      });
  }

}
