import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SearchBarComponent,
    SearchResultComponent
  ]
})
export class SearchModule { }
