import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOILER_FEATURE_KEY,
  State,
  BoilerPartialState,
  boilerAdapter,
} from './boiler.reducer';

// Lookup the 'Boiler' feature state managed by NgRx
export const getBoilerState = createFeatureSelector<BoilerPartialState, State>(
  BOILER_FEATURE_KEY
);

const { selectAll, selectEntities } = boilerAdapter.getSelectors();

export const getBoilerLoaded = createSelector(
  getBoilerState,
  (state: State) => state.loaded
);

export const getBoilerError = createSelector(
  getBoilerState,
  (state: State) => state.error
);

export const getAllBoiler = createSelector(getBoilerState, (state: State) =>
  selectAll(state)
);

export const getBoilerEntities = createSelector(
  getBoilerState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBoilerState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBoilerEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getBoiled = createSelector(getBoilerState, (state: State) => state.data);
