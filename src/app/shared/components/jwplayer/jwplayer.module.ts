import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwplayerComponent } from './jwplayer.component';

@NgModule({
  declarations: [JwplayerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JwplayerComponent
  ]
})
export class JwplayerModule { }
