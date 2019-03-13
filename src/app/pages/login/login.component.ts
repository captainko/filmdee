import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
>>>>>>> 73e2390852e03f7171b592cd20668681c540dfe3

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public afAuth: AngularFireAuth) {
  }
>>>>>>> 73e2390852e03f7171b592cd20668681c540dfe3

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  login2() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

>>>>>>> 73e2390852e03f7171b592cd20668681c540dfe3
}
