import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  //@ViewChild('myVideo') myVideo: any;

  imageUrl = '../assets/images/slide.jpg';

  audio:any;


  customOptions: any = {
    items: 1,
    autoplay: true,
    muted: true,
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    video: true,
    videoHeight: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
