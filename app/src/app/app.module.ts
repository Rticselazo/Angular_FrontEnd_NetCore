import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
//import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { DialoClienteComponent } from './cliente/dialog/dialogcliente.component';
import { DialogDeleteComponent } from './common/delete/dialogdelete.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialoClienteComponent,
    DialogDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  //  MatIconModule,
   MatSnackBarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
