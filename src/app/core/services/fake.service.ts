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

export class FakeService {

    userCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;
    userDoc: AngularFirestoreDocument<User>;

    constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, ) {
        // this.users = this.afs.collection('users').valueChanges();



        this.userCollection = this.afs.collection('fake', ref => ref.where('sex', '==', 'Nữ'));

        this.users = this.userCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as User;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }

    getUser(collection: any, field: any, value: any) {
        this.users = this.afs.collection(collection, ref => ref.where(field, '==', value).where('age.year', '==', '1999')).snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as User;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.users;
    }

    addUser(user: User) {
        this.userCollection.add(user);
    }

    deleteUser(user: User) {
        this.userDoc = this.afs.doc(`fake/${user.id}`);
        this.userDoc.delete();
    }

    updateUser(user: User) {
        this.userDoc = this.afs.doc(`fake/${user.id}`);
        this.userDoc.update(user);
    }

    setUser(user: User, id: string) {
        this.userDoc = this.afs.doc(`fake/${id}`);
        this.userDoc.set(user);
    }
}
