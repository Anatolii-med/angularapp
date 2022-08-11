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

    text = 'this string from perent component';

    authLogin(data: any) {
        this.authService.SignIn(data.email, data.password);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'login-event', {
            userLoginEmail: `${data.email}`,
        });
        console.log('login', data.email, data.password);
    }

    ngOnInit(): void {}
}
