import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
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
    this.afAuth.authState.subscribe(user => {
      if (user) {
       this.router.navigateByUrl(this.pathService.getPreviousPath());
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

    this.afAuth.authState.subscribe((auth: any) => {
      if (auth) {
        this.router.navigate(['home']);
      } else {
        // console.log('ER');
      }
    });
  }

  public login(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public login2(): void {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
