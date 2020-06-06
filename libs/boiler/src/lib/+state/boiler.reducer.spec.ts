import { BoilerEntity } from './boiler.models';
import * as BoilerActions from './boiler.actions';
import { State, initialState, reducer } from './boiler.reducer';

xdescribe('Boiler Reducer', () => {
  const createBoilerEntity = (id: string, name = '') =>
    // ({
    //   id,
    //   name: name || `name-${id}`,
    // } as BoilerEntity);

  beforeEach(() => {});

  describe('valid Boiler actions', () => {
    it('loadBoilerSuccess should return set the list of known Boiler', () => {
      const boiler = [
        createBoilerEntity('PRODUCT-AAA'),
        createBoilerEntity('PRODUCT-zzz'),
      ];
      const action = BoilerActions.loadBoilerSuccess({ boiler });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
