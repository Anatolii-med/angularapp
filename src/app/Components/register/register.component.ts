import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  register: any = {
    email: 'input email here',
    login: 'input login here',
    password: '',
  };
  ngOnInit(): void {}
}
