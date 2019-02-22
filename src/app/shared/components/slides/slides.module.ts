import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideListComponent } from './slide-list/slide-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [SlideListComponent, SlideShowComponent],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    SlideListComponent,
    SlideShowComponent
  ]
})
export class SlidesModule { }
