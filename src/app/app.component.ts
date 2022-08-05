import { Component, AfterViewInit, Output, Input } from '@angular/core';

import * as firebase from 'firebase/analytics';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

interface Item {
    name: string;
    email: string;
    password: string;
    id: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    constructor(public authService: AuthService) {}

    currentUser: any = JSON.parse(localStorage.getItem('user')!);

    authLogOut() {
        const user = JSON.parse(localStorage.getItem('user')!);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'loginOut', {
            userLogoutEmail: `${user.providerData[0].email}`,
        });
        this.authService.SignOut();
    }

    title = 'angularapp';

    userName: string = '';
    userEmail: string = '';
    userPassword: string = '';
    userId: string = '';

    ngAfterViewInit() {}
}
