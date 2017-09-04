import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgencyComponent } from '../agency.component';

import { MESSAGES } from '../../app.component';

const routes: Routes = [
  { path: 'agency', redirectTo: 'agency/home', pathMatch: 'full' },
  { path: 'agency/home', component: AgencyComponent, data: {title: MESSAGES.Agency.agencyHome} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
