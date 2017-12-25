import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MESSAGES} from '../../app.component';

import {AdminComponent} from '../components/admin.component';
import {HomeComponent} from '../components/home/home.component';
import {UserComponent} from '../components/user/user.component';

import {AuthGuardService} from '../../service/auth_guard/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AuthGuardService], data: {logged: true, roles: ['ADMN']},
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, data: {title: MESSAGES.Admin.titles.homePage}},
      {path: 'users', component: UserComponent, data: {title: MESSAGES.Admin.titles.usersPage}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
