import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBoiled, getHeader, getPath } from './boiler.selectors';
import * as BoilerActions from './boiler.actions';

@Injectable()
export class BoilerFacade {
  boiled$ = this.store.select(getBoiled);
  path$ = this.store.select(getPath);
  header$ = this.store.select(getHeader);

  constructor(private store: Store<any>){}

  updateBoiler(item: object) {
    this.store.dispatch(BoilerActions.update({item}));
  }

  buildHeader() {
    this.store.dispatch(BoilerActions.header());
  }

  buildPath() {
    this.store.dispatch(BoilerActions.path());
  }
}
