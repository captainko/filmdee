import { Component, OnInit, HostListener } from '@angular/core';
import { Videos } from '../videos/videos';


@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  check_poster: boolean = false;
  check_video: boolean = true;

  Video: Videos[] = [
    { link: 'https://firebasestorage.googleapis.com/v0/b/phimdee-video.appspot.com/o/test%2F1551414168083_demo%20(2).m3u8?alt=media&token=d0156c18-2027-4fd8-863a-06e2fdb64e5c',
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

  }

  
  title = 'A New Devil’s In Town Day To Day ZoHa (2019)';
  content = 'Stay silent. Stay alert. Stay blindfolded. As a terrifying force lies in wait, a mother leads her children on a harrowing journey.';

  constructor(){
    this.getScreenSize();
  }

  ngOnInit() {
  }
}
