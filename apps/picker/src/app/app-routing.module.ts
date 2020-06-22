import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'land',
    loadChildren: () => import('./land/land.module').then((m) => m.LandModule),
  },
  {
    path: 'framework',
    loadChildren: () => import('./framework/framework.module').then((m) => m.FrameworkModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
