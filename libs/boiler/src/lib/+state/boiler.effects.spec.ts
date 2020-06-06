import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { BoilerEffects } from './boiler.effects';
import * as BoilerActions from './boiler.actions';

describe('BoilerEffects', () => {
  let actions: Observable<any>;
  let effects: BoilerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BoilerEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(BoilerEffects);
  });

  describe('loadBoiler$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BoilerActions.loadBoiler() });

      const expected = hot('-a-|', {
        a: BoilerActions.loadBoilerSuccess({ boiler: [] }),
      });

      expect(effects.loadBoiler$).toBeObservable(expected);
    });
  });
});
