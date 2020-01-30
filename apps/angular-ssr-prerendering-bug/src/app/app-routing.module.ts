import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';

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
    matcher: (url: UrlSegment[]) =>
      url.length > 0 && url[0].path.endsWith('.data')
        ? {
            consumed: [url[0]], // Passing the first segment to keep it from hijacking internal router of the lazy-loaded module
            posParams: {
              dataId: new UrlSegment(
                url[0].path.substr(0, url[0].path.length - 5),
                url[0].parameters
              )
            }
          }
        : null,
    loadChildren: () =>
      import('@angular-ssr-prerendering-bug/artificial-intelligence').then(
        m => m.ArtificialIntelligenceModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('@angular-ssr-prerendering-bug/website').then(m => m.WebsiteModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
