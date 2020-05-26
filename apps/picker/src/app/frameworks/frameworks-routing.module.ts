import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { FrameworksComponent } from './frameworks.component';

const routes: Routes = [{ path: ':id/frameworks', component: FrameworksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameworksRoutingModule {}
