import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-refresh-form',
    templateUrl: './refresh-form.component.html',
    styleUrls: ['./refresh-form.component.scss'],
})
export class RefreshFormComponent implements OnInit {
    @Output() refreshData = new EventEmitter<string>();
    constructor() {}

    onFormSubmit(email: string) {
        this.refreshData.emit(email);
    }

    ngOnInit(): void {}
}
