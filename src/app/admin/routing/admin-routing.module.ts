import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../component/admin.component';
import { HomeComponent } from '../component/home/home.component';
import { UserComponent } from '../component/user/user.component';

import { MESSAGES } from '../../app.component';
import { AuthGuardLoggedInService } from '../../service/auth_guard/auth-guard.loggedIn.service';
import { AuthGuardAdminService } from '../../service/auth_guard/auth-guard.admin.service';

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: {title: MESSAGES.Admin.titles.homePage}, canActivate: [AuthGuardLoggedInService, AuthGuardAdminService] },
      { path: 'users', component: UserComponent, data: {title: MESSAGES.Admin.titles.usersPage} }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
