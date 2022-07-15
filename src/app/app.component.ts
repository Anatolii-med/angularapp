import { Component, Output, Input } from '@angular/core';
import { ShareService } from './share.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angularapp';
    currentItem = 'Television';
}
