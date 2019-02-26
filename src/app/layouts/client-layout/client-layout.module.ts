import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarModule } from '@shared/components/search/search-bar/search-bar.module';

import { SearchService } from '@services/search/search.service';

import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ClientLayoutRoutingModule } from './client-layout-routing.module';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientLayoutRoutingModule,
    SearchBarModule
  ],
  providers: [SearchService]
})
export class ClientLayoutModule {

 }
