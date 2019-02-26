import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from '@shared/components/search/search-result/search-result.component';
import { SearchResultModule } from '@shared/components/search/search-result/search-result.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    BsDropdownModule.forRoot()
  ]
})
export class SearchModule { }
