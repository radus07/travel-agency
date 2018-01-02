import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import {ContactComponent, HomeComponent, SignInComponent, WebComponent} from './components';

import {AccountResolver, AuthenticationService, RoleService} from '../service';

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
    MatListModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    AuthenticationService,
    RoleService,
    AccountResolver
  ]
})
export class WebModule {
}
