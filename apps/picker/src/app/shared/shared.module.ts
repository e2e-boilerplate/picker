import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { MaterialModule } from '@picker/material';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardComponent],
})
export class SharedModule {}
