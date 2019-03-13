import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
=======
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
>>>>>>> 73e2390852e03f7171b592cd20668681c540dfe3

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
