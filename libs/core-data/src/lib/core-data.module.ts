import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsService } from './platforms/platforms.service';
import { InterceptorService } from './interceptor/interceptor.service';

@NgModule({
  imports: [CommonModule],
  providers: [PlatformsService, InterceptorService]
})
export class CoreDataModule {}
