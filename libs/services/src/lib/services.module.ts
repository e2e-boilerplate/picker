import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService } from './version/version.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    VersionService
  ]
})
export class ServicesModule {}
