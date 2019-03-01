import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideListComponent } from './slide-list/slide-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CardsModule } from '../cards/cards.module';
import { BoxCardComponent } from '../cards/box-card/box-card.component';
import { LazyModule } from '@core/directives/lazy/lazy.module';
import { LazyViewport } from "@core/directives/lazy/lazy-viewport";

@NgModule({
  declarations: [SlideListComponent, SlideShowComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
    LazyModule
  ],
  exports: [
    SlideListComponent,
    SlideShowComponent,
    BoxCardComponent
  ]
})
export class SlidesModule { }
