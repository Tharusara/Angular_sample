import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CrudModule } from './Crud2/crud.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { MessageComponent } from './message/message.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CrudComponent } from './Crud2/crud/crud.component';
import { GridJoggingComponent } from './Crud2/grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './Crud2/add-or-update-jogging/add-or-update-jogging.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import {  OktaAuthModule,  OktaCallbackComponent, OKTA_CONFIG} from '@okta/okta-angular';
// import { AuthInterceptor } from './auth.interceptor';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const firebaseConfig = {
  apiKey: 'AIzaSyCUd3imXg9jOl4-18RTvnTsoOIkWnqScuc',
  authDomain: 'ng7chatapp.firebaseapp.com',
  databaseURL: 'https://ng7chatapp.firebaseio.com',
  projectId: 'ng7chatapp',
  storageBucket: 'ng7chatapp.appspot.com',
  messagingSenderId: '52228801309',
  appId: '1:52228801309:web:0913485aed61101efa57f4',
  measurementId: 'G-KZRVQZ792X'
};
// const config = {
//   issuer: 'https://ng7Auth/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oa94r54r6oAeRWyz4x6',
//   scope: 'openid profile email'
// };

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SideBarComponent,
    PostsComponent,
    DetailsComponent,
    MessageComponent,
    CrudComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    CrudModule,
    // OktaAuthModule,
    // OktaCallbackComponent,
    // DecimalPipe,
    // DatePipe,
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule, // storage
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // {provide: OKTA_CONFIG, useValue: config},
    // DataService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
