import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundlerComponent } from './bundler.component';


const routes: Routes = [{ path: '', component: BundlerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BundlerRoutingModule { }
