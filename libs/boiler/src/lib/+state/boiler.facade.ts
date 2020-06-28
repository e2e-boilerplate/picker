import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHeader, getPath } from './boiler.selectors';
import * as BoilerActions from './boiler.actions';

@Injectable()
export class BoilerFacade {
  path$ = this.store.select(getPath);
  header$ = this.store.select(getHeader);

  constructor(private store: Store<any>){}

  updateBoiler(item: object) {
    this.store.dispatch(BoilerActions.update({item}));
  }

  resetBoiler() {
    this.store.dispatch(BoilerActions.reset());
  }

  buildHeader() {
    this.store.dispatch(BoilerActions.header());
  }

  buildPath() {
    this.store.dispatch(BoilerActions.path());
  }
}
