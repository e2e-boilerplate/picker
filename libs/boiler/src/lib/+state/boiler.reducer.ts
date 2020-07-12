import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BoilerActions from './boiler.actions';
import { IBoilerEntity, IVersionEntity } from './boiler.models';

export const BOILER_FEATURE_KEY = 'boiler';

export interface State extends EntityState<IBoilerEntity> {
  data: IBoilerEntity;
  version: IVersionEntity
  header: string,
  path: string,
}

export interface BoilerPartialState {
  readonly [BOILER_FEATURE_KEY]: State;
}

export const boilerAdapter: EntityAdapter<IBoilerEntity> = createEntityAdapter<IBoilerEntity>();

export const initialState: State = boilerAdapter.getInitialState({
  data: {
    land: null,
    approach: null,
    framework: null,
    javascript: null
  },
  version: {},
  header: '',
  path: 'land',
});

const boilerReducer = createReducer(
  initialState,
  on(BoilerActions.version, (state, {item}) => ({
      ...state,
      version: {...state.version, ...item}
  })),
  on(BoilerActions.update, (state, { item }) => ({
      ...state,
      data: { ...state.data, ...item }
    })
  ),
  on(BoilerActions.path, (state) => {
    const value = (Object.values(state.data)).filter(data => data);
    const path = 'land/' + (value.join('/'));
    return {
      ...state,
      path
    };
  }),
  on(BoilerActions.header, (state) => {
    const value = (Object.values(state.data)).filter(data => data);
    const header = value.join(' ');
    return {
      ...state,
      header
    };
  }),
  on(BoilerActions.reset, (state) => ({
    ...initialState
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return boilerReducer(state, action);
}
