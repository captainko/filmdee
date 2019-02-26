import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = {
    prop1: 'Sắp xếp',
    prop2: 'Hình thức',
    prop3: 'Ngôn ngữ',
    prop4: 'Thể loại',
    prop5: 'Quốc gia',
    prop6: 'Năm phát hành',
  }
  constructor() { }

  ngOnInit() {
  }

}
