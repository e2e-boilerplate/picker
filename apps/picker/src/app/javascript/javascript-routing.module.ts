import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptComponent } from './javascript.component';

const routes: Routes = [
  { path: 'javascript/:id', component: JavascriptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
