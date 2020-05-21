import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsService } from './platforms/platforms.service';

@NgModule({
  imports: [CommonModule],
  providers: [PlatformsService]
})
export class CoreDataModule {}
