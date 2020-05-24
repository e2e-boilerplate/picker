import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { FrameworksComponent } from './frameworks.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FrameworksComponent],
  imports: [CommonModule, FrameworksRoutingModule, MaterialModule, SharedModule],
  exports: [FrameworksComponent]
})
export class FrameworksModule {}
