import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatListModule, MatSnackBarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {UnauthorizedSnackBarComponent} from './common/components';
import {NotFoundComponent} from './common/components/errors/404/not-found.component';

import {AuthGuardService, MyAccountService} from './service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UnauthorizedSnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [
    AuthGuardService,
    MyAccountService
  ],
  entryComponents: [UnauthorizedSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
