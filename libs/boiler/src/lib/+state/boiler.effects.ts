import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromBoiler from './boiler.reducer';
import * as BoilerActions from './boiler.actions';

@Injectable()
export class BoilerEffects {
  loadBoiler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoilerActions.loadBoiler),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return BoilerActions.loadBoilerSuccess({ boiler: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return BoilerActions.loadBoilerFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
