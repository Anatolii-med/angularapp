import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './../../Services/auth.service';
import { CrudService } from './../../Services/crud.service';

@Component({
    selector: 'app-home',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(
        public crudservice: CrudService,
        public authService: AuthService,
        public afAuth: AngularFireAuth
    ) {}
    user: any;
    array: {
        id: string;
        data: {
            name: string;
            email: string;
            password: string;
        };
    }[] = [];
    ngOnInit(): any {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
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
        });

        if (this.authService.isLoggedIn) {
            console.log('hi');
        }
    }
}
