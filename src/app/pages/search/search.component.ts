import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  show = false;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.show = true;
  }
}
