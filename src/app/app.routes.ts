import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./shared/layouts/home/home.component').then(p => p.HomeComponent)
  },
  {
    path: '',
    title: 'Detail',
    loadComponent: () => import('./shared/layouts/detail/detail.component').then(p => p.DetailComponent)
  },
];
