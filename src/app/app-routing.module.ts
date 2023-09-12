import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: NopagefoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
