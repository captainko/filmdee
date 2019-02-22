import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCardComponent } from './box-card/box-card.component';

@NgModule({
  declarations: [BoxCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BoxCardComponent
  ]
})
export class CardsModule { }
