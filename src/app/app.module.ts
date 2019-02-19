import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './layouts/client-layout/header/header.component';
import { FooterComponent } from './layouts/client-layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientLayoutModule } from './layouts/client-layout/client-layout.module';
import { SlideShowComponent } from './layouts/client-layout/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ClientLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
