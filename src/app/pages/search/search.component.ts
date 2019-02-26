import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
<<<<<<< HEAD
export class SearchComponent implements OnInit {

  search = {
    prop1: 'Sắp xếp',
    prop2: 'Hình thức',
    prop3: 'Ngôn ngữ',
    prop4: 'Thể loại',
    prop5: 'Quốc gia',
    prop6: 'Năm phát hành',
  }
=======
export class SearchComponent implements OnInit, AfterViewInit {
  show = false;
>>>>>>> 33335e49e99b6217deec84a273a8ff1aaaba2426
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.show = true;
  }
}
