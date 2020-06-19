// import * as BoilerActions from './boiler.actions';
// import { State, initialState, reducer } from './boiler.reducer';
//
// describe('Boiler Reducer', () => {
//   describe('valid Boiler actions', () => {
//     it('should return boiled', () => {
//       const item = { platform: 'nodejs' };
//       const action = BoilerActions.boiled();
//       const actual: State = reducer(initialState, action);
//       const expected = {
//         framework: null,
//         platform: null,
//         javascript: null,
//       };
//
//       expect(actual.data).toEqual(expected);
//     });
//
//     it('should update', () => {
//       const item = { platform: 'nodejs' };
//       const action = BoilerActions.update({ item });
//       const actual: State = reducer(initialState, action);
//       const expected = {
//         framework: null,
//         platform: 'nodejs',
//         javascript: null,
//         land: null,
//       };
//
//       expect(actual.data).toEqual(expected);
//     });
//   });
//
//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as any;
//       const result = reducer(initialState, action);
//
//       expect(result).toBe(initialState);
//     });
//   });
// });
