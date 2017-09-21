import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WebModule } from './web/web.module';
import { AgencyModule } from './agency/agency.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgencyModule,
    AdminModule,
    WebModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
