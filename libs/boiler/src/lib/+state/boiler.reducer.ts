import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BoilerActions from './boiler.actions';
import { BoilerEntity } from './boiler.models';

export const BOILER_FEATURE_KEY = 'boiler';

export interface State extends EntityState<BoilerEntity> {
  data: BoilerEntity;
}

export interface BoilerPartialState {
  readonly [BOILER_FEATURE_KEY]: State;
}

export const boilerAdapter: EntityAdapter<BoilerEntity> = createEntityAdapter<BoilerEntity>();

export const initialState: State = boilerAdapter.getInitialState({
  data: {
    platform: null,
    framework: null,
  }
});

const boilerReducer = createReducer(
  initialState,
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
