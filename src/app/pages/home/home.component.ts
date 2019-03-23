import { Component, OnInit } from '@angular/core';
import { BoxCard } from '@shared/components/cards/box-card/box-card';
import { GetSlideListService } from '@services/get-slide-list/get-slide-list.service';

// export interface LFilm {
//   image?: string;
//   link?: string;
//   now_ep?: string;
//   total_ep?: string;
//   id?: string;
//   name_vi?: string;
//   name?: string;
//   quality?: string;
//   view?: number;
//   time_update?: { day: number, month: number, year: number };
//   caterogy?: any;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: BoxCard[];
  lists_name: string = 'Hoạt Hình';
  
  constructor(private getslidelistService: GetSlideListService) { }

  ngOnInit() {
    this.getslidelistService.getUser().subscribe(lists => {
      this.lists = lists;
    })
  }

}
