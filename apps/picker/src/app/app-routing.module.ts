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
    path: 'approach',
    loadChildren: () => import('./approach/approach.module').then((m) => m.ApproachModule)
  },
  {
    path: 'framework',
    loadChildren: () => import('./framework/framework.module').then((m) => m.FrameworkModule),
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then((m) => m.JavascriptModule),
  },
  {
    path: 'module',
    loadChildren: () => import('./module/module.module').then((m) => m.ModuleModule),
  },
  {
    path: 'bundler',
    loadChildren: () => import('./bundler/bundler.module').then((m) => m.BundlerModule),
  },
  {
    path: 'runner',
    loadChildren: () => import('./runner/runner.module').then((m) => m.RunnerModule),
  },
  {
    path: 'assertion',
    loadChildren: () => import('./assertion/assertion.module').then((m) => m.AssertionModule),
  },
  {
    path: 'end',
    loadChildren: () => import('./end/end.module').then((m) => m.EndModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
