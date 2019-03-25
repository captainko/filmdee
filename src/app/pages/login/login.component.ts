import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { PathService } from '@services/path/path.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private pathService: PathService
  ) {
  }


  ngOnInit() {
    this.moveBackWhenLogged();
  }

  private moveBackWhenLogged(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl(this.pathService.getPreviousPath());
      }
    });
  }

  public loginWith(type: string) {
    let provider = null;
    switch (type) {
      case 'facebook':
      provider = new auth.FacebookAuthProvider();
      break;
      case 'google':
      provider = new auth.GoogleAuthProvider();
      break;
    }
    this.afAuth.auth.signInWithPopup(provider);
  }
}
