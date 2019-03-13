import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';
import { VideosModule } from '@shared/components/videos/videos.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FacebookModule } from 'ngx-facebook';
import { SlidesModule } from '@shared/components/slides/slides.module';
import { JwplayerModule } from '@shared/components/jwplayer/jwplayer.module';
import { InfoFilmModule } from '@shared/components/info-film/info-film.module';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [PlayComponent, SafePipe],
  imports: [
    CommonModule,
    PlayRoutingModule,
    VideoBackgroundModule,
    VideosModule,
    NgScrollbarModule,
    FacebookModule.forRoot(),
    SlidesModule,
    JwplayerModule,
    InfoFilmModule,
    OwlModule,
    FormsModule,
  ]
})
export class PlayModule { }
