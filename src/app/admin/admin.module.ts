import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './component/admin.component';
import { HeaderComponent, FooterComponent } from './component/fragment/fragments.component';
import { HomeComponent } from './component/home/home.component';

import { AccessDeniedComponent } from '../common/component/error/401/access-denied.component';
import { ProtectedDirective } from '../common/directive/protected.directive';

import { AdminRoutingModule } from './routing/admin-routing.module';

import { UserService } from '../service/user.service';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccessDeniedComponent,
    ProtectedDirective
  ],
  imports: [BrowserModule, AdminRoutingModule],
  providers: [UserService]
})
export class AdminModule { }