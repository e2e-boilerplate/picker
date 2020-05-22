import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformsComponent } from './platforms.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlatformsComponent],
  imports: [CommonModule, MaterialModule, PlatformsRoutingModule, SharedModule],
})
export class PlatformsModule {}
