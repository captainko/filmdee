import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

// Import the application and services.

import { LazyTarget, LazyViewport } from "./lazy-viewport";

@Directive({
  selector: '[lazySrc]',
  inputs: [
    "src: lazySrc",
    "visibleClass: lazySrcVisible"
  ]
})
export class LazySrcDirective implements OnInit, OnDestroy, LazyTarget {
  public element: Element;
  public src: string;
  public visibleClass: string;

  private lazyViewport: LazyViewport;
  private renderer: Renderer2
  constructor(
    elementRef: ElementRef,
    lazyViewport: LazyViewport,
    render: Renderer2
  ) {

    this.element = elementRef.nativeElement;
    this.lazyViewport = lazyViewport;
    this.renderer = render;

    this.src = "";
    this.visibleClass = "";
  }

  // ---
  // PUBLIC MEHTODS
  // ---

  // I get called once when the directive is being destroyed.

  public ngOnDestroy(): void {

    // If we haven't detached from the LazyViewprot, do so now
    (this.lazyViewport) && this.lazyViewport.removeTarget(this);
  }

  public ngOnInit(): void {
    // Attached this directive teh LazyViewPort so that we can alerted to changes
    // in this element's visibility on the page.
    this.lazyViewport.addTarget(this);

  }


  // get called by the LazyViewport service when the element associated with this
  // directive has its visibility changed.
  public updateVisibility(isVisible: boolean, ratio: number ): void{

    // When this target starts being tracked by the viewport, the initial visibility
    // will be reported, even if it is not visible. As such, let's ignore the first
    // visibility update

    if (!isVisible) {
      return;
    }
    // Now that the element is visible, load the underlying SRC value. And, since we
        // no longer need to worry about loading, we can detach from the LazyViewport.
        this.lazyViewport.removeTarget( this );
        this.lazyViewport = null;
        this.renderer.setProperty( this.element, "src", this.src );

        // If an active class has been provided, add it to the element.
        ( this.visibleClass ) && this.renderer.addClass( this.element, this.visibleClass );
  }

}
