import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


=======
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './layouts/client-layout/header/header.component';
import { FooterComponent } from './layouts/client-layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientLayoutModule } from './layouts/client-layout/client-layout.module';
import { SlideShowComponent } from './layouts/client-layout/slide-show/slide-show.component';
>>>>>>> 71b55db7d11aa2b9fad63ff7beedb5807e1ef626

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    CoreModule,
    FormsModule
=======
    FormsModule,
    ClientLayoutModule
>>>>>>> 71b55db7d11aa2b9fad63ff7beedb5807e1ef626
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
