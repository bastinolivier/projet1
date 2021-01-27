import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Composant1Component } from './Home/composant1.component';
import { Composant2Component } from './Login/composant2.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './Login/signin/signin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Login/_helpers/jwt.interceptor';
import { fakeBackendProvider } from './Login/_helpers/fake-backend';
import { ErrorInterceptor } from './Login/_helpers/error.interceptor';
import { UserPageComponent } from './UserAuth/user-page.component';
import { AlertComponent } from './Login/login/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    Composant2Component,
    LoginComponent,
    SigninComponent,
    UserPageComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
    fakeBackendProvider
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
