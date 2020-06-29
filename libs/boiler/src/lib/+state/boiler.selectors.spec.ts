import { getPath, getHeader } from './boiler.selectors';

// TODO update
xdescribe('Boiler Selectors', () => {
    it("todo", () => {
      const state = {
        boiler: {
          ids: [],
          entities: {},
          data: {
            land: 'browser'
          },
          version: [],
          header: 'browser',
          path: 'land/browser'
        }
      }

      // @ts-ignore
      expect(getPath(state)).toBe('land/browser');
      // @ts-ignore
      expect(getHeader(state)).toBe('browser');
      // @ts-ignore
      expect(getVersion(state)).toBe({});
    });
});
