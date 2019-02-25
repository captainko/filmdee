import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
// import { LoginComponent } from './login/login.component';
import { TheaterModule } from './theater/theater.module'
import {  SearchModule } from './search/search.module';
import { PlayModule } from "./play/play.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'theater', loadChildren: './theater/theater.module#TheaterModule' },
  { path: 'search/:query', loadChildren: './search/search.module#SearchModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'play', loadChildren: './play/play.module#PlayModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
