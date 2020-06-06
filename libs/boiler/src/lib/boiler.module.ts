import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBoiler from './+state/boiler.reducer';
import { BoilerEffects } from './+state/boiler.effects';
import { BoilerFacade } from './+state/boiler.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBoiler.BOILER_FEATURE_KEY, fromBoiler.reducer),
    EffectsModule.forFeature([BoilerEffects]),
  ],
  providers: [BoilerFacade]
})
export class BoilerModule {}
