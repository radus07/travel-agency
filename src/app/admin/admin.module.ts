import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminComponent, FooterComponent, HomeComponent, ToolbarComponent, UserComponent} from './components';

import {AdminRoutingModule} from './routing/admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AdminModule {
}
