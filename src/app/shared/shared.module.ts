import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideShowComponent } from './components/slides/slide-show/slide-show.component';
import { SlideListComponent } from './components/slides/slide-list/slide-list.component';
import { BoxCardComponent } from './components/cards/box-card/box-card.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';


@NgModule({
  declarations: [
    SlideShowComponent,
    SlideListComponent,
    BoxCardComponent,
    SearchBarComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    SlideListComponent,
    BoxCardComponent,
    SlideShowComponent,
    SearchBarComponent,
    MovieDetailComponent
  ]
})
export class SharedModule { }
