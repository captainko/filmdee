import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFilmComponent } from './add-film.component';
import { AddFilmRoutingModule } from './add-film.routing';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddFilmComponent],
  imports: [
    CommonModule,
    AddFilmRoutingModule,
    FormsModule,
    NgbTimepickerModule,
    NgbModule
    
  ]
})
export class AddFilmModule { }
