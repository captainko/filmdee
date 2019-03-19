import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminsRoutingModule } from './admins.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AdminsRoutingModule,
    FormsModule, 
    NgbModule.forRoot()
  ]
})
export class AdminModule { }
