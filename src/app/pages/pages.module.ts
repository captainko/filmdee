import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';
import { SearchComponent } from './search/search.component';
import { PagesRoutingModule } from './pages.routing';
@NgModule({
  declarations: [
    SearchComponent
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
