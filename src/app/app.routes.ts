import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Countries',
    loadComponent: () => import('./shared/layouts/home/home.component').then(p => p.HomeComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./shared/layouts/detail/detail.component').then(p => p.DetailComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
