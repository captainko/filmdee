import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

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

export class GetSlideListService {

    userCollection: AngularFirestoreCollection<LFilm>;
    lists: Observable<LFilm[]>;
    userDoc: AngularFirestoreDocument<LFilm>;

    constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, ) {
        // this.users = this.afs.collection('users').valueChanges();



        this.userCollection = this.afs.collection('fake', ref => ref.where('sex', '==', 'Nữ'));

        this.lists = this.userCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as LFilm;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }

    getUser() {
        this.lists = this.afs.collection('film-slide').snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as LFilm;
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.lists;
    }
}
