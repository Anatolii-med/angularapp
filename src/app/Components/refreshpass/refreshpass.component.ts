import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshpass',
  templateUrl: './refreshpass.component.html',
  styleUrls: ['./refreshpass.component.scss'],
})
export class RefreshpassComponent implements OnInit {
  constructor() {}
  refresh: any = {
    login: 'input login here',
    password: '',
  };
  ngOnInit(): void {}
}
