import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';
import { CrudService } from './../../Services/crud.service';
import * as firebase from 'firebase/analytics';
import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        public authService: AuthService,
        private share: ShareService,
        public crudservice: CrudService
    ) {}

    onSubmit(loginData: NgForm) {
        // if (this.loginForm.email === this.userData.email) {
        //     console.log('first');
        //     if (this.loginForm.password === this.userData.password) {
        //         console.log('Congrats, login success');
        //         const analytics = firebase.getAnalytics();
        //         firebase.logEvent(analytics, 'login-event', {
        //             useremail: `${this.userData.login}`,
        //         });
        //         this.userLoadName = 'Welcome, {{this.userData.login}}';
        //         return;
        //     }
        // }
    }

    authLogin(name: string, email: string) {
        this.authService.SignIn(name, email);
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'login-event', {
            userLoginEmail: `${email}`,
        });
    }

    ngOnInit(): void {}
}
