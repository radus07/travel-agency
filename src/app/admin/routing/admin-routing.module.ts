import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../html/view/home/admin.component';

import { MESSAGES } from '../../app.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin/home', pathMatch: 'full' },
  { path: 'admin/home', component: AdminComponent, data: {title: MESSAGES.Admin.adminHome} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
