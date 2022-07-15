import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareService } from '../../share.service';

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
    constructor(private share: ShareService) {
        this.share.onClick.subscribe((resp) => (this.registerForm = resp));
    }

    onSubmit(registerData: NgForm) {
        this.share.doClick(registerData);
    }
}
