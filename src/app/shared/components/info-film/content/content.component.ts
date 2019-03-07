import { Component, OnInit, ViewEncapsulation, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  // @Input('play') play: boolean;
  @Output() voted = new EventEmitter<boolean>();

  play_video() {
    alert('0-0');
    this.voted.emit(true);
  }

  constructor() { }

  // play_video() {
  //   // this.play = true;
  //   alert(this.play);
  // }

  ngOnInit() {
  }

}
