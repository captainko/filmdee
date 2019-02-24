import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardsModule } from '../cards/cards.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
   SearchBarModule,
   SearchResultModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SearchBarComponent,
    SearchResultComponent
  ]
})
export class SearchComponentModule { }
