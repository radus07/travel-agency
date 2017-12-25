import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './components/home/home.component';
import {AgencyComponent} from './components/agency.component';

import {AuthGuardService} from '../service/auth_guard/auth-guard.service';
import {MyAccountService} from '../service/myAccount.service';

import {AgencyRoutingModule} from './routing/agency-routing.module';

@NgModule({
  declarations: [
    AgencyComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule
  ],
  providers: [
    MyAccountService,
    AuthGuardService
  ]
})
export class AgencyModule {
}
