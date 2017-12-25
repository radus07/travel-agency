import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgencyComponent, HomeComponent} from './components';

import {AuthGuardService, MyAccountService} from '../service';

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
