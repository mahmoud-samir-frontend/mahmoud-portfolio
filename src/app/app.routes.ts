import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Mahmoud Samir — Angular Frontend Developer',
    loadComponent: () =>
      import('./features/home/home.component').then((component) => component.HomeComponent),
  },
  { path: 'projects/fuinco-admin-dashboard', redirectTo: 'projects/novadash', pathMatch: 'full' },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/project-detail.component').then(
        (component) => component.ProjectDetailComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
