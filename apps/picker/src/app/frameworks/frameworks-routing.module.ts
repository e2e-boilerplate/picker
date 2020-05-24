import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameworksComponent } from './frameworks.component';

const routes: Routes = [{ path: 'frameworks/:id', component: FrameworksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameworksRoutingModule {}
