import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerRoutingModule } from './runner-routing.module';
import { RunnerComponent } from './runner.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RunnerComponent],
  imports: [
    CommonModule,
    RunnerRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class RunnerModule { }
