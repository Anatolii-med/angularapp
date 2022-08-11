import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    @Input() parentString = '';

    @Output() formEvent = new EventEmitter<object>();
    constructor() {}

    ngOnInit(): void {}

    onFormSubmit(email: string, pwd: string) {
        this.formEvent.emit({ email: email, pass: pwd });
    }
}
