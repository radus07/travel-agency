import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

import {ContactComponent, HomeComponent, SignInComponent, ToolbarComponent, WebComponent} from './components';

import {AccountResolver, AuthenticationService, AuthGuardService, MyAccountService, RoleService} from '../service';

import {WebRoutingModule} from './routing/web-routing.module';

@NgModule({
  declarations: [
    WebComponent,
    HomeComponent,
    SignInComponent,
    ContactComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AuthenticationService,
    MyAccountService,
    RoleService,
    AuthGuardService,
    AccountResolver
  ]
})
export class WebModule {
}
