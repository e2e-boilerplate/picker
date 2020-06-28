import { getPath, getHeader } from './boiler.selectors';

describe('Boiler Selectors', () => {
    it("todo", () => {
      const state = {
        boiler: {
          ids: [],
          entities: {},
          data: {
            land: 'browser'
          },
          header: 'browser',
          path: 'land/browser'
        }
      }

      expect(getPath(state)).toBe('land/browser');
      expect(getHeader(state)).toBe('browser');
    });
});
