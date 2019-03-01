import { NgModule } from '@angular/core';
import { LazyViewportDirective } from './lazy-viewport.directive';
import { LazySrcDirective } from './lazy-src.directive';
import { LazyViewport } from './lazy-viewport';

@NgModule({
  declarations: [
    LazyViewportDirective,
    LazySrcDirective
  ],
  exports: [
    LazyViewportDirective,
    LazySrcDirective
  ],
  providers: [
    // Setup teh default LazyViewport instance without an associated element.
    // This will create a IntersectionObserver that uses the browser's viewport as the
    // observer root. This way, an instance of LazyViewport is always available for
    // injection into other directives and services
    {
      provide: LazyModule,
      useFactory: function () {
        var viewport = new LazyViewport();
        viewport.setup(/* No root. */);
        return (viewport);
      }
    }
  ]
})
export class LazyModule { }
