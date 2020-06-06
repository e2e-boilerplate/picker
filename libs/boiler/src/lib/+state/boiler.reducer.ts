import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BoilerActions from './boiler.actions';
import { BoilerEntity } from './boiler.models';

export const BOILER_FEATURE_KEY = 'boiler';

export interface State extends EntityState<BoilerEntity> {
  selectedId?: string | number; // which Boiler record has been selected
  loaded: boolean; // has the Boiler list been loaded
  error?: string | null; // last none error (if any)
  data: BoilerEntity;
}

export interface BoilerPartialState {
  readonly [BOILER_FEATURE_KEY]: State;
}

export const boilerAdapter: EntityAdapter<BoilerEntity> = createEntityAdapter<BoilerEntity>();

export const initialState: State = boilerAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  data: {
    platform: null
  }
});

const boilerReducer = createReducer(
  initialState,
  on(BoilerActions.loadBoiler, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(BoilerActions.loadBoilerSuccess, (state, { boiler }) =>
    boilerAdapter.addAll(boiler, { ...state, loaded: true })
  ),
  on(BoilerActions.loadBoilerFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(BoilerActions.boiled, (state) => ({
    ...state
  })),
  on(BoilerActions.update, (state, { item }) => ({
      ...state,
      data: { ...state.data, ...item }
    })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return boilerReducer(state, action);
}
