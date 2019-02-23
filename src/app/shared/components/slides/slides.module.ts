import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideListComponent } from './slide-list/slide-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [SlideListComponent, SlideShowComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule
  ],
  exports: [
    SlideListComponent,
    SlideShowComponent
  ]
})
export class SlidesModule { }
