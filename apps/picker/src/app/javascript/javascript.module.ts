import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [JavascriptComponent],
})
export class JavascriptModule {}
