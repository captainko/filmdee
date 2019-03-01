import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCardComponent } from './box-card/box-card.component';
import { LazyModule } from '@core/directives/lazy/lazy.module';
import { LazyViewport } from '@core/directives/lazy/lazy-viewport';

@NgModule({
  declarations: [BoxCardComponent],
  imports: [
    CommonModule,
    LazyModule,
  ],
  exports: [
    BoxCardComponent
  ],
  providers: [
  ]
})
export class CardsModule { }
