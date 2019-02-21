import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  logo = 'assets/images/logo-filmdee.png';

  isFixed = true;
  currentFixed: any;

  @HostListener('window:scroll', ['$event'])

  scrollHandler(event) { // hieu ung day navbar

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      this.currentFixed = { fixednav: this.isFixed }
    } else
      this.currentFixed = { fixednav: !this.isFixed }
  }

  constructor() { }

  ngOnInit() {
  }

}
