import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBackgroundComponent } from './video-background.component';
import { VideosModule } from '../videos/videos.module';

@NgModule({
  declarations: [VideoBackgroundComponent],
  imports: [
    CommonModule,
    VideosModule
  ],
  exports: [
    VideoBackgroundComponent
  ]
})
export class VideoBackgroundModule { }
