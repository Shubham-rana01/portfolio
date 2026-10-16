import { Routes } from '@angular/router';
import { PROFILE } from './core/portfolio.data';

export const routes: Routes = [
  {
    path: '',
    title: `${PROFILE.name} — ${PROFILE.title}`,
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
