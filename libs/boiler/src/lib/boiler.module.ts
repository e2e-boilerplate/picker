import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBoiler from './+state/boiler.reducer';
import { BoilerFacade } from './+state/boiler.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BoilerEffects } from './+state/boiler.effects';
import { ServicesModule } from '@picker/services';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forFeature(fromBoiler.BOILER_FEATURE_KEY, fromBoiler.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forFeature([BoilerEffects]),
  ],
  providers: [BoilerFacade]
})
export class BoilerModule {}
