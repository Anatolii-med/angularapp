import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../Services/share.service';
import * as firebase from 'firebase/analytics';

@Component({
    selector: 'app-refreshpass',
    templateUrl: './refreshpass.component.html',
    styleUrls: ['./refreshpass.component.scss'],
})
export class RefreshpassComponent implements OnInit {
    constructor(private share: ShareService) {
        this.share.onClick.subscribe((response) => (this.userData = response));
    }
    refreshData: any = {
        email: '',
    };

    userData: any = {};
    onSubmit(data: NgForm) {
        console.log('refreshPass');
        const analytics = firebase.getAnalytics();
        firebase.logEvent(analytics, 'refreshPass', {
            useremail: `${this.refreshData.email}`,
        });
        return;
    }

    ngOnInit(): void {
        this.userData = this.share.onLoad();
    }
}
