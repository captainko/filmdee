
// Import the core angular services.
import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
// Import the application components and services.
import { LazyViewport } from "./lazy-viewport";
@Directive({
  selector: '[lazyViewport]',
  inputs: ["offset: lazyViewportOffset"],
  providers: [
    {
      provide: LazyViewport,
      useClass: LazyViewport
    }
  ]
})
export class LazyViewportDirective implements OnInit, OnDestroy {

  public offset: number;

  private elementRef: ElementRef;
  private lazyViewport: LazyViewport;

  // Initialize the lazy-viewport directive.
  constructor(
    elementRef: ElementRef,
    lazyViewport: LazyViewport
  ) {

    this.elementRef = elementRef;
    this.lazyViewport = lazyViewport;
    this.offset = 0;
  }

  // ---
  //  PUPLIC METHODS
  // ---

  // get Called when the directive is destroy
  public ngOnDestroy(): void {
    this.lazyViewport.teardown();
  }

  // Get called once after the inputs have been bound for
  // the first time.

  public ngOnInit(): void {
    if (isNaN(+this.offset)) {
      console.warn(new Error(`[lazyViewportOffset] must be a number. Currently defined as [${this.offset}].`))
      this.offset = 0;
    }
    this.lazyViewport.setup(this.elementRef.nativeElement, +this.offset);
  }

}
