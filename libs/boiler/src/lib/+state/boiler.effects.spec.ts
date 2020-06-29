import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { BoilerEffects } from './boiler.effects';
import * as BoilerActions from './boiler.actions';

// TODO update
xdescribe('ProductsEffects', () => {
  let actions: Observable<any>;
  let effects: BoilerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [
        BoilerEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BoilerEffects);
  });

  describe('loadProducts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BoilerActions.loadVersion() });

      const item = { "@angular/cli": "9.1.9"}
      const expected = hot('-a-|', {
        a: BoilerActions.version({ item }),
      });

      expect(effects.loadVersion$).toBeObservable(expected);
    });
  });
});
