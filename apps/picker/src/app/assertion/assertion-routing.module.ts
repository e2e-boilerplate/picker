import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssertionComponent } from './assertion.component';


const routes: Routes = [{ path: '', component: AssertionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionRoutingModule { }
