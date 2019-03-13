import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './detail/detail.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ActorComponent } from './actor/actor.component';
import { CommentComponent } from './comment/comment.component';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [ContentComponent, DetailComponent, ActorComponent, CommentComponent],
  imports: [
    CommonModule,
    NgScrollbarModule,
    FacebookModule.forRoot(),
  ],
  exports: [
    ContentComponent,
    DetailComponent,
    ActorComponent,
    CommentComponent,
  ]
})
export class InfoFilmModule { }
