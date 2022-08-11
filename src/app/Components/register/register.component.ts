import { Component, Output, Input } from '@angular/core';
import * as firebase from 'firebase/analytics';

import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(public authService: AuthService) {}

    message = 'Hi, this is message from parent component';

    authRegister(data: any) {
        this.authService.SignUp(data.email, data.password);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'register-event', {
            firsttimeuser: true,
            userRegisterEmail: `${data.email}`,
        });
        console.log('registered: ', data.email, data.password);
    }
}
