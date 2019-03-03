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
  @HostListener('window:scroll', ['$event'])

  onScroll(event) {

    let timeout = setTimeout(() => {
      if (window.scrollY > 55) {
        this.isFixed = true;
      }else{
        this.isFixed = false;
      }
      clearTimeout(timeout);
    }, 0);


  }

  constructor() {
  }

  showNav() {
    this.checkNav = !this.checkNav;
  }

  ngOnInit() {
  }

}
