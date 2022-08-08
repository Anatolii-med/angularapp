import { AuthService } from './../../Services/auth.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RefreshGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/']);
            return false;
        }
        // this.router.navigate(['test']);
        return true;
    }
}
