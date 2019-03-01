
export interface LazyTarget {
  element: Element,
  updateVisibility: (isVisible: boolean, raito: number) => void
}

export class LazyViewport {
  private observer: IntersectionObserver;
  private targets: Map<Element, LazyTarget>;

  // Initialize the lazy-viewport service
  constructor() {

    this.observer = null;

    // The IntersectionObserver watches Elements. However, when an element visibility
    // changes, we have to alert an Angular Directive instance. As such, we're going
    // to keep a map of Elements-to-Directives. This way, when our observer callback
    // is invoked, we'll be able to extract the appropriate Directive from the
    // Element-based observer entries collection.

    this.targets = new Map();


  }

  // ---
  // PUPLIC METHODS.
  // ---

  // Add the given LazyTarget implementation to the collection of objects being
  // tracked by the IntersectionObserver.

  public addTarget(target: LazyTarget): void {

    // if We dont actually have an observer (lacking browser support), then we're
    // going to punt on the feature now and just immediately tell the target
    // that it is visible on the page.
    if (this.observer) {
      this.targets.set(target.element, target);
      this.observer.observe(target.element);
    } else {
      target.updateVisibility(true, 1.0);
    }

  }

  public setup(element: Element = null, offset: number = 0) : void {
    // While the IntersectionObserver is supported in the mordern browsers, it will
    // never be added to IE and is not in my version of Safari
    // (at the time of this post). As such, we'll only use it if it's available.
    // And,if it's not, we'll fall-back to non-lazy behaviours
    if (! ('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      this.handleIntersectionUpdate,
      {
        root: element,
        rootMargin: `${offset}px`
      }
    )
  }

  public removeTarget(target: LazyTarget) : void {


    // If the intersectionObserver isn't supported, we never started tracking the
    // given target in the first place.
    if (this.observer) {

      this.targets.delete(target.element);
      this.observer.unobserve(target.element);
    }
  }

  // Tear down this service instance
  public teardown(): void {
    if(this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    this.targets.clear();
    this.targets = null;
  }





  // ---
  //  PRIVATE METHODS
  // ---

  // I handle changes in the visibility for elements being tracked by Intersection Obser
  // CAUTION: using fat-arrow binding for method.
  private handleIntersectionUpdate = (entries: IntersectionObserverEntry[]) : void => {
    for (let entry of entries) {
      let LazyTarget = this.targets.get(entry.target);
      (LazyTarget) && LazyTarget.updateVisibility(
        entry.isIntersecting,
        entry.intersectionRatio
      )
    }

  }

}
