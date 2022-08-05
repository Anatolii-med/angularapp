import { AuthService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testcomponent',
    templateUrl: './testcomponent.component.html',
    styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent implements OnInit {
    constructor(public authService: AuthService) {}

    index = this.authService.currentUser.email.indexOf('@');
    user = this.authService.currentUser.email.slice(0, this.index);

    ngOnInit(): void {}
}
