import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../Services/share.service';
import { CrudService } from './../../Services/crud.service';

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
    userFromData: any = {
        email: '',
        login: '',
        password: '',
    };

    // onSubmit(loginData: NgForm) {
    //     console.log(loginData.form.value);
    // }
    onSubmit(loginData: NgForm) {
        if (this.loginForm.email === this.userData.email) {
            console.log('first');
            if (this.loginForm.password === this.userData.password) {
                console.log('Congrats, login success');
                return;
            }
        }
        // console.log('Wrong pass or email');

        this.crudservice.getUser(this.loginForm);
    }

    ngOnInit(): void {
        this.userData = this.share.onLoad();
    }
}
