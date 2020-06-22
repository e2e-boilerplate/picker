import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { MaterialModule } from '@picker/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    ToolbarComponent,
  ],
})
export class SharedModule {}
