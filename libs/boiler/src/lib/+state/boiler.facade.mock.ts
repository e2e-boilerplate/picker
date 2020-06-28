import { of } from 'rxjs';

export class BoilerFacadeMock {
  path$ = of('');
  header$ = of('');

  updateBoiler() {}
  resetBoiler() {}
  buildHeader() {}
  buildPath() {}
}
