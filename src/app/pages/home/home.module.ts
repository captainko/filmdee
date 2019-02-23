import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';
import { SlidesModule } from '@shared/components/slides/slides.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlidesModule,
    VideoBackgroundModule
  ]
})
export class HomeModule { }
