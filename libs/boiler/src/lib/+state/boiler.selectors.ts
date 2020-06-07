import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOILER_FEATURE_KEY,
  State,
  BoilerPartialState,
  boilerAdapter,
} from './boiler.reducer';

export const getBoilerState = createFeatureSelector<BoilerPartialState, State>(BOILER_FEATURE_KEY);

const { selectAll, selectEntities } = boilerAdapter.getSelectors();

export const getAllBoiler = createSelector(getBoilerState, (state: State) => selectAll(state));

export const getBoilerEntities = createSelector(getBoilerState, (state: State) => selectEntities(state));

export const getBoiled = createSelector(getBoilerState, (state: State) => state.data);
