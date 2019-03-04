import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbCommentComponent } from "./fb-comment.component";

@NgModule({
  declarations: [FbCommentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FbCommentComponent
  ]
})
export class FbCommentModule { }
