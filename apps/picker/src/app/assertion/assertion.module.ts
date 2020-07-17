import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionRoutingModule } from './assertion-routing.module';
import { AssertionComponent } from './assertion.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AssertionComponent],
  imports: [
    CommonModule,
    AssertionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AssertionModule { }
