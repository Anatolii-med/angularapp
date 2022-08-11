import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
    @Output() formData = new EventEmitter<object>();

    constructor() {}

    onFormSubmit(email: string, pwd: string) {
        this.formData.emit({ email: email, pass: pwd });
    }

    ngOnInit(): void {}
}
