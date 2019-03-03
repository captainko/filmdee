import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';
import { VideosModule } from '@shared/components/videos/videos.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FacebookModule } from 'ngx-facebook';
import { SlidesModule } from '@shared/components/slides/slides.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    VideoBackgroundModule,
    VideosModule,
    NgScrollbarModule,
    FacebookModule.forRoot(),
    SlidesModule,
  ]
})
export class PlayModule { }
