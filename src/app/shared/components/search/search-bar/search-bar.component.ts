import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
    private activate: ActivatedRoute,
    private rederer2: Renderer2
    ) {
    this.search = new FormControl('', [Validators.minLength(2)]);
    this.addOnChangeToSearch();
  }

  ngOnInit() {
  }

  private addOnChangeToSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(750),
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

    this.toggle(this.searchButton, 'close');
    this.toggle(this.input, 'square');
    if(search.classList.contains("close")) {
      input.focus();
    } else {
      input.blur();
    }
  }
  private toggle(ele: ElementRef, cl: string) {
    if (ele.nativeElement.classList.contains(cl)) {
      this.rederer2.removeClass(ele.nativeElement, cl);
    } else {
      this.rederer2.addClass(ele.nativeElement, cl);
    }
  }

}
