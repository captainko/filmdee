import { NgModule } from '@angular/core';
import { LazyModule } from './directives/lazy/lazy.module';


@NgModule({
  declarations: [],
  imports: [
    LazyModule
  ],
  exports: [
    LazyModule
  ]
})
export class CoreModule { }
