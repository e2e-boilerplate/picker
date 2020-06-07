import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBoiled } from './boiler.selectors';
import * as BoilerActions from './boiler.actions';

@Injectable()
export class BoilerFacade {
  boiled = this.store.select(getBoiled);

  constructor(private store: Store<any>){}

  updateBoiler(item: object) {
    this.store.dispatch(BoilerActions.update({item}));
  }
}
