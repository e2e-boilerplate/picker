import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsModule } from '@picker/constants';
import { FrameworksService } from './frameworks/frameworks.service';
import { JavascriptService } from './javascript/javascript.service';
import { PlatformsService } from './platforms/platforms.service';
import { InterceptorService } from './interceptor/interceptor.service';

@NgModule({
  imports: [CommonModule, ConstantsModule],
  providers: [
    FrameworksService,
    JavascriptService,
    InterceptorService,
    PlatformsService,
  ],
})
export class CoreDataModule {}
