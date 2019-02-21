import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ClientLayoutRoutingModule } from './client-layout-routing.module';

import { SearchService } from '@services/search/search.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

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
    FormsModule,
    SharedModule
  ],
  providers: [SearchService]
})
export class ClientLayoutModule { }
