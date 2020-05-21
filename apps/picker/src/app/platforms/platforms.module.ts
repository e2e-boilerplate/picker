import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformsComponent } from './platforms.component';
import { MaterialModule } from '@picker/material';


@NgModule({
  declarations: [PlatformsComponent],
  imports: [
    CommonModule,
    PlatformsRoutingModule,
    MaterialModule
  ]
})
export class PlatformsModule { }
