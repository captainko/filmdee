import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ClientLayoutRoutingModule } from './client-layout-routing.module';

import { SearchService } from '@services/search/search.service';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule,
  ],
  providers: [SearchService]
})
export class ClientLayoutModule { }
