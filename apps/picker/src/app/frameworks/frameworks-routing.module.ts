import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameworksComponent } from './frameworks.component';

const routes: Routes = [
  { path: ':id/frameworks', component: FrameworksComponent },
  { path: ':id/no_frameworks', component: FrameworksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameworksRoutingModule {}
