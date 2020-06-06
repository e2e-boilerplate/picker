import { createAction, props } from '@ngrx/store';
import { BoilerEntity } from './boiler.models';

export const loadBoiler = createAction('[Boiler] Load Boiler');

export const loadBoilerSuccess = createAction(
  '[Boiler] Load Boiler Success',
  props<{ boiler: BoilerEntity[] }>()
);

export const loadBoilerFailure = createAction(
  '[Boiler] Load Boiler Failure',
  props<{ error: any }>()
);

export const boiled = createAction('[Boiler] get boiled');

export const update = createAction('[Boiler] update', props<{ item: object }>());
