import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { UserService } from '@services/user.service';

export interface User {
  id?: string;
  name?: string;
  token?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    name: '',
    token: ''
  }

  public previousPath: string;
  public currentPath: string;
  public back = 0;
  path: string

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private activate: ActivatedRoute,
    private userService: UserService,
  ) {
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
    this.afAuth.authState.subscribe(userlogin => {
      if (userlogin) {
        this.user.name = userlogin.displayName;
        this.user.token = userlogin.uid;
        if(this.user.name != '' && this.user.token != ''){
          console.log('UP');
          
          this.userService.setUser(this.user, this.user.token);
          this.user.name = '';
          this.user.token = '';
        }
        this.router.navigate(['home']);  
      } else {
        // console.log('ER');
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

    // this.afAuth.authState.subscribe((auth) => {
    //   if (auth) {
        
    //     // this.router.navigate(['home']);
    //   } else {
    //   }
    // });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  login2() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
