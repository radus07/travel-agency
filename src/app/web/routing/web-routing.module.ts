import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComponent } from '../web.component';
import { NotFoundComponent } from '../../assets/html/view/404/404.component'; 

import { MESSAGES } from '../../app.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', component: WebComponent, data: {title: MESSAGES.Web.web} },
  { path: '**', component: NotFoundComponent, data: {title: MESSAGES.Web.notFound} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
