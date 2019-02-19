import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    FooterComponent
  ]
})
export class CoreModule { }
