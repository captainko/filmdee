import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { TheaterModule } from './theater/theater.module'
import { SearchModule } from './search/search.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'login', component: LoginComponent },
  { path: 'theater', loadChildren: () => TheaterModule },
  { path: 'search', loadChildren: () => SearchModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
