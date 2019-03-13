import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideImageComponent } from './slide-image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SlideImageComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [SlideImageComponent]
})
export class SlideImageModule { }
