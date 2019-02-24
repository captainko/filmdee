import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '@services/search/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: FormControl;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private activate: ActivatedRoute
    ) {
    this.search = new FormControl('', [Validators.minLength(2)]);
    this.addOnChangeToSearch();
    // document.querySelector("button").addEventListener('click', expand);
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
            this.router.navigate(['search', value]).then(
              () => {
                this.activate.params.subscribe(x=> {

                  this.searchService.getMovies(value)
                  .subscribe(data => {
                    this.searchService.movieStream.next(data);
                  });
                  console.log('lol')
                })
              }
            )
          } else {
            this.router.navigate(['home'])
            this.searchService.movieStream.next(undefined);
          }
        } else {
          console.log('ko tim thay');
          this.searchService.movieStream.next([]);
        };
      });
  }

  expand() {
    document.querySelector(".search").classList.toggle("close");
    document.querySelector(".input").classList.toggle("square");
    if (document.querySelector(".search").classList.contains("close")) {
      document.querySelector("input").focus();
    } else {
      document.querySelector("input").blur();
    }
  }


}
