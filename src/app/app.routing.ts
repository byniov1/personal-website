import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

// TODO lazy loading
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideClientHydration()],
};
