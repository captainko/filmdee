import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SharedModule } from '@shared/shared.module';
=======
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';



>>>>>>> 8af841e395b18e3c637ab63567f58d06736ff498
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
=======
    CoreModule,
    FormsModule
>>>>>>> 8af841e395b18e3c637ab63567f58d06736ff498
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
