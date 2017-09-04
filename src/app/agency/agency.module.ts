import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgencyComponent } from './agency.component';

import { AgencyRoutingModule } from './routing/agency-routing.module';

@NgModule({
  declarations: [AgencyComponent],
  imports: [BrowserModule, AgencyRoutingModule]
})
export class AgencyModule { }