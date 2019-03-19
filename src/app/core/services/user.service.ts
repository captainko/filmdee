import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export interface User {
  id?: string;
  name?: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth,) {
    // this.users = this.afs.collection('users').valueChanges();

    

    this.userCollection = this.afs.collection('users');

    this.users = this.userCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getUser() {
    return this.users;
  }

  addUser(user: User){
    this.userCollection.add(user);
  }

  deleteUser(user: User){
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User){
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

  setUser(user: User, id: string){
    this.userDoc = this.afs.doc(`users/${id}`);
    this.userDoc.set(user);
  }
}
