import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCardComponent } from './box-card/box-card.component';
import { LazyModule } from '@core/directives/lazy/lazy.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BoxCardComponent],
  imports: [
    CommonModule,
    LazyModule,
    RouterModule
  ],
  exports: [
    BoxCardComponent
  ],
  providers: [
  ]
})
export class CardsModule { }
