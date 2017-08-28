import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './html/fragment/fragments.component';
import { HomeComponent } from './html/view/home/home.component';
import { UserListComponent } from './html/view/user/user-list.component';
import { UserDetailsComponent } from './html/view/user/user-detail.component';
import { UserService } from './service/user.service';

import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
