import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart.routing';
import { SlideImageModule } from '@shared/components/slide-image/slide-image.module';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SlideImageModule
  ]
})
export class ChartModule { }
