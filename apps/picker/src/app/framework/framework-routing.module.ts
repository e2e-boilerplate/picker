import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameworkComponent } from './framework.component';

const routes: Routes = [{ path: '', component: FrameworkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkRoutingModule { }
