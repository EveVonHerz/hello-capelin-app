import {provideRouter, RouterConfig} from '@angular/router';
import {loginRoutes} from './login/login.routes';
import {lessonRoutes} from "./lesson/lesson.routes";

import {HomeComponent} from "./home/home.component";

export const routes:RouterConfig = [
  {path: '', component: HomeComponent},
  ...loginRoutes,
  ...lessonRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
