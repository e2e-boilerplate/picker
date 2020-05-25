import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptComponent } from './javascript.component';

const routes: Routes = [
  { path: ':id/javascript', component: JavascriptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
