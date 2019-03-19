import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '@core/auth.service';

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
  login: boolean = false;
  name: string = 'XXXXXXX';
  avatar: string = '';
  load = false;

  @ViewChild("list") list: ElementRef;
  // @ViewChild("menul") menul: ElementRef;
  @HostListener('window:scroll', ['$event'])

  onScroll(event) {

    this.checkNav = false;

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
      const menu = document.querySelector('.menu');
      if (window.scrollY < this.scrollPos) {
        nav.classList.add("is-visible");
        nav.classList.remove("is-hidden");
        menu.classList.remove('fix-menu');
      }
      else if(window.scrollY > 55) {
        nav.classList.add('is-hidden');
        menu.classList.add('fix-menu');
        nav.classList.remove('is-visible');
      }
      this.scrollPos = window.scrollY;
    }
  }

  constructor(private authService: AuthService) {
    // var a = parseBoolean(localStorage.login)
    // console.log(a);

  }
  ngOnInit() {
    this.checkIsLogged();
  }

  private checkIsLogged(): void {
    console.log(localStorage.login);
    this.authService.isLogged().subscribe((auth) => {
      if (auth) {
        console.log(auth);
        localStorage.login = true;
        this.login = true;
        this.name = auth.displayName;
        this.avatar = auth.photoURL;
      } else {
        localStorage.login = false;
        this.login = false;
        this.name = '';
      }
    });

    if (localStorage.login == 'true') {
      this.login = true;
      console.log('Login');
    } else {
      this.login = false;
      console.log('Logout');
    }
  }

  public logout(): void {
    this.authService.signOut();
  }

  public showNav(): void {
    this.checkNav = !this.checkNav;
    this.list.nativeElement.focus();
    // alert('ER');
    // if (this.checkNav) {
    //   alert('ER');
    //   this.list.nativeElement.focus();
    // }
  }

  showNav1() {
    this.checkNav = false;
  }

  public load_user(): void {
    this.load = true;
    console.log('load');
  }

  close_menu() {
    alert('DG');
  }


}
