import { collection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
    providedIn: 'root',
})
export class CrudService {
    usersRef!: AngularFireList<any>;
    userRef!: AngularFireObject<any>;
    loginUser!: any;
    loginMessage!: string;

    constructor(public fireservices: AngularFirestore) {}

    createNewUser(Record: any) {
        return this.fireservices.collection('user').add(Record);
    }

    getAll() {
        return this.fireservices.collection('user').snapshotChanges();
    }

    getUser(id: any) {
        this.loginUser = this.fireservices
            .collection('user', (ref) => ref.where('email', '==', id.email))
            .get()
            .subscribe((data) =>
                data.forEach((el) => {
                    this.loginUser = el.data();
                    if (this.loginUser.password === id.password) {
                        console.log(`${this.loginUser.name}! welcome`);
                        return;
                    }
                    console.log('wrong pass or email');
                })
            );
    }
}
