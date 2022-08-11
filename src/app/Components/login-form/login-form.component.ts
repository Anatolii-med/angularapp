import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    @Input() parentString = '';

    @Output() formEvent = new EventEmitter<object>();

    data: any = {
        email: '',
        password: '',
    };

    constructor() {}

    ngOnInit(): void {}

    onSubmit(data: NgForm) {
        this.formEvent.emit(this.data);
    }
}
