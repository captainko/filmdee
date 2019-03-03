import { Component, OnInit, ViewEncapsulation, HostListener, HostBinding, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Videos } from '@shared/components/videos/videos';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayComponent implements OnInit, AfterViewInit {

  check_poster: boolean = false;
  check_video: boolean = true;
  height: string = '0px';
  height_detail: string = '0px';
  height_s: number = 0;
  shown: 'native' | 'hover' | 'always' = 'hover';
  @ViewChild("info") info: ElementRef;
  @ViewChild("detail") detail: ElementRef;

  Video: Videos[] = [
    {
      link: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video.appspot.com/o/test%2F1551414168083_demo%20(2).m3u8?alt=media&token=d0156c18-2027-4fd8-863a-06e2fdb64e5c',
      picture: ''
    },
  ];

  link_image_m: string = 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/background-m.jpg?alt=media&token=e3963f1f-4805-4c01-9c48-b377760a7736';
  link_image_pc: string = 'https://firebasestorage.googleapis.com/v0/b/upvideo2-d1d8f.appspot.com/o/background.jpg?alt=media&token=86f70c2b-eb31-4ac0-9fe4-7cfb8f9e808a';

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth >= 992) {
      this.check_poster = false;
      this.check_video = true;
      this.Video[0].picture = this.link_image_pc;

    } else {
      this.check_poster = true;
      this.check_video = false;
      this.Video[0].picture = this.link_image_m;
    }

    this.height_s = window.innerHeight;
    // console.log(this.height_s);

  }

  ngAfterViewInit() {

    if (this.check_video) {
      // console.log(this.info.nativeElement.offsetHeight);
      this.height = ((this.height_s - this.info.nativeElement.offsetHeight) / 2) + 'px';
      console.log(this.height_s);
      // this.height_detail = ((this.height_s - this.detail.nativeElement.offsetHeight) / 2) + 'px';
      // console.log(this.detail.nativeElement.offsetHeight);
      this.height_detail = ((this.height_s - (this.height_s - 180)) / 2) + 'px';

      // this.getPx();
      this.cdRef.detectChanges();
    }
  }

  styleObject0(): any {
    if (this.menus[0].active) {
      return { display: 'block', top: this.height }
    }
    return { display: 'none' }
  }

  styleObject1(): any {
    if (this.menus[1].active) {
      return { display: 'block', top: this.height_detail }
    }
    return { display: 'none' }
  }

  styleObject2(): any {
    if (this.menus[2].active) {
      return { display: 'block', top: this.height_detail }
    }
    return { display: 'none' }
  }

  styleObject3(): any {
    if (this.menus[3].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }


  menus = [
    { active: true, name: 'Tổng Quan' },
    { active: false, name: 'Giới Thiệu' },
    { active: false, name: 'Diễn Viên' },
    { active: false, name: 'Thảo Luận' }
  ]

  actors = [
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5', name: 'Chadwick Boseman', vai: 'T\'Challa' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a', name: 'Michael B. Jordan', vai: 'Erik Killmonger' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd', name: 'Lupita Nyong\'o', vai: 'Nakia' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/04a.jpg?alt=media&token=5c74967d-35be-4991-bafc-8b3c915db784', name: 'Danai Gurira', vai: 'Okoye' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/05a.jpg?alt=media&token=41685429-8281-4334-966e-914296b50cd3', name: 'Martin Freeman', vai: 'Everett Ross' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/06a.jpg?alt=media&token=193ed906-a689-447c-97d6-23931fb0819a', name: 'Letitia Wright', vai: 'Shuri' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/01a.jpg?alt=media&token=0c6d374b-1569-492f-ab39-0dcc071b7ec5', name: 'Chadwick Boseman', vai: 'T\'Challa' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/02a.jpg?alt=media&token=2e304451-3e81-47f9-8b48-75f32f37ee8a', name: 'Michael B. Jordan', vai: 'Erik Killmonger' },
    { id: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/03a.jpg?alt=media&token=88fe5e9b-4a00-41d4-a1e2-bee3d76d3afd', name: 'Lupita Nyong\'o', vai: 'Nakia' },
  ]

  constructor(private cdRef: ChangeDetectorRef, private fb: FacebookService) {
    this.getScreenSize();
    let initParams: InitParams = {
      appId: '708064406069048',
      xfbml: true,
      version: 'v3.2'
    };

    fb.init(initParams);

  }


  ngOnInit() {
  }

  active(vl) {
    for (let index = 0; index < this.menus.length; index++) {
      if (index != vl) {
        this.menus[index].active = false;
      } else {
        this.menus[index].active = true;
      }
    }
  }

}
