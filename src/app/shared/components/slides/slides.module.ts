import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { SlideListComponent } from './slide-list/slide-list.component';
import { CardsModule } from '../cards/cards.module';
import { LazyModule } from '@core/directives/lazy/lazy.module';
import { LazyViewport } from "@core/directives/lazy/lazy-viewport";



@NgModule({
  declarations: [SlideListComponent],
  imports: [
    CommonModule,
    OwlModule,
    CardsModule,
    LazyModule
  ],
  exports: [
    SlideListComponent
  ]
})
export class SlidesModule { }
