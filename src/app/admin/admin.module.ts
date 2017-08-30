import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './html/view/home/admin.component';
import { HeaderComponent, FooterComponent } from './html/fragment/fragments.component';

import { AdminRoutingModule } from './routing/admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AdminRoutingModule]
})
export class AdminModule { }