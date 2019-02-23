import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '@services/search/search.service';
import { BoxCard } from '@shared/components/cards/box-card/box-card';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  boxCards: BoxCard[];
  private logObj(name) {
    return {
      next: x => console.log(`${name} next:`, x),
      error: err => console.log(`${name} error:`, err),
      completed: () => console.log(`${name} completed`)
    }
  }

  constructor(private searchService: SearchService) {
    this.searchService.movieStream.subscribe(data => {
      this.boxCards = data;
      console.log(data);
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.searchService.movieStream.unsubscribe();
  }
}
