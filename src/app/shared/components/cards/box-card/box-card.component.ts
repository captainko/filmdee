import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { BoxCard } from './box-card';
@Component({
  selector: 'box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss']
})
export class BoxCardComponent implements OnInit {
  @Input('card') boxCard: BoxCard;
  constructor() { }

  ngOnInit() {
  }

}
