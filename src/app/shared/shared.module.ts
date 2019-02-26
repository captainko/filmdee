import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { CardsModule } from './components/cards/cards.module';
import { SlidesModule } from './components/slides/slides.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CardsModule,
    SlidesModule
  ],
  exports: [
    HttpClientModule,
    SlidesModule
  ]
})
export class SharedModule { }
