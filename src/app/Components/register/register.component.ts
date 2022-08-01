import { CrudService } from './../../Services/crud.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';
import * as firebase from 'firebase/analytics';

import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    registerForm: any = {
        email: '',
        login: '',
        password: '',
    };

    constructor(
        public authService: AuthService,
        public crudservice: CrudService,
        private share: ShareService
    ) {}

    authRegister(email: string, pwd: string) {
        this.authService.SignUp(email, pwd);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'register-event', {
            firsttimeuser: true,
            userEmail: `${email}`,
        });
        console.log('registered: ', email, pwd);
    }
}
