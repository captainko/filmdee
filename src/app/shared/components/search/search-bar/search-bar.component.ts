import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '@services/search/search.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: FormControl;
  @ViewChild('input') input: ElementRef;
  @ViewChild('searchButton') searchButton: ElementRef;
  private previousPath: string;
  private currentPath: string;
  private back = 0;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private activate: ActivatedRoute,
    private rederer2: Renderer2
  ) {
    this.search = new FormControl('', [Validators.minLength(2)]);
    this.addOnChangeToSearch();
    this.processRouting();

  }

  ngOnInit() {
  }
  private async processRouting() {

    const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
    this.currentPath = this.router.url.slice(1).split(urlDelimitators)[0];
    this.router.events
      .pipe(
        filter((value) => value instanceof NavigationStart)
      ).subscribe((event: NavigationStart) => {

        this.previousPath = this.currentPath;
        this.currentPath = event.url.slice(1).split(urlDelimitators)[0];

        // this.currentUrl = event.url;
        if(this.previousPath == 'search' && this.previousPath == this.currentPath) {
          this.back--;
        }else {
          this.back = -1;
        }

      })
  }
  private addOnChangeToSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        if (this.search.valid) {

            // console.log(`?q=${value}`)
            this.router.navigate(['search'], { queryParams: { q: value } });

        }
      });
  }

  //navigate
  public navigate() {
    this.router.navigate(['search']);
  }

  public expand() {
    let search = this.searchButton.nativeElement;
    let input = this.input.nativeElement;


    this.toggle(this.searchButton, 'close');
    this.toggle(this.input, 'square');
    if (search.classList.contains("close")) {
      input.focus();
    } else {

      input.blur();
      if( this.search.value === "" && this.back) {
        console.log(this.back);
        window.history.go(this.back);
      }
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
