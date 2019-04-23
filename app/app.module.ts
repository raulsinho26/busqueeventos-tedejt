import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ListaComponent } from '../pages/lista/lista.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from '../pages/login/login.component';
import { IndexComponent } from '../pages/index/index.component';

var config = {
    apiKey: "AIzaSyD2xV4PWs28Wn9JeGXtwzMp41aD-GOEEBk",
    authDomain: "busqueeventos-fd0dd.firebaseapp.com",
    databaseURL: "https://busqueeventos-fd0dd.firebaseio.com",
    projectId: "busqueeventos-fd0dd",
    storageBucket: "busqueeventos-fd0dd.appspot.com",
    messagingSenderId: "507590869614"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    IndexComponent,
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    IndexComponent,
    ListaComponent,
    CadastroComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
