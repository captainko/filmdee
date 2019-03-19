import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultModule } from '@shared/components/search/search-result/search-result.module';
import { SearchRoutingModule } from './search.routing';

@NgModule({
  declarations: [
    // SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchResultModule
  ],
  exports: [
    SearchResultModule
  ]
})
export class SearchModule { }
