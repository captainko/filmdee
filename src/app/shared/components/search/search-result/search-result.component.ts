import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '@services/search/search.service';
import { BoxCard } from '@shared/components/cards/box-card/box-card';
// import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  boxCards: BoxCard[];
  noResult: boolean = false;
  private logObj(name) {
    return {
      next: x => console.log(`${name} next:`, x),
      error: err => console.log(`${name} error:`, err),
      completed: () => console.log(`${name} completed`)
    }
  }

  constructor(
    private searchService: SearchService,
    private  activated: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.activated.queryParams.subscribe((params)=> {
      if(params["q"]) {
        this.searchService.getMovies(params["q"])
          .subscribe(data => {
            if(data.length == 0) {
              this.noResult = true;
            } else {
              this.noResult = false;
              this.searchService.movieStream.next(data);
            }
          })
      } else {
        console.log("please input")
      }
    })


    this.searchService.movieStream.subscribe(data => {
      this.boxCards = data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    // this.searchService.movieStream.unsubscribe();
  }

}
