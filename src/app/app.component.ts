import { Component, AfterViewInit, Output, Input } from '@angular/core';

import * as firebase from 'firebase/analytics';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
    name: string;
    email: string;
    password: string;
    id: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    title = 'angularapp';

    userName: string = '';
    userEmail: string = '';
    userPassword: string = '';
    userId: string = '';

    ngAfterViewInit() {}
}
