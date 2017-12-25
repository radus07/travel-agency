import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MESSAGES} from '../../app.component';

import {ContactComponent, HomeComponent, SignInComponent, WebComponent} from '../components';

import {AccountResolver, AuthGuardService} from '../../service';

const routes: Routes = [
  {
    path: '', component: WebComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, data: {title: MESSAGES.Web.titles.homePage}, resolve: {account: AccountResolver}},
      {
        path: 'sign_in',
        component: SignInComponent,
        data: {title: MESSAGES.Web.titles.signInPage, logged: false},
        canActivate: [AuthGuardService]
      },
      {path: 'contact', component: ContactComponent, data: {title: 'Contact Us'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {
}
