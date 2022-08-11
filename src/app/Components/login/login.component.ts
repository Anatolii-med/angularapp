import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/analytics';
import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(public authService: AuthService) {}

    currentItem = 'this string from perent component';

    authLogin(email: string, pass: string) {
        this.authService.SignIn(email, pass);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'login-event', {
            userLoginEmail: `${email}`,
        });
        console.log('login');
    }

    ngOnInit(): void {}
}
