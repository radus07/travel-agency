import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import {AdminComponent, FooterComponent, HomeComponent, SideNavComponent, ToolbarComponent, UserComponent} from './components';

import {AdminRoutingModule} from './routing/admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    ToolbarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: []
})
export class AdminModule {
}
