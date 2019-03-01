import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyModule } from '@core/directives/lazy/lazy.module';
import { LazyViewport } from '@core/directives/lazy/lazy-viewport';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    // CoreModule,
    LazyModule,
    RouterModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
  ],
  providers: [
    {
      provide: LazyViewport,
      useFactory: function () {
        var viewport = new LazyViewport();
        viewport.setup(/* no root */);
        return (viewport);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
