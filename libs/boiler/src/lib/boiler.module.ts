import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBoiler from './+state/boiler.reducer';
import { BoilerFacade } from './+state/boiler.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBoiler.BOILER_FEATURE_KEY, fromBoiler.reducer),
  ],
  providers: [BoilerFacade]
})
export class BoilerModule {}
