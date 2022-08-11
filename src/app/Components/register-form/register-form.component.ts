import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
    @Output() formData = new EventEmitter<object>();
    data: any = {
        email: '',
        password: '',
    };
    constructor() {}

    onFormSubmit(email: string, pwd: string) {}

    onSubmit(data: NgForm) {
        console.log(this.data);
        this.formData.emit(this.data);
    }

    ngOnInit(): void {}
}
