import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminComponent} from './components/admin.component';
import {FooterComponent, HeaderComponent} from './components/fragments/fragments.component';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import {AccessDeniedComponent} from '../common/components/errors/401/access-denied.component';

import {MyAccountService} from '../service/myAccount.service';
import {AuthGuardService} from '../service/auth_guard/auth-guard.service';

import {AdminRoutingModule} from './routing/admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyAccountService,
    AuthGuardService
  ]
})
export class AdminModule {
}
