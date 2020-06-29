import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as BoilerActions from './boiler.actions';
import { VersionService } from '@picker/services';

@Injectable()
export class BoilerEffects {
  constructor(private versionService: VersionService, private actions$: Actions) {}

  @Effect()
  loadVersion$ = this.actions$.pipe(
    ofType(BoilerActions.loadVersion),
    switchMap(() => {
      return this.versionService.getAll().pipe(
        map( item => BoilerActions.version({item})),
        catchError(() => EMPTY)
      )
    })
  )
}
