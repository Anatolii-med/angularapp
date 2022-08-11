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

    authRegister(obj: any) {
        this.authService.SignUp(obj.email, obj.pass);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'register-event', {
            firsttimeuser: true,
            userRegisterEmail: `${obj.email}`,
        });
        console.log('registered: ', obj.email, obj.pass);
    }
}
