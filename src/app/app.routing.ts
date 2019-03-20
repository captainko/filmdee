import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './layouts/client-layout/client-layout.module#ClientLayoutModule' },
  { path: 'admin', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// npm 