import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  logo = 'assets/images/logo-filmdee.png';

  isFixed = false;
  currentFixed: any;
  checkNav: boolean = false;
  scrollPos = 0;
  @HostListener('window:scroll', ['$event'])

  onScroll(event) {

    let timeout = setTimeout(() => {
      if (window.scrollY > 55) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      clearTimeout(timeout);
    }, 0);
    if (window.innerWidth < 992) {
      const nav = document.querySelector('.navbar');
      if (window.scrollY < this.scrollPos) {
        nav.classList.add("is-visible");
        nav.classList.remove("is-hidden");
      }
      else {
        nav.classList.add('is-hidden');
        nav.classList.remove('is-visible');
      }
      this.scrollPos = window.scrollY;
    }
  }

  constructor() {
  }

  showNav() {
    this.checkNav = !this.checkNav;
  }

  ngOnInit() {
  }

}
