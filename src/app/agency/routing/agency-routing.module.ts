import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MESSAGES} from '../../app.component';

import {AgencyComponent} from '../components/agency.component';
import {HomeComponent} from '../components/home/home.component';

import {AuthGuardService} from '../../service/auth_guard/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: AgencyComponent, canActivate: [AuthGuardService], data: {logged: true, roles: ['']},
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, data: {title: MESSAGES.Agency.titles.homePage}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule {
}
