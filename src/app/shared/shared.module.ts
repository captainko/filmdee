import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { SlideListComponent } from './components/slide-list/slide-list.component';
import { BoxCardComponent } from './components/cards/box-card/box-card.component';


@NgModule({
  declarations: [
    SlideShowComponent,
    SlideListComponent,
    BoxCardComponent
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
  ]
})
export class SharedModule { }
