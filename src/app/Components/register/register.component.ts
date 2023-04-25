import { CrudService } from './../../Services/crud.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';

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
                this.userName = '';
                this.userEmail = '';
                this.userPassword = '';
                console.log(res);
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
