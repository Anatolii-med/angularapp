import { Component, OnInit } from '@angular/core';
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

  onSubmit(registerData: NgForm) {
    console.log(registerData.form.value);
  }
  ngOnInit(): void {}
}
