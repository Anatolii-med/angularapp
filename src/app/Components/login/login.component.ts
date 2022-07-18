import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../share.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private share: ShareService) {
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

    // onSubmit(loginData: NgForm) {
    //     console.log(loginData.form.value);
    // }
    onSubmit(loginData: NgForm) {
        console.log(this.userData);
        if (this.loginForm.email === this.userData.email) {
            console.log('first');
            if (this.loginForm.password === this.userData.password) {
                console.log('Congrats, login success');
                return;
            }
        }
        console.log('Wrong pass or email');
    }

    ngOnInit(): void {
        this.userData = this.share.onLoad();
    }
}
