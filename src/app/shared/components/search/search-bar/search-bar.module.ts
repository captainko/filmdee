import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from '@shared/components/cards/cards.module';

@NgModule({
  declarations: [SearchBarComponent],
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
  ]
})
export class SearchBarModule { }
