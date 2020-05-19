import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { MaterialModule } from '@picker/material';

@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MaterialModule
  ]
})
export class PlatformModule { }
