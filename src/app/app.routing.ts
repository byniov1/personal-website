import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

// TODO 404 page
// TODO lazy loading

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  { path: 'blog', component: BlogComponent },
];
