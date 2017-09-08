import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WebComponent } from './assets/html/view/home/web.component';
import { NotFoundComponent } from './assets/html/view/error/404/404.component';

import { WebRoutingModule } from './routing/web-routing.module';

import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';

@NgModule({
  declarations: [
    WebComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, WebRoutingModule, FormsModule],
  providers: [UserService, RoleService]
})
export class WebModule { }