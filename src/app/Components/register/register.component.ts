import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  registerForm: any = {
    email: '',
    login: '',
    password: '',
  };

  @Output() userData = this.registerForm;

  onSubmit(registerData: NgForm) {
    console.log(registerData.form.value);
    this.userData = registerData.form.value;
    console.log(this.userData);
  }

  ngOnInit(): void {}
}
