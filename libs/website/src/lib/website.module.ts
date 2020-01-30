import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: WebsiteComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: HomeComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'contact',
            component: ContactComponent
          },
          {
            path: '**',
            component: NotFoundComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    WebsiteComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class WebsiteModule {}
