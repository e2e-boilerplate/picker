import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsService } from './platforms/platforms.service';
import { InterceptorService } from './interceptor/interceptor.service';
import { ConstantsModule } from '@picker/constants';

@NgModule({
  imports: [CommonModule, ConstantsModule],
  providers: [PlatformsService, InterceptorService]
})
export class CoreDataModule {}
