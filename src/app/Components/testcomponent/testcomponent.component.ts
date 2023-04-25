import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  email: string = '';
  phone: string = '';

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
