import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ClientLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class ClientLayoutModule { }
