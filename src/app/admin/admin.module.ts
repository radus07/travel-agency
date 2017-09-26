import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './component/admin.component';
import { HeaderComponent, FooterComponent } from './component/fragment/fragments.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';

import { AccessDeniedComponent } from '../common/component/error/401/access-denied.component';
import { ProtectedDirective } from '../common/directive/protected.directive';

import { AdminRoutingModule } from './routing/admin-routing.module';

import { MyAccountService } from '../service/myAccount.service';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AccessDeniedComponent,
    ProtectedDirective
  ],
  imports: [BrowserModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [MyAccountService]
})
export class AdminModule { }