import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { MovieDetailModule } from '@shared/components/movie-detail/movie-detail.module';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';
import { VideosModule } from '@shared/components/videos/videos.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    MovieDetailModule,
    VideoBackgroundModule,
    VideosModule,
  ]
})
export class PlayModule { }
