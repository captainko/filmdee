import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsModule } from '@shared/components/cards/cards.module';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardsModule
  ],
  exports: [
    FormsModule,
    SearchResultComponent
  ]


})
export class SearchResultModule { }
