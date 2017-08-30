import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './assets/html/fragment/fragments.component';

import { AppRoutingModule } from './app-routing.module';
import { WebModule } from './web/web.module';
import { AgencyModule } from './agency/agency.module';
import { AdminModule } from './admin/admin.module';
import { NotFoundComponent } from './assets/html/view/404/404.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebModule,
    AgencyModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
