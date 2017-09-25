import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComponent } from '../component/web.component';
import { HomeComponent } from '../component/home/home.component';
import { SignInComponent} from '../component/sign_in/sign_in.component';
import { ContactComponent } from '../component/contact/contact.component';
import { NotFoundComponent } from '../../common/component/error/404/not-found.component'; 

import { MESSAGES } from '../../app.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', component: WebComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: {title: MESSAGES.Admin.titles.homePage} },
      { path: 'sign_in', component: SignInComponent, data: {title: 'Sign In'} },
      { path: 'contact', component: ContactComponent, data: {title: 'Contact Us'} }
    ] },
  { path: '**', component: NotFoundComponent, data: {title: MESSAGES.Web.notFound} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
