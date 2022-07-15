import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
export class ShareService {
    private data: object = {};
    onClick: EventEmitter<object> = new EventEmitter();
    registerForm: any = {
        email: '',
        login: '',
        password: '',
    };
    userData = this.registerForm;
    public doClick(registerData: NgForm) {
        console.log(registerData.form.value);
        this.userData = registerData.form.value;
        console.log(this.userData);
        this.onClick.emit(this.data);
    }
}
