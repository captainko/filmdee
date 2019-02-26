import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    SearchModule
  ]
})
export class PagesModule { }
