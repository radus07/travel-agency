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

import {WebComponent} from './components/web.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {SignInComponent} from './components/sign_in/sign_in.component';

import {AuthenticationService} from '../service/authentication.service';
import {MyAccountService} from '../service/myAccount.service';
import {RoleService} from '../service/role.service';
import {AuthGuardService} from '../service/auth_guard/auth-guard.service';
import {AccountResolver} from '../service/resolver/accountResolver';

import {WebRoutingModule} from './routing/web-routing.module';

@NgModule({
  declarations: [
    WebComponent,
    HomeComponent,
    SignInComponent,
    ContactComponent
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
