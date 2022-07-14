import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm: any = {
    login: 'input login here',
    password: '',
  };

  onSubmit(loginData: NgForm) {
    console.log(loginData.form.value);
  }

  ngOnInit(): void {}
}
