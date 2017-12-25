import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MESSAGES} from './app.component';

import {NotFoundComponent} from './common/components/errors/404/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'web', pathMatch: 'full'},
  {path: 'web', loadChildren: './web/web.module#WebModule'},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  {path: 'agency', loadChildren: 'app/agency/agency.module#AgencyModule'},
  {path: '**', component: NotFoundComponent, data: {title: MESSAGES.Web.notFound}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
