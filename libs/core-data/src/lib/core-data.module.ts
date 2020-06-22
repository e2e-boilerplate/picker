import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsModule } from '@picker/constants';
import { InterceptorService } from './interceptor/interceptor.service';
import { VersionService } from './version/version.service';

@NgModule({
  imports: [CommonModule, ConstantsModule],
  providers: [
    InterceptorService,
    VersionService,
  ],
})
export class CoreDataModule {}
