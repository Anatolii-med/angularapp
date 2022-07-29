import { CrudService } from './../../Services/crud.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';
import * as firebase from 'firebase/analytics';
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

    userName: string = '';
    userEmail: string = '';
    userPassword: string = '';
    userId: string = '';
    message: string = '';

    constructor(public crudservice: CrudService, private share: ShareService) {
        // this.share.onClick.subscribe((resp) => (this.registerForm = resp));
    }
    CreateUser() {
        let Record: any = {};
        Record['name'] = this.userName;
        Record['email'] = this.userEmail;
        Record['password'] = this.userPassword;
        this.crudservice
            .createNewUser(Record)
            .then((res) => {
                const analytics = firebase.getAnalytics();
                firebase.logEvent(analytics, 'register-event', {
                    firsttimeuser: true,
                    useremail: `${this.userEmail}`,
                    username: `${this.userName}`,
                });
                this.userName = '';
                this.userEmail = '';
                this.userPassword = '';
                this.message = 'User saved';
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // onSubmit(registerData: NgForm) {
    //     this.share.doClick(registerData);
    // }
}
