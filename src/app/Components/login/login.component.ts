import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';
import { CrudService } from './../../Services/crud.service';
import * as firebase from 'firebase/analytics';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private share: ShareService, public crudservice: CrudService) {
        this.share.onClick.subscribe((response) => (this.userData = response));
    }
    loginForm: any = {
        email: '',
        password: '',
    };

    userData: any = {
        email: '',
        login: '',
        password: '',
    };
    userLoadName = '';
    message = '';
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
        const fn = this.crudservice.getUser(this.loginForm);
    }

    onLoginSuccess(name: string) {
        console.log('LoginComponent ~ onLoginSuccess ~ name', name);

        // console.log(
        //     'LoginComponent ~ onLoginSuccess ~ this.userLoadName',
        //     this.userLoadName
        // );
        // if (this.userLoadName) {
        //     this.message = `welcome, ${this.userLoadName}`;
        // }
    }
    ngOnInit(): void {
        // this.userData = this.share.onLoad();
        // this.userLoadName = this.crudservice.currentUserName();
        // console.log(
        //     'LoginComponent ~ ngOnInit ~ this.userLoadName',
        //     this.userLoadName
        // );
    }
}
