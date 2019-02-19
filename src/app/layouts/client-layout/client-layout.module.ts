import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '@app/pages/home/home.component';

@NgModule({
  declarations:[
    ClientLayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    SlideShowComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ClientLayoutComponent]
})
export class ClientLayoutModule { }
