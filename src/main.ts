import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from '@angular/router';
import { appConfig } from './app/app.routing';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
