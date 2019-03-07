import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Videos } from './videos';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  // check_poster: boolean = false;
  // check_video: boolean = true;
  isVisible: any;
  @Input('video') videolist: Videos;
  @Input('Check_Poster') check_poster: boolean;
  @Input('Check_Video') check_video: boolean;
  @Input('play') play: boolean;

  @ViewChild("video") video: ElementRef;
  @ViewChild("botvideo") botvideo: ElementRef;

  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //   if (window.innerWidth >= 992) {
  //     this.check_poster = false;
  //     this.check_video = true;
  //     console.log('PC');

  //   } else {
  //     this.check_poster = true;
  //     this.check_video = false;
  //     console.log('Mobile');
  //   }
  //   console.log('p: ' + this.check_poster);
  //   console.log('v: ' + this.check_video);

  // }

  @HostListener("document:visibilitychange", ["$event"])
  handleVisibilityChange(event: any): void {

    if (document.hidden) {
      this.video.nativeElement.pause();

    } else {
      if (!this.checkEnd) {
        this.video.nativeElement.play();
      }
    }
  }

  // @HostListener('window:scroll', ['$event'])

  // onScroll(event) {
  //   console.log(this.video.nativeElement.scrollTop);

  //   // if (document.documentElement.scrollTop > 55 || document.body.scrollTop > 55) {
  //   //   console.log('PAUSE');
  //   // }else{
  //   //   console.log('PLAY');
  //   // }
  // }

  constructor() {

    this.playDelay();
  }

  checkMuted = true;
  checkEnd: boolean;
  check_index: boolean = true;

  ngOnInit() {
    // for(let i in this.video.nativeElement) console.log(i);
  }

  vidEnd() {
    this.checkEnd = true;
    this.check_index = true;
    // this.video.nativeElement.load();
    // this.video.nativeElement.removeAttribute('src');
    this.check_poster = true;
  }

  muted() {
    this.video.nativeElement.muted = !this.video.nativeElement.muted;
    this.checkMuted = this.video.nativeElement.muted;
  }

  // Pause() {
  //   this.video.nativeElement.pause();
  // }

  replay() {
    // this.video.nativeElement.poster.show();
    this.check_poster = false;
    this.video.nativeElement.play();
    this.checkEnd = false;
    // console.log(this.checkEnd);
    this.check_index = false;
  }

  playDelay() {

      let setTime = setTimeout(() => {
        if (this.check_video) {
        this.video.nativeElement.play();
        this.check_index = false;
        clearTimeout(setTime);
        }
      }, 3000);
    }


}
