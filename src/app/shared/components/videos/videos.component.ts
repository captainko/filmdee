import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Videos } from './videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input('video') videolist: Videos;

  @ViewChild("video") video: ElementRef;
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
    // alert(this.video.nativeElement.muted);
    // return this.video.nativeElement.muted;
  }
  replay() {
    this.video.nativeElement.play();
    this.checkEnd = false;
    console.log(this.checkEnd);
    this.check_index = false;
  }

  playDelay(){
    this.setTime = setTimeout(() => {
      this.video.nativeElement.play();
      clearTimeout(this.setTime);
      this.check_index = false;
    }, 3000);
  }

}
