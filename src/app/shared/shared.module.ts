import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { CardsModule } from './components/cards/cards.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideShowComponent } from './components/slides/slide-show/slide-show.component';
import { SlideListComponent } from './components/slides/slide-list/slide-list.component';
import { BoxCardComponent } from './components/cards/box-card/box-card.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';


@NgModule({
  declarations: [
    SlideShowComponent,
    SlideListComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
  ],
  exports: [
    HttpClientModule,
    SlideListComponent,
    BoxCardComponent,
    SlideShowComponent,
  ]
})
export class SharedModule { }
