import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandRoutingModule } from './land-routing.module';
import { LandComponent } from './land.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LandComponent],
  imports: [
    CommonModule,
    LandRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class LandModule { }
