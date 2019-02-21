import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { BoxCardComponent } from './components/cards/box-card/box-card.component';


@NgModule({
  declarations: [
    SlideShowComponent,
    BoxCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    BoxCardComponent,
  ]
})
export class SharedModule { }
