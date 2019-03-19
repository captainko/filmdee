import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private previousPath: string;
  private currentPath: string;
  constructor(
    private router: Router
  ) {
    this.previousPath = this.router.url;
    console.log(this.previousPath);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart)
      )
      .subscribe((event: NavigationStart) => {
        this.previousPath = this.currentPath;
        this.currentPath = event.url;
      });
  }
  public getPreviousPath() {
    return this.previousPath;
  }
  public getCurrentPath() {
    return this.currentPath;
  }
}
