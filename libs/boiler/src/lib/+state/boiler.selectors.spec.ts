import { BoilerEntity } from './boiler.models';
import { State, boilerAdapter, initialState } from './boiler.reducer';
import * as BoilerSelectors from './boiler.selectors';

xdescribe('Boiler Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBoilerId = (it) => it['id'];
  // const createBoilerEntity = (id: string, name = '') =>
    // ({
    //   id,
    //   name: name || `name-${id}`,
    // } as BoilerEntity);

  let state;

  beforeEach(() => {
    state = {
      boiler: boilerAdapter.addAll(
        [
          // createBoilerEntity('PRODUCT-AAA'),
          // createBoilerEntity('PRODUCT-BBB'),
          // createBoilerEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Boiler Selectors', () => {
    it('getAllBoiler() should return the list of Boiler', () => {
      const results = BoilerSelectors.getAllBoiler(state);
      const selId = getBoilerId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BoilerSelectors.getSelected(state);
      const selId = getBoilerId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getBoilerLoaded() should return the current 'loaded' status", () => {
      const result = BoilerSelectors.getBoilerLoaded(state);

      expect(result).toBe(true);
    });

    it("getBoilerError() should return the current 'error' state", () => {
      const result = BoilerSelectors.getBoilerError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
