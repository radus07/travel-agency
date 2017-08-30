import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../html/view/home/admin.component';

const routes: Routes = [
  { path: 'admin', redirectTo: 'admin/home', pathMatch: 'full' },
  { path: 'admin/home', component: AdminComponent },
  // {path: 'user/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
