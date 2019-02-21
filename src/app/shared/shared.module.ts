import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SlideShowComponent } from './components/slide-show/slide-show.component';


@NgModule({
  declarations: [
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    SlideShowComponent
  ]
})
export class SharedModule { }