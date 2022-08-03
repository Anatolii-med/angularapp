import { Component, Output } from '@angular/core';
import * as firebase from 'firebase/analytics';

import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(public authService: AuthService) {}

    authRegister(email: string, pwd: string) {
        this.authService.SignUp(email, pwd);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'register-event', {
            firsttimeuser: true,
            userRegisterEmail: `${email}`,
        });
        console.log('registered: ', email, pwd);
    }
}
