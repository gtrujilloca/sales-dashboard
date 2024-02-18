import { Routes } from '@angular/router';
import { LoggedGuard, UnloggedGuard } from '@/app/core/guards';
import { BaseAuthComponent, BaseLoggedComponent } from '@/app/presentation/layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BaseLoggedComponent,
    // canActivate: [LoggedGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./presentation/features/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: 'auth',
    component: BaseAuthComponent,
    // canActivate: [UnloggedGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./presentation/features/auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'signup',
        loadComponent: () => import('./presentation/features/auth/signup/signup.component').then((m) => m.SignupComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
