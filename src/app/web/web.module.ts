import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebComponent } from './web.component';

import { WebRoutingModule } from './routing/web-routing.module';

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [BrowserModule, WebRoutingModule]
})
export class WebModule { }