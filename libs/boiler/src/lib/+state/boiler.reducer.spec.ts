import * as BoilerActions from './boiler.actions';
import { State, initialState, reducer, boilerAdapter } from './boiler.reducer';

describe('Boiler Reducer', () => {
    it('should update data', () => {
      const item = { land: 'nodejs' };
      const action = BoilerActions.update({ item });
      const actual: State = reducer(initialState, action);
      const expected = {
        land: 'nodejs',
        approach: null,
        framework: null,
        javascript: null,
        module: null,
        bundler: null,
        runner: null,
      };

      expect(actual.data).toEqual(expected);
    });

    it('should update current path', () => {
      const action = BoilerActions.path();
      const currentState: State = boilerAdapter.getInitialState({
        data: {
          land: 'browser',
          approach: null,
          framework: null,
          javascript: null,
          module: null,
          bundler: null,
          runner: null,
        },
        version: {},
        header: 'browser',
        path: ''
      });

      const result = reducer(currentState, action);

      expect(result.path).toBe('land/browser');
    });

  it('should return header', () => {
    const action = BoilerActions.header();
    const currentState: State = boilerAdapter.getInitialState({
      data: {
        land: 'browser',
        approach: 'framework',
        framework: null,
        javascript: null,
        module: null,
        bundler: null,
        runner: null,
      },
      version: {},
      header: '',
      path: ''
    });

    const result = reducer(currentState, action);

    expect(result.header).toBe('browser framework');
  });

  it('should reset state', () => {
    const action = BoilerActions.reset();
    const currentState: State = boilerAdapter.getInitialState({
      data: {
        land: 'browser',
        approach: null,
        framework: null,
        javascript: null,
        module: null,
        bundler: null,
        runner: null,
      },
      version: {},
      header: 'browser',
      path: 'land/browser'
    });

    const result = reducer(currentState, action);

    expect(result).toStrictEqual(initialState);
  });
});
