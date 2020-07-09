import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproachRoutingModule } from './approach-routing.module';
import { ApproachComponent } from './approach.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ApproachComponent],
  imports: [
    CommonModule,
    ApproachRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ApproachModule { }
