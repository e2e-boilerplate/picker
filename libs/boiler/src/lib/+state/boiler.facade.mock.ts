import { of } from 'rxjs';

export class BoilerFacadeMock {
  boiled$ = of({});
  path$ = of({});
  header$ = of({});

  updateBoiler() {}
  buildHeader() {}
  buildPath() {}
}
