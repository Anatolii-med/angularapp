import { AuthService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Component({
    selector: 'app-testcomponent',
    templateUrl: './testcomponent.component.html',
    styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent implements OnInit {
    constructor(
        public authService: AuthService,
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth
    ) {}

    usersArray: any;

    currentUser: any;
    ngOnInit(): void {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                let index = user.email?.indexOf('@');
                this.currentUser = user.email?.slice(0, index);
            }
        });
    }
}
