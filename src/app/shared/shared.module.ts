import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { SlideListComponent } from './components/slide-list/slide-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SlideShowComponent,
    SlideListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    SlideListComponent
  ]
})
export class SharedModule { }
