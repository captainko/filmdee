import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BoxCard } from '@shared/components/cards/box-card/box-card';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss'],
})
export class SlideListComponent implements OnInit {
  @Input('data-list') list: BoxCard[];
  @Input('data-name') name: string;

  @ViewChild('owlElement') owlElement: OwlCarousel;

  public customOptions: any = {
    margin: 10,
    loop: false,
    dots: false,
    center: false,
    responsive: {
      0: {
        items: 2,
        slideBy: 2
      },
      322: {
        items: 3,
        slideBy: 3
      },
      483: {
        items: 4,
        slideBy: 4
      },
      644: {
        items: 5,
        slideBy: 5
      },
      805: {
        items: 5,
        slideBy: 5
      },
      966: {
        items: 6,
        slideBy: 6
      },
      1127: {
        items: 7,
        slideBy: 7
      },
      1288: {
        items: 8,
        slideBy: 8
      },
      1449: {
        items: 9,
        slideBy: 9
      },
      1610: {
        items: 10,
        slideBy: 10
      }
    },
    nav: false
  };

  next() {
    this.owlElement.next([200]);
  }

  prev(){
    this.owlElement.previous([200]);
  }

  // activeSlides: any;
  // activeDot: number = 1;
  // total_dots = new Array<any>();

  // active(data: any) {
  //   this.activeDot = Math.floor((data.startPosition + 1)/data.slides.length) + 1;
  // }

  // getData(data: any) {

  //   this.activeSlides = Math.ceil(this.total / data.slides.length);
  //   for (let i = 0; i < this.activeSlides; i++) {
  //     var temp = new Object();
  //     temp["id"] = (i + 1);
  //     temp["dot"] = (i * data.slides.length) + '';
  //     this.total_dots.push(temp);
  //   }
  // }



  constructor() {
    console.log(this.list);

   }

  ngOnInit() {
  }

}
