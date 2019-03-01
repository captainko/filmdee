import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Videos } from './videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  isVisible: any;
  @Input('video') videolist: Videos;

  @ViewChild("video") video: ElementRef;
  @ViewChild("botvideo") botvideo: ElementRef;

  @HostListener("document:visibilitychange", ["$event"])
  handleVisibilityChange(event: any): void {

    if (document.hidden) {
          this.video.nativeElement.pause();
    
        } else {
          if(!this.checkEnd){
            this.video.nativeElement.play();
          }
        }
  }

  @HostListener('window:scroll', ['$event'])

  onScroll(event) {
    console.log(this.video.nativeElement.scrollTop);
    
    // if (document.documentElement.scrollTop > 55 || document.body.scrollTop > 55) {
    //   console.log('PAUSE');
    // }else{
    //   console.log('PLAY');
    // }
  }

  constructor() {
    this.playDelay();
  }

  checkMuted = true;
  checkEnd: boolean;
  setTime: any;
  check_index: boolean = true;

  ngOnInit() {

  }

  vidEnd() {
    this.checkEnd = true;
    this.check_index = true;
    this.video.nativeElement.load();
  }

  muted() {
    this.video.nativeElement.muted = !this.video.nativeElement.muted;
    this.checkMuted = this.video.nativeElement.muted;
    console.log(this.checkMuted);
  }

  Pause() {
    this.video.nativeElement.pause();
  }

  replay() {
    this.video.nativeElement.play();
    this.checkEnd = false;
    console.log(this.checkEnd);
    this.check_index = false;
  }

  playDelay() {
    this.setTime = setTimeout(() => {
      this.video.nativeElement.play();
      clearTimeout(this.setTime);
      this.check_index = false;
    }, 3000);
  }

}
