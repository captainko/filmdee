import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';
import { SlidesModule } from '@shared/components/slides/slides.module';
import { HomeRoutingModule } from './home.routing';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlidesModule,
    VideoBackgroundModule,
  ]
})
export class HomeModule { }
