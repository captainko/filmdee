import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('input') input: ElementRef;
  @ViewChild('searchButton') searchButton: ElementRef;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private activate: ActivatedRoute
    ) {
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
            // console.log(`?q=${value}`)
            this.router.navigate(['search'], {queryParams: {q: value}});
          } else {
            this.router.navigate(['home'])
          }
        }
      });
  }

  expand() {
    let search = this.searchButton.nativeElement;
    let input = this.input.nativeElement;

    search.classList.toggle('close');
    input.classList.toggle('square');
    if(search.classList.contains("close")) {
      input.focus();
    } else {
      input.blur();
    }
  }


}
