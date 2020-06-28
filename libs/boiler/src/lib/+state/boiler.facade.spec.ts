import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { readFirst } from '@nrwl/nx/testing';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/nx';

import { BoilerFacade } from './boiler.facade';
import * as BoilerActions from './boiler.actions';
import { initialState, reducer } from './boiler.reducer';

describe('BoilerFacade', () => {
  let facade: BoilerFacade;
  let store: Store<any>

  beforeEach(() => {
    @NgModule({
      imports: [
        StoreModule.forFeature('boiler', reducer, { initialState }),
      ],
      providers: [BoilerFacade]
    })
    class CustomFeatureModule {}

    @NgModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        CustomFeatureModule
      ]
    })
    class RootModule {}
    TestBed.configureTestingModule({ imports: [RootModule] });

    store = TestBed.inject(Store);
    facade = TestBed.inject(BoilerFacade);
  });

  it('should be created', async(done) => {
    try {
      const path$ = await readFirst(facade.path$);
      const header$ = await readFirst(facade.header$);

      expect(path$).toEqual('land');
      expect(header$).toEqual('');

      expect(facade.updateBoiler({land: 'nodejs'})).toBeUndefined();
      expect(facade.resetBoiler()).toBeUndefined();
      expect(facade.buildHeader()).toBeUndefined();
      expect(facade.buildPath()).toBeUndefined();

      done();
    }catch(error){
      done.fail(error);
    }
  });

  it('updateBoiler, resetBoiler, buildHeader, and buildPath', async(done) => {
    let header$ = await readFirst(facade.header$);
    let path$ = await readFirst(facade.path$);
    const item: object = { land: 'browser'};

    expect(header$).toEqual('');
    expect(path$).toEqual('land');

    try {
      store.dispatch(
        BoilerActions.update({item})
      );

      store.dispatch(
        BoilerActions.header()
      );

      store.dispatch(
        BoilerActions.path()
      );

      header$ = await readFirst(facade.header$);
      path$ = await readFirst(facade.path$);
      expect(header$).toEqual('browser');
      expect(path$).toEqual('land/browser');

      store.dispatch(
        BoilerActions.reset()
      );

      header$ = await readFirst(facade.header$);
      path$ = await readFirst(facade.path$);
      expect(header$).toEqual('');
      expect(path$).toEqual('land');

      done();
    } catch(error) {
      done.fail(error);
    }
  });
});



