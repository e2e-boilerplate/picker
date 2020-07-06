import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkRoutingModule } from './framework-routing.module';
import { FrameworkComponent } from './framework.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FrameworkComponent],
  imports: [
    CommonModule,
    FrameworkRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class FrameworkModule { }
