import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsModule } from '@picker/constants';
import { InterceptorService } from './interceptor/interceptor.service';
import { LandService } from './land/land.service';

@NgModule({
  imports: [CommonModule, ConstantsModule],
  providers: [
    LandService,
    InterceptorService,
  ],
})
export class CoreDataModule {}
