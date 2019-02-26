import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

=======
import { SearchComponentModule } from "@shared/components/search/search.component.module";
>>>>>>> 33335e49e99b6217deec84a273a8ff1aaaba2426
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from '@shared/components/search/search-result/search-result.component';
import { SearchResultModule } from '@shared/components/search/search-result/search-result.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
<<<<<<< HEAD
    BsDropdownModule.forRoot()
=======
    SearchResultModule
>>>>>>> 33335e49e99b6217deec84a273a8ff1aaaba2426
  ]
})
export class SearchModule { }
