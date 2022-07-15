import { Component, OnInit, Input } from '@angular/core';
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
        login: '',
        password: '',
    };

    userData = {};

    // onSubmit(loginData: NgForm) {
    //     console.log(loginData.form.value);
    // }
    onSubmit(loginData: NgForm) {
        console.log(this.userData);
    }

    item = this.loginForm;

    ngOnInit(): void {}
}
