import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
    private userService: UserService,
  ) {
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
        this.router.navigate(['home'])
      } else {
        // console.log('ER');
      }
    });
  }

  logingoo() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginfb() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
