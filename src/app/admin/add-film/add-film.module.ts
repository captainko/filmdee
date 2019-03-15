import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFilmComponent } from './add-film.component';
import { AddFilmRoutingModule } from './add-film.routing';

@NgModule({
  declarations: [AddFilmComponent],
  imports: [
    CommonModule,
    AddFilmRoutingModule
  ]
})
export class AddFilmModule { }
