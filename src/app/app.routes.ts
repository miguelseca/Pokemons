import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'poke-detail',
    loadComponent: () =>
      import('./components/poke-detail/poke-detail.component').then(
        (mod) => mod.PokeDetailComponent
      ),
  },
  {
    path: 'poke-list',
    loadComponent: () =>
      import('./components/poke-list/poke-list.component').then(
        (mod) => mod.PokeListComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page404/page404.component').then((mod) => mod.Page404Component),
  },
];
