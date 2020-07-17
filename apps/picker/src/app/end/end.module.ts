import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndRoutingModule } from './end-routing.module';
import { EndComponent } from './end.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EndComponent],
  imports: [
    CommonModule,
    EndRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class EndModule { }
