import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '@services/search/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: FormControl;
  constructor(private searchService: SearchService) {
    this.search = new FormControl('', [Validators.minLength(2)]);
    this.addOnChangeToSearch();
  }

  ngOnInit() {
  }

  private addOnChangeToSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        if (this.search.valid) {
          if(value !== '') {
            this.searchService.getMovies(value)
            .subscribe(data => {
              this.searchService.movieStream.next(data);
              console.log(data);
            });
          } else {
            this.searchService.movieStream.next(undefined);
          }
        } else {
          console.log('ko tim thay');
          this.searchService.movieStream.next([]);
        };
      });
  }

}
