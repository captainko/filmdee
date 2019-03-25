import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFilmComponent } from './add-film.component';

const routes: Routes = [
    {path: '', component: AddFilmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFilmRoutingModule { }
