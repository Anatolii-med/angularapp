import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';

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
        if (this.refreshData.email === this.userData.email) {
            console.log('refreshPass');
            return;
        }
        console.log('no user in database');
    }

    ngOnInit(): void {
        this.userData = this.share.onLoad();
    }
}
