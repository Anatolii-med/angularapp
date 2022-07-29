import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../Services/crud.service';

@Component({
    selector: 'app-home',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(public crudservice: CrudService) {}
    user: any;
    array!: [
        {
            data: {
                name: any;
                email: any;
                password: any;
            };
        }
    ];
    ngOnInit(): any {
        this.crudservice.getAll().subscribe((res) => {
            this.user = res.map((e) => {
                return {
                    id: e.payload.doc.id,
                    data: e.payload.doc.data(),
                };
            });
            console.log(this.user);
            this.array = this.user;
        });
    }
}
