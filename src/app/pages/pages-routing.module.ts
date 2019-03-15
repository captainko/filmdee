import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { ChartModule } from './chart/chart.module'
import { SearchModule } from './search/search.module';
import { PlayModule } from "./play/play.module";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: {animation: 'HomePage'}},
  { path: 'chart', loadChildren: './chart/chart.module#ChartModule' },
  { path: 'search', component: SearchComponent, data: {animation: 'SearchPage'} },
  // { path: 'search', loadChildren: './search/search.module#SearchModule', data: {animation: 'SearchPage'} },
  { path: 'xem', loadChildren: './play/play.module#PlayModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'actor', loadChildren: './actor/actor.module#ActorModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
