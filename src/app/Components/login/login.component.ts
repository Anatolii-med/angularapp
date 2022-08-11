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

    authLogin(obj: any) {
        this.authService.SignIn(obj.email, obj.pass);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'login-event', {
            userLoginEmail: `${obj.email}`,
        });
        console.log('login');
    }

    ngOnInit(): void {}
}
