import { TestcomponentComponent } from './Components/testcomponent/testcomponent.component';
import { HomeComponent } from './Components/homepage/homepage.component';
import { RefreshpassComponent } from './Components/refreshpass/refreshpass.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'refreshpass', component: RefreshpassComponent },
      { path: 'test', component: TestcomponentComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
