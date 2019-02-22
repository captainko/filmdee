import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { TheaterModule } from './theater/theater.module'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => HomeModule },
  {path: 'login', component: LoginComponent },
  {path: 'theater',loadChildren: () => TheaterModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
