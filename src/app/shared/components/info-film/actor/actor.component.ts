import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  @Input('actor') actors: any;

  constructor() { }

  ngOnInit() {
  }

}
