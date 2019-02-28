import { Component, OnInit } from '@angular/core';
import { Videos } from '@shared/components/videos/videos';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  Video: Videos[] = [
    { link: 'https://firebasestorage.googleapis.com/v0/b/upvideos-d69b3.appspot.com/o/demo.mp4?alt=media&token=fc2869cb-5e19-4b42-9e4d-49a06eeb9e3c',
      picture: 'https://firebasestorage.googleapis.com/v0/b/upvideos-d69b3.appspot.com/o/background.jpg?alt=media&token=742bc937-9785-4576-a1eb-f48a404bda31'
    },
  ];

  menus = [
    {active: true, name: 'Tổng Quan'},
    {active: false, name: 'Giới Thiệu'},
    {active: false, name: 'Diễn Viên'},
    {active: false, name: 'Thảo Luận'}
  ]

  constructor() { }

  ngOnInit() {
  }

  active(vl) {
    for (let index = 0; index < this.menus.length; index++) {
      if(index != vl){
        this.menus[index].active = false;
      }else{
        this.menus[index].active = true;
      }
    }
  }

}
