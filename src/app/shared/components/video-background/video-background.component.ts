import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  title = 'A New Devil’s In Town Day To Day ZoHa (2019)';
  content = 'Stay silent. Stay alert. Stay blindfolded. As a terrifying force lies in wait, a mother leads her children on a harrowing journey.';

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
