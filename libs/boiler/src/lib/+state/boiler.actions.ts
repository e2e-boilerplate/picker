import { createAction, props } from '@ngrx/store';

export const update = createAction('[Boiler] update', props<{ item: object }>());
export const reset = createAction('[Boiler] reset state');
export const path = createAction('[Boiler] get path');
export const header = createAction('[Boiler] get path');
export const loadVersion = createAction('[Version: API] load version');
export const version = createAction('[Version: API] update version', props<{ item: any }>());
