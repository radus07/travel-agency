import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { WebComponent } from './web/web.component';
import { AgencyComponent } from './agency/agency.component';
import { AdminComponent } from './admin/html/view/home/admin.component';
import { NotFoundComponent } from './assets/html/view/404/404.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', component: WebComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
