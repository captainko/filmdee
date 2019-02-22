import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from '@shared/components/search/search.module';
import { VideoBackgroundModule } from '@shared/components/video-background/video-background.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SearchModule,
    VideoBackgroundModule
  ],
  exports: [

  ]
})
export class HomeModule { }
