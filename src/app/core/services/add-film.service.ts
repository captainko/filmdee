import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Film {
    id?: string;
    name?: string;
    quality?: string;
    launch?: {day: number, month: number, year: number};
}

export interface LFilm {
    image?: string;
    link?: string;
    now_ep?: string;
    total_ep?: string;
    id?: string;
    name_vi?: string;
    name?: string;
    quality?: string;
    view?: number;
    time_update?: { day: number, month: number, year: number };
    caterogy?: any;
  }

@Injectable({
    providedIn: 'root'
})

export class AddFilmService {

    userCollection: AngularFirestoreCollection<Film>;
    users: Observable<Film[]>;
    films: Observable<Film[]>;
    userDoc: AngularFirestoreDocument<Film>;

    constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, ) {
        // this.users = this.afs.collection('users').valueChanges();



        this.userCollection = this.afs.collection('film');

        this.users = this.userCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Film;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }

    getUser() {
        this.films = this.userCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Film;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.films;
    }

    addFilm(film: LFilm, id: string) {
        this.userDoc = this.afs.doc(`film-slide/${id}`);
        this.userDoc.set(film);
    }

    deleteUser(user: Film) {
        this.userDoc = this.afs.doc(`users/${user.id}`);
        this.userDoc.delete();
    }

    updateUser(user: Film) {
        this.userDoc = this.afs.doc(`users/${user.id}`);
        this.userDoc.update(user);
    }

    setUser(user: Film, id: string) {
        this.userDoc = this.afs.doc(`users/${id}`);
        this.userDoc.set(user);
    }
}
