import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
export class ShareService {
    private data: object = {};
    onClick: EventEmitter<object> = new EventEmitter();

    public doClick(registerData: NgForm) {
        this.data = registerData.form.value;
        this.onClick.emit(this.data);
        console.log('ShareService ~ doClick ~ this.data', this.data);
    }
    onLoad() {
        return this.data;
    }
}
