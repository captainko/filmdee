import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public previousPath: string;
  public currentPath: string;
  public back = 0;
  path: string

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private activate: ActivatedRoute,
  ) {
    this.ooo();
  }

  ooo(): void{
    const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
    this.currentPath = this.router.url.slice(1).split(urlDelimitators)[0];
    this.router.events
      .pipe(
        filter((value) => value instanceof NavigationStart)
      ).subscribe((event: NavigationStart) => {

        this.previousPath = this.currentPath;
        console.log(this.previousPath);
        return this.previousPath;
        
        this.currentPath = event.url.slice(1).split(urlDelimitators)[0];

        // this.currentUrl = event.url;
        if(this.previousPath == 'search' && this.previousPath == this.currentPath) {
          this.back--;
        }else {
          this.back = -1;
        }
      })
      console.log(this.previousPath);
  }

  get(){
    console.log(this.ooo());
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['home']);        
      } else {
        console.log('ER');
      }
    });
  }

  backo() {
    // const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
    // this.currentPath = this.router.url.slice(1).split(urlDelimitators)[0];
    // // console.log(this.currentPath);

    // this.router.events.pipe(
    //     filter((value) => value instanceof NavigationStart)
    //   ).subscribe((event: NavigationStart) => {

    //     this.previousPath = this.currentPath;
    //     console.log(this.previousPath);

    //     this.currentPath = event.url.slice(1).split(urlDelimitators)[0];
    //   })
    // console.log(a);

    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        this.router.navigate(['home']);
      } else {
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  login2() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
