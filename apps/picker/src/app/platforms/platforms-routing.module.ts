import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformsComponent } from './platforms.component';

const routes: Routes = [{ path: '', component: PlatformsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformsRoutingModule { }
