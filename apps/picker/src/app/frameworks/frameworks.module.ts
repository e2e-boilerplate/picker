import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { FrameworksComponent } from './frameworks.component';
import { MaterialModule } from '@picker/material';

@NgModule({
  declarations: [FrameworksComponent],
  imports: [CommonModule, FrameworksRoutingModule, MaterialModule],
  exports: [FrameworksComponent]
})
export class FrameworksModule {}
