import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/analytics';
import { AuthService } from '../../Services/auth.service';
@Component({
    selector: 'app-refreshpass',
    templateUrl: './refreshpass.component.html',
    styleUrls: ['./refreshpass.component.scss'],
})
export class RefreshpassComponent implements OnInit {
    constructor(public authService: AuthService) {}

    authOnPassForgot(email: string) {
        this.authService.ForgotPassword(email);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'refreshPass', {
            userEmail: `${email}`,
        });
    }

    ngOnInit(): void {}
}
