import { Component, OnInit, ViewEncapsulation, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  @Output() voted = new EventEmitter<boolean>();
  @Input('content') content: any;

  play_video() {
    this.voted.emit(true);
  }

  constructor() { }

  

  ngOnInit() {
  }

}
