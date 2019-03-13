import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: LoginComponent }
=======
    {path: '', component: LoginComponent},
>>>>>>> 73e2390852e03f7171b592cd20668681c540dfe3
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
