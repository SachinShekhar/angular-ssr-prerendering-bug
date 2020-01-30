import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('@angular-ssr-prerendering-bug/admin').then(m => m.AdminModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@angular-ssr-prerendering-bug/dashboard').then(
        m => m.DashboardModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('@angular-ssr-prerendering-bug/website').then(m => m.WebsiteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
