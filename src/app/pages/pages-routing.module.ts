import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';

import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'theater', loadChildren: './theater/theater.module#TheaterModule' },
  { path: 'search/:id', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'play', loadChildren: './play/play.module#PlayModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
