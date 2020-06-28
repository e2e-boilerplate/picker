import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOILER_FEATURE_KEY,
  State,
  BoilerPartialState,
} from './boiler.reducer';

export const getBoilerState = createFeatureSelector<BoilerPartialState, State>(BOILER_FEATURE_KEY);

export const getPath = createSelector(getBoilerState, (state: State) => state.path);
export const getHeader = createSelector(getBoilerState, (state: State) => state.header);
