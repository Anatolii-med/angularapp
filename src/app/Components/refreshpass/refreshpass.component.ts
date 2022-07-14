import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshpass',
  templateUrl: './refreshpass.component.html',
  styleUrls: ['./refreshpass.component.scss'],
})
export class RefreshpassComponent implements OnInit {
  constructor() {}
  refreshData: any = {
    login: '',
    password: '',
  };

  onSubmit(data: NgForm) {
    console.log(data.form.value);
  }
  ngOnInit(): void {}
}
