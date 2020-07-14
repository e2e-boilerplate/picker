import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundlerRoutingModule } from './bundler-routing.module';
import { BundlerComponent } from './bundler.component';
import { MaterialModule } from '@picker/material';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BundlerComponent],
  imports: [
    CommonModule,
    BundlerRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class BundlerModule { }
