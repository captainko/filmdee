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
  play: boolean = false;

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
    if (window.innerWidth >= 992 && !this.play) {
      this.check_poster = false;
      this.check_video = true;
      this.Video[0].picture = this.link_image_pc;

    } else if(window.innerWidth < 992 && !this.play) {
      this.check_poster = true;
      this.check_video = false;
      this.Video[0].picture = this.link_image_m;
    }

  }

  kl() {
    alert(this.play);
  }

  onVoted() {
    this.play = true;
    this.check_poster = true;
    this.check_video = false;
  }

  ngAfterViewInit() {
  }

  styleObject0(): any {
    if (this.menus[0].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }

  styleObject1(): any {
    if (this.menus[1].active) {
      return { display: 'block' }
    }
    return { display: 'none' }
  }

  styleObject2(): any {
    if (this.menus[2].active) {
      return { display: 'block' }
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
