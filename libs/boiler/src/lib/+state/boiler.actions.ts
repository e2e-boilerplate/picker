import { createAction, props } from '@ngrx/store';

export const boiled = createAction('[Boiler] get boiled');

export const update = createAction('[Boiler] update', props<{ item: object }>());
