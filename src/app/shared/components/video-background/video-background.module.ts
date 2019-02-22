import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBackgroundComponent } from './video-background.component';

@NgModule({
  declarations: [VideoBackgroundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VideoBackgroundComponent
  ]
})
export class VideoBackgroundModule { }
