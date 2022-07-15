import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login ',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm: any = {
    login: '',
    password: '',
  };

  onSubmit(loginData: NgForm) {
    console.log(loginData.form.value);
  }

  @Input() item = '';

  ngOnInit(): void {}
}
