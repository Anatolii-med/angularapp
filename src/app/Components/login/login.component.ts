import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../share.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private share: ShareService) {
        this.share.onClick.subscribe((response) => (this.loginForm = response));
    }
    loginForm: any = {
        login: '',
        password: '',
    };

    onSubmit(loginData: NgForm) {
        console.log(loginData.form.value);
    }

    item = this.loginForm;

    ngOnInit(): void {}
}
