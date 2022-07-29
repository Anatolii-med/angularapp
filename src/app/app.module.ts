import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { RefreshpassComponent } from './Components/refreshpass/refreshpass.component';
import { HomeComponent } from './Components/homepage/homepage.component';
import { TestcomponentComponent } from './Components/testcomponent/testcomponent.component';
import { ShareService } from './Services/share.service';

import { CrudService } from './Services/crud.service';

const firebaseConfig = {
    apiKey: 'AIzaSyClD21a4Yb_O2e__nm-sqI_LsdocEieF54',
    authDomain: 'my-test-project-450cf.firebaseapp.com',
    projectId: 'my-test-project-450cf',
    storageBucket: 'my-test-project-450cf.appspot.com',
    messagingSenderId: '781922575005',
    appId: '1:781922575005:web:25d346cef985b1b201ea74',
    measurementId: 'G-T2GBSCH2D1',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        RefreshpassComponent,
        HomeComponent,
        TestcomponentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
    ],
    providers: [ShareService, CrudService],
    bootstrap: [AppComponent],
})
export class AppModule {}
