import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieDetailComponent
  ]
})
export class MovieDetailModule { }
