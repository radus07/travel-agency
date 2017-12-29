import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './common/components/errors/404/not-found.component';

import {AuthGuardService, MyAccountService} from './service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [
    AuthGuardService,
    MyAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
