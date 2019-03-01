import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Videos } from '@shared/components/videos/videos';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayComponent implements OnInit {

  Video: Videos[] = [
    { link: 'https://firebasestorage.googleapis.com/v0/b/upvideo2-d1d8f.appspot.com/o/demo.mp4?alt=media&token=e38d8dc8-dbe6-436d-afd4-e03a2af1c550',
      picture: 'https://firebasestorage.googleapis.com/v0/b/upvideo2-d1d8f.appspot.com/o/background.jpg?alt=media&token=86f70c2b-eb31-4ac0-9fe4-7cfb8f9e808a'
    },
  ];

  menus = [
    {active: true, name: 'Tổng Quan'},
    {active: false, name: 'Giới Thiệu'},
    {active: false, name: 'Diễn Viên'},
    {active: false, name: 'Thảo Luận'}
  ]

  actors = [
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5', name: 'Chadwick Boseman', vai: 'T\'Challa'},
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a', name: 'Michael B. Jordan', vai: 'Erik Killmonger'},
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd', name: 'Lupita Nyong\'o', vai: 'Nakia'},
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/04a.jpg?alt=media&token=5c74967d-35be-4991-bafc-8b3c915db784', name: 'Danai Gurira', vai: 'Okoye'},
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/05a.jpg?alt=media&token=41685429-8281-4334-966e-914296b50cd3', name: 'Martin Freeman', vai: 'Everett Ross'},
    {id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/06a.jpg?alt=media&token=193ed906-a689-447c-97d6-23931fb0819a', name: 'Letitia Wright', vai: 'Shuri'},
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
