import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebComponent } from './component/web.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { SignInComponent } from './component/sign_in/sign_in.component';
import { NotFoundComponent } from '../common/component/error/404/not-found.component';

import { WebRoutingModule } from './routing/web-routing.module';

import { AuthenticationService } from '../service/authentication.service';
import { MyAccountService } from '../service/myAccount.service';
import { RoleService } from '../service/role.service';
import { AuthGuardService } from '../service/auth_guard/auth-guard.service';
import { AuthGuardLoggedInService } from '../service/auth_guard/auth-guard.loggedIn.service';
import { AuthGuardLoggedOutService } from '../service/auth_guard/auth-guard.loggedOut.service';
import { AuthGuardAdminService } from '../service/auth_guard/auth-guard.admin.service';
import { AuthGuardTravelAgentService } from '../service/auth_guard/auth-guard.travelAgent.service';
import { AuthGuardGuestService } from '../service/auth_guard/auth-guard.guest.service';

@NgModule({
  declarations: [
    WebComponent,
    NotFoundComponent,
    HomeComponent,
    SignInComponent,
    ContactComponent
  ],
  imports: [BrowserModule, WebRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    AuthenticationService, 
    MyAccountService, 
    RoleService, 
    AuthGuardService,
    AuthGuardLoggedInService, 
    AuthGuardLoggedOutService,
    AuthGuardAdminService,
    AuthGuardTravelAgentService,
    AuthGuardGuestService
  ]
})
export class WebModule { }