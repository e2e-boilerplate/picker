import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'platforms',
    loadChildren: () =>
      import('./platforms/platforms.module').then((m) => m.PlatformsModule),
  },
  {
    path: 'land',
    loadChildren: () =>
      import('./land/land.module').then((m) => m.LandModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
