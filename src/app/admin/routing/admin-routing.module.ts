import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../component/admin.component';
import { HomeComponent } from '../component/home/home.component';

import { MESSAGES } from '../../app.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: {title: MESSAGES.Admin.adminHome} }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
