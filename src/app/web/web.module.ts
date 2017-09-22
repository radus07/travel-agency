import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebComponent } from './component/home/web.component';
import { NotFoundComponent } from '../common/component/error/404/not-found.component';

import { WebRoutingModule } from './routing/web-routing.module';

import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';

@NgModule({
  declarations: [
    WebComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, WebRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthenticationService, UserService, RoleService]
})
export class WebModule { }