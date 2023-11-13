import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'poke-list',
    loadComponent: () =>
      import('./poke-list/poke-list.component').then(
        (mod) => mod.PokeListComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page404/page404.component').then((mod) => mod.Page404Component),
  },
];
