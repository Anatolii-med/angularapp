import { RegisterGuard } from './Components/register/register.guard';
import { RefreshGuard } from './Components/refreshpass/refresh.guard';
import { TestcomponentComponent } from './Components/testcomponent/testcomponent.component';
import { HomeComponent } from './Components/homepage/homepage.component';
import { RefreshpassComponent } from './Components/refreshpass/refreshpass.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGuard } from './Components/testcomponent/test.guard';
import { LoginGuard } from './Components/login/login.guard';
const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [RegisterGuard],
    },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {
        path: 'refreshpass',
        component: RefreshpassComponent,
        canActivate: [RefreshGuard],
    },
    {
        path: 'test',
        component: TestcomponentComponent,
        canActivate: [TestGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule {}
